/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var outerValue, innerValue;

function outer() {
    var someVar = 1;

    function inner() {
        someVar = 2;
        var someVar = 3;
        innerValue = someVar;
    }
    inner();

    outerValue = someVar;
}
outer();
// --SNIP--

/* eslint-enable */

exports["default"] = { outerValue: outerValue, innerValue: innerValue };
module.exports = exports["default"];
//# sourceMappingURL=let-const.js.map
