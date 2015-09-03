/* eslint-disable */
var var1, var2;

function varExample() {
    var someVar = 1;

    function inner() {
        someVar = 2;
        var someVar = 3;
        var2 = someVar;
    }
    inner();

    var1 = someVar;
}
varExample();
// --SNIP--

/* eslint-enable */

export default {var1, var2};
