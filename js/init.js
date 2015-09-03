'use strict';

var _temporalUndefined = {};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

var _revealJsJsRevealJs = require('reveal.js/js/reveal.js');

var _revealJsJsRevealJs2 = _interopRequireDefault(_revealJsJsRevealJs);

var _highlightjsHighlightPackMinJs = require('highlightjs/highlight.pack.min.js');

var _highlightjsHighlightPackMinJs2 = _interopRequireDefault(_highlightjsHighlightPackMinJs);

window.Reveal = _revealJsJsRevealJs2['default'];

_revealJsJsRevealJs2['default'].addEventListener('ready', function () {
    var hljsNodes = _temporalUndefined;

    hljsNodes = document.querySelectorAll('pre code');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (_temporalAssertDefined(hljsNodes, 'hljsNodes', _temporalUndefined) && hljsNodes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _temporalUndefined;
            node = _step.value;

            _highlightjsHighlightPackMinJs2['default'].highlightBlock(_temporalAssertDefined(node, 'node', _temporalUndefined) && node);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

_revealJsJsRevealJs2['default'].initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [{
        src: 'lib/js/classList.js',
        condition: function condition() {
            return !document.body.classList;
        }
    }, {
        src: 'plugin/markdown/marked.js',
        condition: function condition() {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/markdown/markdown.js',
        condition: function condition() {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: 'plugin/notes/notes.js',
        async: true
    }]
});
//# sourceMappingURL=init.js.map
