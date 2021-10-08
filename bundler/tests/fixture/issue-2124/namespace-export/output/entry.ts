function __spack_require__(mod) {
    var cache;
    if (cache) {
        return cache;
    }
    var module = {
        exports: {
        }
    };
    mod(module, module.exports);
    cache = module.exports;
    return cache;
}
var load = __spack_require__.bind(void 0, function(module, exports) {
    function lodash(value) {
        console.log('lodash');
    }
    function memoize() {
        console.log('memoize');
    }
    lodash.memoize = memoize;
    module.exports = lodash;
    exports.memoize = memoize;
});
const _cjs_module_ = load(), util = _cjs_module_;
const name = util.memoize();
console.log(name);
