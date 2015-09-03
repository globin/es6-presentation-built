/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var loopedFuncs = [];
var values = [];

var _loop = function (i) {
    loopedFuncs.push(function () {
        values.push(i);
    });
};

for (var i = 0; i < 3; i++) {
    _loop(_temporalAssertDefined(i, "i", _temporalUndefined) && i);
}

loopedFuncs.forEach(function (func) {
    func();
});
// --SNIP--

exports["default"] = { values: values };
module.exports = exports["default"];
//# sourceMappingURL=let-const-7.js.map
