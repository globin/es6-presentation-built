"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var coordinates = _temporalUndefined;
var coordinates2 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

coordinates = {
    x: 100,
    y: 200
};
coordinates2 = {
    x: 300,
    y: 400
};
var x = (_temporalAssertDefined(coordinates, "coordinates", _temporalUndefined) && coordinates).x;
var y = (_temporalAssertDefined(coordinates, "coordinates", _temporalUndefined) && coordinates).y;
var x2 = (_temporalAssertDefined(coordinates2, "coordinates2", _temporalUndefined) && coordinates2).x;
var y2 = (_temporalAssertDefined(coordinates2, "coordinates2", _temporalUndefined) && coordinates2).y;

// --SNIP--

exports["default"] = { x: _temporalAssertDefined(x, "x", _temporalUndefined) && x, y: _temporalAssertDefined(y, "y", _temporalUndefined) && y, x2: _temporalAssertDefined(x2, "x2", _temporalUndefined) && x2, y2: _temporalAssertDefined(y2, "y2", _temporalUndefined) && y2 };
module.exports = exports["default"];
//# sourceMappingURL=object.js.map
