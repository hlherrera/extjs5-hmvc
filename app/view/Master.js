Ext.define('CRM.CustomerProvider.view.Master', {
    extend: 'Ext.grid.Panel',
    xtype: 'core-MasterView',
    title: 'Master Panel',
    store: 'People',
    columns: [
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Email',
            dataIndex: 'email'
        },
        {
            text: 'Phone',
            dataIndex: 'phone'
        }
    ]
});