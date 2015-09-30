/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function foo(arg1) {
    var rest = Array.slice(arguments, 1);
    return { arg1: arg1, rest: rest };
}

var result = foo(1, 2, 3, 4);
// --SNIP--

exports["default"] = { result: result };
module.exports = exports["default"];
//# sourceMappingURL=rest-param-old.js.map
