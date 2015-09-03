/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined,
    var2 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = undefined;
var2 = undefined;
if (true) {
    var _someVar = _temporalUndefined;
    _someVar = 1;

    _temporalAssertDefined(_temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, "var1", _temporalUndefined);

    var1 = _someVar;
}

// --SNIP--

_temporalAssertDefined(_temporalAssertDefined(var2, "var2", _temporalUndefined) && var2, "var2", _temporalUndefined);

var2 = someVar;
exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, var2: _temporalAssertDefined(var2, "var2", _temporalUndefined) && var2 };
module.exports = exports["default"];
//# sourceMappingURL=let-const-3.js.map
