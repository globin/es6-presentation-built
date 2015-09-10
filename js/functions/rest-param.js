"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function foo(arg1) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return { arg1: arg1, rest: rest };
}

exports["default"] = foo(1, 2, 3, 4);
module.exports = exports["default"];
//# sourceMappingURL=rest-param.js.map
