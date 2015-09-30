"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var result = _temporalUndefined;

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
}result = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = countdown(2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _temporalUndefined;
        value = _step.value;

        (_temporalAssertDefined(result, "result", _temporalUndefined) && result).push(_temporalAssertDefined(value, "value", _temporalUndefined) && value);
    }

    // --SNIP--
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

exports["default"] = { result: _temporalAssertDefined(result, "result", _temporalUndefined) && result };
module.exports = exports["default"];
//# sourceMappingURL=basic.js.map
