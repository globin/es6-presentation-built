/* eslint-disable */
'use strict';

var _temporalUndefined = {};
var promises = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

promises = [fetch(someUrl), fetch(someOtherUrl), 'string content'];
Promise.all(_temporalAssertDefined(promises, 'promises', _temporalUndefined) && promises).then(function (texts) {
    texts.forEach(function (text) {
        return console.log();
    });
});
//# sourceMappingURL=multiple.js.map
