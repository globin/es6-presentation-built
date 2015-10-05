/* eslint-disable */
//ES5 scope of "this"
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function add() {
    var self = this; // <-- "hack"
    self.counter = 0;

    function plus() {
        self.counter += 1;
    }
    plus();
}

var myObject = {};

myObject.test = add;
myObject.test();

exports["default"] = { myObject: myObject };
module.exports = exports["default"];
//# sourceMappingURL=arrow-functions2.js.map
