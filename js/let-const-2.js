/* eslint-disable */
"use strict";

var _temporalUndefined = {};

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function outer() {
    var someVar = _temporalUndefined;

    someVar = 1;
    function inner() {
        var someVar = _temporalUndefined;

        _temporalAssertDefined(_temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar, "someVar", _temporalUndefined);

        someVar = 2;
        someVar = 3;
    }

    inner();
    console.log(_temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar);
}

outer();
// --SNIP--
//# sourceMappingURL=let-const-2.js.map
