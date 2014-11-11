Ext.app.Controller.strings.module = {
    getter: 'getModule',
    upper: 'Module'
};

Ext.define('Ext.app.BundledApplication', {
    extend: 'Ext.app.Application',
    autoCreateViewport: false,
    namespace: true, //to avoid warn msg
    onClassExtended: function (cls, data, hooks) {
        var Controller = Ext.app.Controller,
            proto = cls.prototype,
            requires = [],
            viewportClass = data.autoCreateViewport,
            onBeforeClassCreated, paths, namespace, ns, appFolder;

        var isApplication = cls.$className.split('.').pop() === '$application';
        //if name is not provided, then assign "short" $className as name.
        namespace = data.name || cls.superclass.name || (!isApplication && cls.$className.split('.').pop());
        //re-assign name and if is application
        data.name = namespace;
        data.isApplication = isApplication;

        if (!isApplication) {
            ns = cls.$className.replace(['', 'module', namespace].join('.'), '');
            appFolder = [
                Ext.Loader.getPath(ns),
                'module',
                data.appFolder || namespace
            ].join('/');
        } else {
            appFolder = data.appFolder || cls.superclass.appFolder;
        }

        if (namespace) {
            data.$namespace = namespace;
            Ext.app.addNamespaces(namespace);
        }

        if (data.namespaces) {
            Ext.app.addNamespaces(data.namespaces);
        }

        if (!data['paths processed']) {
            if (namespace && appFolder) {
                Ext.Loader.setPath(namespace, appFolder);
            }

            paths = data.paths;

            if (paths) {
                for (ns in paths) {
                    if (paths.hasOwnProperty(ns)) {
                        Ext.Loader.setPath(ns, paths[ns]);
                    }
                }
            }
        }
        else {
            delete data['paths processed'];
        }

        if (viewportClass) {
            //<debug>
            if (!namespace) {
                Ext.Error.raise("[Ext.app.Application] Can't resolve namespace for " +
                data.$className + ", did you forget to specify 'name' property?");
            }
            //</debug>

            if (viewportClass === true) {
                viewportClass = 'Viewport';
            } else {
                requires.push('Ext.plugin.Viewport');
            }

            Controller.processDependencies(proto, requires, namespace, 'view', viewportClass);
        }

        Controller.processDependencies(proto, requires, namespace, 'module', data.modules);

        // Any "requires" also have to be processed before we fire up the App instance.
        if (requires.length) {
            onBeforeClassCreated = hooks.onBeforeCreated;

            hooks.onBeforeCreated = function (cls, data) {
                var args = Ext.Array.clone(arguments);

                Ext.require(requires, function () {
                    return onBeforeClassCreated.apply(this, args);
                });
            };
        }
    },

    /**
     * Creates new Application.
     * @param {Object} [config] Config object.
     */
    constructor: function (config) {
        var me = this;
        Ext.app.route.Router.application = me;
        me._modules = new Ext.util.MixedCollection();
        me.callParent(arguments);
    },
    getModule: function (name, /* private */ preventCreate) {
        var me = this,
            className, module;

        if (!module && !preventCreate) {
            className = me.getModuleClassName(name, 'module');

            module = Ext.create(className, {
                application: me,
                moduleClassName: name
            });

            me._modules.add(module);
        }

        return module;
    }
});
