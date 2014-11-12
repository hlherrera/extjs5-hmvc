Ext.define('InnerMaster.controller.CInner', {
    extend: 'Ext.app.Controller',
    /*controllers:[
     'CRM.CustomerProvider.module.Master.c'
     ],*/
    init: function () {
        var _s = '';
        for (var i = 0; i < this.application.depth; i++) {
            _s += '-- ';
        }
        console.log(_s + "- Init Module InnerMaster's CInner controller.");
    }
});
