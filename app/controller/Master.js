Ext.define('CRM.CustomerProvider.controller.Master', {
    extend: 'Ext.app.Controller',
    /*controllers:[
     'CRM.CustomerProvider.module.Master.c'
     ],*/
    init: function () {
        this.control({
            'core-MasterView': {
                select: this.onGridSelect
            }
        });
        console.log('- Init App Master Controller');
    },

    onGridSelect: function (grid, record, index, eOpts) {
        // grab a reference to the Detail view... 
        // we could have used a controller "ref", but those can also be problematic
        var detailView = Ext.ComponentQuery.query('core-DetailView')[0];

        //set the form's ViewModel binding
        detailView.getViewModel().setData({rec: record});
    }
});