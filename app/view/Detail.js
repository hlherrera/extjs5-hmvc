Ext.define('CRM.CustomerProvider.view.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'core-DetailView',

    requires: [
        //commented out because Fiddle barfs on the Ext.Loader
        'CRM.CustomerProvider.view.DetailViewModel'
    ],

    title: 'Detail Panel',
    frame: true,

    viewModel: {
        type: 'detailform'  // references DetailViewModel
    },

    items: [
        {
            xtype: 'textfield',
            bind: '{rec.name}',
            fieldLabel: 'Name'
        },
        {
            xtype: 'textfield',
            bind: '{rec.email}',
            fieldLabel: 'Email'
        },
        {
            xtype: 'textfield',
            bind: '{rec.phone}',
            fieldLabel: 'Phone'
        },
        {
            xtype: 'hiddenfield',
            bind: '{rec.id}'
        },
        {
            xtype: 'button',
            text: 'Save',
            itemId: 'SaveRecord'
        }
    ]
});