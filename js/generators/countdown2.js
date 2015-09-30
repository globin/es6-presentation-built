"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var gen = _temporalUndefined;
var result1 = _temporalUndefined;
var result2 = _temporalUndefined;
var result3 = _temporalUndefined;
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var marked0$0 = [countdown].map(regeneratorRuntime.mark);
function countdown(n) {
    return regeneratorRuntime.wrap(function countdown$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (!(n > 0)) {
                    context$1$0.next = 6;
                    break;
                }

                context$1$0.next = 3;
                return n;

            case 3:
                n -= 1;
                context$1$0.next = 0;
                break;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}gen = countdown(2);
result1 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next();
result2 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next();
result3 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next();
exports["default"] = { result1: _temporalAssertDefined(result1, "result1", _temporalUndefined) && result1, result2: _temporalAssertDefined(result2, "result2", _temporalUndefined) && result2, result3: _temporalAssertDefined(result3, "result3", _temporalUndefined) && result3 };
module.exports = exports["default"];
//# sourceMappingURL=countdown2.js.map
