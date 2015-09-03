'use strict';

var _temporalUndefined = {};

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var ExampleCode = _temporalUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _revealJsJsRevealJs = require('reveal.js/js/reveal.js');

var _revealJsJsRevealJs2 = _interopRequireDefault(_revealJsJsRevealJs);

var _highlightjsHighlightPackMinJs = require('highlightjs/highlight.pack.min.js');

var _highlightjsHighlightPackMinJs2 = _interopRequireDefault(_highlightjsHighlightPackMinJs);

ExampleCode = (function () {
    function ExampleCode(node) {
        _classCallCheck(this, _temporalAssertDefined(ExampleCode, 'ExampleCode', _temporalUndefined) && ExampleCode);

        this.node = node;
    }

    _createClass(_temporalAssertDefined(ExampleCode, 'ExampleCode', _temporalUndefined) && ExampleCode, [{
        key: 'render',
        value: function render() {
            this.renderSource().then(this.renderRunButton.bind(this));
        }
    }, {
        key: 'renderSource',
        value: function renderSource() {
            var _this = this;

            return new Promise(function (resolve) {
                fetch('js/' + _this.name + '.es6.js').then(function (response) {
                    return response.text();
                }).then(function (source) {
                    var strippedSource = _temporalUndefined;
                    var preEl = _temporalUndefined;
                    var codeEl = _temporalUndefined;
                    strippedSource = source.split('// --SNIP--\n')[0].replace('/* eslint-disable */\n', '');
                    preEl = document.createElement('pre');
                    codeEl = document.createElement('code');
                    (_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl).textContent = _temporalAssertDefined(strippedSource, 'strippedSource', _temporalUndefined) && strippedSource;

                    _this.node.appendChild(_temporalAssertDefined(preEl, 'preEl', _temporalUndefined) && preEl);
                    (_temporalAssertDefined(preEl, 'preEl', _temporalUndefined) && preEl).appendChild(_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl);

                    _highlightjsHighlightPackMinJs2['default'].highlightBlock(_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl);

                    resolve();
                });
            });
        }
    }, {
        key: 'renderRunButton',
        value: function renderRunButton() {
            var button = _temporalUndefined;
            button = document.createElement('button');
            (_temporalAssertDefined(button, 'button', _temporalUndefined) && button).addEventListener('click', this.runExampleCode.bind(this));
            (_temporalAssertDefined(button, 'button', _temporalUndefined) && button).textContent = 'Run Code';
            this.node.appendChild(_temporalAssertDefined(button, 'button', _temporalUndefined) && button);
        }
    }, {
        key: 'runExampleCode',
        value: function runExampleCode() {
            System['import']('js/' + this.name + '.js').then(this.renderResult.bind(this, false), this.renderResult.bind(this, true));
        }
    }, {
        key: 'renderResult',
        value: function renderResult(errored, result) {
            var codeEl = _temporalUndefined;

            codeEl = this.node.querySelector('code');
            (_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl).textContent = [].concat((_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl).textContent, errored ? result : Object.keys(result).reduce(function (acc, key) {
                return acc.concat(key + ' = ' + JSON.stringify(result[key], null, '    '));
            }, [])).join('\n');

            _highlightjsHighlightPackMinJs2['default'].highlightBlock(_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl);
            (_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl).scrollTop = (_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl).clientHeight;

            this.node.querySelector('button').disabled = true;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.node.getAttribute('data-example-code');
        }
    }], [{
        key: 'createExamples',
        value: function createExamples() {
            var exampleNodes = _temporalUndefined;

            exampleNodes = document.querySelectorAll('[data-example-code]');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (_temporalAssertDefined(exampleNodes, 'exampleNodes', _temporalUndefined) && exampleNodes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var exampleNode = _temporalUndefined;
                    exampleNode = _step.value;

                    new (_temporalAssertDefined(ExampleCode, 'ExampleCode', _temporalUndefined) && ExampleCode)(_temporalAssertDefined(exampleNode, 'exampleNode', _temporalUndefined) && exampleNode).render();
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
        }
    }]);

    return _temporalAssertDefined(ExampleCode, 'ExampleCode', _temporalUndefined) && ExampleCode;
})();

_revealJsJsRevealJs2['default'].addEventListener('ready', (_temporalAssertDefined(ExampleCode, 'ExampleCode', _temporalUndefined) && ExampleCode).createExamples);
//# sourceMappingURL=example-code.js.map
