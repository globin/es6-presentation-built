/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined;
// var1 = 1;

// js/let-const-4.es6.js: Line 2: "var1" is read-only
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = 0;
exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1 };
module.exports = exports["default"];
//# sourceMappingURL=let-const-4.js.map
