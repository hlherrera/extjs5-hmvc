/**
 * Created by hermes on 31/10/14.
 */
Ext.define('CRM.CustomerProvider.module.Master', {
    extend: 'Ext.app.BundledApplication',
    name: 'Master',
    controllers: ['CInner', 'CInner2'],
    init: function () {
        console.log('- Init Module Master')
    }
});
