/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var gen = _temporalUndefined;
var value1 = _temporalUndefined;
var value2 = _temporalUndefined;
var value3 = _temporalUndefined;
var value4 = _temporalUndefined;
var value5 = _temporalUndefined;

// --SNIP--

var marked0$0 = [fibonacci].map(regeneratorRuntime.mark);

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function fibonacci() {
    var last = _temporalUndefined,
        current = _temporalUndefined;

    var _ref;

    return regeneratorRuntime.wrap(function fibonacci$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                last = 0;
                current = 1;

            case 2:
                if (!true) {
                    context$1$0.next = 12;
                    break;
                }

                context$1$0.next = 5;
                return _temporalAssertDefined(current, "current", _temporalUndefined) && current;

            case 5:
                _ref = [_temporalAssertDefined(current, "current", _temporalUndefined) && current, (_temporalAssertDefined(last, "last", _temporalUndefined) && last) + (_temporalAssertDefined(current, "current", _temporalUndefined) && current)];

                _temporalAssertDefined(_temporalAssertDefined(last, "last", _temporalUndefined) && last, "last", _temporalUndefined);

                last = _ref[0];

                _temporalAssertDefined(_temporalAssertDefined(current, "current", _temporalUndefined) && current, "current", _temporalUndefined);

                current = _ref[1];
                context$1$0.next = 2;
                break;

            case 12:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}gen = fibonacci();
value1 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next().value;
value2 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next().value;
value3 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next().value;
value4 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next().value;
value5 = (_temporalAssertDefined(gen, "gen", _temporalUndefined) && gen).next().value;
exports["default"] = { value1: _temporalAssertDefined(value1, "value1", _temporalUndefined) && value1, value2: _temporalAssertDefined(value2, "value2", _temporalUndefined) && value2, value3: _temporalAssertDefined(value3, "value3", _temporalUndefined) && value3, value4: _temporalAssertDefined(value4, "value4", _temporalUndefined) && value4, value5: _temporalAssertDefined(value5, "value5", _temporalUndefined) && value5 };
module.exports = exports["default"];
//# sourceMappingURL=fibonacci.js.map
