/* eslint-disable */
"use strict";

var _temporalUndefined = {};
var promise1 = _temporalUndefined;

var promise2 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

promise1 = new Promise(function (resolve, reject) {
    var value = _temporalUndefined;
    value = doStuffToCreateValue();
    resolve(_temporalAssertDefined(value, "value", _temporalUndefined) && value);
});
promise2 = Promise.resolve(otherValue);
//# sourceMappingURL=create.js.map
