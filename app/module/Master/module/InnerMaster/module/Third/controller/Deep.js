Ext.define('Third.controller.Deep', {
    extend: 'Ext.app.Controller',
    init: function () {
        var _s = '';
        for (var i = 0; i < this.application.depth; i++) {
            _s += '-- ';
        }
        console.log(_s + "- Init Module Third Deep controller.");
    }
});
