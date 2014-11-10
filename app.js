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

/*Ext.onReady(function () {

 var toolbarPanelReporte = new Ext.Toolbar({
 items: ['->', {

 text: 'interact',
 handler: CRM.CustomerProvider.getApplication().test
 }, {

 text: 'ayuda',
 handler: mostrarFilaSeleccionada
 }]
 });

 var objRecComplejas = new Ext.components.CmpReccomplejas.Interfaz({
 idconfiguracion: 'ejemplo_h',
 tituloReporte: 'Reporte de incidencias',
 tituloConfiguracion: 'Configuración del reporte',
 tituloGrid: 'Título de prueba',
 mainToolBar: toolbarPanelReporte,	//ToolBar aportado por la funcionalidad que utilice el componente
 noUsarGestAvisos: false	//False si voy a usar el componente de Gestionar avisos
 });

 var viewport = new Ext.Viewport({
 layout: 'border',
 items: [objRecComplejas,{
 html:'<div id="placeholder"></div>'
 }]
 });
 objRecComplejas.setActiveTab(0);

 //Funcion de ejemlo de como acceder a las filas del GridPanel del reporte
 function mostrarFilaSeleccionada() {
 var record = objRecComplejas.items.items[0].getFilaSeleccionada();
 if (record != false) {
 alert(record.get('_idtablabase'));
 }
 }
 })*/
