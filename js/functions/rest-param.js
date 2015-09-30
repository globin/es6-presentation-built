"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var result = _temporalUndefined;
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function foo(arg1) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return { arg1: arg1, rest: rest };
}result = foo(1, 2, 3, 4);
exports["default"] = _temporalAssertDefined(result, "result", _temporalUndefined) && result;
module.exports = exports["default"];
//# sourceMappingURL=rest-param.js.map
