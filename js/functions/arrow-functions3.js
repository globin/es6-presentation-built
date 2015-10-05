/* eslint-disable */
//ES6 "this" inherited from enclosing scope
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function add() {
    var _this = this;

    this.counter = 0;
    var plus = function plus() {
        _this.counter += 1;
    };
    plus();
}

var myObject = {};

myObject.test = add;
myObject.test();
// --SNIP--

exports["default"] = { myObject: myObject };
module.exports = exports["default"];
//# sourceMappingURL=arrow-functions3.js.map
