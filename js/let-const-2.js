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
function varExample() {
    var someVar = _temporalUndefined;

    someVar = 1;
    function inner() {
        var someVar = _temporalUndefined;

        _temporalAssertDefined(_temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar, "someVar", _temporalUndefined);

        someVar = 2;
        someVar = 3;

        _temporalAssertDefined(_temporalAssertDefined(var2, "var2", _temporalUndefined) && var2, "var2", _temporalUndefined);

        var2 = _temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar;
    }
    inner();

    _temporalAssertDefined(_temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, "var1", _temporalUndefined);

    var1 = _temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar;
}
varExample();
// --SNIP--

exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, var2: _temporalAssertDefined(var2, "var2", _temporalUndefined) && var2 };
module.exports = exports["default"];
//# sourceMappingURL=let-const-2.js.map
