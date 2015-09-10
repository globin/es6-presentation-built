"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _temporalUndefined = {};

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var head = 1;
var tail = [2, 3, 4];

// --SNIP--

exports["default"] = { head: _temporalAssertDefined(head, "head", _temporalUndefined) && head, tail: _temporalAssertDefined(tail, "tail", _temporalUndefined) && tail };
module.exports = exports["default"];
//# sourceMappingURL=rest.js.map
