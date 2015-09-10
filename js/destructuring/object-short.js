"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var coordinates = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

coordinates = {
    x: 100,
    y: 200
};
var x = (_temporalAssertDefined(coordinates, "coordinates", _temporalUndefined) && coordinates).x;
var y = (_temporalAssertDefined(coordinates, "coordinates", _temporalUndefined) && coordinates).y;

// --SNIP--

exports["default"] = { x: _temporalAssertDefined(x, "x", _temporalUndefined) && x, y: _temporalAssertDefined(y, "y", _temporalUndefined) && y };
module.exports = exports["default"];
//# sourceMappingURL=object-short.js.map
