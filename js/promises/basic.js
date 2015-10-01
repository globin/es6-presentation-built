/* eslint-disable */
"use strict";

fetch(someUrl).then(function (response) {
    return response.text();
})["catch"](function (error) {
    return handleError(error);
}).then(function (responseText) {
    return console.log(responseText);
});
//# sourceMappingURL=basic.js.map
