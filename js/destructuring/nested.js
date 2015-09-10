"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _temporalUndefined = {};

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var first = 1;
var second = 2;
var third = 3;

// --SNIP--

exports["default"] = { first: _temporalAssertDefined(first, "first", _temporalUndefined) && first, second: _temporalAssertDefined(second, "second", _temporalUndefined) && second, third: _temporalAssertDefined(third, "third", _temporalUndefined) && third };
module.exports = exports["default"];
//# sourceMappingURL=nested.js.map
