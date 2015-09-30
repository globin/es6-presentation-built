"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var result = _temporalUndefined;
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function foo(a, b) {
    var a = _temporalUndefined;
    var b = _temporalUndefined;
    a = arguments.length <= 0 || arguments[0] === undefined ? "default" : arguments[0];
    b = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

    return { a: _temporalAssertDefined(a, "a", _temporalUndefined) && a, b: _temporalAssertDefined(b, "b", _temporalUndefined) && b };
}result = foo();
exports["default"] = _temporalAssertDefined(result, "result", _temporalUndefined) && result;
module.exports = exports["default"];
//# sourceMappingURL=default-param-undefined.js.map
