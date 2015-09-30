"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var args = _temporalUndefined;

var result = _temporalUndefined;
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function foo(arg1, arg2) {
    return { arg1: arg1, arg2: arg2 };
}args = [1, 2];
result = foo.apply(undefined, _toConsumableArray(_temporalAssertDefined(args, "args", _temporalUndefined) && args));
exports["default"] = _temporalAssertDefined(result, "result", _temporalUndefined) && result;
module.exports = exports["default"];
//# sourceMappingURL=spread-operator.js.map
