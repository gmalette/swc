function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var tmp = "" + "", tmp1 = "" + "", tmp2 = "" + "";
var C = // @target: es6
// @declaration: true
/*#__PURE__*/ function() {
    "use strict";
    function C() {
        _classCallCheck(this, C);
    }
    _createClass(C, null, [
        {
            key: tmp,
            value: function value() {}
        },
        {
            key: tmp1,
            get: function get() {
                return 0;
            }
        },
        {
            key: tmp2,
            set: function set(x) {}
        }
    ]);
    return C;
}();
