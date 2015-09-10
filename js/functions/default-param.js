"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var withoutParam = _temporalUndefined;
var withParam = _temporalUndefined;
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function foo() {
    var a = _temporalUndefined;
    a = arguments.length <= 0 || arguments[0] === undefined ? "default" : arguments[0];

    return _temporalAssertDefined(a, "a", _temporalUndefined) && a;
}withoutParam = foo();
withParam = foo("none default");
exports["default"] = { withoutParam: _temporalAssertDefined(withoutParam, "withoutParam", _temporalUndefined) && withoutParam, withParam: _temporalAssertDefined(withParam, "withParam", _temporalUndefined) && withParam };
module.exports = exports["default"];
//# sourceMappingURL=default-param.js.map
