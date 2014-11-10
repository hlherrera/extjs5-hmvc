An example of creating an hierarchical extjs-5.0.x application.

If you have to create bigger application in ExtJs, here you have an option
to develop an efficient application through modules, each of one as application.

-- Application structure folder:
    -app
       --controller
       --model
       --store
       --view
       --module
            --moduleX
                   --controller
                   --model
                   --store
                   --view
            --ModuleX.js
       --app.js


-- Application should extend from Ext.app.BundledApplication class and define theirs modules.

Ext.application({
    name: 'Provider',
    appFolder: 'app',
    extend: 'Ext.app.BundledApplication', // here
    views: [
        'Master',
        'Detail'
    ],
    controllers: [
        'Master'
    ],
    stores: [
        'People'
    ],
    modules: ['Statistics'] //here
})

-- the module file ( Statistics.js ) in folder module should extend from Ext.app.BundledApplication ...
-- the module also is structured like MVC or MVVM pattern.

Ext.define('Provider.module.Statistics', {
    extend: 'Ext.app.BundledApplication', //here
    name:'Statistics',
    controllers:['Descriptive', 'Inference'],
    init: function () {
        console.log('- Init Module: Statistics')
    }
})

This mechanism provide modules at any level of depth. ex.( Modules that contain other modules inside).

Enjoy it!