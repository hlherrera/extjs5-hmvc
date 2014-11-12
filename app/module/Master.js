/**
 * Created by hermes on 31/10/14.
 */
Ext.define('CRM.CustomerProvider.module.Master', {
    extend: 'Ext.app.BundledApplication',
    name: 'Master',
    controllers: ['CInner', 'CInner2'],
    modules: ['InnerMaster'],
    init: function () {
        var _s = '';
        for (var i = 0; i < this.depth; i++) {
            _s += '-- ';
        }
        console.log(_s + 'Init Module Master.');
    }
});
