/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var args = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function foo(arg1, arg2) {
    return { arg1: arg1, arg2: arg2 };
}args = [1, 2];
exports["default"] = foo.apply(null, _temporalAssertDefined(args, "args", _temporalUndefined) && args);
module.exports = exports["default"];
//# sourceMappingURL=spread-operator-old.js.map
