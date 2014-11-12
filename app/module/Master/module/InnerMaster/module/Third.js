/**
 * Created by hermes on 31/10/14.
 */
Ext.define('InnerMaster.module.Third', {
    extend: 'Ext.app.BundledApplication',
    /**
     * IF name is not provided then auto assign the last part of class name.
     * (ex. Master.module.InnerMaster --> InnerMaster)
     * and should work with (InnerMaster) alias inside the module.
     * IF name is provided, you should rename the app folder to that name.
     *  ex. "application name"  = "MyName" then
     *      "application folder = "MyName"
     *
     **/
    name: 'Third',
    controllers: ['Deep'],
    init: function () {
        var _s = '';
        for (var i = 0; i < this.depth; i++) {
            _s += '-- ';
        }
        console.log(_s + 'Init Module Third.');
    }
});
