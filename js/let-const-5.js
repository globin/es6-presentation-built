/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = {
    foo: 1,
    bar: 2
};
(_temporalAssertDefined(var1, "var1", _temporalUndefined) && var1).foo = 3;
// --SNIP--

exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1 };
module.exports = exports["default"];
//# sourceMappingURL=let-const-5.js.map
