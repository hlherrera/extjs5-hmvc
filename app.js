Ext.Loader.setPath('Ext.app', './');

Ext.application({
    name: 'CRM.CustomerProvider',
    appFolder: 'app',
    extend: 'Ext.app.BundledApplication',
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
    modules: ['Master'],
    launch: function () {
        this.test = function () {
            console.log('test');
            Ext.create('widget.window', {
                height: 300,
                width: 600,
                title: 'Constraining Window, plain: true',
                closable: false,
                layout: 'border',
                items: [
                    {
                        region: 'center',
                        xtype: 'core-MasterView'
                    },
                    {
                        region: 'east',
                        xtype: 'core-DetailView'
                    }]
            }).show();
        };
        this.test();
        console.log('.App Launched.');
    }
});
