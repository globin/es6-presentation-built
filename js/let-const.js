/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var var1, var2;

function varExample() {
    var someVar = 1;

    function inner() {
        someVar = 2;
        var someVar = 3;
        var2 = someVar;
    }
    inner();

    var1 = someVar;
}
varExample();
// --SNIP--

/* eslint-enable */

exports["default"] = { var1: var1, var2: var2 };
module.exports = exports["default"];
//# sourceMappingURL=let-const.js.map
