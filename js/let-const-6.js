/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var loopedFuncs = [];
var values = [];

for (var i = 0; i < 3; i++) {
    loopedFuncs.push(function () {
        values.push(i);
    });
}

loopedFuncs.forEach(function (func) {
    func();
});
// --SNIP--

exports["default"] = { values: values };
module.exports = exports["default"];
//# sourceMappingURL=let-const-6.js.map
