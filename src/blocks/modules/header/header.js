modules.define('header', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
