/* eslint-disable */
//Syntactical difference example

//ES5
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sum = function sum(a, b) {
    return a + b;
};

//ES6
var sum = function sum(a, b) {
    return a + b;
};
// --SNIP--

exports["default"] = { sum: sum() };
module.exports = exports["default"];
//# sourceMappingURL=arrow-functions.js.map
