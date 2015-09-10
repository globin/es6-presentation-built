"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _temporalUndefined = {};

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var _ref = [1, 2];
var first = _ref[0];
var second = _ref[1];
var missing = _ref[2];

// --SNIP--

exports["default"] = { first: _temporalAssertDefined(first, "first", _temporalUndefined) && first, second: _temporalAssertDefined(second, "second", _temporalUndefined) && second, missing: _temporalAssertDefined(missing, "missing", _temporalUndefined) && missing };
module.exports = exports["default"];
//# sourceMappingURL=array.js.map
