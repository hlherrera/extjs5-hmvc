/**
 * Created by hermes on 31/10/14.
 */
Ext.define('Master.module.InnerMaster', {
    extend: 'Ext.app.BundledApplication',
    name: 'InnerMaster',
    controllers: ['CInner', 'CInner2'],
    init: function () {
        console.log('-- Init Module InnerMaster')
    }
});
