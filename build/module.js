(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global hljs */
'use strict';

var _temporalUndefined = {};

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var ExampleCode = _temporalUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _revealJsJsRevealJs = require('reveal.js/js/reveal.js');

var _revealJsJsRevealJs2 = _interopRequireDefault(_revealJsJsRevealJs);

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

                    hljs.highlightBlock(_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl);

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

            hljs.highlightBlock(_temporalAssertDefined(codeEl, 'codeEl', _temporalUndefined) && codeEl);
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


},{"reveal.js/js/reveal.js":10}],2:[function(require,module,exports){
/* global hljs */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _revealJsJsRevealJs = require('reveal.js/js/reveal.js');

var _revealJsJsRevealJs2 = _interopRequireDefault(_revealJsJsRevealJs);

window.Reveal = _revealJsJsRevealJs2['default'];

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
        src: 'plugin/highlight/highlight.js',
        async: true,
        callback: function callback() {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: 'plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: 'plugin/notes/notes.js',
        async: true
    }]
});


},{"reveal.js/js/reveal.js":10}],3:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined,
    var2 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = undefined;
var2 = undefined;
function varExample() {
    var someVar = _temporalUndefined;

    someVar = 1;
    function inner() {
        var someVar = _temporalUndefined;

        _temporalAssertDefined(_temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar, "someVar", _temporalUndefined);

        someVar = 2;
        someVar = 3;

        _temporalAssertDefined(_temporalAssertDefined(var2, "var2", _temporalUndefined) && var2, "var2", _temporalUndefined);

        var2 = _temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar;
    }
    inner();

    _temporalAssertDefined(_temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, "var1", _temporalUndefined);

    var1 = _temporalAssertDefined(someVar, "someVar", _temporalUndefined) && someVar;
}
varExample();
// --SNIP--

exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, var2: _temporalAssertDefined(var2, "var2", _temporalUndefined) && var2 };
module.exports = exports["default"];


},{}],4:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined,
    var2 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = undefined;
var2 = undefined;
if (true) {
    var _someVar = _temporalUndefined;
    _someVar = 1;

    _temporalAssertDefined(_temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, "var1", _temporalUndefined);

    var1 = _someVar;
}

// --SNIP--

_temporalAssertDefined(_temporalAssertDefined(var2, "var2", _temporalUndefined) && var2, "var2", _temporalUndefined);

var2 = someVar;
exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1, var2: _temporalAssertDefined(var2, "var2", _temporalUndefined) && var2 };
module.exports = exports["default"];


},{}],5:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined;
// var1 = 1;

// js/let-const-4.es6.js: Line 2: "var1" is read-only
// --SNIP--

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = 0;
exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1 };
module.exports = exports["default"];


},{}],6:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};
var var1 = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var1 = {
    foo: 1,
    bar: 2
};
(_temporalAssertDefined(var1, "var1", _temporalUndefined) && var1).foo = 3;
// --SNIP--

exports["default"] = { var1: _temporalAssertDefined(var1, "var1", _temporalUndefined) && var1 };
module.exports = exports["default"];


},{}],7:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var loopedFuncs = [];
var values = [];

for (var i = 0; i < 3; i++) {
    loopedFuncs.push(function () {
        values.push(i);
    });
}

loopedFuncs.forEach(function (func) {
    func();
});
// --SNIP--

exports["default"] = { values: values };
module.exports = exports["default"];


},{}],8:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var loopedFuncs = [];
var values = [];

var _loop = function (i) {
    loopedFuncs.push(function () {
        values.push(i);
    });
};

for (var i = 0; i < 3; i++) {
    _loop(_temporalAssertDefined(i, "i", _temporalUndefined) && i);
}

loopedFuncs.forEach(function (func) {
    func();
});
// --SNIP--

exports["default"] = { values: values };
module.exports = exports["default"];


},{}],9:[function(require,module,exports){
/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports["default"] = { var1: var1, var2: var2 };
module.exports = exports["default"];


},{}],10:[function(require,module,exports){
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
(function( root, factory ) {
	if( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define( function() {
			root.Reveal = factory();
			return root.Reveal;
		} );
	} else if( typeof exports === 'object' ) {
		// Node. Does not work with strict CommonJS.
		module.exports = factory();
	} else {
		// Browser globals.
		root.Reveal = factory();
	}
}( this, function() {

	'use strict';

	var Reveal;

	var SLIDES_SELECTOR = '.slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.slides>section',
		VERTICAL_SLIDES_SELECTOR = '.slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.slides>section:first-of-type',

		// Configuration defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.5,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Optional function that blocks keyboard events when retuning false
			keyboardCondition: null,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Flags if we should show a help overlay when the questionmark
			// key is pressed
			help: true,

			// Flags if it should be possible to pause the presentation (blackout)
			pause: true,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Exposes the reveal.js API through window.postMessage
			postMessage: true,

			// Dispatches all reveal.js events to the parent window through postMessage
			postMessageEvents: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisibilityChange: true,

			// Transition style
			transition: 'slide', // none/fade/slide/convex/concave/zoom

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Amount of pixels to move the parallax background per slide step
			parallaxBackgroundHorizontal: null,
			parallaxBackgroundVertical: null,

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// Flags if the overview mode is currently active
		overview = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// CSS transform that is currently applied to the slides container,
		// split into two groups
		slidesTransform = { layout: '', overview: '' },

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		},

		// Holds information about the keyboard shortcuts
		keyboardShortcuts = {
			'N  ,  SPACE':			'Next slide',
			'P':					'Previous slide',
			'&#8592;  ,  H':		'Navigate left',
			'&#8594;  ,  L':		'Navigate right',
			'&#8593;  ,  K':		'Navigate up',
			'&#8595;  ,  J':		'Navigate down',
			'Home':					'First slide',
			'End':					'Last slide',
			'B  ,  .':				'Pause',
			'F':					'Fullscreen',
			'ESC, O':				'Slide overview'
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// Since JS won't be running any further, we load all lazy
			// loading elements upfront
			var images = toArray( document.getElementsByTagName( 'img' ) ),
				iframes = toArray( document.getElementsByTagName( 'iframe' ) );

			var lazyLoadable = images.concat( iframes );

			for( var i = 0, len = lazyLoadable.length; i < len; i++ ) {
				var element = lazyLoadable[i];
				if( element.getAttribute( 'data-src' ) ) {
					element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
					element.removeAttribute( 'data-src' );
				}
			}

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Cache references to key DOM elements
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		features.touch = !!( 'ontouchstart' in window );

		// Transitions in the overview are disabled in desktop and
		// mobile Safari due to lag
		features.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test( navigator.userAgent );

		isMobileDevice = /(iphone|ipod|ipad|android)/gi.test( navigator.userAgent );

	}

    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Listen to messages posted to this window
		setupPostMessage();

		// Prevent iframes from scrolling the slides out of view
		setupIframeScrollPrevention();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

		// Special setup and config is required when printing to PDF
		if( isPrintingPDF() ) {
			removeEventListeners();

			// The document needs to have loaded for the PDF layout
			// measurements to be accurate
			if( document.readyState === 'complete' ) {
				setupPDF();
			}
			else {
				window.addEventListener( 'load', setupPDF );
			}
		}

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );
		dom.theme = document.querySelector( '#theme' );

		dom.wrapper.setAttribute( 'role', 'application' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

		dom.statusDiv = createStatusDiv();
	}

	/**
	 * Creates a hidden div with role aria-live to announce the
	 * current slide content. Hide the div off-screen to make it
	 * available only to Assistive Technologies.
	 */
	function createStatusDiv() {

		var statusDiv = document.getElementById( 'aria-status-div' );
		if( !statusDiv ) {
			statusDiv = document.createElement( 'div' );
			statusDiv.style.position = 'absolute';
			statusDiv.style.height = '1px';
			statusDiv.style.width = '1px';
			statusDiv.style.overflow ='hidden';
			statusDiv.style.clip = 'rect( 1px, 1px, 1px, 1px )';
			statusDiv.setAttribute( 'id', 'aria-status-div' );
			statusDiv.setAttribute( 'aria-live', 'polite' );
			statusDiv.setAttribute( 'aria-atomic','true' );
			dom.wrapper.appendChild( statusDiv );
		}
		return statusDiv;

	}

	/**
	 * Configures the presentation for printing to a static
	 * PDF.
	 */
	function setupPDF() {

		var slideSize = getComputedSlideSize( window.innerWidth, window.innerHeight );

		// Dimensions of the PDF pages
		var pageWidth = Math.floor( slideSize.width * ( 1 + config.margin ) ),
			pageHeight = Math.floor( slideSize.height * ( 1 + config.margin  ) );

		// Dimensions of slides within the pages
		var slideWidth = slideSize.width,
			slideHeight = slideSize.height;

		// Let the browser know what page size we want to print
		injectStyleSheet( '@page{size:'+ pageWidth +'px '+ pageHeight +'px; margin: 0;}' );

		// Limit the size of certain elements to the dimensions of the slide
		injectStyleSheet( '.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: '+ slideWidth +'px; max-height:'+ slideHeight +'px}' );

		document.body.classList.add( 'print-pdf' );
		document.body.style.width = pageWidth + 'px';
		document.body.style.height = pageHeight + 'px';

		// Slide and slide background layout
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {

			// Vertical stacks are not centred since their section
			// children will be
			if( slide.classList.contains( 'stack' ) === false ) {
				// Center the slide inside of the page, giving the slide some margin
				var left = ( pageWidth - slideWidth ) / 2,
					top = ( pageHeight - slideHeight ) / 2;

				var contentHeight = getAbsoluteHeight( slide );
				var numberOfPages = Math.max( Math.ceil( contentHeight / pageHeight ), 1 );

				// Center slides vertically
				if( numberOfPages === 1 && config.center || slide.classList.contains( 'center' ) ) {
					top = Math.max( ( pageHeight - contentHeight ) / 2, 0 );
				}

				// Position the slide inside of the page
				slide.style.left = left + 'px';
				slide.style.top = top + 'px';
				slide.style.width = slideWidth + 'px';

				// TODO Backgrounds need to be multiplied when the slide
				// stretches over multiple pages
				var background = slide.querySelector( '.slide-background' );
				if( background ) {
					background.style.width = pageWidth + 'px';
					background.style.height = ( pageHeight * numberOfPages ) + 'px';
					background.style.top = -top + 'px';
					background.style.left = -left + 'px';
				}
			}

		} );

		// Show all fragments
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' .fragment' ) ).forEach( function( fragment ) {
			fragment.classList.add( 'visible' );
		} );

	}

	/**
	 * This is an unfortunate necessity. Iframes can trigger the
	 * parent window to scroll, for example by focusing an input.
	 * This scrolling can not be prevented by hiding overflow in
	 * CSS so we have to resort to repeatedly checking if the
	 * browser has decided to offset our slides :(
	 */
	function setupIframeScrollPrevention() {

		if( dom.slides.querySelector( 'iframe' ) ) {
			setInterval( function() {
				if( dom.wrapper.scrollTop !== 0 || dom.wrapper.scrollLeft !== 0 ) {
					dom.wrapper.scrollTop = 0;
					dom.wrapper.scrollLeft = 0;
				}
			}, 500 );
		}

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		// Find all nodes matching the description
		var nodes = container.querySelectorAll( '.' + classname );

		// Check all matches to find one which is a direct child of
		// the specified container
		for( var i = 0; i < nodes.length; i++ ) {
			var testNode = nodes[i];
			if( testNode.parentNode === container ) {
				return testNode;
			}
		}

		// If no node was found, create it now
		var node = document.createElement( tagname );
		node.classList.add( classname );
		if( typeof innerHTML === 'string' ) {
			node.innerHTML = innerHTML;
		}
		container.appendChild( node );

		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		var printMode = isPrintingPDF();

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Iterate over all horizontal slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( printMode ) {
				backgroundStack = createBackground( slideh, slideh );
			}
			else {
				backgroundStack = createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( printMode ) {
					createBackground( slidev, slidev );
				}
				else {
					createBackground( slidev, backgroundStack );
				}

				backgroundStack.classList.add( 'stack' );

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Creates a background for the given slide.
	 *
	 * @param {HTMLElement} slide
	 * @param {HTMLElement} container The element that the background
	 * should be appended to
	 */
	function createBackground( slide, container ) {

		var data = {
			background: slide.getAttribute( 'data-background' ),
			backgroundSize: slide.getAttribute( 'data-background-size' ),
			backgroundImage: slide.getAttribute( 'data-background-image' ),
			backgroundVideo: slide.getAttribute( 'data-background-video' ),
			backgroundIframe: slide.getAttribute( 'data-background-iframe' ),
			backgroundColor: slide.getAttribute( 'data-background-color' ),
			backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
			backgroundPosition: slide.getAttribute( 'data-background-position' ),
			backgroundTransition: slide.getAttribute( 'data-background-transition' )
		};

		var element = document.createElement( 'div' );

		// Carry over custom classes from the slide to the background
		element.className = 'slide-background ' + slide.className.replace( /present|past|future/, '' );

		if( data.background ) {
			// Auto-wrap image urls in url(...)
			if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
				slide.setAttribute( 'data-background-image', data.background );
			}
			else {
				element.style.background = data.background;
			}
		}

		// Create a hash for this combination of background settings.
		// This is used to determine when two slide backgrounds are
		// the same.
		if( data.background || data.backgroundColor || data.backgroundImage || data.backgroundVideo || data.backgroundIframe ) {
			element.setAttribute( 'data-background-hash', data.background +
															data.backgroundSize +
															data.backgroundImage +
															data.backgroundVideo +
															data.backgroundIframe +
															data.backgroundColor +
															data.backgroundRepeat +
															data.backgroundPosition +
															data.backgroundTransition );
		}

		// Additional and optional background properties
		if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
		if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
		if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
		if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
		if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

		container.appendChild( element );

		// If backgrounds are being recreated, clear old classes
		slide.classList.remove( 'has-dark-background' );
		slide.classList.remove( 'has-light-background' );

		// If this slide has a background color, add a class that
		// signals if it is light or dark. If the slide has no background
		// color, no class will be set
		var computedBackgroundColor = window.getComputedStyle( element ).backgroundColor;
		if( computedBackgroundColor ) {
			var rgb = colorToRgb( computedBackgroundColor );

			// Ignore fully transparent backgrounds. Some browsers return
			// rgba(0,0,0,0) when reading the computed background color of
			// an element with no background
			if( rgb && rgb.a !== 0 ) {
				if( colorBrightness( computedBackgroundColor ) < 128 ) {
					slide.classList.add( 'has-dark-background' );
				}
				else {
					slide.classList.add( 'has-light-background' );
				}
			}
		}

		return element;

	}

	/**
	 * Registers a listener to postMessage events, this makes it
	 * possible to call all reveal.js API methods from another
	 * window. For example:
	 *
	 * revealWindow.postMessage( JSON.stringify({
	 *   method: 'slide',
	 *   args: [ 2 ]
	 * }), '*' );
	 */
	function setupPostMessage() {

		if( config.postMessage ) {
			window.addEventListener( 'message', function ( event ) {
				var data = event.data;

				// Make sure we're dealing with JSON
				if( typeof data === 'string' && data.charAt( 0 ) === '{' && data.charAt( data.length - 1 ) === '}' ) {
					data = JSON.parse( data );

					// Check if the requested method can be found
					if( data.method && typeof Reveal[data.method] === 'function' ) {
						Reveal[data.method].apply( Reveal, data.args );
					}
				}
			}, false );
		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = dom.wrapper.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		// Exit the paused mode if it was configured off
		if( config.pause === false ) {
			resume();
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Remove existing auto-slide controls
		if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Generate auto-slide controls if needed
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}

		// When fragments are turned off they should be visible
		if( config.fragments === false ) {
			toArray( dom.slides.querySelectorAll( '.fragment' ) ).forEach( function( element ) {
				element.classList.add( 'visible' );
				element.classList.remove( 'current-fragment' );
			} );
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.pointerEnabled ) {
				// IE 11 uses un-prefixed version of pointer events
				dom.wrapper.addEventListener( 'pointerdown', onPointerDown, false );
				dom.wrapper.addEventListener( 'pointermove', onPointerMove, false );
				dom.wrapper.addEventListener( 'pointerup', onPointerUp, false );
			}
			else if( window.navigator.msPointerEnabled ) {
				// IE 10 uses prefixed version of pointer events
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
			document.addEventListener( 'keypress', onDocumentKeyPress, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisibilityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		// Listen to both touch and click events, in case the device
		// supports both
		var pointerEvents = [ 'touchstart', 'click' ];

		// Only support touch for Android, fixes double navigations in
		// stock browser
		if( navigator.userAgent.match( /android/gi ) ) {
			pointerEvents = [ 'touchstart' ];
		}

		pointerEvents.forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		document.removeEventListener( 'keypress', onDocumentKeyPress, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		// IE11
		if( window.navigator.pointerEnabled ) {
			dom.wrapper.removeEventListener( 'pointerdown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'pointermove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'pointerup', onPointerUp, false );
		}
		// IE10
		else if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Utility for deserializing a value.
	 */
	function deserialize( value ) {

		if( typeof value === 'string' ) {
			if( value === 'null' ) return null;
			else if( value === 'true' ) return true;
			else if( value === 'false' ) return false;
			else if( value.match( /^\d+$/ ) ) return parseFloat( value );
		}

		return value;

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Applies CSS transforms to the slides container. The container
	 * is transformed from two separate sources: layout and the overview
	 * mode.
	 */
	function transformSlides( transforms ) {

		// Pick up new transforms from arguments
		if( typeof transforms.layout === 'string' ) slidesTransform.layout = transforms.layout;
		if( typeof transforms.overview === 'string' ) slidesTransform.overview = transforms.overview;

		// Apply the transforms to the slides container
		if( slidesTransform.layout ) {
			transformElement( dom.slides, slidesTransform.layout + ' ' + slidesTransform.overview );
		}
		else {
			transformElement( dom.slides, slidesTransform.overview );
		}

	}

	/**
	 * Injects the given CSS styles into the DOM.
	 */
	function injectStyleSheet( value ) {

		var tag = document.createElement( 'style' );
		tag.type = 'text/css';
		if( tag.styleSheet ) {
			tag.styleSheet.cssText = value;
		}
		else {
			tag.appendChild( document.createTextNode( value ) );
		}
		document.getElementsByTagName( 'head' )[0].appendChild( tag );

	}

	/**
	 * Converts various color input formats to an {r:0,g:0,b:0} object.
	 *
	 * @param {String} color The string representation of a color,
	 * the following formats are supported:
	 * - #000
	 * - #000000
	 * - rgb(0,0,0)
	 */
	function colorToRgb( color ) {

		var hex3 = color.match( /^#([0-9a-f]{3})$/i );
		if( hex3 && hex3[1] ) {
			hex3 = hex3[1];
			return {
				r: parseInt( hex3.charAt( 0 ), 16 ) * 0x11,
				g: parseInt( hex3.charAt( 1 ), 16 ) * 0x11,
				b: parseInt( hex3.charAt( 2 ), 16 ) * 0x11
			};
		}

		var hex6 = color.match( /^#([0-9a-f]{6})$/i );
		if( hex6 && hex6[1] ) {
			hex6 = hex6[1];
			return {
				r: parseInt( hex6.substr( 0, 2 ), 16 ),
				g: parseInt( hex6.substr( 2, 2 ), 16 ),
				b: parseInt( hex6.substr( 4, 2 ), 16 )
			};
		}

		var rgb = color.match( /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i );
		if( rgb ) {
			return {
				r: parseInt( rgb[1], 10 ),
				g: parseInt( rgb[2], 10 ),
				b: parseInt( rgb[3], 10 )
			};
		}

		var rgba = color.match( /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i );
		if( rgba ) {
			return {
				r: parseInt( rgba[1], 10 ),
				g: parseInt( rgba[2], 10 ),
				b: parseInt( rgba[3], 10 ),
				a: parseFloat( rgba[4] )
			};
		}

		return null;

	}

	/**
	 * Calculates brightness on a scale of 0-255.
	 *
	 * @param color See colorStringToRgb for supported formats.
	 */
	function colorBrightness( color ) {

		if( typeof color === 'string' ) color = colorToRgb( color );

		if( color ) {
			return ( color.r * 299 + color.g * 587 + color.b * 114 ) / 1000;
		}

		return null;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( window.getComputedStyle( child ).position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element.
	 *
	 * remaining height = [ configured parent height ] - [ current parent height ]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var newHeight, oldHeight = element.style.height;

			// Change the .stretch element height to 0 in order find the height of all
			// the other elements
			element.style.height = '0px';
			newHeight = height - element.parentNode.offsetHeight;

			// Restore the old height, just in case
			element.style.height = oldHeight + 'px';

			return newHeight;
		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, args ) {

		var event = document.createEvent( 'HTMLEvents', 1, 2 );
		event.initEvent( type, true, true );
		extend( event, args );
		dom.wrapper.dispatchEvent( event );

		// If we're in an iframe, post each reveal.js event to the
		// parent window. Used by the notes plugin
		if( config.postMessageEvents && window.parent !== window.self ) {
			window.parent.postMessage( JSON.stringify({ namespace: 'reveal', eventName: type, state: getState() }), '*' );
		}

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function showPreview( url ) {

		closeOverlay();

		dom.overlay = document.createElement( 'div' );
		dom.overlay.classList.add( 'overlay' );
		dom.overlay.classList.add( 'overlay-preview' );
		dom.wrapper.appendChild( dom.overlay );

		dom.overlay.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.overlay.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.overlay.classList.add( 'loaded' );
		}, false );

		dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closeOverlay();
			event.preventDefault();
		}, false );

		dom.overlay.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closeOverlay();
		}, false );

		setTimeout( function() {
			dom.overlay.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Opens a overlay window with help material.
	 */
	function showHelp() {

		if( config.help ) {

			closeOverlay();

			dom.overlay = document.createElement( 'div' );
			dom.overlay.classList.add( 'overlay' );
			dom.overlay.classList.add( 'overlay-help' );
			dom.wrapper.appendChild( dom.overlay );

			var html = '<p class="title">Keyboard Shortcuts</p><br/>';

			html += '<table><th>KEY</th><th>ACTION</th>';
			for( var key in keyboardShortcuts ) {
				html += '<tr><td>' + key + '</td><td>' + keyboardShortcuts[ key ] + '</td></tr>';
			}

			html += '</table>';

			dom.overlay.innerHTML = [
				'<header>',
					'<a class="close" href="#"><span class="icon"></span></a>',
				'</header>',
				'<div class="viewport">',
					'<div class="viewport-inner">'+ html +'</div>',
				'</div>'
			].join('');

			dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
				closeOverlay();
				event.preventDefault();
			}, false );

			setTimeout( function() {
				dom.overlay.classList.add( 'visible' );
			}, 1 );

		}

	}

	/**
	 * Closes any currently open overlay.
	 */
	function closeOverlay() {

		if( dom.overlay ) {
			dom.overlay.parentNode.removeChild( dom.overlay );
			dom.overlay = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			var size = getComputedSlideSize();

			var slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			dom.slides.style.width = size.width + 'px';
			dom.slides.style.height = size.height + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( size.presentationWidth / size.width, size.presentationHeight / size.height );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Don't apply any scaling styles if scale is 1
			if( scale === 1 ) {
				dom.slides.style.zoom = '';
				dom.slides.style.left = '';
				dom.slides.style.top = '';
				dom.slides.style.bottom = '';
				dom.slides.style.right = '';
				transformSlides( { layout: '' } );
			}
			else {
				// Prefer zooming in desktop Chrome so that content remains crisp
				if( !isMobileDevice && /chrome/i.test( navigator.userAgent ) && typeof dom.slides.style.zoom !== 'undefined' ) {
					dom.slides.style.zoom = scale;
					transformSlides( { layout: '' } );
				}
				// Apply scale transform as a fallback
				else {
					dom.slides.style.left = '50%';
					dom.slides.style.top = '50%';
					dom.slides.style.bottom = 'auto';
					dom.slides.style.right = 'auto';
					transformSlides( { layout: 'translate(-50%, -50%) scale('+ scale +')' } );
				}
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( ( ( size.height - getAbsoluteHeight( slide ) ) / 2 ) - slidePadding, 0 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, height );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Calculates the computed pixel size of our slides. These
	 * values are based on the width and height configuration
	 * options.
	 */
	function getComputedSlideSize( presentationWidth, presentationHeight ) {

		var size = {
			// Slide size
			width: config.width,
			height: config.height,

			// Presentation size
			presentationWidth: presentationWidth || dom.wrapper.offsetWidth,
			presentationHeight: presentationHeight || dom.wrapper.offsetHeight
		};

		// Reduce available space by margin
		size.presentationWidth -= ( size.presentationWidth * config.margin );
		size.presentationHeight -= ( size.presentationHeight * config.margin );

		// Slide width may be a percentage of available width
		if( typeof size.width === 'string' && /%$/.test( size.width ) ) {
			size.width = parseInt( size.width, 10 ) / 100 * size.presentationWidth;
		}

		// Slide height may be a percentage of available height
		if( typeof size.height === 'string' && /%$/.test( size.height ) ) {
			size.height = parseInt( size.height, 10 ) / 100 * size.presentationHeight;
		}

		return size;

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by scaling
	 * down and arranging all slide elements.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview && !isOverview() ) {

			overview = true;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			if( features.overviewTransitions ) {
				setTimeout( function() {
					dom.wrapper.classList.add( 'overview-animated' );
				}, 1 );
			}

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			// Move the backgrounds element into the slide container to
			// that the same scaling is applied
			dom.slides.appendChild( dom.background );

			// Clicking on an overview slide navigates to it
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				if( !slide.classList.contains( 'stack' ) ) {
					slide.addEventListener( 'click', onOverviewSlideClicked, true );
				}
			} );

			updateSlidesVisibility();
			layoutOverview();
			updateOverview();

			layout();

			// Notify observers of the overview showing
			dispatchEvent( 'overviewshown', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}

	}

	/**
	 * Uses CSS transforms to position all slides in a grid for
	 * display inside of the overview mode.
	 */
	function layoutOverview() {

		var margin = 70;
		var slideWidth = config.width + margin,
			slideHeight = config.height + margin;

		// Reverse in RTL mode
		if( config.rtl ) {
			slideWidth = -slideWidth;
		}

		// Layout slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
			hslide.setAttribute( 'data-index-h', h );
			transformElement( hslide, 'translate3d(' + ( h * slideWidth ) + 'px, 0, 0)' );

			if( hslide.classList.contains( 'stack' ) ) {

				toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
					vslide.setAttribute( 'data-index-h', h );
					vslide.setAttribute( 'data-index-v', v );

					transformElement( vslide, 'translate3d(0, ' + ( v * slideHeight ) + 'px, 0)' );
				} );

			}
		} );

		// Layout slide backgrounds
		toArray( dom.background.childNodes ).forEach( function( hbackground, h ) {
			transformElement( hbackground, 'translate3d(' + ( h * slideWidth ) + 'px, 0, 0)' );

			toArray( hbackground.querySelectorAll( '.slide-background' ) ).forEach( function( vbackground, v ) {
				transformElement( vbackground, 'translate3d(0, ' + ( v * slideHeight ) + 'px, 0)' );
			} );
		} );

	}

	/**
	 * Moves the overview viewport to the current slides.
	 * Called each time the current slide changes.
	 */
	function updateOverview() {

		var margin = 70;
		var slideWidth = config.width + margin,
			slideHeight = config.height + margin;

		// Reverse in RTL mode
		if( config.rtl ) {
			slideWidth = -slideWidth;
		}

		transformSlides( {
			overview: [
				'translateX('+ ( -indexh * slideWidth ) +'px)',
				'translateY('+ ( -indexv * slideHeight ) +'px)',
				'translateZ('+ ( window.innerWidth < 400 ? -1000 : -2500 ) +'px)'
			].join( ' ' )
		} );

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			overview = false;

			dom.wrapper.classList.remove( 'overview' );
			dom.wrapper.classList.remove( 'overview-animated' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Move the background element back out
			dom.wrapper.appendChild( dom.background );

			// Clean up changes made to slides
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			// Clean up changes made to backgrounds
			toArray( dom.background.querySelectorAll( '.slide-background' ) ).forEach( function( background ) {
				transformElement( background, '' );
			} );

			transformSlides( { overview: '' } );

			slide( indexh, indexv );

			layout();

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return overview;

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullscreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		if( config.pause ) {
			var wasPaused = dom.wrapper.classList.contains( 'paused' );

			cancelAutoSlide();
			dom.wrapper.classList.add( 'paused' );

			if( wasPaused === false ) {
				dispatchEvent( 'paused' );
			}
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause( override ) {

		if( typeof override === 'boolean' ) {
			override ? pause() : resume();
		}
		else {
			isPaused() ? resume() : pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Toggles the auto slide mode on and off.
	 *
	 * @param {Boolean} override Optional flag which sets the desired state.
	 * True means autoplay starts, false means it stops.
	 */

	function toggleAutoSlide( override ) {

		if( typeof override === 'boolean' ) {
			override ? resumeAutoSlide() : pauseAutoSlide();
		}

		else {
			autoSlidePaused ? resumeAutoSlide() : pauseAutoSlide();
		}

	}

	/**
	 * Checks if the auto slide mode is currently on.
	 */
	function isAutoSliding() {

		return !!( autoSlide && !autoSlidePaused );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined && !isOverview() ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// Update the overview if it's currently active
		if( isOverview() ) {
			updateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );
			previousSlide.setAttribute( 'aria-hidden', 'true' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( dom.wrapper.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged || !previousSlide ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		// Announce the current slide contents, for screen readers
		dom.statusDiv.textContent = currentSlide.textContent;

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		// Write the current hash to the URL
		writeURL();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();
		updateSlidesVisibility();

		formatEmbeddedContent();
		startEmbeddedContent( currentSlide );

		if( isOverview() ) {
			layoutOverview();
		}

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
					verticalSlide.setAttribute( 'aria-hidden', 'true' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( dom.wrapper.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		var printMode = isPrintingPDF();

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );
				element.setAttribute( 'aria-hidden', 'true' );

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}

				// If we're printing static slides, all slides are "present"
				if( printMode ) {
					element.classList.add( 'present' );
					continue;
				}

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					if( config.fragments ) {
						var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

						// Show all fragments on prior slides
						while( pastFragments.length ) {
							var pastFragment = pastFragments.pop();
							pastFragment.classList.add( 'visible' );
							pastFragment.classList.remove( 'current-fragment' );
						}
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					if( config.fragments ) {
						var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

						// No fragments in future slides should be visible ahead of time
						while( futureFragments.length ) {
							var futureFragment = futureFragments.pop();
							futureFragment.classList.remove( 'visible' );
							futureFragment.classList.remove( 'current-fragment' );
						}
					}
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );
			slides[index].removeAttribute( 'aria-hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength && typeof indexh !== 'undefined' ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 2;
			}

			// All slides need to be visible when exporting to PDF
			if( isPrintingPDF() ) {
				viewDistance = Number.MAX_VALUE;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Determine how far away this slide is from the present
				distanceX = Math.abs( ( indexh || 0 ) - x ) || 0;

				// If the presentation is looped, distance should measure
				// 1 between the first and last slides
				if( config.loop ) {
					distanceX = Math.abs( ( ( indexh || 0 ) - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;
				}

				// Show the horizontal slide if it's within the view distance
				if( distanceX < viewDistance ) {
					showSlide( horizontalSlide );
				}
				else {
					hideSlide( horizontalSlide );
				}

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === ( indexh || 0 ) ? Math.abs( ( indexv || 0 ) - y ) : Math.abs( y - oy );

						if( distanceX + distanceY < viewDistance ) {
							showSlide( verticalSlide );
						}
						else {
							hideSlide( verticalSlide );
						}
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progressbar ) {

			dom.progressbar.style.width = getProgress() * dom.wrapper.offsetWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 *
	 * Slide number format can be defined as a string using the
	 * following variables:
	 *  h: current slide's horizontal index
	 *  v: current slide's vertical index
	 *  c: current slide index (flattened)
	 *  t: total number of slides (flattened)
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Default to only showing the current slide number
			var format = 'c';

			// Check if a custom slide number format is available
			if( typeof config.slideNumber === 'string' ) {
				format = config.slideNumber;
			}

			dom.slideNumber.innerHTML = format.replace( /h/g, indexh )
												.replace( /v/g, indexv )
												.replace( /c/g, getSlidePastCount() + 1 )
												.replace( /t/g, getTotalSlides() );
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			backgroundh.classList.remove( 'past' );
			backgroundh.classList.remove( 'present' );
			backgroundh.classList.remove( 'future' );

			if( h < indexh ) {
				backgroundh.classList.add( horizontalPast );
			}
			else if ( h > indexh ) {
				backgroundh.classList.add( horizontalFuture );
			}
			else {
				backgroundh.classList.add( 'present' );

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.querySelectorAll( '.slide-background' ) ).forEach( function( backgroundv, v ) {

					backgroundv.classList.remove( 'past' );
					backgroundv.classList.remove( 'present' );
					backgroundv.classList.remove( 'future' );

					if( v < indexv ) {
						backgroundv.classList.add( 'past' );
					}
					else if ( v > indexv ) {
						backgroundv.classList.add( 'future' );
					}
					else {
						backgroundv.classList.add( 'present' );

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Stop any currently playing video background
		if( previousBackground ) {

			var previousVideo = previousBackground.querySelector( 'video' );
			if( previousVideo ) previousVideo.pause();

		}

		if( currentBackground ) {

			// Start video playback
			var currentVideo = currentBackground.querySelector( 'video' );
			if( currentVideo ) {
				currentVideo.currentTime = 0;
				currentVideo.play();
			}

			var backgroundImageURL = currentBackground.style.backgroundImage || '';

			// Restart GIFs (doesn't work in Firefox)
			if( /\.gif/i.test( backgroundImageURL ) ) {
				currentBackground.style.backgroundImage = '';
				window.getComputedStyle( currentBackground ).opacity;
				currentBackground.style.backgroundImage = backgroundImageURL;
			}

			// Don't transition between identical backgrounds. This
			// prevents unwanted flicker.
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;

		}

		// If there's a background brightness flag for this slide,
		// bubble it to the .reveal container
		if( currentSlide ) {
			[ 'has-light-background', 'has-dark-background' ].forEach( function( classToBubble ) {
				if( currentSlide.classList.contains( classToBubble ) ) {
					dom.wrapper.classList.add( classToBubble );
				}
				else {
					dom.wrapper.classList.remove( classToBubble );
				}
			} );
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth,
				horizontalSlideCount = horizontalSlides.length,
				horizontalOffsetMultiplier,
				horizontalOffset;

			if( typeof config.parallaxBackgroundHorizontal === 'number' ) {
				horizontalOffsetMultiplier = config.parallaxBackgroundHorizontal;
			}
			else {
				horizontalOffsetMultiplier = ( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 );
			}

			horizontalOffset = horizontalOffsetMultiplier * indexh * -1;

			var slideHeight = dom.background.offsetHeight,
				verticalSlideCount = verticalSlides.length,
				verticalOffsetMultiplier,
				verticalOffset;

			if( typeof config.parallaxBackgroundVertical === 'number' ) {
				verticalOffsetMultiplier = config.parallaxBackgroundVertical;
			}
			else {
				verticalOffsetMultiplier = ( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 );
			}

			verticalOffset = verticalSlideCount > 0 ?  verticalOffsetMultiplier * indexv * 1 : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + -verticalOffset + 'px';

		}

	}

	/**
	 * Called when the given slide is within the configured view
	 * distance. Shows the slide element and loads any content
	 * that is set to load lazily (data-src).
	 */
	function showSlide( slide ) {

		// Show the slide element
		slide.style.display = 'block';

		// Media elements with data-src attributes
		toArray( slide.querySelectorAll( 'img[data-src], video[data-src], audio[data-src]' ) ).forEach( function( element ) {
			element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
			element.removeAttribute( 'data-src' );
		} );

		// Media elements with <source> children
		toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( media ) {
			var sources = 0;

			toArray( media.querySelectorAll( 'source[data-src]' ) ).forEach( function( source ) {
				source.setAttribute( 'src', source.getAttribute( 'data-src' ) );
				source.removeAttribute( 'data-src' );
				sources += 1;
			} );

			// If we rewrote sources for this video/audio element, we need
			// to manually tell it to load from its new origin
			if( sources > 0 ) {
				media.load();
			}
		} );


		// Show the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'block';

			// If the background contains media, load it
			if( background.hasAttribute( 'data-loaded' ) === false ) {
				background.setAttribute( 'data-loaded', 'true' );

				var backgroundImage = slide.getAttribute( 'data-background-image' ),
					backgroundVideo = slide.getAttribute( 'data-background-video' ),
					backgroundVideoLoop = slide.hasAttribute( 'data-background-video-loop' ),
					backgroundIframe = slide.getAttribute( 'data-background-iframe' );

				// Images
				if( backgroundImage ) {
					background.style.backgroundImage = 'url('+ backgroundImage +')';
				}
				// Videos
				else if ( backgroundVideo && !isSpeakerNotes() ) {
					var video = document.createElement( 'video' );

					if( backgroundVideoLoop ) {
						video.setAttribute( 'loop', '' );
					}

					// Support comma separated lists of video sources
					backgroundVideo.split( ',' ).forEach( function( source ) {
						video.innerHTML += '<source src="'+ source +'">';
					} );

					background.appendChild( video );
				}
				// Iframes
				else if( backgroundIframe ) {
					var iframe = document.createElement( 'iframe' );
						iframe.setAttribute( 'src', backgroundIframe );
						iframe.style.width  = '100%';
						iframe.style.height = '100%';
						iframe.style.maxHeight = '100%';
						iframe.style.maxWidth = '100%';

					background.appendChild( iframe );
				}
			}
		}

	}

	/**
	 * Called when the given slide is moved outside of the
	 * configured view distance.
	 */
	function hideSlide( slide ) {

		// Hide the slide element
		slide.style.display = 'none';

		// Hide the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'none';
		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Enforces origin-specific format rules for embedded media.
	 */
	function formatEmbeddedContent() {

		var _appendParamToIframeSource = function( sourceAttribute, sourceURL, param ) {
			toArray( dom.slides.querySelectorAll( 'iframe['+ sourceAttribute +'*="'+ sourceURL +'"]' ) ).forEach( function( el ) {
				var src = el.getAttribute( sourceAttribute );
				if( src && src.indexOf( param ) === -1 ) {
					el.setAttribute( sourceAttribute, src + ( !/\?/.test( src ) ? '?' : '&' ) + param );
				}
			});
		};

		// YouTube frames must include "?enablejsapi=1"
		_appendParamToIframeSource( 'src', 'youtube.com/embed/', 'enablejsapi=1' );
		_appendParamToIframeSource( 'data-src', 'youtube.com/embed/', 'enablejsapi=1' );

		// Vimeo frames must include "?api=1"
		_appendParamToIframeSource( 'src', 'player.vimeo.com/', 'api=1' );
		_appendParamToIframeSource( 'data-src', 'player.vimeo.com/', 'api=1' );

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// Restart GIFs
			toArray( slide.querySelectorAll( 'img[src$=".gif"]' ) ).forEach( function( el ) {
				// Setting the same unchanged source like this was confirmed
				// to work in Chrome, FF & Safari
				el.setAttribute( 'src', el.getAttribute( 'src' ) );
			} );

			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) && typeof el.play === 'function' ) {
					el.play();
				}
			} );

			// Normal iframes
			toArray( slide.querySelectorAll( 'iframe[src]' ) ).forEach( function( el ) {
				startEmbeddedIframe( { target: el } );
			} );

			// Lazy loading iframes
			toArray( slide.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				if( el.getAttribute( 'src' ) !== el.getAttribute( 'data-src' ) ) {
					el.removeEventListener( 'load', startEmbeddedIframe ); // remove first to avoid dupes
					el.addEventListener( 'load', startEmbeddedIframe );
					el.setAttribute( 'src', el.getAttribute( 'data-src' ) );
				}
			} );
		}

	}

	/**
	 * "Starts" the content of an embedded iframe using the
	 * postmessage API.
	 */
	function startEmbeddedIframe( event ) {

		var iframe = event.target;

		// YouTube postMessage API
		if( /youtube\.com\/embed\//.test( iframe.getAttribute( 'src' ) ) && iframe.hasAttribute( 'data-autoplay' ) ) {
			iframe.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
		}
		// Vimeo postMessage API
		else if( /player\.vimeo\.com\//.test( iframe.getAttribute( 'src' ) ) && iframe.hasAttribute( 'data-autoplay' ) ) {
			iframe.contentWindow.postMessage( '{"method":"play"}', '*' );
		}
		// Generic postMessage API
		else {
			iframe.contentWindow.postMessage( 'slide:start', '*' );
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide && slide.parentNode ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.pause === 'function' ) {
					el.pause();
				}
			} );

			// Generic postMessage API for non-lazy loaded iframes
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
				el.removeEventListener( 'load', startEmbeddedIframe );
			});

			// YouTube postMessage API
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});

			// Vimeo postMessage API
			toArray( slide.querySelectorAll( 'iframe[src*="player.vimeo.com/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"method":"pause"}', '*' );
				}
			});

			// Lazy loading iframes
			toArray( slide.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				// Only removing the src doesn't actually unload the frame
				// in all browsers (Firefox) so we set it to blank first
				el.setAttribute( 'src', 'about:blank' );
				el.removeAttribute( 'src' );
			} );
		}

	}

	/**
	 * Returns the number of past slides. This can be used as a global
	 * flattened index for slides.
	 */
	function getSlidePastCount() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

		// The number of past slides
		var pastCount = 0;

		// Step through all slides and count the past ones
		mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

			var horizontalSlide = horizontalSlides[i];
			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

			for( var j = 0; j < verticalSlides.length; j++ ) {

				// Stop as soon as we arrive at the present
				if( verticalSlides[j].classList.contains( 'present' ) ) {
					break mainLoop;
				}

				pastCount++;

			}

			// Stop as soon as we arrive at the present
			if( horizontalSlide.classList.contains( 'present' ) ) {
				break;
			}

			// Don't count the wrapping section for vertical slides
			if( horizontalSlide.classList.contains( 'stack' ) === false ) {
				pastCount++;
			}

		}

		return pastCount;

	}

	/**
	 * Returns a value ranging from 0-1 that represents
	 * how far into the presentation we have navigated.
	 */
	function getProgress() {

		// The number of past and total slides
		var totalCount = getTotalSlides();
		var pastCount = getSlidePastCount();

		if( currentSlide ) {

			var allFragments = currentSlide.querySelectorAll( '.fragment' );

			// If there are fragments in the current slide those should be
			// accounted for in the progress.
			if( allFragments.length > 0 ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );

				// This value represents how big a portion of the slide progress
				// that is made up by its fragments (0-1)
				var fragmentWeight = 0.9;

				// Add fragment progress to the past slide count
				pastCount += ( visibleFragments.length / allFragments.length ) * fragmentWeight;
			}

		}

		return pastCount / ( totalCount - 1 );

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			var element;

			// Ensure the named link is a valid HTML ID attribute
			if( /^[a-zA-Z][\w:.-]*$/.test( name ) ) {
				// Find the slide with the specified ID
				element = document.getElementById( name );
			}

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else if( currentSlide ) {
				var url = '/';

				// Attempt to create a named link based on the slide's ID
				var id = currentSlide.getAttribute( 'id' );
				if( id ) {
					id = id.toLowerCase();
					id = id.replace( /[^a-zA-Z0-9\-\_\:\.]/g, '' );
				}

				// If the current slide has an ID, use that as a named link
				if( typeof id === 'string' && id.length ) {
					url = '/' + id;
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// Assume we're not vertical
			v = undefined;

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var currentFragment = currentSlide.querySelector( '.current-fragment' );
				if( currentFragment && currentFragment.hasAttribute( 'data-fragment-index' ) ) {
					f = parseInt( currentFragment.getAttribute( 'data-fragment-index' ), 10 );
				}
				else {
					f = currentSlide.querySelectorAll( '.fragment.visible' ).length - 1;
				}
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Retrieves the total number of slides in this presentation.
	 */
	function getTotalSlides() {

		return dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;

	}

	/**
	 * Returns the slide element matching the specified index.
	 */
	function getSlide( x, y ) {

		var horizontalSlide = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
		var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

		if( verticalSlides && verticalSlides.length && typeof y === 'number' ) {
			return verticalSlides ? verticalSlides[ y ] : undefined;
		}

		return horizontalSlide;

	}

	/**
	 * Returns the background element for the given slide.
	 * All slides, even the ones with no background properties
	 * defined, have a background element so as long as the
	 * index is valid an element will be returned.
	 */
	function getSlideBackground( x, y ) {

		// When printing to PDF the slide backgrounds are nested
		// inside of the slides
		if( isPrintingPDF() ) {
			var slide = getSlide( x, y );
			if( slide ) {
				var background = slide.querySelector( '.slide-background' );
				if( background && background.parentNode === slide ) {
					return background;
				}
			}

			return undefined;
		}

		var horizontalBackground = dom.wrapper.querySelectorAll( '.backgrounds>.slide-background' )[ x ];
		var verticalBackgrounds = horizontalBackground && horizontalBackground.querySelectorAll( '.slide-background' );

		if( verticalBackgrounds && verticalBackgrounds.length && typeof y === 'number' ) {
			return verticalBackgrounds ? verticalBackgrounds[ y ] : undefined;
		}

		return horizontalBackground;

	}

	/**
	 * Retrieves the current state of the presentation as
	 * an object. This state can then be restored at any
	 * time.
	 */
	function getState() {

		var indices = getIndices();

		return {
			indexh: indices.h,
			indexv: indices.v,
			indexf: indices.f,
			paused: isPaused(),
			overview: isOverview()
		};

	}

	/**
	 * Restores the presentation to the given state.
	 *
	 * @param {Object} state As generated by getState()
	 */
	function setState( state ) {

		if( typeof state === 'object' ) {
			slide( deserialize( state.indexh ), deserialize( state.indexv ), deserialize( state.indexf ) );

			var pausedFlag = deserialize( state.paused ),
				overviewFlag = deserialize( state.overview );

			if( typeof pausedFlag === 'boolean' && pausedFlag !== isPaused() ) {
				togglePause( pausedFlag );
			}

			if( typeof overviewFlag === 'boolean' && overviewFlag !== isOverview() ) {
				toggleOverview( overviewFlag );
			}
		}

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						// Announce the fragments one by one to the Screen Reader
						dom.statusDiv.textContent = element.textContent;

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();
				updateProgress();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var currentFragment = currentSlide.querySelector( '.current-fragment' );

			var fragmentAutoSlide = currentFragment ? currentFragment.getAttribute( 'data-autoslide' ) : null;
			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current fragment's data-autoslide
			// 2. Current slide's data-autoslide
			// 3. Parent slide's data-autoslide
			// 4. Global autoSlide setting
			if( fragmentAutoSlide ) {
				autoSlide = parseInt( fragmentAutoSlide, 10 );
			}
			else if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media. Not applicable if the slide
			// is divided up into fragments.
			if( currentSlide.querySelectorAll( '.fragment' ).length === 0 ) {
				toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						if( autoSlide && el.duration * 1000 > autoSlide ) {
							autoSlide = ( el.duration * 1000 ) + 1000;
						}
					}
				} );
			}

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || availableFragments().next || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		if( autoSlide && !autoSlidePaused ) {
			autoSlidePaused = true;
			dispatchEvent( 'autoslidepaused' );
			clearTimeout( autoSlideTimeout );

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( false );
			}
		}

	}

	function resumeAutoSlide() {

		if( autoSlide && autoSlidePaused ) {
			autoSlidePaused = false;
			dispatchEvent( 'autoslideresumed' );
			cueAutoSlide();
		}

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide;

				if( config.rtl ) {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.future' ) ).pop();
				}
				else {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.past' ) ).pop();
				}

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * The reverse of #navigatePrev().
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			if( availableRoutes().down ) {
				navigateDown();
			}
			else if( config.rtl ) {
				navigateLeft();
			}
			else {
				navigateRight();
			}
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keypress' event.
	 */
	function onDocumentKeyPress( event ) {

		// Check if the pressed key is question mark
		if( event.shiftKey && event.charCode === 63 ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				showHelp( true );
			}
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		// If there's a condition specified and it returns false,
		// ignore this event
		if( typeof config.keyboardCondition === 'function' && config.keyboardCondition() === false ) {
			return true;
		}

		// Remember if auto-sliding was paused so we can toggle it
		var autoSlideWasPaused = autoSlidePaused;

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElementIsCE = document.activeElement && document.activeElement.contentEditable !== 'inherit';
		var activeElementIsInput = document.activeElement && document.activeElement.tagName && /input|textarea/i.test( document.activeElement.tagName );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( activeElementIsCE || activeElementIsInput || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// two-spot, semicolon, b, period, Logitech presenter tools "black screen" button
				case 58: case 59: case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				// a
				case 65: if ( config.autoSlideStoppable ) toggleAutoSlide( autoSlideWasPaused ); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault && event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				toggleOverview();
			}

			event.preventDefault && event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		if( config.rtl ) {
			slideIndex = slidesTotal - slideIndex;
		}

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			// Not all elements support .blur() - SVGs among them.
			if( typeof document.activeElement.blur === 'function' ) {
				document.activeElement.blur();
			}
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		if( event.currentTarget && event.currentTarget.hasAttribute( 'href' ) ) {
			var url = event.currentTarget.getAttribute( 'href' );
			if( url ) {
				showPreview( url );
				event.preventDefault();
			}
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	Reveal = {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// Toggles the auto slide mode on/off
		toggleAutoSlide: toggleAutoSlide,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,
		isAutoSliding: isAutoSliding,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Facility for persisting and restoring the presentation state
		getState: getState,
		setState: setState,

		// Presentation progress on range of 0-1
		getProgress: getProgress,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		getTotalSlides: getTotalSlides,

		// Returns the slide element at the specified index
		getSlide: getSlide,

		// Returns the slide background element at the specified index
		getSlideBackground: getSlideBackground,

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = deserialize( unescape( value ) );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return ( indexh === 0 && indexv === 0 );
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		},

		// Programatically triggers a keyboard event
		triggerKey: function( keyCode ) {
			onDocumentKeyDown( { keyCode: keyCode } );
		}
	};

	return Reveal;

}));

},{}]},{},[1,2,3,4,5,6,7,8,9])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9leGFtcGxlLWNvZGUuanMiLCJqcy9pbml0LmpzIiwianMvbGV0LWNvbnN0LTIuanMiLCJqcy9sZXQtY29uc3QtMy5qcyIsImpzL2xldC1jb25zdC00LmpzIiwianMvbGV0LWNvbnN0LTUuanMiLCJqcy9sZXQtY29uc3QtNi5qcyIsImpzL2xldC1jb25zdC03LmpzIiwianMvbGV0LWNvbnN0LmpzIiwibm9kZV9tb2R1bGVzL3JldmVhbC5qcy9qcy9yZXZlYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBnbG9iYWwgaGxqcyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3RlbXBvcmFsVW5kZWZpbmVkID0ge307XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBFeGFtcGxlQ29kZSA9IF90ZW1wb3JhbFVuZGVmaW5lZDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHZhbCwgbmFtZSwgdW5kZWYpIHsgaWYgKHZhbCA9PT0gdW5kZWYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkIC0gdGVtcG9yYWwgZGVhZCB6b25lJyk7IH0gcmV0dXJuIHRydWU7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfcmV2ZWFsSnNKc1JldmVhbEpzID0gcmVxdWlyZSgncmV2ZWFsLmpzL2pzL3JldmVhbC5qcycpO1xuXG52YXIgX3JldmVhbEpzSnNSZXZlYWxKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXZlYWxKc0pzUmV2ZWFsSnMpO1xuXG5FeGFtcGxlQ29kZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXhhbXBsZUNvZGUobm9kZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChFeGFtcGxlQ29kZSwgJ0V4YW1wbGVDb2RlJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBFeGFtcGxlQ29kZSk7XG5cbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChFeGFtcGxlQ29kZSwgJ0V4YW1wbGVDb2RlJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBFeGFtcGxlQ29kZSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU291cmNlKCkudGhlbih0aGlzLnJlbmRlclJ1bkJ1dHRvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyU291cmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclNvdXJjZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIGZldGNoKCdqcy8nICsgX3RoaXMubmFtZSArICcuZXM2LmpzJykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmlwcGVkU291cmNlID0gX3RlbXBvcmFsVW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJlRWwgPSBfdGVtcG9yYWxVbmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlRWwgPSBfdGVtcG9yYWxVbmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHN0cmlwcGVkU291cmNlID0gc291cmNlLnNwbGl0KCcvLyAtLVNOSVAtLVxcbicpWzBdLnJlcGxhY2UoJy8qIGVzbGludC1kaXNhYmxlICovXFxuJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBwcmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgICAgICAgICAgICAgICAgICBjb2RlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG4gICAgICAgICAgICAgICAgICAgIChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKGNvZGVFbCwgJ2NvZGVFbCcsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgY29kZUVsKS50ZXh0Q29udGVudCA9IF90ZW1wb3JhbEFzc2VydERlZmluZWQoc3RyaXBwZWRTb3VyY2UsICdzdHJpcHBlZFNvdXJjZScsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgc3RyaXBwZWRTb3VyY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm9kZS5hcHBlbmRDaGlsZChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHByZUVsLCAncHJlRWwnLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIHByZUVsKTtcbiAgICAgICAgICAgICAgICAgICAgKF90ZW1wb3JhbEFzc2VydERlZmluZWQocHJlRWwsICdwcmVFbCcsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgcHJlRWwpLmFwcGVuZENoaWxkKF90ZW1wb3JhbEFzc2VydERlZmluZWQoY29kZUVsLCAnY29kZUVsJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBjb2RlRWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChjb2RlRWwsICdjb2RlRWwnLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGNvZGVFbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJ1bkJ1dHRvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSdW5CdXR0b24oKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gX3RlbXBvcmFsVW5kZWZpbmVkO1xuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChidXR0b24sICdidXR0b24nLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGJ1dHRvbikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJ1bkV4YW1wbGVDb2RlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgKF90ZW1wb3JhbEFzc2VydERlZmluZWQoYnV0dG9uLCAnYnV0dG9uJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBidXR0b24pLnRleHRDb250ZW50ID0gJ1J1biBDb2RlJztcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKGJ1dHRvbiwgJ2J1dHRvbicsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgYnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncnVuRXhhbXBsZUNvZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcnVuRXhhbXBsZUNvZGUoKSB7XG4gICAgICAgICAgICBTeXN0ZW1bJ2ltcG9ydCddKCdqcy8nICsgdGhpcy5uYW1lICsgJy5qcycpLnRoZW4odGhpcy5yZW5kZXJSZXN1bHQuYmluZCh0aGlzLCBmYWxzZSksIHRoaXMucmVuZGVyUmVzdWx0LmJpbmQodGhpcywgdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJSZXN1bHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVzdWx0KGVycm9yZWQsIHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIGNvZGVFbCA9IF90ZW1wb3JhbFVuZGVmaW5lZDtcblxuICAgICAgICAgICAgY29kZUVsID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcbiAgICAgICAgICAgIChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKGNvZGVFbCwgJ2NvZGVFbCcsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgY29kZUVsKS50ZXh0Q29udGVudCA9IFtdLmNvbmNhdCgoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChjb2RlRWwsICdjb2RlRWwnLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGNvZGVFbCkudGV4dENvbnRlbnQsIGVycm9yZWQgPyByZXN1bHQgOiBPYmplY3Qua2V5cyhyZXN1bHQpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChrZXkgKyAnID0gJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdFtrZXldLCBudWxsLCAnICAgICcpKTtcbiAgICAgICAgICAgIH0sIFtdKSkuam9pbignXFxuJyk7XG5cbiAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChjb2RlRWwsICdjb2RlRWwnLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGNvZGVFbCk7XG4gICAgICAgICAgICAoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChjb2RlRWwsICdjb2RlRWwnLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGNvZGVFbCkuc2Nyb2xsVG9wID0gKF90ZW1wb3JhbEFzc2VydERlZmluZWQoY29kZUVsLCAnY29kZUVsJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBjb2RlRWwpLmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbmFtZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXhhbXBsZS1jb2RlJyk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlRXhhbXBsZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRXhhbXBsZXMoKSB7XG4gICAgICAgICAgICB2YXIgZXhhbXBsZU5vZGVzID0gX3RlbXBvcmFsVW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBleGFtcGxlTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1leGFtcGxlLWNvZGVdJyk7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSAoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChleGFtcGxlTm9kZXMsICdleGFtcGxlTm9kZXMnLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGV4YW1wbGVOb2RlcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGFtcGxlTm9kZSA9IF90ZW1wb3JhbFVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZXhhbXBsZU5vZGUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBuZXcgKF90ZW1wb3JhbEFzc2VydERlZmluZWQoRXhhbXBsZUNvZGUsICdFeGFtcGxlQ29kZScsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgRXhhbXBsZUNvZGUpKF90ZW1wb3JhbEFzc2VydERlZmluZWQoZXhhbXBsZU5vZGUsICdleGFtcGxlTm9kZScsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgZXhhbXBsZU5vZGUpLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvclsncmV0dXJuJ10oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChFeGFtcGxlQ29kZSwgJ0V4YW1wbGVDb2RlJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBFeGFtcGxlQ29kZTtcbn0pKCk7XG5cbl9yZXZlYWxKc0pzUmV2ZWFsSnMyWydkZWZhdWx0J10uYWRkRXZlbnRMaXN0ZW5lcigncmVhZHknLCAoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChFeGFtcGxlQ29kZSwgJ0V4YW1wbGVDb2RlJywgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBFeGFtcGxlQ29kZSkuY3JlYXRlRXhhbXBsZXMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhhbXBsZS1jb2RlLmpzLm1hcFxuIiwiLyogZ2xvYmFsIGhsanMgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmV2ZWFsSnNKc1JldmVhbEpzID0gcmVxdWlyZSgncmV2ZWFsLmpzL2pzL3JldmVhbC5qcycpO1xuXG52YXIgX3JldmVhbEpzSnNSZXZlYWxKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXZlYWxKc0pzUmV2ZWFsSnMpO1xuXG53aW5kb3cuUmV2ZWFsID0gX3JldmVhbEpzSnNSZXZlYWxKczJbJ2RlZmF1bHQnXTtcblxuX3JldmVhbEpzSnNSZXZlYWxKczJbJ2RlZmF1bHQnXS5pbml0aWFsaXplKHtcbiAgICBjb250cm9sczogdHJ1ZSxcbiAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICBoaXN0b3J5OiB0cnVlLFxuICAgIGNlbnRlcjogdHJ1ZSxcblxuICAgIHRyYW5zaXRpb246ICdzbGlkZScsIC8vIG5vbmUvZmFkZS9zbGlkZS9jb252ZXgvY29uY2F2ZS96b29tXG5cbiAgICAvLyBPcHRpb25hbCByZXZlYWwuanMgcGx1Z2luc1xuICAgIGRlcGVuZGVuY2llczogW3tcbiAgICAgICAgc3JjOiAnbGliL2pzL2NsYXNzTGlzdC5qcycsXG4gICAgICAgIGNvbmRpdGlvbjogZnVuY3Rpb24gY29uZGl0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3JjOiAncGx1Z2luL21hcmtkb3duL21hcmtlZC5qcycsXG4gICAgICAgIGNvbmRpdGlvbjogZnVuY3Rpb24gY29uZGl0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWFya2Rvd25dJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHNyYzogJ3BsdWdpbi9tYXJrZG93bi9tYXJrZG93bi5qcycsXG4gICAgICAgIGNvbmRpdGlvbjogZnVuY3Rpb24gY29uZGl0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWFya2Rvd25dJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHNyYzogJ3BsdWdpbi9oaWdobGlnaHQvaGlnaGxpZ2h0LmpzJyxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzcmM6ICdwbHVnaW4vem9vbS1qcy96b29tLmpzJyxcbiAgICAgICAgYXN5bmM6IHRydWVcbiAgICB9LCB7XG4gICAgICAgIHNyYzogJ3BsdWdpbi9ub3Rlcy9ub3Rlcy5qcycsXG4gICAgICAgIGFzeW5jOiB0cnVlXG4gICAgfV1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pdC5qcy5tYXBcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF90ZW1wb3JhbFVuZGVmaW5lZCA9IHt9O1xudmFyIHZhcjEgPSBfdGVtcG9yYWxVbmRlZmluZWQsXG4gICAgdmFyMiA9IF90ZW1wb3JhbFVuZGVmaW5lZDtcblxuZnVuY3Rpb24gX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZCh2YWwsIG5hbWUsIHVuZGVmKSB7IGlmICh2YWwgPT09IHVuZGVmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihuYW1lICsgXCIgaXMgbm90IGRlZmluZWQgLSB0ZW1wb3JhbCBkZWFkIHpvbmVcIik7IH0gcmV0dXJuIHRydWU7IH1cblxudmFyMSA9IHVuZGVmaW5lZDtcbnZhcjIgPSB1bmRlZmluZWQ7XG5mdW5jdGlvbiB2YXJFeGFtcGxlKCkge1xuICAgIHZhciBzb21lVmFyID0gX3RlbXBvcmFsVW5kZWZpbmVkO1xuXG4gICAgc29tZVZhciA9IDE7XG4gICAgZnVuY3Rpb24gaW5uZXIoKSB7XG4gICAgICAgIHZhciBzb21lVmFyID0gX3RlbXBvcmFsVW5kZWZpbmVkO1xuXG4gICAgICAgIF90ZW1wb3JhbEFzc2VydERlZmluZWQoX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChzb21lVmFyLCBcInNvbWVWYXJcIiwgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBzb21lVmFyLCBcInNvbWVWYXJcIiwgX3RlbXBvcmFsVW5kZWZpbmVkKTtcblxuICAgICAgICBzb21lVmFyID0gMjtcbiAgICAgICAgc29tZVZhciA9IDM7XG5cbiAgICAgICAgX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHZhcjIsIFwidmFyMlwiLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIHZhcjIsIFwidmFyMlwiLCBfdGVtcG9yYWxVbmRlZmluZWQpO1xuXG4gICAgICAgIHZhcjIgPSBfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHNvbWVWYXIsIFwic29tZVZhclwiLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIHNvbWVWYXI7XG4gICAgfVxuICAgIGlubmVyKCk7XG5cbiAgICBfdGVtcG9yYWxBc3NlcnREZWZpbmVkKF90ZW1wb3JhbEFzc2VydERlZmluZWQodmFyMSwgXCJ2YXIxXCIsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgdmFyMSwgXCJ2YXIxXCIsIF90ZW1wb3JhbFVuZGVmaW5lZCk7XG5cbiAgICB2YXIxID0gX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChzb21lVmFyLCBcInNvbWVWYXJcIiwgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiBzb21lVmFyO1xufVxudmFyRXhhbXBsZSgpO1xuLy8gLS1TTklQLS1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7IHZhcjE6IF90ZW1wb3JhbEFzc2VydERlZmluZWQodmFyMSwgXCJ2YXIxXCIsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgdmFyMSwgdmFyMjogX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZCh2YXIyLCBcInZhcjJcIiwgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiB2YXIyIH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGV0LWNvbnN0LTIuanMubWFwXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfdGVtcG9yYWxVbmRlZmluZWQgPSB7fTtcbnZhciB2YXIxID0gX3RlbXBvcmFsVW5kZWZpbmVkLFxuICAgIHZhcjIgPSBfdGVtcG9yYWxVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIF90ZW1wb3JhbEFzc2VydERlZmluZWQodmFsLCBuYW1lLCB1bmRlZikgeyBpZiAodmFsID09PSB1bmRlZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IobmFtZSArIFwiIGlzIG5vdCBkZWZpbmVkIC0gdGVtcG9yYWwgZGVhZCB6b25lXCIpOyB9IHJldHVybiB0cnVlOyB9XG5cbnZhcjEgPSB1bmRlZmluZWQ7XG52YXIyID0gdW5kZWZpbmVkO1xuaWYgKHRydWUpIHtcbiAgICB2YXIgX3NvbWVWYXIgPSBfdGVtcG9yYWxVbmRlZmluZWQ7XG4gICAgX3NvbWVWYXIgPSAxO1xuXG4gICAgX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHZhcjEsIFwidmFyMVwiLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIHZhcjEsIFwidmFyMVwiLCBfdGVtcG9yYWxVbmRlZmluZWQpO1xuXG4gICAgdmFyMSA9IF9zb21lVmFyO1xufVxuXG4vLyAtLVNOSVAtLVxuXG5fdGVtcG9yYWxBc3NlcnREZWZpbmVkKF90ZW1wb3JhbEFzc2VydERlZmluZWQodmFyMiwgXCJ2YXIyXCIsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgdmFyMiwgXCJ2YXIyXCIsIF90ZW1wb3JhbFVuZGVmaW5lZCk7XG5cbnZhcjIgPSBzb21lVmFyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7IHZhcjE6IF90ZW1wb3JhbEFzc2VydERlZmluZWQodmFyMSwgXCJ2YXIxXCIsIF90ZW1wb3JhbFVuZGVmaW5lZCkgJiYgdmFyMSwgdmFyMjogX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZCh2YXIyLCBcInZhcjJcIiwgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiB2YXIyIH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGV0LWNvbnN0LTMuanMubWFwXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX3RlbXBvcmFsVW5kZWZpbmVkID0ge307XG52YXIgdmFyMSA9IF90ZW1wb3JhbFVuZGVmaW5lZDtcbi8vIHZhcjEgPSAxO1xuXG4vLyBqcy9sZXQtY29uc3QtNC5lczYuanM6IExpbmUgMjogXCJ2YXIxXCIgaXMgcmVhZC1vbmx5XG4vLyAtLVNOSVAtLVxuXG5mdW5jdGlvbiBfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHZhbCwgbmFtZSwgdW5kZWYpIHsgaWYgKHZhbCA9PT0gdW5kZWYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG5hbWUgKyBcIiBpcyBub3QgZGVmaW5lZCAtIHRlbXBvcmFsIGRlYWQgem9uZVwiKTsgfSByZXR1cm4gdHJ1ZTsgfVxuXG52YXIxID0gMDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0geyB2YXIxOiBfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHZhcjEsIFwidmFyMVwiLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIHZhcjEgfTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sZXQtY29uc3QtNC5qcy5tYXBcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF90ZW1wb3JhbFVuZGVmaW5lZCA9IHt9O1xudmFyIHZhcjEgPSBfdGVtcG9yYWxVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIF90ZW1wb3JhbEFzc2VydERlZmluZWQodmFsLCBuYW1lLCB1bmRlZikgeyBpZiAodmFsID09PSB1bmRlZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IobmFtZSArIFwiIGlzIG5vdCBkZWZpbmVkIC0gdGVtcG9yYWwgZGVhZCB6b25lXCIpOyB9IHJldHVybiB0cnVlOyB9XG5cbnZhcjEgPSB7XG4gICAgZm9vOiAxLFxuICAgIGJhcjogMlxufTtcbihfdGVtcG9yYWxBc3NlcnREZWZpbmVkKHZhcjEsIFwidmFyMVwiLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIHZhcjEpLmZvbyA9IDM7XG4vLyAtLVNOSVAtLVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHsgdmFyMTogX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZCh2YXIxLCBcInZhcjFcIiwgX3RlbXBvcmFsVW5kZWZpbmVkKSAmJiB2YXIxIH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGV0LWNvbnN0LTUuanMubWFwXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBsb29wZWRGdW5jcyA9IFtdO1xudmFyIHZhbHVlcyA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxvb3BlZEZ1bmNzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YWx1ZXMucHVzaChpKTtcbiAgICB9KTtcbn1cblxubG9vcGVkRnVuY3MuZm9yRWFjaChmdW5jdGlvbiAoZnVuYykge1xuICAgIGZ1bmMoKTtcbn0pO1xuLy8gLS1TTklQLS1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7IHZhbHVlczogdmFsdWVzIH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGV0LWNvbnN0LTYuanMubWFwXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfdGVtcG9yYWxVbmRlZmluZWQgPSB7fTtcblxuZnVuY3Rpb24gX3RlbXBvcmFsQXNzZXJ0RGVmaW5lZCh2YWwsIG5hbWUsIHVuZGVmKSB7IGlmICh2YWwgPT09IHVuZGVmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihuYW1lICsgXCIgaXMgbm90IGRlZmluZWQgLSB0ZW1wb3JhbCBkZWFkIHpvbmVcIik7IH0gcmV0dXJuIHRydWU7IH1cblxudmFyIGxvb3BlZEZ1bmNzID0gW107XG52YXIgdmFsdWVzID0gW107XG5cbnZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgbG9vcGVkRnVuY3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGkpO1xuICAgIH0pO1xufTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBfbG9vcChfdGVtcG9yYWxBc3NlcnREZWZpbmVkKGksIFwiaVwiLCBfdGVtcG9yYWxVbmRlZmluZWQpICYmIGkpO1xufVxuXG5sb29wZWRGdW5jcy5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgZnVuYygpO1xufSk7XG4vLyAtLVNOSVAtLVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHsgdmFsdWVzOiB2YWx1ZXMgfTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sZXQtY29uc3QtNy5qcy5tYXBcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHZhcjEsIHZhcjI7XG5cbmZ1bmN0aW9uIHZhckV4YW1wbGUoKSB7XG4gICAgdmFyIHNvbWVWYXIgPSAxO1xuXG4gICAgZnVuY3Rpb24gaW5uZXIoKSB7XG4gICAgICAgIHNvbWVWYXIgPSAyO1xuICAgICAgICB2YXIgc29tZVZhciA9IDM7XG4gICAgICAgIHZhcjIgPSBzb21lVmFyO1xuICAgIH1cbiAgICBpbm5lcigpO1xuXG4gICAgdmFyMSA9IHNvbWVWYXI7XG59XG52YXJFeGFtcGxlKCk7XG4vLyAtLVNOSVAtLVxuXG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0geyB2YXIxOiB2YXIxLCB2YXIyOiB2YXIyIH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGV0LWNvbnN0LmpzLm1hcFxuIiwiLyohXG4gKiByZXZlYWwuanNcbiAqIGh0dHA6Ly9sYWIuaGFraW0uc2UvcmV2ZWFsLWpzXG4gKiBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgSGFraW0gRWwgSGF0dGFiLCBodHRwOi8vaGFraW0uc2VcbiAqL1xuKGZ1bmN0aW9uKCByb290LCBmYWN0b3J5ICkge1xuXHRpZiggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0cm9vdC5SZXZlYWwgPSBmYWN0b3J5KCk7XG5cdFx0XHRyZXR1cm4gcm9vdC5SZXZlYWw7XG5cdFx0fSApO1xuXHR9IGVsc2UgaWYoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcblx0XHQvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJyb3dzZXIgZ2xvYmFscy5cblx0XHRyb290LlJldmVhbCA9IGZhY3RvcnkoKTtcblx0fVxufSggdGhpcywgZnVuY3Rpb24oKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBSZXZlYWw7XG5cblx0dmFyIFNMSURFU19TRUxFQ1RPUiA9ICcuc2xpZGVzIHNlY3Rpb24nLFxuXHRcdEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SID0gJy5zbGlkZXM+c2VjdGlvbicsXG5cdFx0VkVSVElDQUxfU0xJREVTX1NFTEVDVE9SID0gJy5zbGlkZXM+c2VjdGlvbi5wcmVzZW50PnNlY3Rpb24nLFxuXHRcdEhPTUVfU0xJREVfU0VMRUNUT1IgPSAnLnNsaWRlcz5zZWN0aW9uOmZpcnN0LW9mLXR5cGUnLFxuXG5cdFx0Ly8gQ29uZmlndXJhdGlvbiBkZWZhdWx0cywgY2FuIGJlIG92ZXJyaWRkZW4gYXQgaW5pdGlhbGl6YXRpb24gdGltZVxuXHRcdGNvbmZpZyA9IHtcblxuXHRcdFx0Ly8gVGhlIFwibm9ybWFsXCIgc2l6ZSBvZiB0aGUgcHJlc2VudGF0aW9uLCBhc3BlY3QgcmF0aW8gd2lsbCBiZSBwcmVzZXJ2ZWRcblx0XHRcdC8vIHdoZW4gdGhlIHByZXNlbnRhdGlvbiBpcyBzY2FsZWQgdG8gZml0IGRpZmZlcmVudCByZXNvbHV0aW9uc1xuXHRcdFx0d2lkdGg6IDk2MCxcblx0XHRcdGhlaWdodDogNzAwLFxuXG5cdFx0XHQvLyBGYWN0b3Igb2YgdGhlIGRpc3BsYXkgc2l6ZSB0aGF0IHNob3VsZCByZW1haW4gZW1wdHkgYXJvdW5kIHRoZSBjb250ZW50XG5cdFx0XHRtYXJnaW46IDAuMSxcblxuXHRcdFx0Ly8gQm91bmRzIGZvciBzbWFsbGVzdC9sYXJnZXN0IHBvc3NpYmxlIHNjYWxlIHRvIGFwcGx5IHRvIGNvbnRlbnRcblx0XHRcdG1pblNjYWxlOiAwLjIsXG5cdFx0XHRtYXhTY2FsZTogMS41LFxuXG5cdFx0XHQvLyBEaXNwbGF5IGNvbnRyb2xzIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyXG5cdFx0XHRjb250cm9sczogdHJ1ZSxcblxuXHRcdFx0Ly8gRGlzcGxheSBhIHByZXNlbnRhdGlvbiBwcm9ncmVzcyBiYXJcblx0XHRcdHByb2dyZXNzOiB0cnVlLFxuXG5cdFx0XHQvLyBEaXNwbGF5IHRoZSBwYWdlIG51bWJlciBvZiB0aGUgY3VycmVudCBzbGlkZVxuXHRcdFx0c2xpZGVOdW1iZXI6IGZhbHNlLFxuXG5cdFx0XHQvLyBQdXNoIGVhY2ggc2xpZGUgY2hhbmdlIHRvIHRoZSBicm93c2VyIGhpc3Rvcnlcblx0XHRcdGhpc3Rvcnk6IGZhbHNlLFxuXG5cdFx0XHQvLyBFbmFibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGZvciBuYXZpZ2F0aW9uXG5cdFx0XHRrZXlib2FyZDogdHJ1ZSxcblxuXHRcdFx0Ly8gT3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBibG9ja3Mga2V5Ym9hcmQgZXZlbnRzIHdoZW4gcmV0dW5pbmcgZmFsc2Vcblx0XHRcdGtleWJvYXJkQ29uZGl0aW9uOiBudWxsLFxuXG5cdFx0XHQvLyBFbmFibGUgdGhlIHNsaWRlIG92ZXJ2aWV3IG1vZGVcblx0XHRcdG92ZXJ2aWV3OiB0cnVlLFxuXG5cdFx0XHQvLyBWZXJ0aWNhbCBjZW50ZXJpbmcgb2Ygc2xpZGVzXG5cdFx0XHRjZW50ZXI6IHRydWUsXG5cblx0XHRcdC8vIEVuYWJsZXMgdG91Y2ggbmF2aWdhdGlvbiBvbiBkZXZpY2VzIHdpdGggdG91Y2ggaW5wdXRcblx0XHRcdHRvdWNoOiB0cnVlLFxuXG5cdFx0XHQvLyBMb29wIHRoZSBwcmVzZW50YXRpb25cblx0XHRcdGxvb3A6IGZhbHNlLFxuXG5cdFx0XHQvLyBDaGFuZ2UgdGhlIHByZXNlbnRhdGlvbiBkaXJlY3Rpb24gdG8gYmUgUlRMXG5cdFx0XHRydGw6IGZhbHNlLFxuXG5cdFx0XHQvLyBUdXJucyBmcmFnbWVudHMgb24gYW5kIG9mZiBnbG9iYWxseVxuXHRcdFx0ZnJhZ21lbnRzOiB0cnVlLFxuXG5cdFx0XHQvLyBGbGFncyBpZiB0aGUgcHJlc2VudGF0aW9uIGlzIHJ1bm5pbmcgaW4gYW4gZW1iZWRkZWQgbW9kZSxcblx0XHRcdC8vIGkuZS4gY29udGFpbmVkIHdpdGhpbiBhIGxpbWl0ZWQgcG9ydGlvbiBvZiB0aGUgc2NyZWVuXG5cdFx0XHRlbWJlZGRlZDogZmFsc2UsXG5cblx0XHRcdC8vIEZsYWdzIGlmIHdlIHNob3VsZCBzaG93IGEgaGVscCBvdmVybGF5IHdoZW4gdGhlIHF1ZXN0aW9ubWFya1xuXHRcdFx0Ly8ga2V5IGlzIHByZXNzZWRcblx0XHRcdGhlbHA6IHRydWUsXG5cblx0XHRcdC8vIEZsYWdzIGlmIGl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBwYXVzZSB0aGUgcHJlc2VudGF0aW9uIChibGFja291dClcblx0XHRcdHBhdXNlOiB0cnVlLFxuXG5cdFx0XHQvLyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gYXV0b21hdGljYWxseSBwcm9jZWVkaW5nIHRvIHRoZVxuXHRcdFx0Ly8gbmV4dCBzbGlkZSwgZGlzYWJsZWQgd2hlbiBzZXQgdG8gMCwgdGhpcyB2YWx1ZSBjYW4gYmUgb3ZlcndyaXR0ZW5cblx0XHRcdC8vIGJ5IHVzaW5nIGEgZGF0YS1hdXRvc2xpZGUgYXR0cmlidXRlIG9uIHlvdXIgc2xpZGVzXG5cdFx0XHRhdXRvU2xpZGU6IDAsXG5cblx0XHRcdC8vIFN0b3AgYXV0by1zbGlkaW5nIGFmdGVyIHVzZXIgaW5wdXRcblx0XHRcdGF1dG9TbGlkZVN0b3BwYWJsZTogdHJ1ZSxcblxuXHRcdFx0Ly8gRW5hYmxlIHNsaWRlIG5hdmlnYXRpb24gdmlhIG1vdXNlIHdoZWVsXG5cdFx0XHRtb3VzZVdoZWVsOiBmYWxzZSxcblxuXHRcdFx0Ly8gQXBwbHkgYSAzRCByb2xsIHRvIGxpbmtzIG9uIGhvdmVyXG5cdFx0XHRyb2xsaW5nTGlua3M6IGZhbHNlLFxuXG5cdFx0XHQvLyBIaWRlcyB0aGUgYWRkcmVzcyBiYXIgb24gbW9iaWxlIGRldmljZXNcblx0XHRcdGhpZGVBZGRyZXNzQmFyOiB0cnVlLFxuXG5cdFx0XHQvLyBPcGVucyBsaW5rcyBpbiBhbiBpZnJhbWUgcHJldmlldyBvdmVybGF5XG5cdFx0XHRwcmV2aWV3TGlua3M6IGZhbHNlLFxuXG5cdFx0XHQvLyBFeHBvc2VzIHRoZSByZXZlYWwuanMgQVBJIHRocm91Z2ggd2luZG93LnBvc3RNZXNzYWdlXG5cdFx0XHRwb3N0TWVzc2FnZTogdHJ1ZSxcblxuXHRcdFx0Ly8gRGlzcGF0Y2hlcyBhbGwgcmV2ZWFsLmpzIGV2ZW50cyB0byB0aGUgcGFyZW50IHdpbmRvdyB0aHJvdWdoIHBvc3RNZXNzYWdlXG5cdFx0XHRwb3N0TWVzc2FnZUV2ZW50czogZmFsc2UsXG5cblx0XHRcdC8vIEZvY3VzZXMgYm9keSB3aGVuIHBhZ2UgY2hhbmdlcyB2aXNpYmxpdHkgdG8gZW5zdXJlIGtleWJvYXJkIHNob3J0Y3V0cyB3b3JrXG5cdFx0XHRmb2N1c0JvZHlPblBhZ2VWaXNpYmlsaXR5Q2hhbmdlOiB0cnVlLFxuXG5cdFx0XHQvLyBUcmFuc2l0aW9uIHN0eWxlXG5cdFx0XHR0cmFuc2l0aW9uOiAnc2xpZGUnLCAvLyBub25lL2ZhZGUvc2xpZGUvY29udmV4L2NvbmNhdmUvem9vbVxuXG5cdFx0XHQvLyBUcmFuc2l0aW9uIHNwZWVkXG5cdFx0XHR0cmFuc2l0aW9uU3BlZWQ6ICdkZWZhdWx0JywgLy8gZGVmYXVsdC9mYXN0L3Nsb3dcblxuXHRcdFx0Ly8gVHJhbnNpdGlvbiBzdHlsZSBmb3IgZnVsbCBwYWdlIHNsaWRlIGJhY2tncm91bmRzXG5cdFx0XHRiYWNrZ3JvdW5kVHJhbnNpdGlvbjogJ2ZhZGUnLCAvLyBub25lL2ZhZGUvc2xpZGUvY29udmV4L2NvbmNhdmUvem9vbVxuXG5cdFx0XHQvLyBQYXJhbGxheCBiYWNrZ3JvdW5kIGltYWdlXG5cdFx0XHRwYXJhbGxheEJhY2tncm91bmRJbWFnZTogJycsIC8vIENTUyBzeW50YXgsIGUuZy4gXCJhLmpwZ1wiXG5cblx0XHRcdC8vIFBhcmFsbGF4IGJhY2tncm91bmQgc2l6ZVxuXHRcdFx0cGFyYWxsYXhCYWNrZ3JvdW5kU2l6ZTogJycsIC8vIENTUyBzeW50YXgsIGUuZy4gXCIzMDAwcHggMjAwMHB4XCJcblxuXHRcdFx0Ly8gQW1vdW50IG9mIHBpeGVscyB0byBtb3ZlIHRoZSBwYXJhbGxheCBiYWNrZ3JvdW5kIHBlciBzbGlkZSBzdGVwXG5cdFx0XHRwYXJhbGxheEJhY2tncm91bmRIb3Jpem9udGFsOiBudWxsLFxuXHRcdFx0cGFyYWxsYXhCYWNrZ3JvdW5kVmVydGljYWw6IG51bGwsXG5cblx0XHRcdC8vIE51bWJlciBvZiBzbGlkZXMgYXdheSBmcm9tIHRoZSBjdXJyZW50IHRoYXQgYXJlIHZpc2libGVcblx0XHRcdHZpZXdEaXN0YW5jZTogMyxcblxuXHRcdFx0Ly8gU2NyaXB0IGRlcGVuZGVuY2llcyB0byBsb2FkXG5cdFx0XHRkZXBlbmRlbmNpZXM6IFtdXG5cblx0XHR9LFxuXG5cdFx0Ly8gRmxhZ3MgaWYgcmV2ZWFsLmpzIGlzIGxvYWRlZCAoaGFzIGRpc3BhdGNoZWQgdGhlICdyZWFkeScgZXZlbnQpXG5cdFx0bG9hZGVkID0gZmFsc2UsXG5cblx0XHQvLyBGbGFncyBpZiB0aGUgb3ZlcnZpZXcgbW9kZSBpcyBjdXJyZW50bHkgYWN0aXZlXG5cdFx0b3ZlcnZpZXcgPSBmYWxzZSxcblxuXHRcdC8vIFRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBpbmRleCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBzbGlkZVxuXHRcdGluZGV4aCxcblx0XHRpbmRleHYsXG5cblx0XHQvLyBUaGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgc2xpZGUgSFRNTCBlbGVtZW50c1xuXHRcdHByZXZpb3VzU2xpZGUsXG5cdFx0Y3VycmVudFNsaWRlLFxuXG5cdFx0cHJldmlvdXNCYWNrZ3JvdW5kLFxuXG5cdFx0Ly8gU2xpZGVzIG1heSBob2xkIGEgZGF0YS1zdGF0ZSBhdHRyaWJ1dGUgd2hpY2ggd2UgcGljayB1cCBhbmQgYXBwbHlcblx0XHQvLyBhcyBhIGNsYXNzIHRvIHRoZSBib2R5LiBUaGlzIGxpc3QgY29udGFpbnMgdGhlIGNvbWJpbmVkIHN0YXRlIG9mXG5cdFx0Ly8gYWxsIGN1cnJlbnQgc2xpZGVzLlxuXHRcdHN0YXRlID0gW10sXG5cblx0XHQvLyBUaGUgY3VycmVudCBzY2FsZSBvZiB0aGUgcHJlc2VudGF0aW9uIChzZWUgd2lkdGgvaGVpZ2h0IGNvbmZpZylcblx0XHRzY2FsZSA9IDEsXG5cblx0XHQvLyBDU1MgdHJhbnNmb3JtIHRoYXQgaXMgY3VycmVudGx5IGFwcGxpZWQgdG8gdGhlIHNsaWRlcyBjb250YWluZXIsXG5cdFx0Ly8gc3BsaXQgaW50byB0d28gZ3JvdXBzXG5cdFx0c2xpZGVzVHJhbnNmb3JtID0geyBsYXlvdXQ6ICcnLCBvdmVydmlldzogJycgfSxcblxuXHRcdC8vIENhY2hlZCByZWZlcmVuY2VzIHRvIERPTSBlbGVtZW50c1xuXHRcdGRvbSA9IHt9LFxuXG5cdFx0Ly8gRmVhdHVyZXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLCBzZWUgI2NoZWNrQ2FwYWJpbGl0aWVzKClcblx0XHRmZWF0dXJlcyA9IHt9LFxuXG5cdFx0Ly8gQ2xpZW50IGlzIGEgbW9iaWxlIGRldmljZSwgc2VlICNjaGVja0NhcGFiaWxpdGllcygpXG5cdFx0aXNNb2JpbGVEZXZpY2UsXG5cblx0XHQvLyBUaHJvdHRsZXMgbW91c2Ugd2hlZWwgbmF2aWdhdGlvblxuXHRcdGxhc3RNb3VzZVdoZWVsU3RlcCA9IDAsXG5cblx0XHQvLyBEZWxheXMgdXBkYXRlcyB0byB0aGUgVVJMIGR1ZSB0byBhIENocm9tZSB0aHVtYm5haWxlciBidWdcblx0XHR3cml0ZVVSTFRpbWVvdXQgPSAwLFxuXG5cdFx0Ly8gRmxhZ3MgaWYgdGhlIGludGVyYWN0aW9uIGV2ZW50IGxpc3RlbmVycyBhcmUgYm91bmRcblx0XHRldmVudHNBcmVCb3VuZCA9IGZhbHNlLFxuXG5cdFx0Ly8gVGhlIGN1cnJlbnQgYXV0by1zbGlkZSBkdXJhdGlvblxuXHRcdGF1dG9TbGlkZSA9IDAsXG5cblx0XHQvLyBBdXRvIHNsaWRlIHByb3BlcnRpZXNcblx0XHRhdXRvU2xpZGVQbGF5ZXIsXG5cdFx0YXV0b1NsaWRlVGltZW91dCA9IDAsXG5cdFx0YXV0b1NsaWRlU3RhcnRUaW1lID0gLTEsXG5cdFx0YXV0b1NsaWRlUGF1c2VkID0gZmFsc2UsXG5cblx0XHQvLyBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudGx5IG9uZ29pbmcgdG91Y2ggaW5wdXRcblx0XHR0b3VjaCA9IHtcblx0XHRcdHN0YXJ0WDogMCxcblx0XHRcdHN0YXJ0WTogMCxcblx0XHRcdHN0YXJ0U3BhbjogMCxcblx0XHRcdHN0YXJ0Q291bnQ6IDAsXG5cdFx0XHRjYXB0dXJlZDogZmFsc2UsXG5cdFx0XHR0aHJlc2hvbGQ6IDQwXG5cdFx0fSxcblxuXHRcdC8vIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBrZXlib2FyZCBzaG9ydGN1dHNcblx0XHRrZXlib2FyZFNob3J0Y3V0cyA9IHtcblx0XHRcdCdOICAsICBTUEFDRSc6XHRcdFx0J05leHQgc2xpZGUnLFxuXHRcdFx0J1AnOlx0XHRcdFx0XHQnUHJldmlvdXMgc2xpZGUnLFxuXHRcdFx0JyYjODU5MjsgICwgIEgnOlx0XHQnTmF2aWdhdGUgbGVmdCcsXG5cdFx0XHQnJiM4NTk0OyAgLCAgTCc6XHRcdCdOYXZpZ2F0ZSByaWdodCcsXG5cdFx0XHQnJiM4NTkzOyAgLCAgSyc6XHRcdCdOYXZpZ2F0ZSB1cCcsXG5cdFx0XHQnJiM4NTk1OyAgLCAgSic6XHRcdCdOYXZpZ2F0ZSBkb3duJyxcblx0XHRcdCdIb21lJzpcdFx0XHRcdFx0J0ZpcnN0IHNsaWRlJyxcblx0XHRcdCdFbmQnOlx0XHRcdFx0XHQnTGFzdCBzbGlkZScsXG5cdFx0XHQnQiAgLCAgLic6XHRcdFx0XHQnUGF1c2UnLFxuXHRcdFx0J0YnOlx0XHRcdFx0XHQnRnVsbHNjcmVlbicsXG5cdFx0XHQnRVNDLCBPJzpcdFx0XHRcdCdTbGlkZSBvdmVydmlldydcblx0XHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdXAgdGhlIHByZXNlbnRhdGlvbiBpZiB0aGUgY2xpZW50IGlzIGNhcGFibGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0aWFsaXplKCBvcHRpb25zICkge1xuXG5cdFx0Y2hlY2tDYXBhYmlsaXRpZXMoKTtcblxuXHRcdGlmKCAhZmVhdHVyZXMudHJhbnNmb3JtczJkICYmICFmZWF0dXJlcy50cmFuc2Zvcm1zM2QgKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ25vLXRyYW5zZm9ybXMnICk7XG5cblx0XHRcdC8vIFNpbmNlIEpTIHdvbid0IGJlIHJ1bm5pbmcgYW55IGZ1cnRoZXIsIHdlIGxvYWQgYWxsIGxhenlcblx0XHRcdC8vIGxvYWRpbmcgZWxlbWVudHMgdXBmcm9udFxuXHRcdFx0dmFyIGltYWdlcyA9IHRvQXJyYXkoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaW1nJyApICksXG5cdFx0XHRcdGlmcmFtZXMgPSB0b0FycmF5KCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2lmcmFtZScgKSApO1xuXG5cdFx0XHR2YXIgbGF6eUxvYWRhYmxlID0gaW1hZ2VzLmNvbmNhdCggaWZyYW1lcyApO1xuXG5cdFx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGF6eUxvYWRhYmxlLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IGxhenlMb2FkYWJsZVtpXTtcblx0XHRcdFx0aWYoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICk7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLXNyYycgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY29yZSBmZWF0dXJlcyB3ZSB3b24ndCBiZVxuXHRcdFx0Ly8gdXNpbmcgSmF2YVNjcmlwdCB0byBjb250cm9sIHRoZSBwcmVzZW50YXRpb25cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDYWNoZSByZWZlcmVuY2VzIHRvIGtleSBET00gZWxlbWVudHNcblx0XHRkb20ud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmV2ZWFsJyApO1xuXHRcdGRvbS5zbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJldmVhbCAuc2xpZGVzJyApO1xuXG5cdFx0Ly8gRm9yY2UgYSBsYXlvdXQgd2hlbiB0aGUgd2hvbGUgcGFnZSwgaW5jbCBmb250cywgaGFzIGxvYWRlZFxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGxheW91dCwgZmFsc2UgKTtcblxuXHRcdHZhciBxdWVyeSA9IFJldmVhbC5nZXRRdWVyeUhhc2goKTtcblxuXHRcdC8vIERvIG5vdCBhY2NlcHQgbmV3IGRlcGVuZGVuY2llcyB2aWEgcXVlcnkgY29uZmlnIHRvIGF2b2lkXG5cdFx0Ly8gdGhlIHBvdGVudGlhbCBvZiBtYWxpY2lvdXMgc2NyaXB0IGluamVjdGlvblxuXHRcdGlmKCB0eXBlb2YgcXVlcnlbJ2RlcGVuZGVuY2llcyddICE9PSAndW5kZWZpbmVkJyApIGRlbGV0ZSBxdWVyeVsnZGVwZW5kZW5jaWVzJ107XG5cblx0XHQvLyBDb3B5IG9wdGlvbnMgb3ZlciB0byBvdXIgY29uZmlnIG9iamVjdFxuXHRcdGV4dGVuZCggY29uZmlnLCBvcHRpb25zICk7XG5cdFx0ZXh0ZW5kKCBjb25maWcsIHF1ZXJ5ICk7XG5cblx0XHQvLyBIaWRlIHRoZSBhZGRyZXNzIGJhciBpbiBtb2JpbGUgYnJvd3NlcnNcblx0XHRoaWRlQWRkcmVzc0JhcigpO1xuXG5cdFx0Ly8gTG9hZHMgdGhlIGRlcGVuZGVuY2llcyBhbmQgY29udGludWVzIHRvICNzdGFydCgpIG9uY2UgZG9uZVxuXHRcdGxvYWQoKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEluc3BlY3QgdGhlIGNsaWVudCB0byBzZWUgd2hhdCBpdCdzIGNhcGFibGUgb2YsIHRoaXNcblx0ICogc2hvdWxkIG9ubHkgaGFwcGVucyBvbmNlIHBlciBydW50aW1lLlxuXHQgKi9cblx0ZnVuY3Rpb24gY2hlY2tDYXBhYmlsaXRpZXMoKSB7XG5cblx0XHRmZWF0dXJlcy50cmFuc2Zvcm1zM2QgPSAnV2Via2l0UGVyc3BlY3RpdmUnIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQnTW96UGVyc3BlY3RpdmUnIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQnbXNQZXJzcGVjdGl2ZScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdPUGVyc3BlY3RpdmUnIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQncGVyc3BlY3RpdmUnIGluIGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cblx0XHRmZWF0dXJlcy50cmFuc2Zvcm1zMmQgPSAnV2Via2l0VHJhbnNmb3JtJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J01velRyYW5zZm9ybScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdtc1RyYW5zZm9ybScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdPVHJhbnNmb3JtJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J3RyYW5zZm9ybScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuXHRcdGZlYXR1cmVzLnJlcXVlc3RBbmltYXRpb25GcmFtZU1ldGhvZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdGZlYXR1cmVzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHR5cGVvZiBmZWF0dXJlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVNZXRob2QgPT09ICdmdW5jdGlvbic7XG5cblx0XHRmZWF0dXJlcy5jYW52YXMgPSAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICkuZ2V0Q29udGV4dDtcblxuXHRcdGZlYXR1cmVzLnRvdWNoID0gISEoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApO1xuXG5cdFx0Ly8gVHJhbnNpdGlvbnMgaW4gdGhlIG92ZXJ2aWV3IGFyZSBkaXNhYmxlZCBpbiBkZXNrdG9wIGFuZFxuXHRcdC8vIG1vYmlsZSBTYWZhcmkgZHVlIHRvIGxhZ1xuXHRcdGZlYXR1cmVzLm92ZXJ2aWV3VHJhbnNpdGlvbnMgPSAhL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApO1xuXG5cdFx0aXNNb2JpbGVEZXZpY2UgPSAvKGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZCkvZ2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApO1xuXG5cdH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBkZXBlbmRlbmNpZXMgb2YgcmV2ZWFsLmpzLiBEZXBlbmRlbmNpZXMgYXJlXG4gICAgICogZGVmaW5lZCB2aWEgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9uICdkZXBlbmRlbmNpZXMnXG4gICAgICogYW5kIHdpbGwgYmUgbG9hZGVkIHByaW9yIHRvIHN0YXJ0aW5nL2JpbmRpbmcgcmV2ZWFsLmpzLlxuICAgICAqIFNvbWUgZGVwZW5kZW5jaWVzIG1heSBoYXZlIGFuICdhc3luYycgZmxhZywgaWYgc28gdGhleVxuICAgICAqIHdpbGwgbG9hZCBhZnRlciByZXZlYWwuanMgaGFzIGJlZW4gc3RhcnRlZCB1cC5cbiAgICAgKi9cblx0ZnVuY3Rpb24gbG9hZCgpIHtcblxuXHRcdHZhciBzY3JpcHRzID0gW10sXG5cdFx0XHRzY3JpcHRzQXN5bmMgPSBbXSxcblx0XHRcdHNjcmlwdHNUb1ByZWxvYWQgPSAwO1xuXG5cdFx0Ly8gQ2FsbGVkIG9uY2Ugc3luY2hyb25vdXMgc2NyaXB0cyBmaW5pc2ggbG9hZGluZ1xuXHRcdGZ1bmN0aW9uIHByb2NlZWQoKSB7XG5cdFx0XHRpZiggc2NyaXB0c0FzeW5jLmxlbmd0aCApIHtcblx0XHRcdFx0Ly8gTG9hZCBhc3luY2hyb25vdXMgc2NyaXB0c1xuXHRcdFx0XHRoZWFkLmpzLmFwcGx5KCBudWxsLCBzY3JpcHRzQXN5bmMgKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhcnQoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBsb2FkU2NyaXB0KCBzICkge1xuXHRcdFx0aGVhZC5yZWFkeSggcy5zcmMubWF0Y2goIC8oW1xcd1xcZF9cXC1dKilcXC4/anMkfFteXFxcXFxcL10qJC9pIClbMF0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBFeHRlbnNpb24gbWF5IGNvbnRhaW4gY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0XHRcdGlmKCB0eXBlb2Ygcy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRzLmNhbGxiYWNrLmFwcGx5KCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggLS1zY3JpcHRzVG9QcmVsb2FkID09PSAwICkge1xuXHRcdFx0XHRcdHByb2NlZWQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZy5kZXBlbmRlbmNpZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHR2YXIgcyA9IGNvbmZpZy5kZXBlbmRlbmNpZXNbaV07XG5cblx0XHRcdC8vIExvYWQgaWYgdGhlcmUncyBubyBjb25kaXRpb24gb3IgdGhlIGNvbmRpdGlvbiBpcyB0cnV0aHlcblx0XHRcdGlmKCAhcy5jb25kaXRpb24gfHwgcy5jb25kaXRpb24oKSApIHtcblx0XHRcdFx0aWYoIHMuYXN5bmMgKSB7XG5cdFx0XHRcdFx0c2NyaXB0c0FzeW5jLnB1c2goIHMuc3JjICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBzLnNyYyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9hZFNjcmlwdCggcyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRcdHNjcmlwdHNUb1ByZWxvYWQgPSBzY3JpcHRzLmxlbmd0aDtcblxuXHRcdFx0Ly8gTG9hZCBzeW5jaHJvbm91cyBzY3JpcHRzXG5cdFx0XHRoZWFkLmpzLmFwcGx5KCBudWxsLCBzY3JpcHRzICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHJvY2VlZCgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyB1cCByZXZlYWwuanMgYnkgYmluZGluZyBpbnB1dCBldmVudHMgYW5kIG5hdmlnYXRpbmdcblx0ICogdG8gdGhlIGN1cnJlbnQgVVJMIGRlZXBsaW5rIGlmIHRoZXJlIGlzIG9uZS5cblx0ICovXG5cdGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHdlJ3ZlIGdvdCBhbGwgdGhlIERPTSBlbGVtZW50cyB3ZSBuZWVkXG5cdFx0c2V0dXBET00oKTtcblxuXHRcdC8vIExpc3RlbiB0byBtZXNzYWdlcyBwb3N0ZWQgdG8gdGhpcyB3aW5kb3dcblx0XHRzZXR1cFBvc3RNZXNzYWdlKCk7XG5cblx0XHQvLyBQcmV2ZW50IGlmcmFtZXMgZnJvbSBzY3JvbGxpbmcgdGhlIHNsaWRlcyBvdXQgb2Ygdmlld1xuXHRcdHNldHVwSWZyYW1lU2Nyb2xsUHJldmVudGlvbigpO1xuXG5cdFx0Ly8gUmVzZXRzIGFsbCB2ZXJ0aWNhbCBzbGlkZXMgc28gdGhhdCBvbmx5IHRoZSBmaXJzdCBpcyB2aXNpYmxlXG5cdFx0cmVzZXRWZXJ0aWNhbFNsaWRlcygpO1xuXG5cdFx0Ly8gVXBkYXRlcyB0aGUgcHJlc2VudGF0aW9uIHRvIG1hdGNoIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gdmFsdWVzXG5cdFx0Y29uZmlndXJlKCk7XG5cblx0XHQvLyBSZWFkIHRoZSBpbml0aWFsIGhhc2hcblx0XHRyZWFkVVJMKCk7XG5cblx0XHQvLyBVcGRhdGUgYWxsIGJhY2tncm91bmRzXG5cdFx0dXBkYXRlQmFja2dyb3VuZCggdHJ1ZSApO1xuXG5cdFx0Ly8gTm90aWZ5IGxpc3RlbmVycyB0aGF0IHRoZSBwcmVzZW50YXRpb24gaXMgcmVhZHkgYnV0IHVzZSBhIDFtc1xuXHRcdC8vIHRpbWVvdXQgdG8gZW5zdXJlIGl0J3Mgbm90IGZpcmVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgI2luaXRpYWxpemUoKVxuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gRW5hYmxlIHRyYW5zaXRpb25zIG5vdyB0aGF0IHdlJ3JlIGxvYWRlZFxuXHRcdFx0ZG9tLnNsaWRlcy5jbGFzc0xpc3QucmVtb3ZlKCAnbm8tdHJhbnNpdGlvbicgKTtcblxuXHRcdFx0bG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ3JlYWR5Jywge1xuXHRcdFx0XHQnaW5kZXhoJzogaW5kZXhoLFxuXHRcdFx0XHQnaW5kZXh2JzogaW5kZXh2LFxuXHRcdFx0XHQnY3VycmVudFNsaWRlJzogY3VycmVudFNsaWRlXG5cdFx0XHR9ICk7XG5cdFx0fSwgMSApO1xuXG5cdFx0Ly8gU3BlY2lhbCBzZXR1cCBhbmQgY29uZmlnIGlzIHJlcXVpcmVkIHdoZW4gcHJpbnRpbmcgdG8gUERGXG5cdFx0aWYoIGlzUHJpbnRpbmdQREYoKSApIHtcblx0XHRcdHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cblx0XHRcdC8vIFRoZSBkb2N1bWVudCBuZWVkcyB0byBoYXZlIGxvYWRlZCBmb3IgdGhlIFBERiBsYXlvdXRcblx0XHRcdC8vIG1lYXN1cmVtZW50cyB0byBiZSBhY2N1cmF0ZVxuXHRcdFx0aWYoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgKSB7XG5cdFx0XHRcdHNldHVwUERGKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgc2V0dXBQREYgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kcyBhbmQgc3RvcmVzIHJlZmVyZW5jZXMgdG8gRE9NIGVsZW1lbnRzIHdoaWNoIGFyZVxuXHQgKiByZXF1aXJlZCBieSB0aGUgcHJlc2VudGF0aW9uLiBJZiBhIHJlcXVpcmVkIGVsZW1lbnQgaXNcblx0ICogbm90IGZvdW5kLCBpdCBpcyBjcmVhdGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0dXBET00oKSB7XG5cblx0XHQvLyBQcmV2ZW50IHRyYW5zaXRpb25zIHdoaWxlIHdlJ3JlIGxvYWRpbmdcblx0XHRkb20uc2xpZGVzLmNsYXNzTGlzdC5hZGQoICduby10cmFuc2l0aW9uJyApO1xuXG5cdFx0Ly8gQmFja2dyb3VuZCBlbGVtZW50XG5cdFx0ZG9tLmJhY2tncm91bmQgPSBjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2RpdicsICdiYWNrZ3JvdW5kcycsIG51bGwgKTtcblxuXHRcdC8vIFByb2dyZXNzIGJhclxuXHRcdGRvbS5wcm9ncmVzcyA9IGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnZGl2JywgJ3Byb2dyZXNzJywgJzxzcGFuPjwvc3Bhbj4nICk7XG5cdFx0ZG9tLnByb2dyZXNzYmFyID0gZG9tLnByb2dyZXNzLnF1ZXJ5U2VsZWN0b3IoICdzcGFuJyApO1xuXG5cdFx0Ly8gQXJyb3cgY29udHJvbHNcblx0XHRjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2FzaWRlJywgJ2NvbnRyb2xzJyxcblx0XHRcdCc8ZGl2IGNsYXNzPVwibmF2aWdhdGUtbGVmdFwiPjwvZGl2PicgK1xuXHRcdFx0JzxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1yaWdodFwiPjwvZGl2PicgK1xuXHRcdFx0JzxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS11cFwiPjwvZGl2PicgK1xuXHRcdFx0JzxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1kb3duXCI+PC9kaXY+JyApO1xuXG5cdFx0Ly8gU2xpZGUgbnVtYmVyXG5cdFx0ZG9tLnNsaWRlTnVtYmVyID0gY3JlYXRlU2luZ2xldG9uTm9kZSggZG9tLndyYXBwZXIsICdkaXYnLCAnc2xpZGUtbnVtYmVyJywgJycgKTtcblxuXHRcdC8vIE92ZXJsYXkgZ3JhcGhpYyB3aGljaCBpcyBkaXNwbGF5ZWQgZHVyaW5nIHRoZSBwYXVzZWQgbW9kZVxuXHRcdGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnZGl2JywgJ3BhdXNlLW92ZXJsYXknLCBudWxsICk7XG5cblx0XHQvLyBDYWNoZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzXG5cdFx0ZG9tLmNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwgLmNvbnRyb2xzJyApO1xuXHRcdGRvbS50aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjdGhlbWUnICk7XG5cblx0XHRkb20ud3JhcHBlci5zZXRBdHRyaWJ1dGUoICdyb2xlJywgJ2FwcGxpY2F0aW9uJyApO1xuXG5cdFx0Ly8gVGhlcmUgY2FuIGJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiBjb250cm9scyB0aHJvdWdob3V0IHRoZSBwYWdlXG5cdFx0ZG9tLmNvbnRyb2xzTGVmdCA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtbGVmdCcgKSApO1xuXHRcdGRvbS5jb250cm9sc1JpZ2h0ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1yaWdodCcgKSApO1xuXHRcdGRvbS5jb250cm9sc1VwID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS11cCcgKSApO1xuXHRcdGRvbS5jb250cm9sc0Rvd24gPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLWRvd24nICkgKTtcblx0XHRkb20uY29udHJvbHNQcmV2ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1wcmV2JyApICk7XG5cdFx0ZG9tLmNvbnRyb2xzTmV4dCA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtbmV4dCcgKSApO1xuXG5cdFx0ZG9tLnN0YXR1c0RpdiA9IGNyZWF0ZVN0YXR1c0RpdigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBoaWRkZW4gZGl2IHdpdGggcm9sZSBhcmlhLWxpdmUgdG8gYW5ub3VuY2UgdGhlXG5cdCAqIGN1cnJlbnQgc2xpZGUgY29udGVudC4gSGlkZSB0aGUgZGl2IG9mZi1zY3JlZW4gdG8gbWFrZSBpdFxuXHQgKiBhdmFpbGFibGUgb25seSB0byBBc3Npc3RpdmUgVGVjaG5vbG9naWVzLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlU3RhdHVzRGl2KCkge1xuXG5cdFx0dmFyIHN0YXR1c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYXJpYS1zdGF0dXMtZGl2JyApO1xuXHRcdGlmKCAhc3RhdHVzRGl2ICkge1xuXHRcdFx0c3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdHN0YXR1c0Rpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRzdGF0dXNEaXYuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG5cdFx0XHRzdGF0dXNEaXYuc3R5bGUud2lkdGggPSAnMXB4Jztcblx0XHRcdHN0YXR1c0Rpdi5zdHlsZS5vdmVyZmxvdyA9J2hpZGRlbic7XG5cdFx0XHRzdGF0dXNEaXYuc3R5bGUuY2xpcCA9ICdyZWN0KCAxcHgsIDFweCwgMXB4LCAxcHggKSc7XG5cdFx0XHRzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCAnaWQnLCAnYXJpYS1zdGF0dXMtZGl2JyApO1xuXHRcdFx0c3RhdHVzRGl2LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsICdwb2xpdGUnICk7XG5cdFx0XHRzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCAnYXJpYS1hdG9taWMnLCd0cnVlJyApO1xuXHRcdFx0ZG9tLndyYXBwZXIuYXBwZW5kQ2hpbGQoIHN0YXR1c0RpdiApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdHVzRGl2O1xuXG5cdH1cblxuXHQvKipcblx0ICogQ29uZmlndXJlcyB0aGUgcHJlc2VudGF0aW9uIGZvciBwcmludGluZyB0byBhIHN0YXRpY1xuXHQgKiBQREYuXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXR1cFBERigpIHtcblxuXHRcdHZhciBzbGlkZVNpemUgPSBnZXRDb21wdXRlZFNsaWRlU2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuXG5cdFx0Ly8gRGltZW5zaW9ucyBvZiB0aGUgUERGIHBhZ2VzXG5cdFx0dmFyIHBhZ2VXaWR0aCA9IE1hdGguZmxvb3IoIHNsaWRlU2l6ZS53aWR0aCAqICggMSArIGNvbmZpZy5tYXJnaW4gKSApLFxuXHRcdFx0cGFnZUhlaWdodCA9IE1hdGguZmxvb3IoIHNsaWRlU2l6ZS5oZWlnaHQgKiAoIDEgKyBjb25maWcubWFyZ2luICApICk7XG5cblx0XHQvLyBEaW1lbnNpb25zIG9mIHNsaWRlcyB3aXRoaW4gdGhlIHBhZ2VzXG5cdFx0dmFyIHNsaWRlV2lkdGggPSBzbGlkZVNpemUud2lkdGgsXG5cdFx0XHRzbGlkZUhlaWdodCA9IHNsaWRlU2l6ZS5oZWlnaHQ7XG5cblx0XHQvLyBMZXQgdGhlIGJyb3dzZXIga25vdyB3aGF0IHBhZ2Ugc2l6ZSB3ZSB3YW50IHRvIHByaW50XG5cdFx0aW5qZWN0U3R5bGVTaGVldCggJ0BwYWdle3NpemU6JysgcGFnZVdpZHRoICsncHggJysgcGFnZUhlaWdodCArJ3B4OyBtYXJnaW46IDA7fScgKTtcblxuXHRcdC8vIExpbWl0IHRoZSBzaXplIG9mIGNlcnRhaW4gZWxlbWVudHMgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHNsaWRlXG5cdFx0aW5qZWN0U3R5bGVTaGVldCggJy5yZXZlYWwgc2VjdGlvbj5pbWcsIC5yZXZlYWwgc2VjdGlvbj52aWRlbywgLnJldmVhbCBzZWN0aW9uPmlmcmFtZXttYXgtd2lkdGg6ICcrIHNsaWRlV2lkdGggKydweDsgbWF4LWhlaWdodDonKyBzbGlkZUhlaWdodCArJ3B4fScgKTtcblxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ3ByaW50LXBkZicgKTtcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gcGFnZVdpZHRoICsgJ3B4Jztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IHBhZ2VIZWlnaHQgKyAncHgnO1xuXG5cdFx0Ly8gU2xpZGUgYW5kIHNsaWRlIGJhY2tncm91bmQgbGF5b3V0XG5cdFx0dG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGUgKSB7XG5cblx0XHRcdC8vIFZlcnRpY2FsIHN0YWNrcyBhcmUgbm90IGNlbnRyZWQgc2luY2UgdGhlaXIgc2VjdGlvblxuXHRcdFx0Ly8gY2hpbGRyZW4gd2lsbCBiZVxuXHRcdFx0aWYoIHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApID09PSBmYWxzZSApIHtcblx0XHRcdFx0Ly8gQ2VudGVyIHRoZSBzbGlkZSBpbnNpZGUgb2YgdGhlIHBhZ2UsIGdpdmluZyB0aGUgc2xpZGUgc29tZSBtYXJnaW5cblx0XHRcdFx0dmFyIGxlZnQgPSAoIHBhZ2VXaWR0aCAtIHNsaWRlV2lkdGggKSAvIDIsXG5cdFx0XHRcdFx0dG9wID0gKCBwYWdlSGVpZ2h0IC0gc2xpZGVIZWlnaHQgKSAvIDI7XG5cblx0XHRcdFx0dmFyIGNvbnRlbnRIZWlnaHQgPSBnZXRBYnNvbHV0ZUhlaWdodCggc2xpZGUgKTtcblx0XHRcdFx0dmFyIG51bWJlck9mUGFnZXMgPSBNYXRoLm1heCggTWF0aC5jZWlsKCBjb250ZW50SGVpZ2h0IC8gcGFnZUhlaWdodCApLCAxICk7XG5cblx0XHRcdFx0Ly8gQ2VudGVyIHNsaWRlcyB2ZXJ0aWNhbGx5XG5cdFx0XHRcdGlmKCBudW1iZXJPZlBhZ2VzID09PSAxICYmIGNvbmZpZy5jZW50ZXIgfHwgc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2VudGVyJyApICkge1xuXHRcdFx0XHRcdHRvcCA9IE1hdGgubWF4KCAoIHBhZ2VIZWlnaHQgLSBjb250ZW50SGVpZ2h0ICkgLyAyLCAwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQb3NpdGlvbiB0aGUgc2xpZGUgaW5zaWRlIG9mIHRoZSBwYWdlXG5cdFx0XHRcdHNsaWRlLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4Jztcblx0XHRcdFx0c2xpZGUuc3R5bGUudG9wID0gdG9wICsgJ3B4Jztcblx0XHRcdFx0c2xpZGUuc3R5bGUud2lkdGggPSBzbGlkZVdpZHRoICsgJ3B4JztcblxuXHRcdFx0XHQvLyBUT0RPIEJhY2tncm91bmRzIG5lZWQgdG8gYmUgbXVsdGlwbGllZCB3aGVuIHRoZSBzbGlkZVxuXHRcdFx0XHQvLyBzdHJldGNoZXMgb3ZlciBtdWx0aXBsZSBwYWdlc1xuXHRcdFx0XHR2YXIgYmFja2dyb3VuZCA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoICcuc2xpZGUtYmFja2dyb3VuZCcgKTtcblx0XHRcdFx0aWYoIGJhY2tncm91bmQgKSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC5zdHlsZS53aWR0aCA9IHBhZ2VXaWR0aCArICdweCc7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSAoIHBhZ2VIZWlnaHQgKiBudW1iZXJPZlBhZ2VzICkgKyAncHgnO1xuXHRcdFx0XHRcdGJhY2tncm91bmQuc3R5bGUudG9wID0gLXRvcCArICdweCc7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC5zdHlsZS5sZWZ0ID0gLWxlZnQgKyAncHgnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9ICk7XG5cblx0XHQvLyBTaG93IGFsbCBmcmFnbWVudHNcblx0XHR0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKyAnIC5mcmFnbWVudCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBmcmFnbWVudCApIHtcblx0XHRcdGZyYWdtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgYW4gdW5mb3J0dW5hdGUgbmVjZXNzaXR5LiBJZnJhbWVzIGNhbiB0cmlnZ2VyIHRoZVxuXHQgKiBwYXJlbnQgd2luZG93IHRvIHNjcm9sbCwgZm9yIGV4YW1wbGUgYnkgZm9jdXNpbmcgYW4gaW5wdXQuXG5cdCAqIFRoaXMgc2Nyb2xsaW5nIGNhbiBub3QgYmUgcHJldmVudGVkIGJ5IGhpZGluZyBvdmVyZmxvdyBpblxuXHQgKiBDU1Mgc28gd2UgaGF2ZSB0byByZXNvcnQgdG8gcmVwZWF0ZWRseSBjaGVja2luZyBpZiB0aGVcblx0ICogYnJvd3NlciBoYXMgZGVjaWRlZCB0byBvZmZzZXQgb3VyIHNsaWRlcyA6KFxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0dXBJZnJhbWVTY3JvbGxQcmV2ZW50aW9uKCkge1xuXG5cdFx0aWYoIGRvbS5zbGlkZXMucXVlcnlTZWxlY3RvciggJ2lmcmFtZScgKSApIHtcblx0XHRcdHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIGRvbS53cmFwcGVyLnNjcm9sbFRvcCAhPT0gMCB8fCBkb20ud3JhcHBlci5zY3JvbGxMZWZ0ICE9PSAwICkge1xuXHRcdFx0XHRcdGRvbS53cmFwcGVyLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHRcdFx0ZG9tLndyYXBwZXIuc2Nyb2xsTGVmdCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDUwMCApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gSFRNTCBlbGVtZW50IGFuZCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGl0LlxuXHQgKiBJZiB0aGUgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyB0aGUgZXhpc3RpbmcgaW5zdGFuY2Ugd2lsbFxuXHQgKiBiZSByZXR1cm5lZC5cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGNvbnRhaW5lciwgdGFnbmFtZSwgY2xhc3NuYW1lLCBpbm5lckhUTUwgKSB7XG5cblx0XHQvLyBGaW5kIGFsbCBub2RlcyBtYXRjaGluZyB0aGUgZGVzY3JpcHRpb25cblx0XHR2YXIgbm9kZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCggJy4nICsgY2xhc3NuYW1lICk7XG5cblx0XHQvLyBDaGVjayBhbGwgbWF0Y2hlcyB0byBmaW5kIG9uZSB3aGljaCBpcyBhIGRpcmVjdCBjaGlsZCBvZlxuXHRcdC8vIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyXG5cdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdHZhciB0ZXN0Tm9kZSA9IG5vZGVzW2ldO1xuXHRcdFx0aWYoIHRlc3ROb2RlLnBhcmVudE5vZGUgPT09IGNvbnRhaW5lciApIHtcblx0XHRcdFx0cmV0dXJuIHRlc3ROb2RlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIG5vIG5vZGUgd2FzIGZvdW5kLCBjcmVhdGUgaXQgbm93XG5cdFx0dmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0YWduYW1lICk7XG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCBjbGFzc25hbWUgKTtcblx0XHRpZiggdHlwZW9mIGlubmVySFRNTCA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHRub2RlLmlubmVySFRNTCA9IGlubmVySFRNTDtcblx0XHR9XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBub2RlICk7XG5cblx0XHRyZXR1cm4gbm9kZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIHNsaWRlIGJhY2tncm91bmQgZWxlbWVudHMgYW5kIGFwcGVuZHMgdGhlbVxuXHQgKiB0byB0aGUgYmFja2dyb3VuZCBjb250YWluZXIuIE9uZSBlbGVtZW50IGlzIGNyZWF0ZWQgcGVyXG5cdCAqIHNsaWRlIG5vIG1hdHRlciBpZiB0aGUgZ2l2ZW4gc2xpZGUgaGFzIHZpc2libGUgYmFja2dyb3VuZC5cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmRzKCkge1xuXG5cdFx0dmFyIHByaW50TW9kZSA9IGlzUHJpbnRpbmdQREYoKTtcblxuXHRcdC8vIENsZWFyIHByaW9yIGJhY2tncm91bmRzXG5cdFx0ZG9tLmJhY2tncm91bmQuaW5uZXJIVE1MID0gJyc7XG5cdFx0ZG9tLmJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCggJ25vLXRyYW5zaXRpb24nICk7XG5cblx0XHQvLyBJdGVyYXRlIG92ZXIgYWxsIGhvcml6b250YWwgc2xpZGVzXG5cdFx0dG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZWggKSB7XG5cblx0XHRcdHZhciBiYWNrZ3JvdW5kU3RhY2s7XG5cblx0XHRcdGlmKCBwcmludE1vZGUgKSB7XG5cdFx0XHRcdGJhY2tncm91bmRTdGFjayA9IGNyZWF0ZUJhY2tncm91bmQoIHNsaWRlaCwgc2xpZGVoICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YmFja2dyb3VuZFN0YWNrID0gY3JlYXRlQmFja2dyb3VuZCggc2xpZGVoLCBkb20uYmFja2dyb3VuZCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJdGVyYXRlIG92ZXIgYWxsIHZlcnRpY2FsIHNsaWRlc1xuXHRcdFx0dG9BcnJheSggc2xpZGVoLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRldiApIHtcblxuXHRcdFx0XHRpZiggcHJpbnRNb2RlICkge1xuXHRcdFx0XHRcdGNyZWF0ZUJhY2tncm91bmQoIHNsaWRldiwgc2xpZGV2ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y3JlYXRlQmFja2dyb3VuZCggc2xpZGV2LCBiYWNrZ3JvdW5kU3RhY2sgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJhY2tncm91bmRTdGFjay5jbGFzc0xpc3QuYWRkKCAnc3RhY2snICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHRcdC8vIEFkZCBwYXJhbGxheCBiYWNrZ3JvdW5kIGlmIHNwZWNpZmllZFxuXHRcdGlmKCBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2UgKSB7XG5cblx0XHRcdGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEltYWdlICsgJ1wiKSc7XG5cdFx0XHRkb20uYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRTaXplO1xuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhlIGJlbG93IHByb3BlcnRpZXMgYXJlIHNldCBvbiB0aGUgZWxlbWVudCAtIHRoZXNlIHByb3BlcnRpZXMgYXJlXG5cdFx0XHQvLyBuZWVkZWQgZm9yIHByb3BlciB0cmFuc2l0aW9ucyB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnQgdmlhIENTUy4gVG8gcmVtb3ZlXG5cdFx0XHQvLyBhbm5veWluZyBiYWNrZ3JvdW5kIHNsaWRlLWluIGVmZmVjdCB3aGVuIHRoZSBwcmVzZW50YXRpb24gc3RhcnRzLCBhcHBseVxuXHRcdFx0Ly8gdGhlc2UgcHJvcGVydGllcyBhZnRlciBzaG9ydCB0aW1lIGRlbGF5XG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ2hhcy1wYXJhbGxheC1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0fSwgMSApO1xuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXG5cdFx0XHRkb20uYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtcGFyYWxsYXgtYmFja2dyb3VuZCcgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBiYWNrZ3JvdW5kIGZvciB0aGUgZ2l2ZW4gc2xpZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0aGF0IHRoZSBiYWNrZ3JvdW5kXG5cdCAqIHNob3VsZCBiZSBhcHBlbmRlZCB0b1xuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZCggc2xpZGUsIGNvbnRhaW5lciApIHtcblxuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0YmFja2dyb3VuZDogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kJyApLFxuXHRcdFx0YmFja2dyb3VuZFNpemU6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1zaXplJyApLFxuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaW1hZ2UnICksXG5cdFx0XHRiYWNrZ3JvdW5kVmlkZW86IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC12aWRlbycgKSxcblx0XHRcdGJhY2tncm91bmRJZnJhbWU6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pZnJhbWUnICksXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1jb2xvcicgKSxcblx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1yZXBlYXQnICksXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1wb3NpdGlvbicgKSxcblx0XHRcdGJhY2tncm91bmRUcmFuc2l0aW9uOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbicgKVxuXHRcdH07XG5cblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cblx0XHQvLyBDYXJyeSBvdmVyIGN1c3RvbSBjbGFzc2VzIGZyb20gdGhlIHNsaWRlIHRvIHRoZSBiYWNrZ3JvdW5kXG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSAnc2xpZGUtYmFja2dyb3VuZCAnICsgc2xpZGUuY2xhc3NOYW1lLnJlcGxhY2UoIC9wcmVzZW50fHBhc3R8ZnV0dXJlLywgJycgKTtcblxuXHRcdGlmKCBkYXRhLmJhY2tncm91bmQgKSB7XG5cdFx0XHQvLyBBdXRvLXdyYXAgaW1hZ2UgdXJscyBpbiB1cmwoLi4uKVxuXHRcdFx0aWYoIC9eKGh0dHB8ZmlsZXxcXC9cXC8pL2dpLnRlc3QoIGRhdGEuYmFja2dyb3VuZCApIHx8IC9cXC4oc3ZnfHBuZ3xqcGd8anBlZ3xnaWZ8Ym1wKSQvZ2kudGVzdCggZGF0YS5iYWNrZ3JvdW5kICkgKSB7XG5cdFx0XHRcdHNsaWRlLnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pbWFnZScsIGRhdGEuYmFja2dyb3VuZCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGRhdGEuYmFja2dyb3VuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgYSBoYXNoIGZvciB0aGlzIGNvbWJpbmF0aW9uIG9mIGJhY2tncm91bmQgc2V0dGluZ3MuXG5cdFx0Ly8gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVuIHR3byBzbGlkZSBiYWNrZ3JvdW5kcyBhcmVcblx0XHQvLyB0aGUgc2FtZS5cblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kIHx8IGRhdGEuYmFja2dyb3VuZENvbG9yIHx8IGRhdGEuYmFja2dyb3VuZEltYWdlIHx8IGRhdGEuYmFja2dyb3VuZFZpZGVvIHx8IGRhdGEuYmFja2dyb3VuZElmcmFtZSApIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWhhc2gnLCBkYXRhLmJhY2tncm91bmQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kU2l6ZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRJbWFnZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRWaWRlbyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRJZnJhbWUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kQ29sb3IgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kUmVwZWF0ICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZFBvc2l0aW9uICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZFRyYW5zaXRpb24gKTtcblx0XHR9XG5cblx0XHQvLyBBZGRpdGlvbmFsIGFuZCBvcHRpb25hbCBiYWNrZ3JvdW5kIHByb3BlcnRpZXNcblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kU2l6ZSApIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBkYXRhLmJhY2tncm91bmRTaXplO1xuXHRcdGlmKCBkYXRhLmJhY2tncm91bmRDb2xvciApIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YS5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZFJlcGVhdCApIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IGRhdGEuYmFja2dyb3VuZFJlcGVhdDtcblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kUG9zaXRpb24gKSBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGRhdGEuYmFja2dyb3VuZFBvc2l0aW9uO1xuXHRcdGlmKCBkYXRhLmJhY2tncm91bmRUcmFuc2l0aW9uICkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbicsIGRhdGEuYmFja2dyb3VuZFRyYW5zaXRpb24gKTtcblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG5cdFx0Ly8gSWYgYmFja2dyb3VuZHMgYXJlIGJlaW5nIHJlY3JlYXRlZCwgY2xlYXIgb2xkIGNsYXNzZXNcblx0XHRzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAnaGFzLWRhcmstYmFja2dyb3VuZCcgKTtcblx0XHRzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAnaGFzLWxpZ2h0LWJhY2tncm91bmQnICk7XG5cblx0XHQvLyBJZiB0aGlzIHNsaWRlIGhhcyBhIGJhY2tncm91bmQgY29sb3IsIGFkZCBhIGNsYXNzIHRoYXRcblx0XHQvLyBzaWduYWxzIGlmIGl0IGlzIGxpZ2h0IG9yIGRhcmsuIElmIHRoZSBzbGlkZSBoYXMgbm8gYmFja2dyb3VuZFxuXHRcdC8vIGNvbG9yLCBubyBjbGFzcyB3aWxsIGJlIHNldFxuXHRcdHZhciBjb21wdXRlZEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtZW50ICkuYmFja2dyb3VuZENvbG9yO1xuXHRcdGlmKCBjb21wdXRlZEJhY2tncm91bmRDb2xvciApIHtcblx0XHRcdHZhciByZ2IgPSBjb2xvclRvUmdiKCBjb21wdXRlZEJhY2tncm91bmRDb2xvciApO1xuXG5cdFx0XHQvLyBJZ25vcmUgZnVsbHkgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHMuIFNvbWUgYnJvd3NlcnMgcmV0dXJuXG5cdFx0XHQvLyByZ2JhKDAsMCwwLDApIHdoZW4gcmVhZGluZyB0aGUgY29tcHV0ZWQgYmFja2dyb3VuZCBjb2xvciBvZlxuXHRcdFx0Ly8gYW4gZWxlbWVudCB3aXRoIG5vIGJhY2tncm91bmRcblx0XHRcdGlmKCByZ2IgJiYgcmdiLmEgIT09IDAgKSB7XG5cdFx0XHRcdGlmKCBjb2xvckJyaWdodG5lc3MoIGNvbXB1dGVkQmFja2dyb3VuZENvbG9yICkgPCAxMjggKSB7XG5cdFx0XHRcdFx0c2xpZGUuY2xhc3NMaXN0LmFkZCggJ2hhcy1kYXJrLWJhY2tncm91bmQnICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c2xpZGUuY2xhc3NMaXN0LmFkZCggJ2hhcy1saWdodC1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBsaXN0ZW5lciB0byBwb3N0TWVzc2FnZSBldmVudHMsIHRoaXMgbWFrZXMgaXRcblx0ICogcG9zc2libGUgdG8gY2FsbCBhbGwgcmV2ZWFsLmpzIEFQSSBtZXRob2RzIGZyb20gYW5vdGhlclxuXHQgKiB3aW5kb3cuIEZvciBleGFtcGxlOlxuXHQgKlxuXHQgKiByZXZlYWxXaW5kb3cucG9zdE1lc3NhZ2UoIEpTT04uc3RyaW5naWZ5KHtcblx0ICogICBtZXRob2Q6ICdzbGlkZScsXG5cdCAqICAgYXJnczogWyAyIF1cblx0ICogfSksICcqJyApO1xuXHQgKi9cblx0ZnVuY3Rpb24gc2V0dXBQb3N0TWVzc2FnZSgpIHtcblxuXHRcdGlmKCBjb25maWcucG9zdE1lc3NhZ2UgKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ21lc3NhZ2UnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHdlJ3JlIGRlYWxpbmcgd2l0aCBKU09OXG5cdFx0XHRcdGlmKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgZGF0YS5jaGFyQXQoIDAgKSA9PT0gJ3snICYmIGRhdGEuY2hhckF0KCBkYXRhLmxlbmd0aCAtIDEgKSA9PT0gJ30nICkge1xuXHRcdFx0XHRcdGRhdGEgPSBKU09OLnBhcnNlKCBkYXRhICk7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgcmVxdWVzdGVkIG1ldGhvZCBjYW4gYmUgZm91bmRcblx0XHRcdFx0XHRpZiggZGF0YS5tZXRob2QgJiYgdHlwZW9mIFJldmVhbFtkYXRhLm1ldGhvZF0gPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRSZXZlYWxbZGF0YS5tZXRob2RdLmFwcGx5KCBSZXZlYWwsIGRhdGEuYXJncyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgZmFsc2UgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIHRoZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZyb20gdGhlIGNvbmZpZ1xuXHQgKiBvYmplY3QuIE1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiBjb25maWd1cmUoIG9wdGlvbnMgKSB7XG5cblx0XHR2YXIgbnVtYmVyT2ZTbGlkZXMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKS5sZW5ndGg7XG5cblx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBjb25maWcudHJhbnNpdGlvbiApO1xuXG5cdFx0Ly8gTmV3IGNvbmZpZyBvcHRpb25zIG1heSBiZSBwYXNzZWQgd2hlbiB0aGlzIG1ldGhvZFxuXHRcdC8vIGlzIGludm9rZWQgdGhyb3VnaCB0aGUgQVBJIGFmdGVyIGluaXRpYWxpemF0aW9uXG5cdFx0aWYoIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyApIGV4dGVuZCggY29uZmlnLCBvcHRpb25zICk7XG5cblx0XHQvLyBGb3JjZSBsaW5lYXIgdHJhbnNpdGlvbiBiYXNlZCBvbiBicm93c2VyIGNhcGFiaWxpdGllc1xuXHRcdGlmKCBmZWF0dXJlcy50cmFuc2Zvcm1zM2QgPT09IGZhbHNlICkgY29uZmlnLnRyYW5zaXRpb24gPSAnbGluZWFyJztcblxuXHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGNvbmZpZy50cmFuc2l0aW9uICk7XG5cblx0XHRkb20ud3JhcHBlci5zZXRBdHRyaWJ1dGUoICdkYXRhLXRyYW5zaXRpb24tc3BlZWQnLCBjb25maWcudHJhbnNpdGlvblNwZWVkICk7XG5cdFx0ZG9tLndyYXBwZXIuc2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb24nLCBjb25maWcuYmFja2dyb3VuZFRyYW5zaXRpb24gKTtcblxuXHRcdGRvbS5jb250cm9scy5zdHlsZS5kaXNwbGF5ID0gY29uZmlnLmNvbnRyb2xzID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHRkb20ucHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IGNvbmZpZy5wcm9ncmVzcyA/ICdibG9jaycgOiAnbm9uZSc7XG5cblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdydGwnICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ3J0bCcgKTtcblx0XHR9XG5cblx0XHRpZiggY29uZmlnLmNlbnRlciApIHtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdjZW50ZXInICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2NlbnRlcicgKTtcblx0XHR9XG5cblx0XHQvLyBFeGl0IHRoZSBwYXVzZWQgbW9kZSBpZiBpdCB3YXMgY29uZmlndXJlZCBvZmZcblx0XHRpZiggY29uZmlnLnBhdXNlID09PSBmYWxzZSApIHtcblx0XHRcdHJlc3VtZSgpO1xuXHRcdH1cblxuXHRcdGlmKCBjb25maWcubW91c2VXaGVlbCApIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCwgZmFsc2UgKTsgLy8gRkZcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Eb2N1bWVudE1vdXNlU2Nyb2xsLCBmYWxzZSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCwgZmFsc2UgKTsgLy8gRkZcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Eb2N1bWVudE1vdXNlU2Nyb2xsLCBmYWxzZSApO1xuXHRcdH1cblxuXHRcdC8vIFJvbGxpbmcgM0QgbGlua3Ncblx0XHRpZiggY29uZmlnLnJvbGxpbmdMaW5rcyApIHtcblx0XHRcdGVuYWJsZVJvbGxpbmdMaW5rcygpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRpc2FibGVSb2xsaW5nTGlua3MoKTtcblx0XHR9XG5cblx0XHQvLyBJZnJhbWUgbGluayBwcmV2aWV3c1xuXHRcdGlmKCBjb25maWcucHJldmlld0xpbmtzICkge1xuXHRcdFx0ZW5hYmxlUHJldmlld0xpbmtzKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZGlzYWJsZVByZXZpZXdMaW5rcygpO1xuXHRcdFx0ZW5hYmxlUHJldmlld0xpbmtzKCAnW2RhdGEtcHJldmlldy1saW5rXScgKTtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgZXhpc3RpbmcgYXV0by1zbGlkZSBjb250cm9sc1xuXHRcdGlmKCBhdXRvU2xpZGVQbGF5ZXIgKSB7XG5cdFx0XHRhdXRvU2xpZGVQbGF5ZXIuZGVzdHJveSgpO1xuXHRcdFx0YXV0b1NsaWRlUGxheWVyID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBhdXRvLXNsaWRlIGNvbnRyb2xzIGlmIG5lZWRlZFxuXHRcdGlmKCBudW1iZXJPZlNsaWRlcyA+IDEgJiYgY29uZmlnLmF1dG9TbGlkZSAmJiBjb25maWcuYXV0b1NsaWRlU3RvcHBhYmxlICYmIGZlYXR1cmVzLmNhbnZhcyAmJiBmZWF0dXJlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKSB7XG5cdFx0XHRhdXRvU2xpZGVQbGF5ZXIgPSBuZXcgUGxheWJhY2soIGRvbS53cmFwcGVyLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIE1hdGgubWluKCBNYXRoLm1heCggKCBEYXRlLm5vdygpIC0gYXV0b1NsaWRlU3RhcnRUaW1lICkgLyBhdXRvU2xpZGUsIDAgKSwgMSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRhdXRvU2xpZGVQbGF5ZXIub24oICdjbGljaycsIG9uQXV0b1NsaWRlUGxheWVyQ2xpY2sgKTtcblx0XHRcdGF1dG9TbGlkZVBhdXNlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gZnJhZ21lbnRzIGFyZSB0dXJuZWQgb2ZmIHRoZXkgc2hvdWxkIGJlIHZpc2libGVcblx0XHRpZiggY29uZmlnLmZyYWdtZW50cyA9PT0gZmFsc2UgKSB7XG5cdFx0XHR0b0FycmF5KCBkb20uc2xpZGVzLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRzeW5jKCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBCaW5kcyBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKi9cblx0ZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cblx0XHRldmVudHNBcmVCb3VuZCA9IHRydWU7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBvbldpbmRvd0hhc2hDaGFuZ2UsIGZhbHNlICk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UgKTtcblxuXHRcdGlmKCBjb25maWcudG91Y2ggKSB7XG5cdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cblx0XHRcdC8vIFN1cHBvcnQgcG9pbnRlci1zdHlsZSB0b3VjaCBpbnRlcmFjdGlvbiBhcyB3ZWxsXG5cdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCApIHtcblx0XHRcdFx0Ly8gSUUgMTEgdXNlcyB1bi1wcmVmaXhlZCB2ZXJzaW9uIG9mIHBvaW50ZXIgZXZlbnRzXG5cdFx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XG5cdFx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlICk7XG5cdFx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJVcCwgZmFsc2UgKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCApIHtcblx0XHRcdFx0Ly8gSUUgMTAgdXNlcyBwcmVmaXhlZCB2ZXJzaW9uIG9mIHBvaW50ZXIgZXZlbnRzXG5cdFx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJEb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcblx0XHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlck1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xuXHRcdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyVXAnLCBvblBvaW50ZXJVcCwgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggY29uZmlnLmtleWJvYXJkICkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbkRvY3VtZW50S2V5RG93biwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlwcmVzcycsIG9uRG9jdW1lbnRLZXlQcmVzcywgZmFsc2UgKTtcblx0XHR9XG5cblx0XHRpZiggY29uZmlnLnByb2dyZXNzICYmIGRvbS5wcm9ncmVzcyApIHtcblx0XHRcdGRvbS5wcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvblByb2dyZXNzQ2xpY2tlZCwgZmFsc2UgKTtcblx0XHR9XG5cblx0XHRpZiggY29uZmlnLmZvY3VzQm9keU9uUGFnZVZpc2liaWxpdHlDaGFuZ2UgKSB7XG5cdFx0XHR2YXIgdmlzaWJpbGl0eUNoYW5nZTtcblxuXHRcdFx0aWYoICdoaWRkZW4nIGluIGRvY3VtZW50ICkge1xuXHRcdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggJ21zSGlkZGVuJyBpbiBkb2N1bWVudCApIHtcblx0XHRcdFx0dmlzaWJpbGl0eUNoYW5nZSA9ICdtc3Zpc2liaWxpdHljaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggJ3dlYmtpdEhpZGRlbicgaW4gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB2aXNpYmlsaXR5Q2hhbmdlICkge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCB2aXNpYmlsaXR5Q2hhbmdlLCBvblBhZ2VWaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIExpc3RlbiB0byBib3RoIHRvdWNoIGFuZCBjbGljayBldmVudHMsIGluIGNhc2UgdGhlIGRldmljZVxuXHRcdC8vIHN1cHBvcnRzIGJvdGhcblx0XHR2YXIgcG9pbnRlckV2ZW50cyA9IFsgJ3RvdWNoc3RhcnQnLCAnY2xpY2snIF07XG5cblx0XHQvLyBPbmx5IHN1cHBvcnQgdG91Y2ggZm9yIEFuZHJvaWQsIGZpeGVzIGRvdWJsZSBuYXZpZ2F0aW9ucyBpblxuXHRcdC8vIHN0b2NrIGJyb3dzZXJcblx0XHRpZiggbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCggL2FuZHJvaWQvZ2kgKSApIHtcblx0XHRcdHBvaW50ZXJFdmVudHMgPSBbICd0b3VjaHN0YXJ0JyBdO1xuXHRcdH1cblxuXHRcdHBvaW50ZXJFdmVudHMuZm9yRWFjaCggZnVuY3Rpb24oIGV2ZW50TmFtZSApIHtcblx0XHRcdGRvbS5jb250cm9sc0xlZnQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVMZWZ0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzUmlnaHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVSaWdodENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc1VwLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlVXBDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNEb3duLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlRG93bkNsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVQcmV2Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzTmV4dC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZU5leHRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVW5iaW5kcyBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG5cblx0XHRldmVudHNBcmVCb3VuZCA9IGZhbHNlO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbkRvY3VtZW50S2V5RG93biwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5cHJlc3MnLCBvbkRvY3VtZW50S2V5UHJlc3MsIGZhbHNlICk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgb25XaW5kb3dIYXNoQ2hhbmdlLCBmYWxzZSApO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlICk7XG5cblx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblxuXHRcdC8vIElFMTFcblx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCApIHtcblx0XHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XG5cdFx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuXHRcdH1cblx0XHQvLyBJRTEwXG5cdFx0ZWxzZSBpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICkge1xuXHRcdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlckRvd24nLCBvblBvaW50ZXJEb3duLCBmYWxzZSApO1xuXHRcdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlck1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlclVwJywgb25Qb2ludGVyVXAsIGZhbHNlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjb25maWcucHJvZ3Jlc3MgJiYgZG9tLnByb2dyZXNzICkge1xuXHRcdFx0ZG9tLnByb2dyZXNzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uUHJvZ3Jlc3NDbGlja2VkLCBmYWxzZSApO1xuXHRcdH1cblxuXHRcdFsgJ3RvdWNoc3RhcnQnLCAnY2xpY2snIF0uZm9yRWFjaCggZnVuY3Rpb24oIGV2ZW50TmFtZSApIHtcblx0XHRcdGRvbS5jb250cm9sc0xlZnQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVMZWZ0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzUmlnaHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVSaWdodENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc1VwLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlVXBDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNEb3duLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlRG93bkNsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVQcmV2Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzTmV4dC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZU5leHRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogRXh0ZW5kIG9iamVjdCBhIHdpdGggdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG5cdCAqIElmIHRoZXJlJ3MgYSBjb25mbGljdCwgb2JqZWN0IGIgdGFrZXMgcHJlY2VkZW5jZS5cblx0ICovXG5cdGZ1bmN0aW9uIGV4dGVuZCggYSwgYiApIHtcblxuXHRcdGZvciggdmFyIGkgaW4gYiApIHtcblx0XHRcdGFbIGkgXSA9IGJbIGkgXTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB0aGUgdGFyZ2V0IG9iamVjdCB0byBhbiBhcnJheS5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQXJyYXkoIG8gKSB7XG5cblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIG8gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFV0aWxpdHkgZm9yIGRlc2VyaWFsaXppbmcgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGRlc2VyaWFsaXplKCB2YWx1ZSApIHtcblxuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0aWYoIHZhbHVlID09PSAnbnVsbCcgKSByZXR1cm4gbnVsbDtcblx0XHRcdGVsc2UgaWYoIHZhbHVlID09PSAndHJ1ZScgKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGVsc2UgaWYoIHZhbHVlID09PSAnZmFsc2UnICkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0ZWxzZSBpZiggdmFsdWUubWF0Y2goIC9eXFxkKyQvICkgKSByZXR1cm4gcGFyc2VGbG9hdCggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBNZWFzdXJlcyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGJldHdlZW4gcG9pbnQgYVxuXHQgKiBhbmQgcG9pbnQgYi5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGEgcG9pbnQgd2l0aCB4L3kgcHJvcGVydGllc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gYiBwb2ludCB3aXRoIHgveSBwcm9wZXJ0aWVzXG5cdCAqL1xuXHRmdW5jdGlvbiBkaXN0YW5jZUJldHdlZW4oIGEsIGIgKSB7XG5cblx0XHR2YXIgZHggPSBhLnggLSBiLngsXG5cdFx0XHRkeSA9IGEueSAtIGIueTtcblxuXHRcdHJldHVybiBNYXRoLnNxcnQoIGR4KmR4ICsgZHkqZHkgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgYSBDU1MgdHJhbnNmb3JtIHRvIHRoZSB0YXJnZXQgZWxlbWVudC5cblx0ICovXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybUVsZW1lbnQoIGVsZW1lbnQsIHRyYW5zZm9ybSApIHtcblxuXHRcdGVsZW1lbnQuc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXHRcdGVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXHRcdGVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cdFx0ZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIENTUyB0cmFuc2Zvcm1zIHRvIHRoZSBzbGlkZXMgY29udGFpbmVyLiBUaGUgY29udGFpbmVyXG5cdCAqIGlzIHRyYW5zZm9ybWVkIGZyb20gdHdvIHNlcGFyYXRlIHNvdXJjZXM6IGxheW91dCBhbmQgdGhlIG92ZXJ2aWV3XG5cdCAqIG1vZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiB0cmFuc2Zvcm1TbGlkZXMoIHRyYW5zZm9ybXMgKSB7XG5cblx0XHQvLyBQaWNrIHVwIG5ldyB0cmFuc2Zvcm1zIGZyb20gYXJndW1lbnRzXG5cdFx0aWYoIHR5cGVvZiB0cmFuc2Zvcm1zLmxheW91dCA9PT0gJ3N0cmluZycgKSBzbGlkZXNUcmFuc2Zvcm0ubGF5b3V0ID0gdHJhbnNmb3Jtcy5sYXlvdXQ7XG5cdFx0aWYoIHR5cGVvZiB0cmFuc2Zvcm1zLm92ZXJ2aWV3ID09PSAnc3RyaW5nJyApIHNsaWRlc1RyYW5zZm9ybS5vdmVydmlldyA9IHRyYW5zZm9ybXMub3ZlcnZpZXc7XG5cblx0XHQvLyBBcHBseSB0aGUgdHJhbnNmb3JtcyB0byB0aGUgc2xpZGVzIGNvbnRhaW5lclxuXHRcdGlmKCBzbGlkZXNUcmFuc2Zvcm0ubGF5b3V0ICkge1xuXHRcdFx0dHJhbnNmb3JtRWxlbWVudCggZG9tLnNsaWRlcywgc2xpZGVzVHJhbnNmb3JtLmxheW91dCArICcgJyArIHNsaWRlc1RyYW5zZm9ybS5vdmVydmlldyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIGRvbS5zbGlkZXMsIHNsaWRlc1RyYW5zZm9ybS5vdmVydmlldyApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEluamVjdHMgdGhlIGdpdmVuIENTUyBzdHlsZXMgaW50byB0aGUgRE9NLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5qZWN0U3R5bGVTaGVldCggdmFsdWUgKSB7XG5cblx0XHR2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuXHRcdHRhZy50eXBlID0gJ3RleHQvY3NzJztcblx0XHRpZiggdGFnLnN0eWxlU2hlZXQgKSB7XG5cdFx0XHR0YWcuc3R5bGVTaGVldC5jc3NUZXh0ID0gdmFsdWU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGFnLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdmFsdWUgKSApO1xuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2hlYWQnIClbMF0uYXBwZW5kQ2hpbGQoIHRhZyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgdmFyaW91cyBjb2xvciBpbnB1dCBmb3JtYXRzIHRvIGFuIHtyOjAsZzowLGI6MH0gb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yLFxuXHQgKiB0aGUgZm9sbG93aW5nIGZvcm1hdHMgYXJlIHN1cHBvcnRlZDpcblx0ICogLSAjMDAwXG5cdCAqIC0gIzAwMDAwMFxuXHQgKiAtIHJnYigwLDAsMClcblx0ICovXG5cdGZ1bmN0aW9uIGNvbG9yVG9SZ2IoIGNvbG9yICkge1xuXG5cdFx0dmFyIGhleDMgPSBjb2xvci5tYXRjaCggL14jKFswLTlhLWZdezN9KSQvaSApO1xuXHRcdGlmKCBoZXgzICYmIGhleDNbMV0gKSB7XG5cdFx0XHRoZXgzID0gaGV4M1sxXTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHI6IHBhcnNlSW50KCBoZXgzLmNoYXJBdCggMCApLCAxNiApICogMHgxMSxcblx0XHRcdFx0ZzogcGFyc2VJbnQoIGhleDMuY2hhckF0KCAxICksIDE2ICkgKiAweDExLFxuXHRcdFx0XHRiOiBwYXJzZUludCggaGV4My5jaGFyQXQoIDIgKSwgMTYgKSAqIDB4MTFcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dmFyIGhleDYgPSBjb2xvci5tYXRjaCggL14jKFswLTlhLWZdezZ9KSQvaSApO1xuXHRcdGlmKCBoZXg2ICYmIGhleDZbMV0gKSB7XG5cdFx0XHRoZXg2ID0gaGV4NlsxXTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHI6IHBhcnNlSW50KCBoZXg2LnN1YnN0ciggMCwgMiApLCAxNiApLFxuXHRcdFx0XHRnOiBwYXJzZUludCggaGV4Ni5zdWJzdHIoIDIsIDIgKSwgMTYgKSxcblx0XHRcdFx0YjogcGFyc2VJbnQoIGhleDYuc3Vic3RyKCA0LCAyICksIDE2IClcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dmFyIHJnYiA9IGNvbG9yLm1hdGNoKCAvXnJnYlxccypcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKlxcKSQvaSApO1xuXHRcdGlmKCByZ2IgKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyOiBwYXJzZUludCggcmdiWzFdLCAxMCApLFxuXHRcdFx0XHRnOiBwYXJzZUludCggcmdiWzJdLCAxMCApLFxuXHRcdFx0XHRiOiBwYXJzZUludCggcmdiWzNdLCAxMCApXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHZhciByZ2JhID0gY29sb3IubWF0Y2goIC9ecmdiYVxccypcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKlxcLFxccyooW1xcZF0rfFtcXGRdKi5bXFxkXSspXFxzKlxcKSQvaSApO1xuXHRcdGlmKCByZ2JhICkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cjogcGFyc2VJbnQoIHJnYmFbMV0sIDEwICksXG5cdFx0XHRcdGc6IHBhcnNlSW50KCByZ2JhWzJdLCAxMCApLFxuXHRcdFx0XHRiOiBwYXJzZUludCggcmdiYVszXSwgMTAgKSxcblx0XHRcdFx0YTogcGFyc2VGbG9hdCggcmdiYVs0XSApXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlcyBicmlnaHRuZXNzIG9uIGEgc2NhbGUgb2YgMC0yNTUuXG5cdCAqXG5cdCAqIEBwYXJhbSBjb2xvciBTZWUgY29sb3JTdHJpbmdUb1JnYiBmb3Igc3VwcG9ydGVkIGZvcm1hdHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBjb2xvckJyaWdodG5lc3MoIGNvbG9yICkge1xuXG5cdFx0aWYoIHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgKSBjb2xvciA9IGNvbG9yVG9SZ2IoIGNvbG9yICk7XG5cblx0XHRpZiggY29sb3IgKSB7XG5cdFx0XHRyZXR1cm4gKCBjb2xvci5yICogMjk5ICsgY29sb3IuZyAqIDU4NyArIGNvbG9yLmIgKiAxMTQgKSAvIDEwMDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIGhlaWdodCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBieSBsb29raW5nXG5cdCAqIGF0IHRoZSBwb3NpdGlvbiBhbmQgaGVpZ2h0IG9mIGl0cyBpbW1lZGlhdGUgY2hpbGRyZW4uXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRBYnNvbHV0ZUhlaWdodCggZWxlbWVudCApIHtcblxuXHRcdHZhciBoZWlnaHQgPSAwO1xuXG5cdFx0aWYoIGVsZW1lbnQgKSB7XG5cdFx0XHR2YXIgYWJzb2x1dGVDaGlsZHJlbiA9IDA7XG5cblx0XHRcdHRvQXJyYXkoIGVsZW1lbnQuY2hpbGROb2RlcyApLmZvckVhY2goIGZ1bmN0aW9uKCBjaGlsZCApIHtcblxuXHRcdFx0XHRpZiggdHlwZW9mIGNoaWxkLm9mZnNldFRvcCA9PT0gJ251bWJlcicgJiYgY2hpbGQuc3R5bGUgKSB7XG5cdFx0XHRcdFx0Ly8gQ291bnQgIyBvZiBhYnMgY2hpbGRyZW5cblx0XHRcdFx0XHRpZiggd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGNoaWxkICkucG9zaXRpb24gPT09ICdhYnNvbHV0ZScgKSB7XG5cdFx0XHRcdFx0XHRhYnNvbHV0ZUNoaWxkcmVuICs9IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aGVpZ2h0ID0gTWF0aC5tYXgoIGhlaWdodCwgY2hpbGQub2Zmc2V0VG9wICsgY2hpbGQub2Zmc2V0SGVpZ2h0ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhcmUgbm8gYWJzb2x1dGUgY2hpbGRyZW4sIHVzZSBvZmZzZXRIZWlnaHRcblx0XHRcdGlmKCBhYnNvbHV0ZUNoaWxkcmVuID09PSAwICkge1xuXHRcdFx0XHRoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBoZWlnaHQ7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSByZW1haW5pbmcgaGVpZ2h0IHdpdGhpbiB0aGUgcGFyZW50IG9mIHRoZVxuXHQgKiB0YXJnZXQgZWxlbWVudC5cblx0ICpcblx0ICogcmVtYWluaW5nIGhlaWdodCA9IFsgY29uZmlndXJlZCBwYXJlbnQgaGVpZ2h0IF0gLSBbIGN1cnJlbnQgcGFyZW50IGhlaWdodCBdXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRSZW1haW5pbmdIZWlnaHQoIGVsZW1lbnQsIGhlaWdodCApIHtcblxuXHRcdGhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG5cdFx0aWYoIGVsZW1lbnQgKSB7XG5cdFx0XHR2YXIgbmV3SGVpZ2h0LCBvbGRIZWlnaHQgPSBlbGVtZW50LnN0eWxlLmhlaWdodDtcblxuXHRcdFx0Ly8gQ2hhbmdlIHRoZSAuc3RyZXRjaCBlbGVtZW50IGhlaWdodCB0byAwIGluIG9yZGVyIGZpbmQgdGhlIGhlaWdodCBvZiBhbGxcblx0XHRcdC8vIHRoZSBvdGhlciBlbGVtZW50c1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMHB4Jztcblx0XHRcdG5ld0hlaWdodCA9IGhlaWdodCAtIGVsZW1lbnQucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdC8vIFJlc3RvcmUgdGhlIG9sZCBoZWlnaHQsIGp1c3QgaW4gY2FzZVxuXHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBvbGRIZWlnaHQgKyAncHgnO1xuXG5cdFx0XHRyZXR1cm4gbmV3SGVpZ2h0O1xuXHRcdH1cblxuXHRcdHJldHVybiBoZWlnaHQ7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhpcyBpbnN0YW5jZSBpcyBiZWluZyB1c2VkIHRvIHByaW50IGEgUERGLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNQcmludGluZ1BERigpIHtcblxuXHRcdHJldHVybiAoIC9wcmludC1wZGYvZ2kgKS50ZXN0KCB3aW5kb3cubG9jYXRpb24uc2VhcmNoICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgYWRkcmVzcyBiYXIgaWYgd2UncmUgb24gYSBtb2JpbGUgZGV2aWNlLlxuXHQgKi9cblx0ZnVuY3Rpb24gaGlkZUFkZHJlc3NCYXIoKSB7XG5cblx0XHRpZiggY29uZmlnLmhpZGVBZGRyZXNzQmFyICYmIGlzTW9iaWxlRGV2aWNlICkge1xuXHRcdFx0Ly8gRXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIgdGhlIGFkZHJlc3MgYmFyIHRvIGhpZGVcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHJlbW92ZUFkZHJlc3NCYXIsIGZhbHNlICk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgcmVtb3ZlQWRkcmVzc0JhciwgZmFsc2UgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYXVzZXMgdGhlIGFkZHJlc3MgYmFyIHRvIGhpZGUgb24gbW9iaWxlIGRldmljZXMsXG5cdCAqIG1vcmUgdmVydGljYWwgc3BhY2UgZnR3LlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlQWRkcmVzc0JhcigpIHtcblxuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKCAwLCAxICk7XG5cdFx0fSwgMTAgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BhdGNoZXMgYW4gZXZlbnQgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGZyb20gdGhlXG5cdCAqIHJldmVhbCBET00gZWxlbWVudC5cblx0ICovXG5cdGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoIHR5cGUsIGFyZ3MgKSB7XG5cblx0XHR2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0hUTUxFdmVudHMnLCAxLCAyICk7XG5cdFx0ZXZlbnQuaW5pdEV2ZW50KCB0eXBlLCB0cnVlLCB0cnVlICk7XG5cdFx0ZXh0ZW5kKCBldmVudCwgYXJncyApO1xuXHRcdGRvbS53cmFwcGVyLmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiBhbiBpZnJhbWUsIHBvc3QgZWFjaCByZXZlYWwuanMgZXZlbnQgdG8gdGhlXG5cdFx0Ly8gcGFyZW50IHdpbmRvdy4gVXNlZCBieSB0aGUgbm90ZXMgcGx1Z2luXG5cdFx0aWYoIGNvbmZpZy5wb3N0TWVzc2FnZUV2ZW50cyAmJiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cuc2VsZiApIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoIEpTT04uc3RyaW5naWZ5KHsgbmFtZXNwYWNlOiAncmV2ZWFsJywgZXZlbnROYW1lOiB0eXBlLCBzdGF0ZTogZ2V0U3RhdGUoKSB9KSwgJyonICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogV3JhcCBhbGwgbGlua3MgaW4gM0QgZ29vZG5lc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmFibGVSb2xsaW5nTGlua3MoKSB7XG5cblx0XHRpZiggZmVhdHVyZXMudHJhbnNmb3JtczNkICYmICEoICdtc1BlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlICkgKSB7XG5cdFx0XHR2YXIgYW5jaG9ycyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiArICcgYScgKTtcblxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGFuY2hvcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdHZhciBhbmNob3IgPSBhbmNob3JzW2ldO1xuXG5cdFx0XHRcdGlmKCBhbmNob3IudGV4dENvbnRlbnQgJiYgIWFuY2hvci5xdWVyeVNlbGVjdG9yKCAnKicgKSAmJiAoICFhbmNob3IuY2xhc3NOYW1lIHx8ICFhbmNob3IuY2xhc3NMaXN0LmNvbnRhaW5zKCBhbmNob3IsICdyb2xsJyApICkgKSB7XG5cdFx0XHRcdFx0dmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0c3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBhbmNob3IudGV4dCk7XG5cdFx0XHRcdFx0c3Bhbi5pbm5lckhUTUwgPSBhbmNob3IuaW5uZXJIVE1MO1xuXG5cdFx0XHRcdFx0YW5jaG9yLmNsYXNzTGlzdC5hZGQoICdyb2xsJyApO1xuXHRcdFx0XHRcdGFuY2hvci5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRhbmNob3IuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVbndyYXAgYWxsIDNEIGxpbmtzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGlzYWJsZVJvbGxpbmdMaW5rcygpIHtcblxuXHRcdHZhciBhbmNob3JzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICsgJyBhLnJvbGwnICk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gYW5jaG9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdHZhciBhbmNob3IgPSBhbmNob3JzW2ldO1xuXHRcdFx0dmFyIHNwYW4gPSBhbmNob3IucXVlcnlTZWxlY3RvciggJ3NwYW4nICk7XG5cblx0XHRcdGlmKCBzcGFuICkge1xuXHRcdFx0XHRhbmNob3IuY2xhc3NMaXN0LnJlbW92ZSggJ3JvbGwnICk7XG5cdFx0XHRcdGFuY2hvci5pbm5lckhUTUwgPSBzcGFuLmlubmVySFRNTDtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBCaW5kIHByZXZpZXcgZnJhbWUgbGlua3MuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmFibGVQcmV2aWV3TGlua3MoIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGFuY2hvcnMgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciA/IHNlbGVjdG9yIDogJ2EnICkgKTtcblxuXHRcdGFuY2hvcnMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRpZiggL14oaHR0cHx3d3cpL2dpLnRlc3QoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnaHJlZicgKSApICkge1xuXHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uUHJldmlld0xpbmtDbGlja2VkLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFVuYmluZCBwcmV2aWV3IGZyYW1lIGxpbmtzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGlzYWJsZVByZXZpZXdMaW5rcygpIHtcblxuXHRcdHZhciBhbmNob3JzID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2EnICkgKTtcblxuXHRcdGFuY2hvcnMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRpZiggL14oaHR0cHx3d3cpL2dpLnRlc3QoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnaHJlZicgKSApICkge1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uUHJldmlld0xpbmtDbGlja2VkLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW5zIGEgcHJldmlldyB3aW5kb3cgZm9yIHRoZSB0YXJnZXQgVVJMLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2hvd1ByZXZpZXcoIHVybCApIHtcblxuXHRcdGNsb3NlT3ZlcmxheSgpO1xuXG5cdFx0ZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5JyApO1xuXHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5LXByZXZpZXcnICk7XG5cdFx0ZG9tLndyYXBwZXIuYXBwZW5kQ2hpbGQoIGRvbS5vdmVybGF5ICk7XG5cblx0XHRkb20ub3ZlcmxheS5pbm5lckhUTUwgPSBbXG5cdFx0XHQnPGhlYWRlcj4nLFxuXHRcdFx0XHQnPGEgY2xhc3M9XCJjbG9zZVwiIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+PC9zcGFuPjwvYT4nLFxuXHRcdFx0XHQnPGEgY2xhc3M9XCJleHRlcm5hbFwiIGhyZWY9XCInKyB1cmwgKydcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3BhbiBjbGFzcz1cImljb25cIj48L3NwYW4+PC9hPicsXG5cdFx0XHQnPC9oZWFkZXI+Jyxcblx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PicsXG5cdFx0XHQnPGRpdiBjbGFzcz1cInZpZXdwb3J0XCI+Jyxcblx0XHRcdFx0JzxpZnJhbWUgc3JjPVwiJysgdXJsICsnXCI+PC9pZnJhbWU+Jyxcblx0XHRcdCc8L2Rpdj4nXG5cdFx0XS5qb2luKCcnKTtcblxuXHRcdGRvbS5vdmVybGF5LnF1ZXJ5U2VsZWN0b3IoICdpZnJhbWUnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAnbG9hZGVkJyApO1xuXHRcdH0sIGZhbHNlICk7XG5cblx0XHRkb20ub3ZlcmxheS5xdWVyeVNlbGVjdG9yKCAnLmNsb3NlJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdGNsb3NlT3ZlcmxheSgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9LCBmYWxzZSApO1xuXG5cdFx0ZG9tLm92ZXJsYXkucXVlcnlTZWxlY3RvciggJy5leHRlcm5hbCcgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRjbG9zZU92ZXJsYXkoKTtcblx0XHR9LCBmYWxzZSApO1xuXG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcblx0XHR9LCAxICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVucyBhIG92ZXJsYXkgd2luZG93IHdpdGggaGVscCBtYXRlcmlhbC5cblx0ICovXG5cdGZ1bmN0aW9uIHNob3dIZWxwKCkge1xuXG5cdFx0aWYoIGNvbmZpZy5oZWxwICkge1xuXG5cdFx0XHRjbG9zZU92ZXJsYXkoKTtcblxuXHRcdFx0ZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ292ZXJsYXknICk7XG5cdFx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAnb3ZlcmxheS1oZWxwJyApO1xuXHRcdFx0ZG9tLndyYXBwZXIuYXBwZW5kQ2hpbGQoIGRvbS5vdmVybGF5ICk7XG5cblx0XHRcdHZhciBodG1sID0gJzxwIGNsYXNzPVwidGl0bGVcIj5LZXlib2FyZCBTaG9ydGN1dHM8L3A+PGJyLz4nO1xuXG5cdFx0XHRodG1sICs9ICc8dGFibGU+PHRoPktFWTwvdGg+PHRoPkFDVElPTjwvdGg+Jztcblx0XHRcdGZvciggdmFyIGtleSBpbiBrZXlib2FyZFNob3J0Y3V0cyApIHtcblx0XHRcdFx0aHRtbCArPSAnPHRyPjx0ZD4nICsga2V5ICsgJzwvdGQ+PHRkPicgKyBrZXlib2FyZFNob3J0Y3V0c1sga2V5IF0gKyAnPC90ZD48L3RyPic7XG5cdFx0XHR9XG5cblx0XHRcdGh0bWwgKz0gJzwvdGFibGU+JztcblxuXHRcdFx0ZG9tLm92ZXJsYXkuaW5uZXJIVE1MID0gW1xuXHRcdFx0XHQnPGhlYWRlcj4nLFxuXHRcdFx0XHRcdCc8YSBjbGFzcz1cImNsb3NlXCIgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImljb25cIj48L3NwYW4+PC9hPicsXG5cdFx0XHRcdCc8L2hlYWRlcj4nLFxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cInZpZXdwb3J0XCI+Jyxcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInZpZXdwb3J0LWlubmVyXCI+JysgaHRtbCArJzwvZGl2PicsXG5cdFx0XHRcdCc8L2Rpdj4nXG5cdFx0XHRdLmpvaW4oJycpO1xuXG5cdFx0XHRkb20ub3ZlcmxheS5xdWVyeVNlbGVjdG9yKCAnLmNsb3NlJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0Y2xvc2VPdmVybGF5KCk7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9LCBmYWxzZSApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG5cdFx0XHR9LCAxICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZXMgYW55IGN1cnJlbnRseSBvcGVuIG92ZXJsYXkuXG5cdCAqL1xuXHRmdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XG5cblx0XHRpZiggZG9tLm92ZXJsYXkgKSB7XG5cdFx0XHRkb20ub3ZlcmxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBkb20ub3ZlcmxheSApO1xuXHRcdFx0ZG9tLm92ZXJsYXkgPSBudWxsO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgSmF2YVNjcmlwdC1jb250cm9sbGVkIGxheW91dCBydWxlcyB0byB0aGVcblx0ICogcHJlc2VudGF0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbGF5b3V0KCkge1xuXG5cdFx0aWYoIGRvbS53cmFwcGVyICYmICFpc1ByaW50aW5nUERGKCkgKSB7XG5cblx0XHRcdHZhciBzaXplID0gZ2V0Q29tcHV0ZWRTbGlkZVNpemUoKTtcblxuXHRcdFx0dmFyIHNsaWRlUGFkZGluZyA9IDIwOyAvLyBUT0RPIERpZyB0aGlzIG91dCBvZiBET01cblxuXHRcdFx0Ly8gTGF5b3V0IHRoZSBjb250ZW50cyBvZiB0aGUgc2xpZGVzXG5cdFx0XHRsYXlvdXRTbGlkZUNvbnRlbnRzKCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQsIHNsaWRlUGFkZGluZyApO1xuXG5cdFx0XHRkb20uc2xpZGVzLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XG5cdFx0XHRkb20uc2xpZGVzLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIHNjYWxlIG9mIGNvbnRlbnQgdG8gZml0IHdpdGhpbiBhdmFpbGFibGUgc3BhY2Vcblx0XHRcdHNjYWxlID0gTWF0aC5taW4oIHNpemUucHJlc2VudGF0aW9uV2lkdGggLyBzaXplLndpZHRoLCBzaXplLnByZXNlbnRhdGlvbkhlaWdodCAvIHNpemUuaGVpZ2h0ICk7XG5cblx0XHRcdC8vIFJlc3BlY3QgbWF4L21pbiBzY2FsZSBzZXR0aW5nc1xuXHRcdFx0c2NhbGUgPSBNYXRoLm1heCggc2NhbGUsIGNvbmZpZy5taW5TY2FsZSApO1xuXHRcdFx0c2NhbGUgPSBNYXRoLm1pbiggc2NhbGUsIGNvbmZpZy5tYXhTY2FsZSApO1xuXG5cdFx0XHQvLyBEb24ndCBhcHBseSBhbnkgc2NhbGluZyBzdHlsZXMgaWYgc2NhbGUgaXMgMVxuXHRcdFx0aWYoIHNjYWxlID09PSAxICkge1xuXHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLnpvb20gPSAnJztcblx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5sZWZ0ID0gJyc7XG5cdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUudG9wID0gJyc7XG5cdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUuYm90dG9tID0gJyc7XG5cdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUucmlnaHQgPSAnJztcblx0XHRcdFx0dHJhbnNmb3JtU2xpZGVzKCB7IGxheW91dDogJycgfSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIFByZWZlciB6b29taW5nIGluIGRlc2t0b3AgQ2hyb21lIHNvIHRoYXQgY29udGVudCByZW1haW5zIGNyaXNwXG5cdFx0XHRcdGlmKCAhaXNNb2JpbGVEZXZpY2UgJiYgL2Nocm9tZS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSAmJiB0eXBlb2YgZG9tLnNsaWRlcy5zdHlsZS56b29tICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLnpvb20gPSBzY2FsZTtcblx0XHRcdFx0XHR0cmFuc2Zvcm1TbGlkZXMoIHsgbGF5b3V0OiAnJyB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQXBwbHkgc2NhbGUgdHJhbnNmb3JtIGFzIGEgZmFsbGJhY2tcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5sZWZ0ID0gJzUwJSc7XG5cdFx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS50b3AgPSAnNTAlJztcblx0XHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcblx0XHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xuXHRcdFx0XHRcdHRyYW5zZm9ybVNsaWRlcyggeyBsYXlvdXQ6ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoJysgc2NhbGUgKycpJyB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2VsZWN0IGFsbCBzbGlkZXMsIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXG5cdFx0XHR2YXIgc2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkgKTtcblxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0dmFyIHNsaWRlID0gc2xpZGVzWyBpIF07XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYm90aGVyIHVwZGF0aW5nIGludmlzaWJsZSBzbGlkZXNcblx0XHRcdFx0aWYoIHNsaWRlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCBjb25maWcuY2VudGVyIHx8IHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ2NlbnRlcicgKSApIHtcblx0XHRcdFx0XHQvLyBWZXJ0aWNhbCBzdGFja3MgYXJlIG5vdCBjZW50cmVkIHNpbmNlIHRoZWlyIHNlY3Rpb25cblx0XHRcdFx0XHQvLyBjaGlsZHJlbiB3aWxsIGJlXG5cdFx0XHRcdFx0aWYoIHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuXHRcdFx0XHRcdFx0c2xpZGUuc3R5bGUudG9wID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRzbGlkZS5zdHlsZS50b3AgPSBNYXRoLm1heCggKCAoIHNpemUuaGVpZ2h0IC0gZ2V0QWJzb2x1dGVIZWlnaHQoIHNsaWRlICkgKSAvIDIgKSAtIHNsaWRlUGFkZGluZywgMCApICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c2xpZGUuc3R5bGUudG9wID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGVQcm9ncmVzcygpO1xuXHRcdFx0dXBkYXRlUGFyYWxsYXgoKTtcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgbGF5b3V0IGxvZ2ljIHRvIHRoZSBjb250ZW50cyBvZiBhbGwgc2xpZGVzIGluXG5cdCAqIHRoZSBwcmVzZW50YXRpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBsYXlvdXRTbGlkZUNvbnRlbnRzKCB3aWR0aCwgaGVpZ2h0LCBwYWRkaW5nICkge1xuXG5cdFx0Ly8gSGFuZGxlIHNpemluZyBvZiBlbGVtZW50cyB3aXRoIHRoZSAnc3RyZXRjaCcgY2xhc3Ncblx0XHR0b0FycmF5KCBkb20uc2xpZGVzLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uID4gLnN0cmV0Y2gnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGhvdyBtdWNoIHZlcnRpY2FsIHNwYWNlIHdlIGNhbiB1c2Vcblx0XHRcdHZhciByZW1haW5pbmdIZWlnaHQgPSBnZXRSZW1haW5pbmdIZWlnaHQoIGVsZW1lbnQsIGhlaWdodCApO1xuXG5cdFx0XHQvLyBDb25zaWRlciB0aGUgYXNwZWN0IHJhdGlvIG9mIG1lZGlhIGVsZW1lbnRzXG5cdFx0XHRpZiggLyhpbWd8dmlkZW8pL2dpLnRlc3QoIGVsZW1lbnQubm9kZU5hbWUgKSApIHtcblx0XHRcdFx0dmFyIG53ID0gZWxlbWVudC5uYXR1cmFsV2lkdGggfHwgZWxlbWVudC52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdG5oID0gZWxlbWVudC5uYXR1cmFsSGVpZ2h0IHx8IGVsZW1lbnQudmlkZW9IZWlnaHQ7XG5cblx0XHRcdFx0dmFyIGVzID0gTWF0aC5taW4oIHdpZHRoIC8gbncsIHJlbWFpbmluZ0hlaWdodCAvIG5oICk7XG5cblx0XHRcdFx0ZWxlbWVudC5zdHlsZS53aWR0aCA9ICggbncgKiBlcyApICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoIG5oICogZXMgKSArICdweCc7XG5cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IHJlbWFpbmluZ0hlaWdodCArICdweCc7XG5cdFx0XHR9XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBjb21wdXRlZCBwaXhlbCBzaXplIG9mIG91ciBzbGlkZXMuIFRoZXNlXG5cdCAqIHZhbHVlcyBhcmUgYmFzZWQgb24gdGhlIHdpZHRoIGFuZCBoZWlnaHQgY29uZmlndXJhdGlvblxuXHQgKiBvcHRpb25zLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTbGlkZVNpemUoIHByZXNlbnRhdGlvbldpZHRoLCBwcmVzZW50YXRpb25IZWlnaHQgKSB7XG5cblx0XHR2YXIgc2l6ZSA9IHtcblx0XHRcdC8vIFNsaWRlIHNpemVcblx0XHRcdHdpZHRoOiBjb25maWcud2lkdGgsXG5cdFx0XHRoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG5cblx0XHRcdC8vIFByZXNlbnRhdGlvbiBzaXplXG5cdFx0XHRwcmVzZW50YXRpb25XaWR0aDogcHJlc2VudGF0aW9uV2lkdGggfHwgZG9tLndyYXBwZXIub2Zmc2V0V2lkdGgsXG5cdFx0XHRwcmVzZW50YXRpb25IZWlnaHQ6IHByZXNlbnRhdGlvbkhlaWdodCB8fCBkb20ud3JhcHBlci5vZmZzZXRIZWlnaHRcblx0XHR9O1xuXG5cdFx0Ly8gUmVkdWNlIGF2YWlsYWJsZSBzcGFjZSBieSBtYXJnaW5cblx0XHRzaXplLnByZXNlbnRhdGlvbldpZHRoIC09ICggc2l6ZS5wcmVzZW50YXRpb25XaWR0aCAqIGNvbmZpZy5tYXJnaW4gKTtcblx0XHRzaXplLnByZXNlbnRhdGlvbkhlaWdodCAtPSAoIHNpemUucHJlc2VudGF0aW9uSGVpZ2h0ICogY29uZmlnLm1hcmdpbiApO1xuXG5cdFx0Ly8gU2xpZGUgd2lkdGggbWF5IGJlIGEgcGVyY2VudGFnZSBvZiBhdmFpbGFibGUgd2lkdGhcblx0XHRpZiggdHlwZW9mIHNpemUud2lkdGggPT09ICdzdHJpbmcnICYmIC8lJC8udGVzdCggc2l6ZS53aWR0aCApICkge1xuXHRcdFx0c2l6ZS53aWR0aCA9IHBhcnNlSW50KCBzaXplLndpZHRoLCAxMCApIC8gMTAwICogc2l6ZS5wcmVzZW50YXRpb25XaWR0aDtcblx0XHR9XG5cblx0XHQvLyBTbGlkZSBoZWlnaHQgbWF5IGJlIGEgcGVyY2VudGFnZSBvZiBhdmFpbGFibGUgaGVpZ2h0XG5cdFx0aWYoIHR5cGVvZiBzaXplLmhlaWdodCA9PT0gJ3N0cmluZycgJiYgLyUkLy50ZXN0KCBzaXplLmhlaWdodCApICkge1xuXHRcdFx0c2l6ZS5oZWlnaHQgPSBwYXJzZUludCggc2l6ZS5oZWlnaHQsIDEwICkgLyAxMDAgKiBzaXplLnByZXNlbnRhdGlvbkhlaWdodDtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2l6ZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3JlcyB0aGUgdmVydGljYWwgaW5kZXggb2YgYSBzdGFjayBzbyB0aGF0IHRoZSBzYW1lXG5cdCAqIHZlcnRpY2FsIHNsaWRlIGNhbiBiZSBzZWxlY3RlZCB3aGVuIG5hdmlnYXRpbmcgdG8gYW5kXG5cdCAqIGZyb20gdGhlIHN0YWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdGFjayBUaGUgdmVydGljYWwgc3RhY2sgZWxlbWVudFxuXHQgKiBAcGFyYW0ge2ludH0gdiBJbmRleCB0byBtZW1vcml6ZVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBzdGFjaywgdiApIHtcblxuXHRcdGlmKCB0eXBlb2Ygc3RhY2sgPT09ICdvYmplY3QnICYmIHR5cGVvZiBzdGFjay5zZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRzdGFjay5zZXRBdHRyaWJ1dGUoICdkYXRhLXByZXZpb3VzLWluZGV4dicsIHYgfHwgMCApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgdmVydGljYWwgaW5kZXggd2hpY2ggd2FzIHN0b3JlZCB1c2luZ1xuXHQgKiAjc2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCkgb3IgMCBpZiBubyBwcmV2aW91cyBpbmRleFxuXHQgKiBleGlzdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YWNrIFRoZSB2ZXJ0aWNhbCBzdGFjayBlbGVtZW50XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIHN0YWNrICkge1xuXG5cdFx0aWYoIHR5cGVvZiBzdGFjayA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHN0YWNrLnNldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzdGFjay5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcblx0XHRcdC8vIFByZWZlciBtYW51YWxseSBkZWZpbmVkIHN0YXJ0LWluZGV4dlxuXHRcdFx0dmFyIGF0dHJpYnV0ZU5hbWUgPSBzdGFjay5oYXNBdHRyaWJ1dGUoICdkYXRhLXN0YXJ0LWluZGV4dicgKSA/ICdkYXRhLXN0YXJ0LWluZGV4dicgOiAnZGF0YS1wcmV2aW91cy1pbmRleHYnO1xuXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHN0YWNrLmdldEF0dHJpYnV0ZSggYXR0cmlidXRlTmFtZSApIHx8IDAsIDEwICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5cyB0aGUgb3ZlcnZpZXcgb2Ygc2xpZGVzIChxdWljayBuYXYpIGJ5IHNjYWxpbmdcblx0ICogZG93biBhbmQgYXJyYW5naW5nIGFsbCBzbGlkZSBlbGVtZW50cy5cblx0ICovXG5cdGZ1bmN0aW9uIGFjdGl2YXRlT3ZlcnZpZXcoKSB7XG5cblx0XHQvLyBPbmx5IHByb2NlZWQgaWYgZW5hYmxlZCBpbiBjb25maWdcblx0XHRpZiggY29uZmlnLm92ZXJ2aWV3ICYmICFpc092ZXJ2aWV3KCkgKSB7XG5cblx0XHRcdG92ZXJ2aWV3ID0gdHJ1ZTtcblxuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ292ZXJ2aWV3JyApO1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3LWRlYWN0aXZhdGluZycgKTtcblxuXHRcdFx0aWYoIGZlYXR1cmVzLm92ZXJ2aWV3VHJhbnNpdGlvbnMgKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdvdmVydmlldy1hbmltYXRlZCcgKTtcblx0XHRcdFx0fSwgMSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEb24ndCBhdXRvLXNsaWRlIHdoaWxlIGluIG92ZXJ2aWV3IG1vZGVcblx0XHRcdGNhbmNlbEF1dG9TbGlkZSgpO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBiYWNrZ3JvdW5kcyBlbGVtZW50IGludG8gdGhlIHNsaWRlIGNvbnRhaW5lciB0b1xuXHRcdFx0Ly8gdGhhdCB0aGUgc2FtZSBzY2FsaW5nIGlzIGFwcGxpZWRcblx0XHRcdGRvbS5zbGlkZXMuYXBwZW5kQ2hpbGQoIGRvbS5iYWNrZ3JvdW5kICk7XG5cblx0XHRcdC8vIENsaWNraW5nIG9uIGFuIG92ZXJ2aWV3IHNsaWRlIG5hdmlnYXRlcyB0byBpdFxuXHRcdFx0dG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGUgKSB7XG5cdFx0XHRcdGlmKCAhc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgKSB7XG5cdFx0XHRcdFx0c2xpZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25PdmVydmlld1NsaWRlQ2xpY2tlZCwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkoKTtcblx0XHRcdGxheW91dE92ZXJ2aWV3KCk7XG5cdFx0XHR1cGRhdGVPdmVydmlldygpO1xuXG5cdFx0XHRsYXlvdXQoKTtcblxuXHRcdFx0Ly8gTm90aWZ5IG9ic2VydmVycyBvZiB0aGUgb3ZlcnZpZXcgc2hvd2luZ1xuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ292ZXJ2aWV3c2hvd24nLCB7XG5cdFx0XHRcdCdpbmRleGgnOiBpbmRleGgsXG5cdFx0XHRcdCdpbmRleHYnOiBpbmRleHYsXG5cdFx0XHRcdCdjdXJyZW50U2xpZGUnOiBjdXJyZW50U2xpZGVcblx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVzZXMgQ1NTIHRyYW5zZm9ybXMgdG8gcG9zaXRpb24gYWxsIHNsaWRlcyBpbiBhIGdyaWQgZm9yXG5cdCAqIGRpc3BsYXkgaW5zaWRlIG9mIHRoZSBvdmVydmlldyBtb2RlLlxuXHQgKi9cblx0ZnVuY3Rpb24gbGF5b3V0T3ZlcnZpZXcoKSB7XG5cblx0XHR2YXIgbWFyZ2luID0gNzA7XG5cdFx0dmFyIHNsaWRlV2lkdGggPSBjb25maWcud2lkdGggKyBtYXJnaW4sXG5cdFx0XHRzbGlkZUhlaWdodCA9IGNvbmZpZy5oZWlnaHQgKyBtYXJnaW47XG5cblx0XHQvLyBSZXZlcnNlIGluIFJUTCBtb2RlXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRzbGlkZVdpZHRoID0gLXNsaWRlV2lkdGg7XG5cdFx0fVxuXG5cdFx0Ly8gTGF5b3V0IHNsaWRlc1xuXHRcdHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggaHNsaWRlLCBoICkge1xuXHRcdFx0aHNsaWRlLnNldEF0dHJpYnV0ZSggJ2RhdGEtaW5kZXgtaCcsIGggKTtcblx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIGhzbGlkZSwgJ3RyYW5zbGF0ZTNkKCcgKyAoIGggKiBzbGlkZVdpZHRoICkgKyAncHgsIDAsIDApJyApO1xuXG5cdFx0XHRpZiggaHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuXG5cdFx0XHRcdHRvQXJyYXkoIGhzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApLmZvckVhY2goIGZ1bmN0aW9uKCB2c2xpZGUsIHYgKSB7XG5cdFx0XHRcdFx0dnNsaWRlLnNldEF0dHJpYnV0ZSggJ2RhdGEtaW5kZXgtaCcsIGggKTtcblx0XHRcdFx0XHR2c2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC12JywgdiApO1xuXG5cdFx0XHRcdFx0dHJhbnNmb3JtRWxlbWVudCggdnNsaWRlLCAndHJhbnNsYXRlM2QoMCwgJyArICggdiAqIHNsaWRlSGVpZ2h0ICkgKyAncHgsIDApJyApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBMYXlvdXQgc2xpZGUgYmFja2dyb3VuZHNcblx0XHR0b0FycmF5KCBkb20uYmFja2dyb3VuZC5jaGlsZE5vZGVzICkuZm9yRWFjaCggZnVuY3Rpb24oIGhiYWNrZ3JvdW5kLCBoICkge1xuXHRcdFx0dHJhbnNmb3JtRWxlbWVudCggaGJhY2tncm91bmQsICd0cmFuc2xhdGUzZCgnICsgKCBoICogc2xpZGVXaWR0aCApICsgJ3B4LCAwLCAwKScgKTtcblxuXHRcdFx0dG9BcnJheSggaGJhY2tncm91bmQucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIHZiYWNrZ3JvdW5kLCB2ICkge1xuXHRcdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCB2YmFja2dyb3VuZCwgJ3RyYW5zbGF0ZTNkKDAsICcgKyAoIHYgKiBzbGlkZUhlaWdodCApICsgJ3B4LCAwKScgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlcyB0aGUgb3ZlcnZpZXcgdmlld3BvcnQgdG8gdGhlIGN1cnJlbnQgc2xpZGVzLlxuXHQgKiBDYWxsZWQgZWFjaCB0aW1lIHRoZSBjdXJyZW50IHNsaWRlIGNoYW5nZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVPdmVydmlldygpIHtcblxuXHRcdHZhciBtYXJnaW4gPSA3MDtcblx0XHR2YXIgc2xpZGVXaWR0aCA9IGNvbmZpZy53aWR0aCArIG1hcmdpbixcblx0XHRcdHNsaWRlSGVpZ2h0ID0gY29uZmlnLmhlaWdodCArIG1hcmdpbjtcblxuXHRcdC8vIFJldmVyc2UgaW4gUlRMIG1vZGVcblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdHNsaWRlV2lkdGggPSAtc2xpZGVXaWR0aDtcblx0XHR9XG5cblx0XHR0cmFuc2Zvcm1TbGlkZXMoIHtcblx0XHRcdG92ZXJ2aWV3OiBbXG5cdFx0XHRcdCd0cmFuc2xhdGVYKCcrICggLWluZGV4aCAqIHNsaWRlV2lkdGggKSArJ3B4KScsXG5cdFx0XHRcdCd0cmFuc2xhdGVZKCcrICggLWluZGV4diAqIHNsaWRlSGVpZ2h0ICkgKydweCknLFxuXHRcdFx0XHQndHJhbnNsYXRlWignKyAoIHdpbmRvdy5pbm5lcldpZHRoIDwgNDAwID8gLTEwMDAgOiAtMjUwMCApICsncHgpJ1xuXHRcdFx0XS5qb2luKCAnICcgKVxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEV4aXRzIHRoZSBzbGlkZSBvdmVydmlldyBhbmQgZW50ZXJzIHRoZSBjdXJyZW50bHlcblx0ICogYWN0aXZlIHNsaWRlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGVhY3RpdmF0ZU92ZXJ2aWV3KCkge1xuXG5cdFx0Ly8gT25seSBwcm9jZWVkIGlmIGVuYWJsZWQgaW4gY29uZmlnXG5cdFx0aWYoIGNvbmZpZy5vdmVydmlldyApIHtcblxuXHRcdFx0b3ZlcnZpZXcgPSBmYWxzZTtcblxuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3JyApO1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3LWFuaW1hdGVkJyApO1xuXG5cdFx0XHQvLyBUZW1wb3JhcmlseSBhZGQgYSBjbGFzcyBzbyB0aGF0IHRyYW5zaXRpb25zIGNhbiBkbyBkaWZmZXJlbnQgdGhpbmdzXG5cdFx0XHQvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGV5IGFyZSBleGl0aW5nL2VudGVyaW5nIG92ZXJ2aWV3LCBvciBqdXN0XG5cdFx0XHQvLyBtb3ZpbmcgZnJvbSBzbGlkZSB0byBzbGlkZVxuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ292ZXJ2aWV3LWRlYWN0aXZhdGluZycgKTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnb3ZlcnZpZXctZGVhY3RpdmF0aW5nJyApO1xuXHRcdFx0fSwgMSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQgYmFjayBvdXRcblx0XHRcdGRvbS53cmFwcGVyLmFwcGVuZENoaWxkKCBkb20uYmFja2dyb3VuZCApO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBjaGFuZ2VzIG1hZGUgdG8gc2xpZGVzXG5cdFx0XHR0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZSApIHtcblx0XHRcdFx0dHJhbnNmb3JtRWxlbWVudCggc2xpZGUsICcnICk7XG5cblx0XHRcdFx0c2xpZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25PdmVydmlld1NsaWRlQ2xpY2tlZCwgdHJ1ZSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBjaGFuZ2VzIG1hZGUgdG8gYmFja2dyb3VuZHNcblx0XHRcdHRvQXJyYXkoIGRvbS5iYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3JBbGwoICcuc2xpZGUtYmFja2dyb3VuZCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBiYWNrZ3JvdW5kICkge1xuXHRcdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCBiYWNrZ3JvdW5kLCAnJyApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHR0cmFuc2Zvcm1TbGlkZXMoIHsgb3ZlcnZpZXc6ICcnIH0gKTtcblxuXHRcdFx0c2xpZGUoIGluZGV4aCwgaW5kZXh2ICk7XG5cblx0XHRcdGxheW91dCgpO1xuXG5cdFx0XHRjdWVBdXRvU2xpZGUoKTtcblxuXHRcdFx0Ly8gTm90aWZ5IG9ic2VydmVycyBvZiB0aGUgb3ZlcnZpZXcgaGlkaW5nXG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAnb3ZlcnZpZXdoaWRkZW4nLCB7XG5cdFx0XHRcdCdpbmRleGgnOiBpbmRleGgsXG5cdFx0XHRcdCdpbmRleHYnOiBpbmRleHYsXG5cdFx0XHRcdCdjdXJyZW50U2xpZGUnOiBjdXJyZW50U2xpZGVcblx0XHRcdH0gKTtcblxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBzbGlkZSBvdmVydmlldyBtb2RlIG9uIGFuZCBvZmYuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gb3ZlcnJpZGUgT3B0aW9uYWwgZmxhZyB3aGljaCBvdmVycmlkZXMgdGhlXG5cdCAqIHRvZ2dsZSBsb2dpYyBhbmQgZm9yY2libHkgc2V0cyB0aGUgZGVzaXJlZCBzdGF0ZS4gVHJ1ZSBtZWFuc1xuXHQgKiBvdmVydmlldyBpcyBvcGVuLCBmYWxzZSBtZWFucyBpdCdzIGNsb3NlZC5cblx0ICovXG5cdGZ1bmN0aW9uIHRvZ2dsZU92ZXJ2aWV3KCBvdmVycmlkZSApIHtcblxuXHRcdGlmKCB0eXBlb2Ygb3ZlcnJpZGUgPT09ICdib29sZWFuJyApIHtcblx0XHRcdG92ZXJyaWRlID8gYWN0aXZhdGVPdmVydmlldygpIDogZGVhY3RpdmF0ZU92ZXJ2aWV3KCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aXNPdmVydmlldygpID8gZGVhY3RpdmF0ZU92ZXJ2aWV3KCkgOiBhY3RpdmF0ZU92ZXJ2aWV3KCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHRoZSBvdmVydmlldyBpcyBjdXJyZW50bHkgYWN0aXZlLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvdmVydmlldyBpcyBhY3RpdmUsXG5cdCAqIGZhbHNlIG90aGVyd2lzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNPdmVydmlldygpIHtcblxuXHRcdHJldHVybiBvdmVydmlldztcblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBvciBzcGVjaWZpZWQgc2xpZGUgaXMgdmVydGljYWxcblx0ICogKG5lc3RlZCB3aXRoaW4gYW5vdGhlciBzbGlkZSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlIFtvcHRpb25hbF0gVGhlIHNsaWRlIHRvIGNoZWNrXG5cdCAqIG9yaWVudGF0aW9uIG9mXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1ZlcnRpY2FsU2xpZGUoIHNsaWRlICkge1xuXG5cdFx0Ly8gUHJlZmVyIHNsaWRlIGFyZ3VtZW50LCBvdGhlcndpc2UgdXNlIGN1cnJlbnQgc2xpZGVcblx0XHRzbGlkZSA9IHNsaWRlID8gc2xpZGUgOiBjdXJyZW50U2xpZGU7XG5cblx0XHRyZXR1cm4gc2xpZGUgJiYgc2xpZGUucGFyZW50Tm9kZSAmJiAhIXNsaWRlLnBhcmVudE5vZGUubm9kZU5hbWUubWF0Y2goIC9zZWN0aW9uL2kgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsaW5nIHRoZSBmdWxsc2NyZWVuIGZ1bmN0aW9uYWxpdHkgdmlhIHRoZSBmdWxsc2NyZWVuIEFQSVxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZy9cblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0RPTS9Vc2luZ19mdWxsc2NyZWVuX21vZGVcblx0ICovXG5cdGZ1bmN0aW9uIGVudGVyRnVsbHNjcmVlbigpIHtcblxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdC8vIENoZWNrIHdoaWNoIGltcGxlbWVudGF0aW9uIGlzIGF2YWlsYWJsZVxuXHRcdHZhciByZXF1ZXN0TWV0aG9kID0gZWxlbWVudC5yZXF1ZXN0RnVsbFNjcmVlbiB8fFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4gfHxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW47XG5cblx0XHRpZiggcmVxdWVzdE1ldGhvZCApIHtcblx0XHRcdHJlcXVlc3RNZXRob2QuYXBwbHkoIGVsZW1lbnQgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFbnRlcnMgdGhlIHBhdXNlZCBtb2RlIHdoaWNoIGZhZGVzIGV2ZXJ5dGhpbmcgb24gc2NyZWVuIHRvXG5cdCAqIGJsYWNrLlxuXHQgKi9cblx0ZnVuY3Rpb24gcGF1c2UoKSB7XG5cblx0XHRpZiggY29uZmlnLnBhdXNlICkge1xuXHRcdFx0dmFyIHdhc1BhdXNlZCA9IGRvbS53cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggJ3BhdXNlZCcgKTtcblxuXHRcdFx0Y2FuY2VsQXV0b1NsaWRlKCk7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAncGF1c2VkJyApO1xuXG5cdFx0XHRpZiggd2FzUGF1c2VkID09PSBmYWxzZSApIHtcblx0XHRcdFx0ZGlzcGF0Y2hFdmVudCggJ3BhdXNlZCcgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0cyBmcm9tIHRoZSBwYXVzZWQgbW9kZS5cblx0ICovXG5cdGZ1bmN0aW9uIHJlc3VtZSgpIHtcblxuXHRcdHZhciB3YXNQYXVzZWQgPSBkb20ud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoICdwYXVzZWQnICk7XG5cdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ3BhdXNlZCcgKTtcblxuXHRcdGN1ZUF1dG9TbGlkZSgpO1xuXG5cdFx0aWYoIHdhc1BhdXNlZCApIHtcblx0XHRcdGRpc3BhdGNoRXZlbnQoICdyZXN1bWVkJyApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIHBhdXNlZCBtb2RlIG9uIGFuZCBvZmYuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b2dnbGVQYXVzZSggb3ZlcnJpZGUgKSB7XG5cblx0XHRpZiggdHlwZW9mIG92ZXJyaWRlID09PSAnYm9vbGVhbicgKSB7XG5cdFx0XHRvdmVycmlkZSA/IHBhdXNlKCkgOiByZXN1bWUoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpc1BhdXNlZCgpID8gcmVzdW1lKCkgOiBwYXVzZSgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB3ZSBhcmUgY3VycmVudGx5IGluIHRoZSBwYXVzZWQgbW9kZS5cblx0ICovXG5cdGZ1bmN0aW9uIGlzUGF1c2VkKCkge1xuXG5cdFx0cmV0dXJuIGRvbS53cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggJ3BhdXNlZCcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIGF1dG8gc2xpZGUgbW9kZSBvbiBhbmQgb2ZmLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJyaWRlIE9wdGlvbmFsIGZsYWcgd2hpY2ggc2V0cyB0aGUgZGVzaXJlZCBzdGF0ZS5cblx0ICogVHJ1ZSBtZWFucyBhdXRvcGxheSBzdGFydHMsIGZhbHNlIG1lYW5zIGl0IHN0b3BzLlxuXHQgKi9cblxuXHRmdW5jdGlvbiB0b2dnbGVBdXRvU2xpZGUoIG92ZXJyaWRlICkge1xuXG5cdFx0aWYoIHR5cGVvZiBvdmVycmlkZSA9PT0gJ2Jvb2xlYW4nICkge1xuXHRcdFx0b3ZlcnJpZGUgPyByZXN1bWVBdXRvU2xpZGUoKSA6IHBhdXNlQXV0b1NsaWRlKCk7XG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cdFx0XHRhdXRvU2xpZGVQYXVzZWQgPyByZXN1bWVBdXRvU2xpZGUoKSA6IHBhdXNlQXV0b1NsaWRlKCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHRoZSBhdXRvIHNsaWRlIG1vZGUgaXMgY3VycmVudGx5IG9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBdXRvU2xpZGluZygpIHtcblxuXHRcdHJldHVybiAhISggYXV0b1NsaWRlICYmICFhdXRvU2xpZGVQYXVzZWQgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFN0ZXBzIGZyb20gdGhlIGN1cnJlbnQgcG9pbnQgaW4gdGhlIHByZXNlbnRhdGlvbiB0byB0aGVcblx0ICogc2xpZGUgd2hpY2ggbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGhvcml6b250YWwgYW5kIHZlcnRpY2FsXG5cdCAqIGluZGljZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7aW50fSBoIEhvcml6b250YWwgaW5kZXggb2YgdGhlIHRhcmdldCBzbGlkZVxuXHQgKiBAcGFyYW0ge2ludH0gdiBWZXJ0aWNhbCBpbmRleCBvZiB0aGUgdGFyZ2V0IHNsaWRlXG5cdCAqIEBwYXJhbSB7aW50fSBmIE9wdGlvbmFsIGluZGV4IG9mIGEgZnJhZ21lbnQgd2l0aGluIHRoZVxuXHQgKiB0YXJnZXQgc2xpZGUgdG8gYWN0aXZhdGVcblx0ICogQHBhcmFtIHtpbnR9IG8gT3B0aW9uYWwgb3JpZ2luIGZvciB1c2UgaW4gbXVsdGltYXN0ZXIgZW52aXJvbm1lbnRzXG5cdCAqL1xuXHRmdW5jdGlvbiBzbGlkZSggaCwgdiwgZiwgbyApIHtcblxuXHRcdC8vIFJlbWVtYmVyIHdoZXJlIHdlIHdlcmUgYXQgYmVmb3JlXG5cdFx0cHJldmlvdXNTbGlkZSA9IGN1cnJlbnRTbGlkZTtcblxuXHRcdC8vIFF1ZXJ5IGFsbCBob3Jpem9udGFsIHNsaWRlcyBpbiB0aGUgZGVja1xuXHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKTtcblxuXHRcdC8vIElmIG5vIHZlcnRpY2FsIGluZGV4IGlzIHNwZWNpZmllZCBhbmQgdGhlIHVwY29taW5nIHNsaWRlIGlzIGFcblx0XHQvLyBzdGFjaywgcmVzdW1lIGF0IGl0cyBwcmV2aW91cyB2ZXJ0aWNhbCBpbmRleFxuXHRcdGlmKCB2ID09PSB1bmRlZmluZWQgJiYgIWlzT3ZlcnZpZXcoKSApIHtcblx0XHRcdHYgPSBnZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIGhvcml6b250YWxTbGlkZXNbIGggXSApO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIHdlcmUgb24gYSB2ZXJ0aWNhbCBzdGFjaywgcmVtZW1iZXIgd2hhdCB2ZXJ0aWNhbCBpbmRleFxuXHRcdC8vIGl0IHdhcyBvbiBzbyB3ZSBjYW4gcmVzdW1lIGF0IHRoZSBzYW1lIHBvc2l0aW9uIHdoZW4gcmV0dXJuaW5nXG5cdFx0aWYoIHByZXZpb3VzU2xpZGUgJiYgcHJldmlvdXNTbGlkZS5wYXJlbnROb2RlICYmIHByZXZpb3VzU2xpZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcblx0XHRcdHNldFByZXZpb3VzVmVydGljYWxJbmRleCggcHJldmlvdXNTbGlkZS5wYXJlbnROb2RlLCBpbmRleHYgKTtcblx0XHR9XG5cblx0XHQvLyBSZW1lbWJlciB0aGUgc3RhdGUgYmVmb3JlIHRoaXMgc2xpZGVcblx0XHR2YXIgc3RhdGVCZWZvcmUgPSBzdGF0ZS5jb25jYXQoKTtcblxuXHRcdC8vIFJlc2V0IHRoZSBzdGF0ZSBhcnJheVxuXHRcdHN0YXRlLmxlbmd0aCA9IDA7XG5cblx0XHR2YXIgaW5kZXhoQmVmb3JlID0gaW5kZXhoIHx8IDAsXG5cdFx0XHRpbmRleHZCZWZvcmUgPSBpbmRleHYgfHwgMDtcblxuXHRcdC8vIEFjdGl2YXRlIGFuZCB0cmFuc2l0aW9uIHRvIHRoZSBuZXcgc2xpZGVcblx0XHRpbmRleGggPSB1cGRhdGVTbGlkZXMoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SLCBoID09PSB1bmRlZmluZWQgPyBpbmRleGggOiBoICk7XG5cdFx0aW5kZXh2ID0gdXBkYXRlU2xpZGVzKCBWRVJUSUNBTF9TTElERVNfU0VMRUNUT1IsIHYgPT09IHVuZGVmaW5lZCA/IGluZGV4diA6IHYgKTtcblxuXHRcdC8vIFVwZGF0ZSB0aGUgdmlzaWJpbGl0eSBvZiBzbGlkZXMgbm93IHRoYXQgdGhlIGluZGljZXMgaGF2ZSBjaGFuZ2VkXG5cdFx0dXBkYXRlU2xpZGVzVmlzaWJpbGl0eSgpO1xuXG5cdFx0bGF5b3V0KCk7XG5cblx0XHQvLyBBcHBseSB0aGUgbmV3IHN0YXRlXG5cdFx0c3RhdGVMb29wOiBmb3IoIHZhciBpID0gMCwgbGVuID0gc3RhdGUubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGlzIHN0YXRlIGV4aXN0ZWQgb24gdGhlIHByZXZpb3VzIHNsaWRlLiBJZiBpdFxuXHRcdFx0Ly8gZGlkLCB3ZSB3aWxsIGF2b2lkIGFkZGluZyBpdCByZXBlYXRlZGx5XG5cdFx0XHRmb3IoIHZhciBqID0gMDsgaiA8IHN0YXRlQmVmb3JlLmxlbmd0aDsgaisrICkge1xuXHRcdFx0XHRpZiggc3RhdGVCZWZvcmVbal0gPT09IHN0YXRlW2ldICkge1xuXHRcdFx0XHRcdHN0YXRlQmVmb3JlLnNwbGljZSggaiwgMSApO1xuXHRcdFx0XHRcdGNvbnRpbnVlIHN0YXRlTG9vcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCggc3RhdGVbaV0gKTtcblxuXHRcdFx0Ly8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IG1hdGNoaW5nIHRoZSBzdGF0ZSdzIG5hbWVcblx0XHRcdGRpc3BhdGNoRXZlbnQoIHN0YXRlW2ldICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYW4gdXAgdGhlIHJlbWFpbnMgb2YgdGhlIHByZXZpb3VzIHN0YXRlXG5cdFx0d2hpbGUoIHN0YXRlQmVmb3JlLmxlbmd0aCApIHtcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBzdGF0ZUJlZm9yZS5wb3AoKSApO1xuXHRcdH1cblxuXHRcdC8vIFVwZGF0ZSB0aGUgb3ZlcnZpZXcgaWYgaXQncyBjdXJyZW50bHkgYWN0aXZlXG5cdFx0aWYoIGlzT3ZlcnZpZXcoKSApIHtcblx0XHRcdHVwZGF0ZU92ZXJ2aWV3KCk7XG5cdFx0fVxuXG5cdFx0Ly8gRmluZCB0aGUgY3VycmVudCBob3Jpem9udGFsIHNsaWRlIGFuZCBhbnkgcG9zc2libGUgdmVydGljYWwgc2xpZGVzXG5cdFx0Ly8gd2l0aGluIGl0XG5cdFx0dmFyIGN1cnJlbnRIb3Jpem9udGFsU2xpZGUgPSBob3Jpem9udGFsU2xpZGVzWyBpbmRleGggXSxcblx0XHRcdGN1cnJlbnRWZXJ0aWNhbFNsaWRlcyA9IGN1cnJlbnRIb3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICk7XG5cblx0XHQvLyBTdG9yZSByZWZlcmVuY2VzIHRvIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBzbGlkZXNcblx0XHRjdXJyZW50U2xpZGUgPSBjdXJyZW50VmVydGljYWxTbGlkZXNbIGluZGV4diBdIHx8IGN1cnJlbnRIb3Jpem9udGFsU2xpZGU7XG5cblx0XHQvLyBTaG93IGZyYWdtZW50LCBpZiBzcGVjaWZpZWRcblx0XHRpZiggdHlwZW9mIGYgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0bmF2aWdhdGVGcmFnbWVudCggZiApO1xuXHRcdH1cblxuXHRcdC8vIERpc3BhdGNoIGFuIGV2ZW50IGlmIHRoZSBzbGlkZSBjaGFuZ2VkXG5cdFx0dmFyIHNsaWRlQ2hhbmdlZCA9ICggaW5kZXhoICE9PSBpbmRleGhCZWZvcmUgfHwgaW5kZXh2ICE9PSBpbmRleHZCZWZvcmUgKTtcblx0XHRpZiggc2xpZGVDaGFuZ2VkICkge1xuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ3NsaWRlY2hhbmdlZCcsIHtcblx0XHRcdFx0J2luZGV4aCc6IGluZGV4aCxcblx0XHRcdFx0J2luZGV4dic6IGluZGV4dixcblx0XHRcdFx0J3ByZXZpb3VzU2xpZGUnOiBwcmV2aW91c1NsaWRlLFxuXHRcdFx0XHQnY3VycmVudFNsaWRlJzogY3VycmVudFNsaWRlLFxuXHRcdFx0XHQnb3JpZ2luJzogb1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIEVuc3VyZSB0aGF0IHRoZSBwcmV2aW91cyBzbGlkZSBpcyBuZXZlciB0aGUgc2FtZSBhcyB0aGUgY3VycmVudFxuXHRcdFx0cHJldmlvdXNTbGlkZSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gU29sdmVzIGFuIGVkZ2UgY2FzZSB3aGVyZSB0aGUgcHJldmlvdXMgc2xpZGUgbWFpbnRhaW5zIHRoZVxuXHRcdC8vICdwcmVzZW50JyBjbGFzcyB3aGVuIG5hdmlnYXRpbmcgYmV0d2VlbiBhZGphY2VudCB2ZXJ0aWNhbFxuXHRcdC8vIHN0YWNrc1xuXHRcdGlmKCBwcmV2aW91c1NsaWRlICkge1xuXHRcdFx0cHJldmlvdXNTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcblx0XHRcdHByZXZpb3VzU2xpZGUuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblxuXHRcdFx0Ly8gUmVzZXQgYWxsIHNsaWRlcyB1cG9uIG5hdmlnYXRlIHRvIGhvbWVcblx0XHRcdC8vIElzc3VlOiAjMjg1XG5cdFx0XHRpZiAoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoIEhPTUVfU0xJREVfU0VMRUNUT1IgKS5jbGFzc0xpc3QuY29udGFpbnMoICdwcmVzZW50JyApICkge1xuXHRcdFx0XHQvLyBMYXVuY2ggYXN5bmMgdGFza1xuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIHNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICsgJy5zdGFjaycpICksIGk7XG5cdFx0XHRcdFx0Zm9yKCBpIGluIHNsaWRlcyApIHtcblx0XHRcdFx0XHRcdGlmKCBzbGlkZXNbaV0gKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHN0YWNrXG5cdFx0XHRcdFx0XHRcdHNldFByZXZpb3VzVmVydGljYWxJbmRleCggc2xpZGVzW2ldLCAwICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAwICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIGVtYmVkZGVkIGNvbnRlbnRcblx0XHRpZiggc2xpZGVDaGFuZ2VkIHx8ICFwcmV2aW91c1NsaWRlICkge1xuXHRcdFx0c3RvcEVtYmVkZGVkQ29udGVudCggcHJldmlvdXNTbGlkZSApO1xuXHRcdFx0c3RhcnRFbWJlZGRlZENvbnRlbnQoIGN1cnJlbnRTbGlkZSApO1xuXHRcdH1cblxuXHRcdC8vIEFubm91bmNlIHRoZSBjdXJyZW50IHNsaWRlIGNvbnRlbnRzLCBmb3Igc2NyZWVuIHJlYWRlcnNcblx0XHRkb20uc3RhdHVzRGl2LnRleHRDb250ZW50ID0gY3VycmVudFNsaWRlLnRleHRDb250ZW50O1xuXG5cdFx0dXBkYXRlQ29udHJvbHMoKTtcblx0XHR1cGRhdGVQcm9ncmVzcygpO1xuXHRcdHVwZGF0ZUJhY2tncm91bmQoKTtcblx0XHR1cGRhdGVQYXJhbGxheCgpO1xuXHRcdHVwZGF0ZVNsaWRlTnVtYmVyKCk7XG5cblx0XHQvLyBVcGRhdGUgdGhlIFVSTCBoYXNoXG5cdFx0d3JpdGVVUkwoKTtcblxuXHRcdGN1ZUF1dG9TbGlkZSgpO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3luY3MgdGhlIHByZXNlbnRhdGlvbiB3aXRoIHRoZSBjdXJyZW50IERPTS4gVXNlZnVsXG5cdCAqIHdoZW4gbmV3IHNsaWRlcyBvciBjb250cm9sIGVsZW1lbnRzIGFyZSBhZGRlZCBvciB3aGVuXG5cdCAqIHRoZSBjb25maWd1cmF0aW9uIGhhcyBjaGFuZ2VkLlxuXHQgKi9cblx0ZnVuY3Rpb24gc3luYygpIHtcblxuXHRcdC8vIFN1YnNjcmliZSB0byBpbnB1dFxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cdFx0YWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdC8vIEZvcmNlIGEgbGF5b3V0IHRvIG1ha2Ugc3VyZSB0aGUgY3VycmVudCBjb25maWcgaXMgYWNjb3VudGVkIGZvclxuXHRcdGxheW91dCgpO1xuXG5cdFx0Ly8gUmVmbGVjdCB0aGUgY3VycmVudCBhdXRvU2xpZGUgdmFsdWVcblx0XHRhdXRvU2xpZGUgPSBjb25maWcuYXV0b1NsaWRlO1xuXG5cdFx0Ly8gU3RhcnQgYXV0by1zbGlkaW5nIGlmIGl0J3MgZW5hYmxlZFxuXHRcdGN1ZUF1dG9TbGlkZSgpO1xuXG5cdFx0Ly8gUmUtY3JlYXRlIHRoZSBzbGlkZSBiYWNrZ3JvdW5kc1xuXHRcdGNyZWF0ZUJhY2tncm91bmRzKCk7XG5cblx0XHQvLyBXcml0ZSB0aGUgY3VycmVudCBoYXNoIHRvIHRoZSBVUkxcblx0XHR3cml0ZVVSTCgpO1xuXG5cdFx0c29ydEFsbEZyYWdtZW50cygpO1xuXG5cdFx0dXBkYXRlQ29udHJvbHMoKTtcblx0XHR1cGRhdGVQcm9ncmVzcygpO1xuXHRcdHVwZGF0ZUJhY2tncm91bmQoIHRydWUgKTtcblx0XHR1cGRhdGVTbGlkZU51bWJlcigpO1xuXHRcdHVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkoKTtcblxuXHRcdGZvcm1hdEVtYmVkZGVkQ29udGVudCgpO1xuXHRcdHN0YXJ0RW1iZWRkZWRDb250ZW50KCBjdXJyZW50U2xpZGUgKTtcblxuXHRcdGlmKCBpc092ZXJ2aWV3KCkgKSB7XG5cdFx0XHRsYXlvdXRPdmVydmlldygpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlc2V0cyBhbGwgdmVydGljYWwgc2xpZGVzIHNvIHRoYXQgb25seSB0aGUgZmlyc3Rcblx0ICogaXMgdmlzaWJsZS5cblx0ICovXG5cdGZ1bmN0aW9uIHJlc2V0VmVydGljYWxTbGlkZXMoKSB7XG5cblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcblx0XHRob3Jpem9udGFsU2xpZGVzLmZvckVhY2goIGZ1bmN0aW9uKCBob3Jpem9udGFsU2xpZGUgKSB7XG5cblx0XHRcdHZhciB2ZXJ0aWNhbFNsaWRlcyA9IHRvQXJyYXkoIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApO1xuXHRcdFx0dmVydGljYWxTbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHZlcnRpY2FsU2xpZGUsIHkgKSB7XG5cblx0XHRcdFx0aWYoIHkgPiAwICkge1xuXHRcdFx0XHRcdHZlcnRpY2FsU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSggJ3ByZXNlbnQnICk7XG5cdFx0XHRcdFx0dmVydGljYWxTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAncGFzdCcgKTtcblx0XHRcdFx0XHR2ZXJ0aWNhbFNsaWRlLmNsYXNzTGlzdC5hZGQoICdmdXR1cmUnICk7XG5cdFx0XHRcdFx0dmVydGljYWxTbGlkZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNvcnRzIGFuZCBmb3JtYXRzIGFsbCBvZiBmcmFnbWVudHMgaW4gdGhlXG5cdCAqIHByZXNlbnRhdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIHNvcnRBbGxGcmFnbWVudHMoKSB7XG5cblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcblx0XHRob3Jpem9udGFsU2xpZGVzLmZvckVhY2goIGZ1bmN0aW9uKCBob3Jpem9udGFsU2xpZGUgKSB7XG5cblx0XHRcdHZhciB2ZXJ0aWNhbFNsaWRlcyA9IHRvQXJyYXkoIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApO1xuXHRcdFx0dmVydGljYWxTbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHZlcnRpY2FsU2xpZGUsIHkgKSB7XG5cblx0XHRcdFx0c29ydEZyYWdtZW50cyggdmVydGljYWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYoIHZlcnRpY2FsU2xpZGVzLmxlbmd0aCA9PT0gMCApIHNvcnRGcmFnbWVudHMoIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIG9uZSBkaW1lbnNpb24gb2Ygc2xpZGVzIGJ5IHNob3dpbmcgdGhlIHNsaWRlXG5cdCAqIHdpdGggdGhlIHNwZWNpZmllZCBpbmRleC5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIEEgQ1NTIHNlbGVjdG9yIHRoYXQgd2lsbCBmZXRjaFxuXHQgKiB0aGUgZ3JvdXAgb2Ygc2xpZGVzIHdlIGFyZSB3b3JraW5nIHdpdGhcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgc2xpZGUgdGhhdCBzaG91bGQgYmVcblx0ICogc2hvd25cblx0ICpcblx0ICogQHJldHVybiB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIHNsaWRlIHRoYXQgaXMgbm93IHNob3duLFxuXHQgKiBtaWdodCBkaWZmZXIgZnJvbSB0aGUgcGFzc2VkIGluIGluZGV4IGlmIGl0IHdhcyBvdXQgb2Zcblx0ICogYm91bmRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCBzZWxlY3RvciwgaW5kZXggKSB7XG5cblx0XHQvLyBTZWxlY3QgYWxsIHNsaWRlcyBhbmQgY29udmVydCB0aGUgTm9kZUxpc3QgcmVzdWx0IHRvXG5cdFx0Ly8gYW4gYXJyYXlcblx0XHR2YXIgc2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKSApLFxuXHRcdFx0c2xpZGVzTGVuZ3RoID0gc2xpZGVzLmxlbmd0aDtcblxuXHRcdHZhciBwcmludE1vZGUgPSBpc1ByaW50aW5nUERGKCk7XG5cblx0XHRpZiggc2xpZGVzTGVuZ3RoICkge1xuXG5cdFx0XHQvLyBTaG91bGQgdGhlIGluZGV4IGxvb3A/XG5cdFx0XHRpZiggY29uZmlnLmxvb3AgKSB7XG5cdFx0XHRcdGluZGV4ICU9IHNsaWRlc0xlbmd0aDtcblxuXHRcdFx0XHRpZiggaW5kZXggPCAwICkge1xuXHRcdFx0XHRcdGluZGV4ID0gc2xpZGVzTGVuZ3RoICsgaW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRW5mb3JjZSBtYXggYW5kIG1pbmltdW0gaW5kZXggYm91bmRzXG5cdFx0XHRpbmRleCA9IE1hdGgubWF4KCBNYXRoLm1pbiggaW5kZXgsIHNsaWRlc0xlbmd0aCAtIDEgKSwgMCApO1xuXG5cdFx0XHRmb3IoIHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSsrICkge1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHNsaWRlc1tpXTtcblxuXHRcdFx0XHR2YXIgcmV2ZXJzZSA9IGNvbmZpZy5ydGwgJiYgIWlzVmVydGljYWxTbGlkZSggZWxlbWVudCApO1xuXG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3Bhc3QnICk7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3ByZXNlbnQnICk7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2Z1dHVyZScgKTtcblxuXHRcdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lZGl0aW5nLmh0bWwjdGhlLWhpZGRlbi1hdHRyaWJ1dGVcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdoaWRkZW4nLCAnJyApO1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cblx0XHRcdFx0Ly8gSWYgdGhpcyBlbGVtZW50IGNvbnRhaW5zIHZlcnRpY2FsIHNsaWRlc1xuXHRcdFx0XHRpZiggZWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnc2VjdGlvbicgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzdGFjaycgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIHByaW50aW5nIHN0YXRpYyBzbGlkZXMsIGFsbCBzbGlkZXMgYXJlIFwicHJlc2VudFwiXG5cdFx0XHRcdGlmKCBwcmludE1vZGUgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncHJlc2VudCcgKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCBpIDwgaW5kZXggKSB7XG5cdFx0XHRcdFx0Ly8gQW55IGVsZW1lbnQgcHJldmlvdXMgdG8gaW5kZXggaXMgZ2l2ZW4gdGhlICdwYXN0JyBjbGFzc1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggcmV2ZXJzZSA/ICdmdXR1cmUnIDogJ3Bhc3QnICk7XG5cblx0XHRcdFx0XHRpZiggY29uZmlnLmZyYWdtZW50cyApIHtcblx0XHRcdFx0XHRcdHZhciBwYXN0RnJhZ21lbnRzID0gdG9BcnJheSggZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICk7XG5cblx0XHRcdFx0XHRcdC8vIFNob3cgYWxsIGZyYWdtZW50cyBvbiBwcmlvciBzbGlkZXNcblx0XHRcdFx0XHRcdHdoaWxlKCBwYXN0RnJhZ21lbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBhc3RGcmFnbWVudCA9IHBhc3RGcmFnbWVudHMucG9wKCk7XG5cdFx0XHRcdFx0XHRcdHBhc3RGcmFnbWVudC5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcblx0XHRcdFx0XHRcdFx0cGFzdEZyYWdtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKCBpID4gaW5kZXggKSB7XG5cdFx0XHRcdFx0Ly8gQW55IGVsZW1lbnQgc3Vic2VxdWVudCB0byBpbmRleCBpcyBnaXZlbiB0aGUgJ2Z1dHVyZScgY2xhc3Ncblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHJldmVyc2UgPyAncGFzdCcgOiAnZnV0dXJlJyApO1xuXG5cdFx0XHRcdFx0aWYoIGNvbmZpZy5mcmFnbWVudHMgKSB7XG5cdFx0XHRcdFx0XHR2YXIgZnV0dXJlRnJhZ21lbnRzID0gdG9BcnJheSggZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50LnZpc2libGUnICkgKTtcblxuXHRcdFx0XHRcdFx0Ly8gTm8gZnJhZ21lbnRzIGluIGZ1dHVyZSBzbGlkZXMgc2hvdWxkIGJlIHZpc2libGUgYWhlYWQgb2YgdGltZVxuXHRcdFx0XHRcdFx0d2hpbGUoIGZ1dHVyZUZyYWdtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBmdXR1cmVGcmFnbWVudCA9IGZ1dHVyZUZyYWdtZW50cy5wb3AoKTtcblx0XHRcdFx0XHRcdFx0ZnV0dXJlRnJhZ21lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3Zpc2libGUnICk7XG5cdFx0XHRcdFx0XHRcdGZ1dHVyZUZyYWdtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXJrIHRoZSBjdXJyZW50IHNsaWRlIGFzIHByZXNlbnRcblx0XHRcdHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCggJ3ByZXNlbnQnICk7XG5cdFx0XHRzbGlkZXNbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZSggJ2hpZGRlbicgKTtcblx0XHRcdHNsaWRlc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nICk7XG5cblx0XHRcdC8vIElmIHRoaXMgc2xpZGUgaGFzIGEgc3RhdGUgYXNzb2NpYXRlZCB3aXRoIGl0LCBhZGQgaXRcblx0XHRcdC8vIG9udG8gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRlY2tcblx0XHRcdHZhciBzbGlkZVN0YXRlID0gc2xpZGVzW2luZGV4XS5nZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJyApO1xuXHRcdFx0aWYoIHNsaWRlU3RhdGUgKSB7XG5cdFx0XHRcdHN0YXRlID0gc3RhdGUuY29uY2F0KCBzbGlkZVN0YXRlLnNwbGl0KCAnICcgKSApO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gU2luY2UgdGhlcmUgYXJlIG5vIHNsaWRlcyB3ZSBjYW4ndCBiZSBhbnl3aGVyZSBiZXlvbmQgdGhlXG5cdFx0XHQvLyB6ZXJvdGggaW5kZXhcblx0XHRcdGluZGV4ID0gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBPcHRpbWl6YXRpb24gbWV0aG9kOyBoaWRlIGFsbCBzbGlkZXMgdGhhdCBhcmUgZmFyIGF3YXlcblx0ICogZnJvbSB0aGUgcHJlc2VudCBzbGlkZS5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkoKSB7XG5cblx0XHQvLyBTZWxlY3QgYWxsIHNsaWRlcyBhbmQgY29udmVydCB0aGUgTm9kZUxpc3QgcmVzdWx0IHRvXG5cdFx0Ly8gYW4gYXJyYXlcblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKSxcblx0XHRcdGhvcml6b250YWxTbGlkZXNMZW5ndGggPSBob3Jpem9udGFsU2xpZGVzLmxlbmd0aCxcblx0XHRcdGRpc3RhbmNlWCxcblx0XHRcdGRpc3RhbmNlWTtcblxuXHRcdGlmKCBob3Jpem9udGFsU2xpZGVzTGVuZ3RoICYmIHR5cGVvZiBpbmRleGggIT09ICd1bmRlZmluZWQnICkge1xuXG5cdFx0XHQvLyBUaGUgbnVtYmVyIG9mIHN0ZXBzIGF3YXkgZnJvbSB0aGUgcHJlc2VudCBzbGlkZSB0aGF0IHdpbGxcblx0XHRcdC8vIGJlIHZpc2libGVcblx0XHRcdHZhciB2aWV3RGlzdGFuY2UgPSBpc092ZXJ2aWV3KCkgPyAxMCA6IGNvbmZpZy52aWV3RGlzdGFuY2U7XG5cblx0XHRcdC8vIExpbWl0IHZpZXcgZGlzdGFuY2Ugb24gd2Vha2VyIGRldmljZXNcblx0XHRcdGlmKCBpc01vYmlsZURldmljZSApIHtcblx0XHRcdFx0dmlld0Rpc3RhbmNlID0gaXNPdmVydmlldygpID8gNiA6IDI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFsbCBzbGlkZXMgbmVlZCB0byBiZSB2aXNpYmxlIHdoZW4gZXhwb3J0aW5nIHRvIFBERlxuXHRcdFx0aWYoIGlzUHJpbnRpbmdQREYoKSApIHtcblx0XHRcdFx0dmlld0Rpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKCB2YXIgeCA9IDA7IHggPCBob3Jpem9udGFsU2xpZGVzTGVuZ3RoOyB4KysgKSB7XG5cdFx0XHRcdHZhciBob3Jpem9udGFsU2xpZGUgPSBob3Jpem9udGFsU2xpZGVzW3hdO1xuXG5cdFx0XHRcdHZhciB2ZXJ0aWNhbFNsaWRlcyA9IHRvQXJyYXkoIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApLFxuXHRcdFx0XHRcdHZlcnRpY2FsU2xpZGVzTGVuZ3RoID0gdmVydGljYWxTbGlkZXMubGVuZ3RoO1xuXG5cdFx0XHRcdC8vIERldGVybWluZSBob3cgZmFyIGF3YXkgdGhpcyBzbGlkZSBpcyBmcm9tIHRoZSBwcmVzZW50XG5cdFx0XHRcdGRpc3RhbmNlWCA9IE1hdGguYWJzKCAoIGluZGV4aCB8fCAwICkgLSB4ICkgfHwgMDtcblxuXHRcdFx0XHQvLyBJZiB0aGUgcHJlc2VudGF0aW9uIGlzIGxvb3BlZCwgZGlzdGFuY2Ugc2hvdWxkIG1lYXN1cmVcblx0XHRcdFx0Ly8gMSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCBzbGlkZXNcblx0XHRcdFx0aWYoIGNvbmZpZy5sb29wICkge1xuXHRcdFx0XHRcdGRpc3RhbmNlWCA9IE1hdGguYWJzKCAoICggaW5kZXhoIHx8IDAgKSAtIHggKSAlICggaG9yaXpvbnRhbFNsaWRlc0xlbmd0aCAtIHZpZXdEaXN0YW5jZSApICkgfHwgMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNob3cgdGhlIGhvcml6b250YWwgc2xpZGUgaWYgaXQncyB3aXRoaW4gdGhlIHZpZXcgZGlzdGFuY2Vcblx0XHRcdFx0aWYoIGRpc3RhbmNlWCA8IHZpZXdEaXN0YW5jZSApIHtcblx0XHRcdFx0XHRzaG93U2xpZGUoIGhvcml6b250YWxTbGlkZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGhpZGVTbGlkZSggaG9yaXpvbnRhbFNsaWRlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdmVydGljYWxTbGlkZXNMZW5ndGggKSB7XG5cblx0XHRcdFx0XHR2YXIgb3kgPSBnZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIGhvcml6b250YWxTbGlkZSApO1xuXG5cdFx0XHRcdFx0Zm9yKCB2YXIgeSA9IDA7IHkgPCB2ZXJ0aWNhbFNsaWRlc0xlbmd0aDsgeSsrICkge1xuXHRcdFx0XHRcdFx0dmFyIHZlcnRpY2FsU2xpZGUgPSB2ZXJ0aWNhbFNsaWRlc1t5XTtcblxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VZID0geCA9PT0gKCBpbmRleGggfHwgMCApID8gTWF0aC5hYnMoICggaW5kZXh2IHx8IDAgKSAtIHkgKSA6IE1hdGguYWJzKCB5IC0gb3kgKTtcblxuXHRcdFx0XHRcdFx0aWYoIGRpc3RhbmNlWCArIGRpc3RhbmNlWSA8IHZpZXdEaXN0YW5jZSApIHtcblx0XHRcdFx0XHRcdFx0c2hvd1NsaWRlKCB2ZXJ0aWNhbFNsaWRlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0aGlkZVNsaWRlKCB2ZXJ0aWNhbFNsaWRlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHByb2dyZXNzIGJhciB0byByZWZsZWN0IHRoZSBjdXJyZW50IHNsaWRlLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG5cblx0XHQvLyBVcGRhdGUgcHJvZ3Jlc3MgaWYgZW5hYmxlZFxuXHRcdGlmKCBjb25maWcucHJvZ3Jlc3MgJiYgZG9tLnByb2dyZXNzYmFyICkge1xuXG5cdFx0XHRkb20ucHJvZ3Jlc3NiYXIuc3R5bGUud2lkdGggPSBnZXRQcm9ncmVzcygpICogZG9tLndyYXBwZXIub2Zmc2V0V2lkdGggKyAncHgnO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgc2xpZGUgbnVtYmVyIGRpdiB0byByZWZsZWN0IHRoZSBjdXJyZW50IHNsaWRlLlxuXHQgKlxuXHQgKiBTbGlkZSBudW1iZXIgZm9ybWF0IGNhbiBiZSBkZWZpbmVkIGFzIGEgc3RyaW5nIHVzaW5nIHRoZVxuXHQgKiBmb2xsb3dpbmcgdmFyaWFibGVzOlxuXHQgKiAgaDogY3VycmVudCBzbGlkZSdzIGhvcml6b250YWwgaW5kZXhcblx0ICogIHY6IGN1cnJlbnQgc2xpZGUncyB2ZXJ0aWNhbCBpbmRleFxuXHQgKiAgYzogY3VycmVudCBzbGlkZSBpbmRleCAoZmxhdHRlbmVkKVxuXHQgKiAgdDogdG90YWwgbnVtYmVyIG9mIHNsaWRlcyAoZmxhdHRlbmVkKVxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlU2xpZGVOdW1iZXIoKSB7XG5cblx0XHQvLyBVcGRhdGUgc2xpZGUgbnVtYmVyIGlmIGVuYWJsZWRcblx0XHRpZiggY29uZmlnLnNsaWRlTnVtYmVyICYmIGRvbS5zbGlkZU51bWJlcikge1xuXG5cdFx0XHQvLyBEZWZhdWx0IHRvIG9ubHkgc2hvd2luZyB0aGUgY3VycmVudCBzbGlkZSBudW1iZXJcblx0XHRcdHZhciBmb3JtYXQgPSAnYyc7XG5cblx0XHRcdC8vIENoZWNrIGlmIGEgY3VzdG9tIHNsaWRlIG51bWJlciBmb3JtYXQgaXMgYXZhaWxhYmxlXG5cdFx0XHRpZiggdHlwZW9mIGNvbmZpZy5zbGlkZU51bWJlciA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdGZvcm1hdCA9IGNvbmZpZy5zbGlkZU51bWJlcjtcblx0XHRcdH1cblxuXHRcdFx0ZG9tLnNsaWRlTnVtYmVyLmlubmVySFRNTCA9IGZvcm1hdC5yZXBsYWNlKCAvaC9nLCBpbmRleGggKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoIC92L2csIGluZGV4diApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSggL2MvZywgZ2V0U2xpZGVQYXN0Q291bnQoKSArIDEgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoIC90L2csIGdldFRvdGFsU2xpZGVzKCkgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgY29udHJvbC9uYXZpZ2F0aW9uIGFycm93cy5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2xzKCkge1xuXG5cdFx0dmFyIHJvdXRlcyA9IGF2YWlsYWJsZVJvdXRlcygpO1xuXHRcdHZhciBmcmFnbWVudHMgPSBhdmFpbGFibGVGcmFnbWVudHMoKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgJ2VuYWJsZWQnIGNsYXNzIGZyb20gYWxsIGRpcmVjdGlvbnNcblx0XHRkb20uY29udHJvbHNMZWZ0LmNvbmNhdCggZG9tLmNvbnRyb2xzUmlnaHQgKVxuXHRcdFx0XHRcdFx0LmNvbmNhdCggZG9tLmNvbnRyb2xzVXAgKVxuXHRcdFx0XHRcdFx0LmNvbmNhdCggZG9tLmNvbnRyb2xzRG93biApXG5cdFx0XHRcdFx0XHQuY29uY2F0KCBkb20uY29udHJvbHNQcmV2IClcblx0XHRcdFx0XHRcdC5jb25jYXQoIGRvbS5jb250cm9sc05leHQgKS5mb3JFYWNoKCBmdW5jdGlvbiggbm9kZSApIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2VuYWJsZWQnICk7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdmcmFnbWVudGVkJyApO1xuXHRcdH0gKTtcblxuXHRcdC8vIEFkZCB0aGUgJ2VuYWJsZWQnIGNsYXNzIHRvIHRoZSBhdmFpbGFibGUgcm91dGVzXG5cdFx0aWYoIHJvdXRlcy5sZWZ0ICkgZG9tLmNvbnRyb2xzTGVmdC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApO1x0fSApO1xuXHRcdGlmKCByb3V0ZXMucmlnaHQgKSBkb20uY29udHJvbHNSaWdodC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApOyB9ICk7XG5cdFx0aWYoIHJvdXRlcy51cCApIGRvbS5jb250cm9sc1VwLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7XHR9ICk7XG5cdFx0aWYoIHJvdXRlcy5kb3duICkgZG9tLmNvbnRyb2xzRG93bi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApOyB9ICk7XG5cblx0XHQvLyBQcmV2L25leHQgYnV0dG9uc1xuXHRcdGlmKCByb3V0ZXMubGVmdCB8fCByb3V0ZXMudXAgKSBkb20uY29udHJvbHNQcmV2LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRpZiggcm91dGVzLnJpZ2h0IHx8IHJvdXRlcy5kb3duICkgZG9tLmNvbnRyb2xzTmV4dC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApOyB9ICk7XG5cblx0XHQvLyBIaWdobGlnaHQgZnJhZ21lbnQgZGlyZWN0aW9uc1xuXHRcdGlmKCBjdXJyZW50U2xpZGUgKSB7XG5cblx0XHRcdC8vIEFsd2F5cyBhcHBseSBmcmFnbWVudCBkZWNvcmF0b3IgdG8gcHJldi9uZXh0IGJ1dHRvbnNcblx0XHRcdGlmKCBmcmFnbWVudHMucHJldiApIGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyB9ICk7XG5cdFx0XHRpZiggZnJhZ21lbnRzLm5leHQgKSBkb20uY29udHJvbHNOZXh0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgfSApO1xuXG5cdFx0XHQvLyBBcHBseSBmcmFnbWVudCBkZWNvcmF0b3JzIHRvIGRpcmVjdGlvbmFsIGJ1dHRvbnMgYmFzZWQgb25cblx0XHRcdC8vIHdoYXQgc2xpZGUgYXhpcyB0aGV5IGFyZSBpblxuXHRcdFx0aWYoIGlzVmVydGljYWxTbGlkZSggY3VycmVudFNsaWRlICkgKSB7XG5cdFx0XHRcdGlmKCBmcmFnbWVudHMucHJldiApIGRvbS5jb250cm9sc1VwLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdFx0XHRpZiggZnJhZ21lbnRzLm5leHQgKSBkb20uY29udHJvbHNEb3duLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmKCBmcmFnbWVudHMucHJldiApIGRvbS5jb250cm9sc0xlZnQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyB9ICk7XG5cdFx0XHRcdGlmKCBmcmFnbWVudHMubmV4dCApIGRvbS5jb250cm9sc1JpZ2h0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgYmFja2dyb3VuZCBlbGVtZW50cyB0byByZWZsZWN0IHRoZSBjdXJyZW50XG5cdCAqIHNsaWRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGluY2x1ZGVBbGwgSWYgdHJ1ZSwgdGhlIGJhY2tncm91bmRzIG9mXG5cdCAqIGFsbCB2ZXJ0aWNhbCBzbGlkZXMgKG5vdCBqdXN0IHRoZSBwcmVzZW50KSB3aWxsIGJlIHVwZGF0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKCBpbmNsdWRlQWxsICkge1xuXG5cdFx0dmFyIGN1cnJlbnRCYWNrZ3JvdW5kID0gbnVsbDtcblxuXHRcdC8vIFJldmVyc2UgcGFzdC9mdXR1cmUgY2xhc3NlcyB3aGVuIGluIFJUTCBtb2RlXG5cdFx0dmFyIGhvcml6b250YWxQYXN0ID0gY29uZmlnLnJ0bCA/ICdmdXR1cmUnIDogJ3Bhc3QnLFxuXHRcdFx0aG9yaXpvbnRhbEZ1dHVyZSA9IGNvbmZpZy5ydGwgPyAncGFzdCcgOiAnZnV0dXJlJztcblxuXHRcdC8vIFVwZGF0ZSB0aGUgY2xhc3NlcyBvZiBhbGwgYmFja2dyb3VuZHMgdG8gbWF0Y2ggdGhlXG5cdFx0Ly8gc3RhdGVzIG9mIHRoZWlyIHNsaWRlcyAocGFzdC9wcmVzZW50L2Z1dHVyZSlcblx0XHR0b0FycmF5KCBkb20uYmFja2dyb3VuZC5jaGlsZE5vZGVzICkuZm9yRWFjaCggZnVuY3Rpb24oIGJhY2tncm91bmRoLCBoICkge1xuXG5cdFx0XHRiYWNrZ3JvdW5kaC5jbGFzc0xpc3QucmVtb3ZlKCAncGFzdCcgKTtcblx0XHRcdGJhY2tncm91bmRoLmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuXHRcdFx0YmFja2dyb3VuZGguY2xhc3NMaXN0LnJlbW92ZSggJ2Z1dHVyZScgKTtcblxuXHRcdFx0aWYoIGggPCBpbmRleGggKSB7XG5cdFx0XHRcdGJhY2tncm91bmRoLmNsYXNzTGlzdC5hZGQoIGhvcml6b250YWxQYXN0ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaCA+IGluZGV4aCApIHtcblx0XHRcdFx0YmFja2dyb3VuZGguY2xhc3NMaXN0LmFkZCggaG9yaXpvbnRhbEZ1dHVyZSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGJhY2tncm91bmRoLmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuXG5cdFx0XHRcdC8vIFN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGJhY2tncm91bmQgZWxlbWVudFxuXHRcdFx0XHRjdXJyZW50QmFja2dyb3VuZCA9IGJhY2tncm91bmRoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggaW5jbHVkZUFsbCB8fCBoID09PSBpbmRleGggKSB7XG5cdFx0XHRcdHRvQXJyYXkoIGJhY2tncm91bmRoLnF1ZXJ5U2VsZWN0b3JBbGwoICcuc2xpZGUtYmFja2dyb3VuZCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBiYWNrZ3JvdW5kdiwgdiApIHtcblxuXHRcdFx0XHRcdGJhY2tncm91bmR2LmNsYXNzTGlzdC5yZW1vdmUoICdwYXN0JyApO1xuXHRcdFx0XHRcdGJhY2tncm91bmR2LmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuXHRcdFx0XHRcdGJhY2tncm91bmR2LmNsYXNzTGlzdC5yZW1vdmUoICdmdXR1cmUnICk7XG5cblx0XHRcdFx0XHRpZiggdiA8IGluZGV4diApIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmR2LmNsYXNzTGlzdC5hZGQoICdwYXN0JyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggdiA+IGluZGV4diApIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmR2LmNsYXNzTGlzdC5hZGQoICdmdXR1cmUnICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZHYuY2xhc3NMaXN0LmFkZCggJ3ByZXNlbnQnICk7XG5cblx0XHRcdFx0XHRcdC8vIE9ubHkgaWYgdGhpcyBpcyB0aGUgcHJlc2VudCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBzbGlkZVxuXHRcdFx0XHRcdFx0aWYoIGggPT09IGluZGV4aCApIGN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZHY7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdH0gKTtcblxuXHRcdC8vIFN0b3AgYW55IGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvIGJhY2tncm91bmRcblx0XHRpZiggcHJldmlvdXNCYWNrZ3JvdW5kICkge1xuXG5cdFx0XHR2YXIgcHJldmlvdXNWaWRlbyA9IHByZXZpb3VzQmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICk7XG5cdFx0XHRpZiggcHJldmlvdXNWaWRlbyApIHByZXZpb3VzVmlkZW8ucGF1c2UoKTtcblxuXHRcdH1cblxuXHRcdGlmKCBjdXJyZW50QmFja2dyb3VuZCApIHtcblxuXHRcdFx0Ly8gU3RhcnQgdmlkZW8gcGxheWJhY2tcblx0XHRcdHZhciBjdXJyZW50VmlkZW8gPSBjdXJyZW50QmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICk7XG5cdFx0XHRpZiggY3VycmVudFZpZGVvICkge1xuXHRcdFx0XHRjdXJyZW50VmlkZW8uY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHRjdXJyZW50VmlkZW8ucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYmFja2dyb3VuZEltYWdlVVJMID0gY3VycmVudEJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlIHx8ICcnO1xuXG5cdFx0XHQvLyBSZXN0YXJ0IEdJRnMgKGRvZXNuJ3Qgd29yayBpbiBGaXJlZm94KVxuXHRcdFx0aWYoIC9cXC5naWYvaS50ZXN0KCBiYWNrZ3JvdW5kSW1hZ2VVUkwgKSApIHtcblx0XHRcdFx0Y3VycmVudEJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cdFx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBjdXJyZW50QmFja2dyb3VuZCApLm9wYWNpdHk7XG5cdFx0XHRcdGN1cnJlbnRCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZVVSTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRG9uJ3QgdHJhbnNpdGlvbiBiZXR3ZWVuIGlkZW50aWNhbCBiYWNrZ3JvdW5kcy4gVGhpc1xuXHRcdFx0Ly8gcHJldmVudHMgdW53YW50ZWQgZmxpY2tlci5cblx0XHRcdHZhciBwcmV2aW91c0JhY2tncm91bmRIYXNoID0gcHJldmlvdXNCYWNrZ3JvdW5kID8gcHJldmlvdXNCYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1oYXNoJyApIDogbnVsbDtcblx0XHRcdHZhciBjdXJyZW50QmFja2dyb3VuZEhhc2ggPSBjdXJyZW50QmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaGFzaCcgKTtcblx0XHRcdGlmKCBjdXJyZW50QmFja2dyb3VuZEhhc2ggJiYgY3VycmVudEJhY2tncm91bmRIYXNoID09PSBwcmV2aW91c0JhY2tncm91bmRIYXNoICYmIGN1cnJlbnRCYWNrZ3JvdW5kICE9PSBwcmV2aW91c0JhY2tncm91bmQgKSB7XG5cdFx0XHRcdGRvbS5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoICduby10cmFuc2l0aW9uJyApO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmV2aW91c0JhY2tncm91bmQgPSBjdXJyZW50QmFja2dyb3VuZDtcblxuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSBiYWNrZ3JvdW5kIGJyaWdodG5lc3MgZmxhZyBmb3IgdGhpcyBzbGlkZSxcblx0XHQvLyBidWJibGUgaXQgdG8gdGhlIC5yZXZlYWwgY29udGFpbmVyXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSApIHtcblx0XHRcdFsgJ2hhcy1saWdodC1iYWNrZ3JvdW5kJywgJ2hhcy1kYXJrLWJhY2tncm91bmQnIF0uZm9yRWFjaCggZnVuY3Rpb24oIGNsYXNzVG9CdWJibGUgKSB7XG5cdFx0XHRcdGlmKCBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGFzc1RvQnViYmxlICkgKSB7XG5cdFx0XHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggY2xhc3NUb0J1YmJsZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGNsYXNzVG9CdWJibGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IHRoZSBmaXJzdCBiYWNrZ3JvdW5kIHRvIGFwcGx5IHdpdGhvdXQgdHJhbnNpdGlvblxuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZG9tLmJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSggJ25vLXRyYW5zaXRpb24nICk7XG5cdFx0fSwgMSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBhcmFsbGF4IGJhY2tncm91bmQgYmFzZWRcblx0ICogb24gdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVQYXJhbGxheCgpIHtcblxuXHRcdGlmKCBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2UgKSB7XG5cblx0XHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSxcblx0XHRcdFx0dmVydGljYWxTbGlkZXMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBWRVJUSUNBTF9TTElERVNfU0VMRUNUT1IgKTtcblxuXHRcdFx0dmFyIGJhY2tncm91bmRTaXplID0gZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZFNpemUuc3BsaXQoICcgJyApLFxuXHRcdFx0XHRiYWNrZ3JvdW5kV2lkdGgsIGJhY2tncm91bmRIZWlnaHQ7XG5cblx0XHRcdGlmKCBiYWNrZ3JvdW5kU2l6ZS5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRcdGJhY2tncm91bmRXaWR0aCA9IGJhY2tncm91bmRIZWlnaHQgPSBwYXJzZUludCggYmFja2dyb3VuZFNpemVbMF0sIDEwICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YmFja2dyb3VuZFdpZHRoID0gcGFyc2VJbnQoIGJhY2tncm91bmRTaXplWzBdLCAxMCApO1xuXHRcdFx0XHRiYWNrZ3JvdW5kSGVpZ2h0ID0gcGFyc2VJbnQoIGJhY2tncm91bmRTaXplWzFdLCAxMCApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2xpZGVXaWR0aCA9IGRvbS5iYWNrZ3JvdW5kLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRob3Jpem9udGFsU2xpZGVDb3VudCA9IGhvcml6b250YWxTbGlkZXMubGVuZ3RoLFxuXHRcdFx0XHRob3Jpem9udGFsT2Zmc2V0TXVsdGlwbGllcixcblx0XHRcdFx0aG9yaXpvbnRhbE9mZnNldDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSG9yaXpvbnRhbCA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdGhvcml6b250YWxPZmZzZXRNdWx0aXBsaWVyID0gY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEhvcml6b250YWw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aG9yaXpvbnRhbE9mZnNldE11bHRpcGxpZXIgPSAoIGJhY2tncm91bmRXaWR0aCAtIHNsaWRlV2lkdGggKSAvICggaG9yaXpvbnRhbFNsaWRlQ291bnQtMSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob3Jpem9udGFsT2Zmc2V0ID0gaG9yaXpvbnRhbE9mZnNldE11bHRpcGxpZXIgKiBpbmRleGggKiAtMTtcblxuXHRcdFx0dmFyIHNsaWRlSGVpZ2h0ID0gZG9tLmJhY2tncm91bmQub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0XHR2ZXJ0aWNhbFNsaWRlQ291bnQgPSB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGgsXG5cdFx0XHRcdHZlcnRpY2FsT2Zmc2V0TXVsdGlwbGllcixcblx0XHRcdFx0dmVydGljYWxPZmZzZXQ7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZFZlcnRpY2FsID09PSAnbnVtYmVyJyApIHtcblx0XHRcdFx0dmVydGljYWxPZmZzZXRNdWx0aXBsaWVyID0gY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZFZlcnRpY2FsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZlcnRpY2FsT2Zmc2V0TXVsdGlwbGllciA9ICggYmFja2dyb3VuZEhlaWdodCAtIHNsaWRlSGVpZ2h0ICkgLyAoIHZlcnRpY2FsU2xpZGVDb3VudC0xICk7XG5cdFx0XHR9XG5cblx0XHRcdHZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTbGlkZUNvdW50ID4gMCA/ICB2ZXJ0aWNhbE9mZnNldE11bHRpcGxpZXIgKiBpbmRleHYgKiAxIDogMDtcblxuXHRcdFx0ZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gaG9yaXpvbnRhbE9mZnNldCArICdweCAnICsgLXZlcnRpY2FsT2Zmc2V0ICsgJ3B4JztcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBnaXZlbiBzbGlkZSBpcyB3aXRoaW4gdGhlIGNvbmZpZ3VyZWQgdmlld1xuXHQgKiBkaXN0YW5jZS4gU2hvd3MgdGhlIHNsaWRlIGVsZW1lbnQgYW5kIGxvYWRzIGFueSBjb250ZW50XG5cdCAqIHRoYXQgaXMgc2V0IHRvIGxvYWQgbGF6aWx5IChkYXRhLXNyYykuXG5cdCAqL1xuXHRmdW5jdGlvbiBzaG93U2xpZGUoIHNsaWRlICkge1xuXG5cdFx0Ly8gU2hvdyB0aGUgc2xpZGUgZWxlbWVudFxuXHRcdHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0Ly8gTWVkaWEgZWxlbWVudHMgd2l0aCBkYXRhLXNyYyBhdHRyaWJ1dGVzXG5cdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2ltZ1tkYXRhLXNyY10sIHZpZGVvW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ3NyYycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnICkgKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCAnZGF0YS1zcmMnICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWVkaWEgZWxlbWVudHMgd2l0aCA8c291cmNlPiBjaGlsZHJlblxuXHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICd2aWRlbywgYXVkaW8nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggbWVkaWEgKSB7XG5cdFx0XHR2YXIgc291cmNlcyA9IDA7XG5cblx0XHRcdHRvQXJyYXkoIG1lZGlhLnF1ZXJ5U2VsZWN0b3JBbGwoICdzb3VyY2VbZGF0YS1zcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNvdXJjZSApIHtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSggJ3NyYycsIHNvdXJjZS5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApO1xuXHRcdFx0XHRzb3VyY2UucmVtb3ZlQXR0cmlidXRlKCAnZGF0YS1zcmMnICk7XG5cdFx0XHRcdHNvdXJjZXMgKz0gMTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gSWYgd2UgcmV3cm90ZSBzb3VyY2VzIGZvciB0aGlzIHZpZGVvL2F1ZGlvIGVsZW1lbnQsIHdlIG5lZWRcblx0XHRcdC8vIHRvIG1hbnVhbGx5IHRlbGwgaXQgdG8gbG9hZCBmcm9tIGl0cyBuZXcgb3JpZ2luXG5cdFx0XHRpZiggc291cmNlcyA+IDAgKSB7XG5cdFx0XHRcdG1lZGlhLmxvYWQoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblxuXHRcdC8vIFNob3cgdGhlIGNvcnJlc3BvbmRpbmcgYmFja2dyb3VuZCBlbGVtZW50XG5cdFx0dmFyIGluZGljZXMgPSBnZXRJbmRpY2VzKCBzbGlkZSApO1xuXHRcdHZhciBiYWNrZ3JvdW5kID0gZ2V0U2xpZGVCYWNrZ3JvdW5kKCBpbmRpY2VzLmgsIGluZGljZXMudiApO1xuXHRcdGlmKCBiYWNrZ3JvdW5kICkge1xuXHRcdFx0YmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0Ly8gSWYgdGhlIGJhY2tncm91bmQgY29udGFpbnMgbWVkaWEsIGxvYWQgaXRcblx0XHRcdGlmKCBiYWNrZ3JvdW5kLmhhc0F0dHJpYnV0ZSggJ2RhdGEtbG9hZGVkJyApID09PSBmYWxzZSApIHtcblx0XHRcdFx0YmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoICdkYXRhLWxvYWRlZCcsICd0cnVlJyApO1xuXG5cdFx0XHRcdHZhciBiYWNrZ3JvdW5kSW1hZ2UgPSBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaW1hZ2UnICksXG5cdFx0XHRcdFx0YmFja2dyb3VuZFZpZGVvID0gc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvJyApLFxuXHRcdFx0XHRcdGJhY2tncm91bmRWaWRlb0xvb3AgPSBzbGlkZS5oYXNBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdmlkZW8tbG9vcCcgKSxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSWZyYW1lID0gc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWlmcmFtZScgKTtcblxuXHRcdFx0XHQvLyBJbWFnZXNcblx0XHRcdFx0aWYoIGJhY2tncm91bmRJbWFnZSApIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJysgYmFja2dyb3VuZEltYWdlICsnKSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVmlkZW9zXG5cdFx0XHRcdGVsc2UgaWYgKCBiYWNrZ3JvdW5kVmlkZW8gJiYgIWlzU3BlYWtlck5vdGVzKCkgKSB7XG5cdFx0XHRcdFx0dmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3ZpZGVvJyApO1xuXG5cdFx0XHRcdFx0aWYoIGJhY2tncm91bmRWaWRlb0xvb3AgKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5zZXRBdHRyaWJ1dGUoICdsb29wJywgJycgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0IGNvbW1hIHNlcGFyYXRlZCBsaXN0cyBvZiB2aWRlbyBzb3VyY2VzXG5cdFx0XHRcdFx0YmFja2dyb3VuZFZpZGVvLnNwbGl0KCAnLCcgKS5mb3JFYWNoKCBmdW5jdGlvbiggc291cmNlICkge1xuXHRcdFx0XHRcdFx0dmlkZW8uaW5uZXJIVE1MICs9ICc8c291cmNlIHNyYz1cIicrIHNvdXJjZSArJ1wiPic7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0YmFja2dyb3VuZC5hcHBlbmRDaGlsZCggdmlkZW8gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZnJhbWVzXG5cdFx0XHRcdGVsc2UgaWYoIGJhY2tncm91bmRJZnJhbWUgKSB7XG5cdFx0XHRcdFx0dmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpZnJhbWUnICk7XG5cdFx0XHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCAnc3JjJywgYmFja2dyb3VuZElmcmFtZSApO1xuXHRcdFx0XHRcdFx0aWZyYW1lLnN0eWxlLndpZHRoICA9ICcxMDAlJztcblx0XHRcdFx0XHRcdGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cdFx0XHRcdFx0XHRpZnJhbWUuc3R5bGUubWF4SGVpZ2h0ID0gJzEwMCUnO1xuXHRcdFx0XHRcdFx0aWZyYW1lLnN0eWxlLm1heFdpZHRoID0gJzEwMCUnO1xuXG5cdFx0XHRcdFx0YmFja2dyb3VuZC5hcHBlbmRDaGlsZCggaWZyYW1lICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZ2l2ZW4gc2xpZGUgaXMgbW92ZWQgb3V0c2lkZSBvZiB0aGVcblx0ICogY29uZmlndXJlZCB2aWV3IGRpc3RhbmNlLlxuXHQgKi9cblx0ZnVuY3Rpb24gaGlkZVNsaWRlKCBzbGlkZSApIHtcblxuXHRcdC8vIEhpZGUgdGhlIHNsaWRlIGVsZW1lbnRcblx0XHRzbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdFx0Ly8gSGlkZSB0aGUgY29ycmVzcG9uZGluZyBiYWNrZ3JvdW5kIGVsZW1lbnRcblx0XHR2YXIgaW5kaWNlcyA9IGdldEluZGljZXMoIHNsaWRlICk7XG5cdFx0dmFyIGJhY2tncm91bmQgPSBnZXRTbGlkZUJhY2tncm91bmQoIGluZGljZXMuaCwgaW5kaWNlcy52ICk7XG5cdFx0aWYoIGJhY2tncm91bmQgKSB7XG5cdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoYXQgYXZhaWxhYmxlIHJvdXRlcyB0aGVyZSBhcmUgZm9yIG5hdmlnYXRpb24uXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdH0gY29udGFpbmluZyBmb3VyIGJvb2xlYW5zOiBsZWZ0L3JpZ2h0L3VwL2Rvd25cblx0ICovXG5cdGZ1bmN0aW9uIGF2YWlsYWJsZVJvdXRlcygpIHtcblxuXHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSxcblx0XHRcdHZlcnRpY2FsU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggVkVSVElDQUxfU0xJREVTX1NFTEVDVE9SICk7XG5cblx0XHR2YXIgcm91dGVzID0ge1xuXHRcdFx0bGVmdDogaW5kZXhoID4gMCB8fCBjb25maWcubG9vcCxcblx0XHRcdHJpZ2h0OiBpbmRleGggPCBob3Jpem9udGFsU2xpZGVzLmxlbmd0aCAtIDEgfHwgY29uZmlnLmxvb3AsXG5cdFx0XHR1cDogaW5kZXh2ID4gMCxcblx0XHRcdGRvd246IGluZGV4diA8IHZlcnRpY2FsU2xpZGVzLmxlbmd0aCAtIDFcblx0XHR9O1xuXG5cdFx0Ly8gcmV2ZXJzZSBob3Jpem9udGFsIGNvbnRyb2xzIGZvciBydGxcblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdHZhciBsZWZ0ID0gcm91dGVzLmxlZnQ7XG5cdFx0XHRyb3V0ZXMubGVmdCA9IHJvdXRlcy5yaWdodDtcblx0XHRcdHJvdXRlcy5yaWdodCA9IGxlZnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJvdXRlcztcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGRlc2NyaWJpbmcgdGhlIGF2YWlsYWJsZSBmcmFnbWVudFxuXHQgKiBkaXJlY3Rpb25zLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IHR3byBib29sZWFuIHByb3BlcnRpZXM6IHByZXYvbmV4dFxuXHQgKi9cblx0ZnVuY3Rpb24gYXZhaWxhYmxlRnJhZ21lbnRzKCkge1xuXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSAmJiBjb25maWcuZnJhZ21lbnRzICkge1xuXHRcdFx0dmFyIGZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApO1xuXHRcdFx0dmFyIGhpZGRlbkZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50Om5vdCgudmlzaWJsZSknICk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHByZXY6IGZyYWdtZW50cy5sZW5ndGggLSBoaWRkZW5GcmFnbWVudHMubGVuZ3RoID4gMCxcblx0XHRcdFx0bmV4dDogISFoaWRkZW5GcmFnbWVudHMubGVuZ3RoXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB7IHByZXY6IGZhbHNlLCBuZXh0OiBmYWxzZSB9O1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEVuZm9yY2VzIG9yaWdpbi1zcGVjaWZpYyBmb3JtYXQgcnVsZXMgZm9yIGVtYmVkZGVkIG1lZGlhLlxuXHQgKi9cblx0ZnVuY3Rpb24gZm9ybWF0RW1iZWRkZWRDb250ZW50KCkge1xuXG5cdFx0dmFyIF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlID0gZnVuY3Rpb24oIHNvdXJjZUF0dHJpYnV0ZSwgc291cmNlVVJMLCBwYXJhbSApIHtcblx0XHRcdHRvQXJyYXkoIGRvbS5zbGlkZXMucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVsnKyBzb3VyY2VBdHRyaWJ1dGUgKycqPVwiJysgc291cmNlVVJMICsnXCJdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHR2YXIgc3JjID0gZWwuZ2V0QXR0cmlidXRlKCBzb3VyY2VBdHRyaWJ1dGUgKTtcblx0XHRcdFx0aWYoIHNyYyAmJiBzcmMuaW5kZXhPZiggcGFyYW0gKSA9PT0gLTEgKSB7XG5cdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCBzb3VyY2VBdHRyaWJ1dGUsIHNyYyArICggIS9cXD8vLnRlc3QoIHNyYyApID8gJz8nIDogJyYnICkgKyBwYXJhbSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly8gWW91VHViZSBmcmFtZXMgbXVzdCBpbmNsdWRlIFwiP2VuYWJsZWpzYXBpPTFcIlxuXHRcdF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlKCAnc3JjJywgJ3lvdXR1YmUuY29tL2VtYmVkLycsICdlbmFibGVqc2FwaT0xJyApO1xuXHRcdF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlKCAnZGF0YS1zcmMnLCAneW91dHViZS5jb20vZW1iZWQvJywgJ2VuYWJsZWpzYXBpPTEnICk7XG5cblx0XHQvLyBWaW1lbyBmcmFtZXMgbXVzdCBpbmNsdWRlIFwiP2FwaT0xXCJcblx0XHRfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSggJ3NyYycsICdwbGF5ZXIudmltZW8uY29tLycsICdhcGk9MScgKTtcblx0XHRfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSggJ2RhdGEtc3JjJywgJ3BsYXllci52aW1lby5jb20vJywgJ2FwaT0xJyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3RhcnQgcGxheWJhY2sgb2YgYW55IGVtYmVkZGVkIGNvbnRlbnQgaW5zaWRlIG9mXG5cdCAqIHRoZSB0YXJnZXRlZCBzbGlkZS5cblx0ICovXG5cdGZ1bmN0aW9uIHN0YXJ0RW1iZWRkZWRDb250ZW50KCBzbGlkZSApIHtcblxuXHRcdGlmKCBzbGlkZSAmJiAhaXNTcGVha2VyTm90ZXMoKSApIHtcblx0XHRcdC8vIFJlc3RhcnQgR0lGc1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2ltZ1tzcmMkPVwiLmdpZlwiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0Ly8gU2V0dGluZyB0aGUgc2FtZSB1bmNoYW5nZWQgc291cmNlIGxpa2UgdGhpcyB3YXMgY29uZmlybWVkXG5cdFx0XHRcdC8vIHRvIHdvcmsgaW4gQ2hyb21lLCBGRiAmIFNhZmFyaVxuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbC5nZXRBdHRyaWJ1dGUoICdzcmMnICkgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gSFRNTDUgbWVkaWEgZWxlbWVudHNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICd2aWRlbywgYXVkaW8nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGlmKCBlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWF1dG9wbGF5JyApICYmIHR5cGVvZiBlbC5wbGF5ID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdGVsLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBOb3JtYWwgaWZyYW1lc1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtzcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRzdGFydEVtYmVkZGVkSWZyYW1lKCB7IHRhcmdldDogZWwgfSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBMYXp5IGxvYWRpbmcgaWZyYW1lc1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtkYXRhLXNyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGlmKCBlbC5nZXRBdHRyaWJ1dGUoICdzcmMnICkgIT09IGVsLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICkge1xuXHRcdFx0XHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgc3RhcnRFbWJlZGRlZElmcmFtZSApOyAvLyByZW1vdmUgZmlyc3QgdG8gYXZvaWQgZHVwZXNcblx0XHRcdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHN0YXJ0RW1iZWRkZWRJZnJhbWUgKTtcblx0XHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogXCJTdGFydHNcIiB0aGUgY29udGVudCBvZiBhbiBlbWJlZGRlZCBpZnJhbWUgdXNpbmcgdGhlXG5cdCAqIHBvc3RtZXNzYWdlIEFQSS5cblx0ICovXG5cdGZ1bmN0aW9uIHN0YXJ0RW1iZWRkZWRJZnJhbWUoIGV2ZW50ICkge1xuXG5cdFx0dmFyIGlmcmFtZSA9IGV2ZW50LnRhcmdldDtcblxuXHRcdC8vIFlvdVR1YmUgcG9zdE1lc3NhZ2UgQVBJXG5cdFx0aWYoIC95b3V0dWJlXFwuY29tXFwvZW1iZWRcXC8vLnRlc3QoIGlmcmFtZS5nZXRBdHRyaWJ1dGUoICdzcmMnICkgKSAmJiBpZnJhbWUuaGFzQXR0cmlidXRlKCAnZGF0YS1hdXRvcGxheScgKSApIHtcblx0XHRcdGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBsYXlWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonICk7XG5cdFx0fVxuXHRcdC8vIFZpbWVvIHBvc3RNZXNzYWdlIEFQSVxuXHRcdGVsc2UgaWYoIC9wbGF5ZXJcXC52aW1lb1xcLmNvbVxcLy8udGVzdCggaWZyYW1lLmdldEF0dHJpYnV0ZSggJ3NyYycgKSApICYmIGlmcmFtZS5oYXNBdHRyaWJ1dGUoICdkYXRhLWF1dG9wbGF5JyApICkge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICd7XCJtZXRob2RcIjpcInBsYXlcIn0nLCAnKicgKTtcblx0XHR9XG5cdFx0Ly8gR2VuZXJpYyBwb3N0TWVzc2FnZSBBUElcblx0XHRlbHNlIHtcblx0XHRcdGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAnc2xpZGU6c3RhcnQnLCAnKicgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIHBsYXliYWNrIG9mIGFueSBlbWJlZGRlZCBjb250ZW50IGluc2lkZSBvZlxuXHQgKiB0aGUgdGFyZ2V0ZWQgc2xpZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBzdG9wRW1iZWRkZWRDb250ZW50KCBzbGlkZSApIHtcblxuXHRcdGlmKCBzbGlkZSAmJiBzbGlkZS5wYXJlbnROb2RlICkge1xuXHRcdFx0Ly8gSFRNTDUgbWVkaWEgZWxlbWVudHNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICd2aWRlbywgYXVkaW8nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGlmKCAhZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1pZ25vcmUnICkgJiYgdHlwZW9mIGVsLnBhdXNlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdGVsLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gR2VuZXJpYyBwb3N0TWVzc2FnZSBBUEkgZm9yIG5vbi1sYXp5IGxvYWRlZCBpZnJhbWVzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRlbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAnc2xpZGU6c3RvcCcsICcqJyApO1xuXHRcdFx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHN0YXJ0RW1iZWRkZWRJZnJhbWUgKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBZb3VUdWJlIHBvc3RNZXNzYWdlIEFQSVxuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRpZiggIWVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtaWdub3JlJyApICYmIHR5cGVvZiBlbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonICk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBWaW1lbyBwb3N0TWVzc2FnZSBBUElcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbc3JjKj1cInBsYXllci52aW1lby5jb20vXCJdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRpZiggIWVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtaWdub3JlJyApICYmIHR5cGVvZiBlbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICd7XCJtZXRob2RcIjpcInBhdXNlXCJ9JywgJyonICk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBMYXp5IGxvYWRpbmcgaWZyYW1lc1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtkYXRhLXNyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdC8vIE9ubHkgcmVtb3ZpbmcgdGhlIHNyYyBkb2Vzbid0IGFjdHVhbGx5IHVubG9hZCB0aGUgZnJhbWVcblx0XHRcdFx0Ly8gaW4gYWxsIGJyb3dzZXJzIChGaXJlZm94KSBzbyB3ZSBzZXQgaXQgdG8gYmxhbmsgZmlyc3Rcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCAnc3JjJywgJ2Fib3V0OmJsYW5rJyApO1xuXHRcdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoICdzcmMnICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHBhc3Qgc2xpZGVzLiBUaGlzIGNhbiBiZSB1c2VkIGFzIGEgZ2xvYmFsXG5cdCAqIGZsYXR0ZW5lZCBpbmRleCBmb3Igc2xpZGVzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0U2xpZGVQYXN0Q291bnQoKSB7XG5cblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcblxuXHRcdC8vIFRoZSBudW1iZXIgb2YgcGFzdCBzbGlkZXNcblx0XHR2YXIgcGFzdENvdW50ID0gMDtcblxuXHRcdC8vIFN0ZXAgdGhyb3VnaCBhbGwgc2xpZGVzIGFuZCBjb3VudCB0aGUgcGFzdCBvbmVzXG5cdFx0bWFpbkxvb3A6IGZvciggdmFyIGkgPSAwOyBpIDwgaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGg7IGkrKyApIHtcblxuXHRcdFx0dmFyIGhvcml6b250YWxTbGlkZSA9IGhvcml6b250YWxTbGlkZXNbaV07XG5cdFx0XHR2YXIgdmVydGljYWxTbGlkZXMgPSB0b0FycmF5KCBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKTtcblxuXHRcdFx0Zm9yKCB2YXIgaiA9IDA7IGogPCB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGg7IGorKyApIHtcblxuXHRcdFx0XHQvLyBTdG9wIGFzIHNvb24gYXMgd2UgYXJyaXZlIGF0IHRoZSBwcmVzZW50XG5cdFx0XHRcdGlmKCB2ZXJ0aWNhbFNsaWRlc1tqXS5jbGFzc0xpc3QuY29udGFpbnMoICdwcmVzZW50JyApICkge1xuXHRcdFx0XHRcdGJyZWFrIG1haW5Mb29wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGFzdENvdW50Kys7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RvcCBhcyBzb29uIGFzIHdlIGFycml2ZSBhdCB0aGUgcHJlc2VudFxuXHRcdFx0aWYoIGhvcml6b250YWxTbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdwcmVzZW50JyApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Ly8gRG9uJ3QgY291bnQgdGhlIHdyYXBwaW5nIHNlY3Rpb24gZm9yIHZlcnRpY2FsIHNsaWRlc1xuXHRcdFx0aWYoIGhvcml6b250YWxTbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdHBhc3RDb3VudCsrO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhc3RDb3VudDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSB2YWx1ZSByYW5naW5nIGZyb20gMC0xIHRoYXQgcmVwcmVzZW50c1xuXHQgKiBob3cgZmFyIGludG8gdGhlIHByZXNlbnRhdGlvbiB3ZSBoYXZlIG5hdmlnYXRlZC5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFByb2dyZXNzKCkge1xuXG5cdFx0Ly8gVGhlIG51bWJlciBvZiBwYXN0IGFuZCB0b3RhbCBzbGlkZXNcblx0XHR2YXIgdG90YWxDb3VudCA9IGdldFRvdGFsU2xpZGVzKCk7XG5cdFx0dmFyIHBhc3RDb3VudCA9IGdldFNsaWRlUGFzdENvdW50KCk7XG5cblx0XHRpZiggY3VycmVudFNsaWRlICkge1xuXG5cdFx0XHR2YXIgYWxsRnJhZ21lbnRzID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICk7XG5cblx0XHRcdC8vIElmIHRoZXJlIGFyZSBmcmFnbWVudHMgaW4gdGhlIGN1cnJlbnQgc2xpZGUgdGhvc2Ugc2hvdWxkIGJlXG5cdFx0XHQvLyBhY2NvdW50ZWQgZm9yIGluIHRoZSBwcm9ncmVzcy5cblx0XHRcdGlmKCBhbGxGcmFnbWVudHMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0dmFyIHZpc2libGVGcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudC52aXNpYmxlJyApO1xuXG5cdFx0XHRcdC8vIFRoaXMgdmFsdWUgcmVwcmVzZW50cyBob3cgYmlnIGEgcG9ydGlvbiBvZiB0aGUgc2xpZGUgcHJvZ3Jlc3Ncblx0XHRcdFx0Ly8gdGhhdCBpcyBtYWRlIHVwIGJ5IGl0cyBmcmFnbWVudHMgKDAtMSlcblx0XHRcdFx0dmFyIGZyYWdtZW50V2VpZ2h0ID0gMC45O1xuXG5cdFx0XHRcdC8vIEFkZCBmcmFnbWVudCBwcm9ncmVzcyB0byB0aGUgcGFzdCBzbGlkZSBjb3VudFxuXHRcdFx0XHRwYXN0Q291bnQgKz0gKCB2aXNpYmxlRnJhZ21lbnRzLmxlbmd0aCAvIGFsbEZyYWdtZW50cy5sZW5ndGggKSAqIGZyYWdtZW50V2VpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhc3RDb3VudCAvICggdG90YWxDb3VudCAtIDEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGlzIHByZXNlbnRhdGlvbiBpcyBydW5uaW5nIGluc2lkZSBvZiB0aGVcblx0ICogc3BlYWtlciBub3RlcyB3aW5kb3cuXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1NwZWFrZXJOb3RlcygpIHtcblxuXHRcdHJldHVybiAhIXdpbmRvdy5sb2NhdGlvbi5zZWFyY2gubWF0Y2goIC9yZWNlaXZlci9naSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgdGhlIGN1cnJlbnQgVVJMIChoYXNoKSBhbmQgbmF2aWdhdGVzIGFjY29yZGluZ2x5LlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVhZFVSTCgpIHtcblxuXHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cblx0XHQvLyBBdHRlbXB0IHRvIHBhcnNlIHRoZSBoYXNoIGFzIGVpdGhlciBhbiBpbmRleCBvciBuYW1lXG5cdFx0dmFyIGJpdHMgPSBoYXNoLnNsaWNlKCAyICkuc3BsaXQoICcvJyApLFxuXHRcdFx0bmFtZSA9IGhhc2gucmVwbGFjZSggLyN8XFwvL2dpLCAnJyApO1xuXG5cdFx0Ly8gSWYgdGhlIGZpcnN0IGJpdCBpcyBpbnZhbGlkIGFuZCB0aGVyZSBpcyBhIG5hbWUgd2UgY2FuXG5cdFx0Ly8gYXNzdW1lIHRoYXQgdGhpcyBpcyBhIG5hbWVkIGxpbmtcblx0XHRpZiggaXNOYU4oIHBhcnNlSW50KCBiaXRzWzBdLCAxMCApICkgJiYgbmFtZS5sZW5ndGggKSB7XG5cdFx0XHR2YXIgZWxlbWVudDtcblxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBuYW1lZCBsaW5rIGlzIGEgdmFsaWQgSFRNTCBJRCBhdHRyaWJ1dGVcblx0XHRcdGlmKCAvXlthLXpBLVpdW1xcdzouLV0qJC8udGVzdCggbmFtZSApICkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBzbGlkZSB3aXRoIHRoZSBzcGVjaWZpZWQgSURcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBuYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBlbGVtZW50ICkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmFtZWQgc2xpZGUgYW5kIG5hdmlnYXRlIHRvIGl0XG5cdFx0XHRcdHZhciBpbmRpY2VzID0gUmV2ZWFsLmdldEluZGljZXMoIGVsZW1lbnQgKTtcblx0XHRcdFx0c2xpZGUoIGluZGljZXMuaCwgaW5kaWNlcy52ICk7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgc2xpZGUgZG9lc24ndCBleGlzdCwgbmF2aWdhdGUgdG8gdGhlIGN1cnJlbnQgc2xpZGVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzbGlkZSggaW5kZXhoIHx8IDAsIGluZGV4diB8fCAwICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gUmVhZCB0aGUgaW5kZXggY29tcG9uZW50cyBvZiB0aGUgaGFzaFxuXHRcdFx0dmFyIGggPSBwYXJzZUludCggYml0c1swXSwgMTAgKSB8fCAwLFxuXHRcdFx0XHR2ID0gcGFyc2VJbnQoIGJpdHNbMV0sIDEwICkgfHwgMDtcblxuXHRcdFx0aWYoIGggIT09IGluZGV4aCB8fCB2ICE9PSBpbmRleHYgKSB7XG5cdFx0XHRcdHNsaWRlKCBoLCB2ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgcGFnZSBVUkwgKGhhc2gpIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnRcblx0ICogc3RhdGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSBUaGUgdGltZSBpbiBtcyB0byB3YWl0IGJlZm9yZVxuXHQgKiB3cml0aW5nIHRoZSBoYXNoXG5cdCAqL1xuXHRmdW5jdGlvbiB3cml0ZVVSTCggZGVsYXkgKSB7XG5cblx0XHRpZiggY29uZmlnLmhpc3RvcnkgKSB7XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGVyZSdzIG5ldmVyIG1vcmUgdGhhbiBvbmUgdGltZW91dCBydW5uaW5nXG5cdFx0XHRjbGVhclRpbWVvdXQoIHdyaXRlVVJMVGltZW91dCApO1xuXG5cdFx0XHQvLyBJZiBhIGRlbGF5IGlzIHNwZWNpZmllZCwgdGltZW91dCB0aGlzIGNhbGxcblx0XHRcdGlmKCB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInICkge1xuXHRcdFx0XHR3cml0ZVVSTFRpbWVvdXQgPSBzZXRUaW1lb3V0KCB3cml0ZVVSTCwgZGVsYXkgKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIGN1cnJlbnRTbGlkZSApIHtcblx0XHRcdFx0dmFyIHVybCA9ICcvJztcblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGNyZWF0ZSBhIG5hbWVkIGxpbmsgYmFzZWQgb24gdGhlIHNsaWRlJ3MgSURcblx0XHRcdFx0dmFyIGlkID0gY3VycmVudFNsaWRlLmdldEF0dHJpYnV0ZSggJ2lkJyApO1xuXHRcdFx0XHRpZiggaWQgKSB7XG5cdFx0XHRcdFx0aWQgPSBpZC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGlkID0gaWQucmVwbGFjZSggL1teYS16QS1aMC05XFwtXFxfXFw6XFwuXS9nLCAnJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGN1cnJlbnQgc2xpZGUgaGFzIGFuIElELCB1c2UgdGhhdCBhcyBhIG5hbWVkIGxpbmtcblx0XHRcdFx0aWYoIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgJiYgaWQubGVuZ3RoICkge1xuXHRcdFx0XHRcdHVybCA9ICcvJyArIGlkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIC9oL3YgaW5kZXhcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYoIGluZGV4aCA+IDAgfHwgaW5kZXh2ID4gMCApIHVybCArPSBpbmRleGg7XG5cdFx0XHRcdFx0aWYoIGluZGV4diA+IDAgKSB1cmwgKz0gJy8nICsgaW5kZXh2O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSBoL3YgbG9jYXRpb24gb2YgdGhlIGN1cnJlbnQsIG9yIHNwZWNpZmllZCxcblx0ICogc2xpZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNsaWRlIElmIHNwZWNpZmllZCwgdGhlIHJldHVybmVkXG5cdCAqIGluZGV4IHdpbGwgYmUgZm9yIHRoaXMgc2xpZGUgcmF0aGVyIHRoYW4gdGhlIGN1cnJlbnRseVxuXHQgKiBhY3RpdmUgb25lXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdH0geyBoOiA8aW50PiwgdjogPGludD4sIGY6IDxpbnQ+IH1cblx0ICovXG5cdGZ1bmN0aW9uIGdldEluZGljZXMoIHNsaWRlICkge1xuXG5cdFx0Ly8gQnkgZGVmYXVsdCwgcmV0dXJuIHRoZSBjdXJyZW50IGluZGljZXNcblx0XHR2YXIgaCA9IGluZGV4aCxcblx0XHRcdHYgPSBpbmRleHYsXG5cdFx0XHRmO1xuXG5cdFx0Ly8gSWYgYSBzbGlkZSBpcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgaW5kaWNlcyBvZiB0aGF0IHNsaWRlXG5cdFx0aWYoIHNsaWRlICkge1xuXHRcdFx0dmFyIGlzVmVydGljYWwgPSBpc1ZlcnRpY2FsU2xpZGUoIHNsaWRlICk7XG5cdFx0XHR2YXIgc2xpZGVoID0gaXNWZXJ0aWNhbCA/IHNsaWRlLnBhcmVudE5vZGUgOiBzbGlkZTtcblxuXHRcdFx0Ly8gU2VsZWN0IGFsbCBob3Jpem9udGFsIHNsaWRlc1xuXHRcdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICk7XG5cblx0XHRcdC8vIE5vdyB0aGF0IHdlIGtub3cgd2hpY2ggdGhlIGhvcml6b250YWwgc2xpZGUgaXMsIGdldCBpdHMgaW5kZXhcblx0XHRcdGggPSBNYXRoLm1heCggaG9yaXpvbnRhbFNsaWRlcy5pbmRleE9mKCBzbGlkZWggKSwgMCApO1xuXG5cdFx0XHQvLyBBc3N1bWUgd2UncmUgbm90IHZlcnRpY2FsXG5cdFx0XHR2ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgdmVydGljYWwgc2xpZGUsIGdyYWIgdGhlIHZlcnRpY2FsIGluZGV4XG5cdFx0XHRpZiggaXNWZXJ0aWNhbCApIHtcblx0XHRcdFx0diA9IE1hdGgubWF4KCB0b0FycmF5KCBzbGlkZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICkuaW5kZXhPZiggc2xpZGUgKSwgMCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCAhc2xpZGUgJiYgY3VycmVudFNsaWRlICkge1xuXHRcdFx0dmFyIGhhc0ZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApLmxlbmd0aCA+IDA7XG5cdFx0XHRpZiggaGFzRnJhZ21lbnRzICkge1xuXHRcdFx0XHR2YXIgY3VycmVudEZyYWdtZW50ID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3IoICcuY3VycmVudC1mcmFnbWVudCcgKTtcblx0XHRcdFx0aWYoIGN1cnJlbnRGcmFnbWVudCAmJiBjdXJyZW50RnJhZ21lbnQuaGFzQXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSApIHtcblx0XHRcdFx0XHRmID0gcGFyc2VJbnQoIGN1cnJlbnRGcmFnbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApLCAxMCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGYgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudC52aXNpYmxlJyApLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4geyBoOiBoLCB2OiB2LCBmOiBmIH07XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIHRvdGFsIG51bWJlciBvZiBzbGlkZXMgaW4gdGhpcyBwcmVzZW50YXRpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRUb3RhbFNsaWRlcygpIHtcblxuXHRcdHJldHVybiBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKyAnOm5vdCguc3RhY2spJyApLmxlbmd0aDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHNsaWRlIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCBpbmRleC5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFNsaWRlKCB4LCB5ICkge1xuXG5cdFx0dmFyIGhvcml6b250YWxTbGlkZSA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SIClbIHggXTtcblx0XHR2YXIgdmVydGljYWxTbGlkZXMgPSBob3Jpem9udGFsU2xpZGUgJiYgaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApO1xuXG5cdFx0aWYoIHZlcnRpY2FsU2xpZGVzICYmIHZlcnRpY2FsU2xpZGVzLmxlbmd0aCAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRyZXR1cm4gdmVydGljYWxTbGlkZXMgPyB2ZXJ0aWNhbFNsaWRlc1sgeSBdIDogdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHJldHVybiBob3Jpem9udGFsU2xpZGU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQgZm9yIHRoZSBnaXZlbiBzbGlkZS5cblx0ICogQWxsIHNsaWRlcywgZXZlbiB0aGUgb25lcyB3aXRoIG5vIGJhY2tncm91bmQgcHJvcGVydGllc1xuXHQgKiBkZWZpbmVkLCBoYXZlIGEgYmFja2dyb3VuZCBlbGVtZW50IHNvIGFzIGxvbmcgYXMgdGhlXG5cdCAqIGluZGV4IGlzIHZhbGlkIGFuIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFNsaWRlQmFja2dyb3VuZCggeCwgeSApIHtcblxuXHRcdC8vIFdoZW4gcHJpbnRpbmcgdG8gUERGIHRoZSBzbGlkZSBiYWNrZ3JvdW5kcyBhcmUgbmVzdGVkXG5cdFx0Ly8gaW5zaWRlIG9mIHRoZSBzbGlkZXNcblx0XHRpZiggaXNQcmludGluZ1BERigpICkge1xuXHRcdFx0dmFyIHNsaWRlID0gZ2V0U2xpZGUoIHgsIHkgKTtcblx0XHRcdGlmKCBzbGlkZSApIHtcblx0XHRcdFx0dmFyIGJhY2tncm91bmQgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCAnLnNsaWRlLWJhY2tncm91bmQnICk7XG5cdFx0XHRcdGlmKCBiYWNrZ3JvdW5kICYmIGJhY2tncm91bmQucGFyZW50Tm9kZSA9PT0gc2xpZGUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJhY2tncm91bmQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR2YXIgaG9yaXpvbnRhbEJhY2tncm91bmQgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCAnLmJhY2tncm91bmRzPi5zbGlkZS1iYWNrZ3JvdW5kJyApWyB4IF07XG5cdFx0dmFyIHZlcnRpY2FsQmFja2dyb3VuZHMgPSBob3Jpem9udGFsQmFja2dyb3VuZCAmJiBob3Jpem9udGFsQmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yQWxsKCAnLnNsaWRlLWJhY2tncm91bmQnICk7XG5cblx0XHRpZiggdmVydGljYWxCYWNrZ3JvdW5kcyAmJiB2ZXJ0aWNhbEJhY2tncm91bmRzLmxlbmd0aCAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRyZXR1cm4gdmVydGljYWxCYWNrZ3JvdW5kcyA/IHZlcnRpY2FsQmFja2dyb3VuZHNbIHkgXSA6IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaG9yaXpvbnRhbEJhY2tncm91bmQ7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHByZXNlbnRhdGlvbiBhc1xuXHQgKiBhbiBvYmplY3QuIFRoaXMgc3RhdGUgY2FuIHRoZW4gYmUgcmVzdG9yZWQgYXQgYW55XG5cdCAqIHRpbWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcblxuXHRcdHZhciBpbmRpY2VzID0gZ2V0SW5kaWNlcygpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGluZGV4aDogaW5kaWNlcy5oLFxuXHRcdFx0aW5kZXh2OiBpbmRpY2VzLnYsXG5cdFx0XHRpbmRleGY6IGluZGljZXMuZixcblx0XHRcdHBhdXNlZDogaXNQYXVzZWQoKSxcblx0XHRcdG92ZXJ2aWV3OiBpc092ZXJ2aWV3KClcblx0XHR9O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVzdG9yZXMgdGhlIHByZXNlbnRhdGlvbiB0byB0aGUgZ2l2ZW4gc3RhdGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBBcyBnZW5lcmF0ZWQgYnkgZ2V0U3RhdGUoKVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0U3RhdGUoIHN0YXRlICkge1xuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSA9PT0gJ29iamVjdCcgKSB7XG5cdFx0XHRzbGlkZSggZGVzZXJpYWxpemUoIHN0YXRlLmluZGV4aCApLCBkZXNlcmlhbGl6ZSggc3RhdGUuaW5kZXh2ICksIGRlc2VyaWFsaXplKCBzdGF0ZS5pbmRleGYgKSApO1xuXG5cdFx0XHR2YXIgcGF1c2VkRmxhZyA9IGRlc2VyaWFsaXplKCBzdGF0ZS5wYXVzZWQgKSxcblx0XHRcdFx0b3ZlcnZpZXdGbGFnID0gZGVzZXJpYWxpemUoIHN0YXRlLm92ZXJ2aWV3ICk7XG5cblx0XHRcdGlmKCB0eXBlb2YgcGF1c2VkRmxhZyA9PT0gJ2Jvb2xlYW4nICYmIHBhdXNlZEZsYWcgIT09IGlzUGF1c2VkKCkgKSB7XG5cdFx0XHRcdHRvZ2dsZVBhdXNlKCBwYXVzZWRGbGFnICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0eXBlb2Ygb3ZlcnZpZXdGbGFnID09PSAnYm9vbGVhbicgJiYgb3ZlcnZpZXdGbGFnICE9PSBpc092ZXJ2aWV3KCkgKSB7XG5cdFx0XHRcdHRvZ2dsZU92ZXJ2aWV3KCBvdmVydmlld0ZsYWcgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBzb3J0ZWQgZnJhZ21lbnRzIGxpc3QsIG9yZGVyZWQgYnkgYW4gaW5jcmVhc2luZ1xuXHQgKiBcImRhdGEtZnJhZ21lbnQtaW5kZXhcIiBhdHRyaWJ1dGUuXG5cdCAqXG5cdCAqIEZyYWdtZW50cyB3aWxsIGJlIHJldmVhbGVkIGluIHRoZSBvcmRlciB0aGF0IHRoZXkgYXJlIHJldHVybmVkIGJ5XG5cdCAqIHRoaXMgZnVuY3Rpb24sIHNvIHlvdSBjYW4gdXNlIHRoZSBpbmRleCBhdHRyaWJ1dGVzIHRvIGNvbnRyb2wgdGhlXG5cdCAqIG9yZGVyIG9mIGZyYWdtZW50IGFwcGVhcmFuY2UuXG5cdCAqXG5cdCAqIFRvIG1haW50YWluIGEgc2Vuc2libGUgZGVmYXVsdCBmcmFnbWVudCBvcmRlciwgZnJhZ21lbnRzIGFyZSBwcmVzdW1lZFxuXHQgKiB0byBiZSBwYXNzZWQgaW4gZG9jdW1lbnQgb3JkZXIuIFRoaXMgZnVuY3Rpb24gYWRkcyBhIFwiZnJhZ21lbnQtaW5kZXhcIlxuXHQgKiBhdHRyaWJ1dGUgdG8gZWFjaCBub2RlIGlmIHN1Y2ggYW4gYXR0cmlidXRlIGlzIG5vdCBhbHJlYWR5IHByZXNlbnQsXG5cdCAqIGFuZCBzZXRzIHRoYXQgYXR0cmlidXRlIHRvIGFuIGludGVnZXIgdmFsdWUgd2hpY2ggaXMgdGhlIHBvc2l0aW9uIG9mXG5cdCAqIHRoZSBmcmFnbWVudCB3aXRoaW4gdGhlIGZyYWdtZW50cyBsaXN0LlxuXHQgKi9cblx0ZnVuY3Rpb24gc29ydEZyYWdtZW50cyggZnJhZ21lbnRzICkge1xuXG5cdFx0ZnJhZ21lbnRzID0gdG9BcnJheSggZnJhZ21lbnRzICk7XG5cblx0XHR2YXIgb3JkZXJlZCA9IFtdLFxuXHRcdFx0dW5vcmRlcmVkID0gW10sXG5cdFx0XHRzb3J0ZWQgPSBbXTtcblxuXHRcdC8vIEdyb3VwIG9yZGVyZWQgYW5kIHVub3JkZXJlZCBlbGVtZW50c1xuXHRcdGZyYWdtZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnQsIGkgKSB7XG5cdFx0XHRpZiggZnJhZ21lbnQuaGFzQXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gcGFyc2VJbnQoIGZyYWdtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICksIDEwICk7XG5cblx0XHRcdFx0aWYoICFvcmRlcmVkW2luZGV4XSApIHtcblx0XHRcdFx0XHRvcmRlcmVkW2luZGV4XSA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0b3JkZXJlZFtpbmRleF0ucHVzaCggZnJhZ21lbnQgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR1bm9yZGVyZWQucHVzaCggWyBmcmFnbWVudCBdICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gQXBwZW5kIGZyYWdtZW50cyB3aXRob3V0IGV4cGxpY2l0IGluZGljZXMgaW4gdGhlaXJcblx0XHQvLyBET00gb3JkZXJcblx0XHRvcmRlcmVkID0gb3JkZXJlZC5jb25jYXQoIHVub3JkZXJlZCApO1xuXG5cdFx0Ly8gTWFudWFsbHkgY291bnQgdGhlIGluZGV4IHVwIHBlciBncm91cCB0byBlbnN1cmUgdGhlcmVcblx0XHQvLyBhcmUgbm8gZ2Fwc1xuXHRcdHZhciBpbmRleCA9IDA7XG5cblx0XHQvLyBQdXNoIGFsbCBmcmFnbWVudHMgaW4gdGhlaXIgc29ydGVkIG9yZGVyIHRvIGFuIGFycmF5LFxuXHRcdC8vIHRoaXMgZmxhdHRlbnMgdGhlIGdyb3Vwc1xuXHRcdG9yZGVyZWQuZm9yRWFjaCggZnVuY3Rpb24oIGdyb3VwICkge1xuXHRcdFx0Z3JvdXAuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50ICkge1xuXHRcdFx0XHRzb3J0ZWQucHVzaCggZnJhZ21lbnQgKTtcblx0XHRcdFx0ZnJhZ21lbnQuc2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcsIGluZGV4ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGluZGV4ICsrO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBzb3J0ZWQ7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBOYXZpZ2F0ZSB0byB0aGUgc3BlY2lmaWVkIHNsaWRlIGZyYWdtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBmcmFnbWVudCB0aGF0XG5cdCAqIHNob3VsZCBiZSBzaG93biwgLTEgbWVhbnMgYWxsIGFyZSBpbnZpc2libGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBJbnRlZ2VyIG9mZnNldCB0byBhcHBseSB0byB0aGVcblx0ICogZnJhZ21lbnQgaW5kZXhcblx0ICpcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIGNoYW5nZSB3YXMgbWFkZSBpbiBhbnlcblx0ICogZnJhZ21lbnRzIHZpc2liaWxpdHkgYXMgcGFydCBvZiB0aGlzIGNhbGxcblx0ICovXG5cdGZ1bmN0aW9uIG5hdmlnYXRlRnJhZ21lbnQoIGluZGV4LCBvZmZzZXQgKSB7XG5cblx0XHRpZiggY3VycmVudFNsaWRlICYmIGNvbmZpZy5mcmFnbWVudHMgKSB7XG5cblx0XHRcdHZhciBmcmFnbWVudHMgPSBzb3J0RnJhZ21lbnRzKCBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXHRcdFx0aWYoIGZyYWdtZW50cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Ly8gSWYgbm8gaW5kZXggaXMgc3BlY2lmaWVkLCBmaW5kIHRoZSBjdXJyZW50XG5cdFx0XHRcdGlmKCB0eXBlb2YgaW5kZXggIT09ICdudW1iZXInICkge1xuXHRcdFx0XHRcdHZhciBsYXN0VmlzaWJsZUZyYWdtZW50ID0gc29ydEZyYWdtZW50cyggY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQudmlzaWJsZScgKSApLnBvcCgpO1xuXG5cdFx0XHRcdFx0aWYoIGxhc3RWaXNpYmxlRnJhZ21lbnQgKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IHBhcnNlSW50KCBsYXN0VmlzaWJsZUZyYWdtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICkgfHwgMCwgMTAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIGFuIG9mZnNldCBpcyBzcGVjaWZpZWQsIGFwcGx5IGl0IHRvIHRoZSBpbmRleFxuXHRcdFx0XHRpZiggdHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdFx0aW5kZXggKz0gb2Zmc2V0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGZyYWdtZW50c1Nob3duID0gW10sXG5cdFx0XHRcdFx0ZnJhZ21lbnRzSGlkZGVuID0gW107XG5cblx0XHRcdFx0dG9BcnJheSggZnJhZ21lbnRzICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQsIGkgKSB7XG5cblx0XHRcdFx0XHRpZiggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApICkge1xuXHRcdFx0XHRcdFx0aSA9IHBhcnNlSW50KCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICksIDEwICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVmlzaWJsZSBmcmFnbWVudHNcblx0XHRcdFx0XHRpZiggaSA8PSBpbmRleCApIHtcblx0XHRcdFx0XHRcdGlmKCAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd2aXNpYmxlJyApICkgZnJhZ21lbnRzU2hvd24ucHVzaCggZWxlbWVudCApO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG5cblx0XHRcdFx0XHRcdC8vIEFubm91bmNlIHRoZSBmcmFnbWVudHMgb25lIGJ5IG9uZSB0byB0aGUgU2NyZWVuIFJlYWRlclxuXHRcdFx0XHRcdFx0ZG9tLnN0YXR1c0Rpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHRcdFx0XHRcdGlmKCBpID09PSBpbmRleCApIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnY3VycmVudC1mcmFnbWVudCcgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSGlkZGVuIGZyYWdtZW50c1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAndmlzaWJsZScgKSApIGZyYWdtZW50c0hpZGRlbi5wdXNoKCBlbGVtZW50ICk7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICd2aXNpYmxlJyApO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcblx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0aWYoIGZyYWdtZW50c0hpZGRlbi5sZW5ndGggKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hFdmVudCggJ2ZyYWdtZW50aGlkZGVuJywgeyBmcmFnbWVudDogZnJhZ21lbnRzSGlkZGVuWzBdLCBmcmFnbWVudHM6IGZyYWdtZW50c0hpZGRlbiB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggZnJhZ21lbnRzU2hvd24ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGRpc3BhdGNoRXZlbnQoICdmcmFnbWVudHNob3duJywgeyBmcmFnbWVudDogZnJhZ21lbnRzU2hvd25bMF0sIGZyYWdtZW50czogZnJhZ21lbnRzU2hvd24gfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dXBkYXRlQ29udHJvbHMoKTtcblx0XHRcdFx0dXBkYXRlUHJvZ3Jlc3MoKTtcblxuXHRcdFx0XHRyZXR1cm4gISEoIGZyYWdtZW50c1Nob3duLmxlbmd0aCB8fCBmcmFnbWVudHNIaWRkZW4ubGVuZ3RoICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRlIHRvIHRoZSBuZXh0IHNsaWRlIGZyYWdtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXJlIHdhcyBhIG5leHQgZnJhZ21lbnQsXG5cdCAqIGZhbHNlIG90aGVyd2lzZVxuXHQgKi9cblx0ZnVuY3Rpb24gbmV4dEZyYWdtZW50KCkge1xuXG5cdFx0cmV0dXJuIG5hdmlnYXRlRnJhZ21lbnQoIG51bGwsIDEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzbGlkZSBmcmFnbWVudC5cblx0ICpcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSB3YXMgYSBwcmV2aW91cyBmcmFnbWVudCxcblx0ICogZmFsc2Ugb3RoZXJ3aXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcmV2aW91c0ZyYWdtZW50KCkge1xuXG5cdFx0cmV0dXJuIG5hdmlnYXRlRnJhZ21lbnQoIG51bGwsIC0xICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDdWVzIGEgbmV3IGF1dG9tYXRlZCBzbGlkZSBpZiBlbmFibGVkIGluIHRoZSBjb25maWcuXG5cdCAqL1xuXHRmdW5jdGlvbiBjdWVBdXRvU2xpZGUoKSB7XG5cblx0XHRjYW5jZWxBdXRvU2xpZGUoKTtcblxuXHRcdGlmKCBjdXJyZW50U2xpZGUgKSB7XG5cblx0XHRcdHZhciBjdXJyZW50RnJhZ21lbnQgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvciggJy5jdXJyZW50LWZyYWdtZW50JyApO1xuXG5cdFx0XHR2YXIgZnJhZ21lbnRBdXRvU2xpZGUgPSBjdXJyZW50RnJhZ21lbnQgPyBjdXJyZW50RnJhZ21lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1hdXRvc2xpZGUnICkgOiBudWxsO1xuXHRcdFx0dmFyIHBhcmVudEF1dG9TbGlkZSA9IGN1cnJlbnRTbGlkZS5wYXJlbnROb2RlID8gY3VycmVudFNsaWRlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1hdXRvc2xpZGUnICkgOiBudWxsO1xuXHRcdFx0dmFyIHNsaWRlQXV0b1NsaWRlID0gY3VycmVudFNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYXV0b3NsaWRlJyApO1xuXG5cdFx0XHQvLyBQaWNrIHZhbHVlIGluIHRoZSBmb2xsb3dpbmcgcHJpb3JpdHkgb3JkZXI6XG5cdFx0XHQvLyAxLiBDdXJyZW50IGZyYWdtZW50J3MgZGF0YS1hdXRvc2xpZGVcblx0XHRcdC8vIDIuIEN1cnJlbnQgc2xpZGUncyBkYXRhLWF1dG9zbGlkZVxuXHRcdFx0Ly8gMy4gUGFyZW50IHNsaWRlJ3MgZGF0YS1hdXRvc2xpZGVcblx0XHRcdC8vIDQuIEdsb2JhbCBhdXRvU2xpZGUgc2V0dGluZ1xuXHRcdFx0aWYoIGZyYWdtZW50QXV0b1NsaWRlICkge1xuXHRcdFx0XHRhdXRvU2xpZGUgPSBwYXJzZUludCggZnJhZ21lbnRBdXRvU2xpZGUsIDEwICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCBzbGlkZUF1dG9TbGlkZSApIHtcblx0XHRcdFx0YXV0b1NsaWRlID0gcGFyc2VJbnQoIHNsaWRlQXV0b1NsaWRlLCAxMCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggcGFyZW50QXV0b1NsaWRlICkge1xuXHRcdFx0XHRhdXRvU2xpZGUgPSBwYXJzZUludCggcGFyZW50QXV0b1NsaWRlLCAxMCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGF1dG9TbGlkZSA9IGNvbmZpZy5hdXRvU2xpZGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlIGFyZSBtZWRpYSBlbGVtZW50cyB3aXRoIGRhdGEtYXV0b3BsYXksXG5cdFx0XHQvLyBhdXRvbWF0aWNhbGx5IHNldCB0aGUgYXV0b1NsaWRlIGR1cmF0aW9uIHRvIHRoZVxuXHRcdFx0Ly8gbGVuZ3RoIG9mIHRoYXQgbWVkaWEuIE5vdCBhcHBsaWNhYmxlIGlmIHRoZSBzbGlkZVxuXHRcdFx0Ly8gaXMgZGl2aWRlZCB1cCBpbnRvIGZyYWdtZW50cy5cblx0XHRcdGlmKCBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdHRvQXJyYXkoIGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAndmlkZW8sIGF1ZGlvJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRcdGlmKCBlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWF1dG9wbGF5JyApICkge1xuXHRcdFx0XHRcdFx0aWYoIGF1dG9TbGlkZSAmJiBlbC5kdXJhdGlvbiAqIDEwMDAgPiBhdXRvU2xpZGUgKSB7XG5cdFx0XHRcdFx0XHRcdGF1dG9TbGlkZSA9ICggZWwuZHVyYXRpb24gKiAxMDAwICkgKyAxMDAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDdWUgdGhlIG5leHQgYXV0by1zbGlkZSBpZjpcblx0XHRcdC8vIC0gVGhlcmUgaXMgYW4gYXV0b1NsaWRlIHZhbHVlXG5cdFx0XHQvLyAtIEF1dG8tc2xpZGluZyBpc24ndCBwYXVzZWQgYnkgdGhlIHVzZXJcblx0XHRcdC8vIC0gVGhlIHByZXNlbnRhdGlvbiBpc24ndCBwYXVzZWRcblx0XHRcdC8vIC0gVGhlIG92ZXJ2aWV3IGlzbid0IGFjdGl2ZVxuXHRcdFx0Ly8gLSBUaGUgcHJlc2VudGF0aW9uIGlzbid0IG92ZXJcblx0XHRcdGlmKCBhdXRvU2xpZGUgJiYgIWF1dG9TbGlkZVBhdXNlZCAmJiAhaXNQYXVzZWQoKSAmJiAhaXNPdmVydmlldygpICYmICggIVJldmVhbC5pc0xhc3RTbGlkZSgpIHx8IGF2YWlsYWJsZUZyYWdtZW50cygpLm5leHQgfHwgY29uZmlnLmxvb3AgPT09IHRydWUgKSApIHtcblx0XHRcdFx0YXV0b1NsaWRlVGltZW91dCA9IHNldFRpbWVvdXQoIG5hdmlnYXRlTmV4dCwgYXV0b1NsaWRlICk7XG5cdFx0XHRcdGF1dG9TbGlkZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBhdXRvU2xpZGVQbGF5ZXIgKSB7XG5cdFx0XHRcdGF1dG9TbGlkZVBsYXllci5zZXRQbGF5aW5nKCBhdXRvU2xpZGVUaW1lb3V0ICE9PSAtMSApO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2FuY2VscyBhbnkgb25nb2luZyByZXF1ZXN0IHRvIGF1dG8tc2xpZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBjYW5jZWxBdXRvU2xpZGUoKSB7XG5cblx0XHRjbGVhclRpbWVvdXQoIGF1dG9TbGlkZVRpbWVvdXQgKTtcblx0XHRhdXRvU2xpZGVUaW1lb3V0ID0gLTE7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHBhdXNlQXV0b1NsaWRlKCkge1xuXG5cdFx0aWYoIGF1dG9TbGlkZSAmJiAhYXV0b1NsaWRlUGF1c2VkICkge1xuXHRcdFx0YXV0b1NsaWRlUGF1c2VkID0gdHJ1ZTtcblx0XHRcdGRpc3BhdGNoRXZlbnQoICdhdXRvc2xpZGVwYXVzZWQnICk7XG5cdFx0XHRjbGVhclRpbWVvdXQoIGF1dG9TbGlkZVRpbWVvdXQgKTtcblxuXHRcdFx0aWYoIGF1dG9TbGlkZVBsYXllciApIHtcblx0XHRcdFx0YXV0b1NsaWRlUGxheWVyLnNldFBsYXlpbmcoIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiByZXN1bWVBdXRvU2xpZGUoKSB7XG5cblx0XHRpZiggYXV0b1NsaWRlICYmIGF1dG9TbGlkZVBhdXNlZCApIHtcblx0XHRcdGF1dG9TbGlkZVBhdXNlZCA9IGZhbHNlO1xuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ2F1dG9zbGlkZXJlc3VtZWQnICk7XG5cdFx0XHRjdWVBdXRvU2xpZGUoKTtcblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG5hdmlnYXRlTGVmdCgpIHtcblxuXHRcdC8vIFJldmVyc2UgZm9yIFJUTFxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0aWYoICggaXNPdmVydmlldygpIHx8IG5leHRGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLmxlZnQgKSB7XG5cdFx0XHRcdHNsaWRlKCBpbmRleGggKyAxICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE5vcm1hbCBuYXZpZ2F0aW9uXG5cdFx0ZWxzZSBpZiggKCBpc092ZXJ2aWV3KCkgfHwgcHJldmlvdXNGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLmxlZnQgKSB7XG5cdFx0XHRzbGlkZSggaW5kZXhoIC0gMSApO1xuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gbmF2aWdhdGVSaWdodCgpIHtcblxuXHRcdC8vIFJldmVyc2UgZm9yIFJUTFxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0aWYoICggaXNPdmVydmlldygpIHx8IHByZXZpb3VzRnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5yaWdodCApIHtcblx0XHRcdFx0c2xpZGUoIGluZGV4aCAtIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gTm9ybWFsIG5hdmlnYXRpb25cblx0XHRlbHNlIGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBuZXh0RnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5yaWdodCApIHtcblx0XHRcdHNsaWRlKCBpbmRleGggKyAxICk7XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBuYXZpZ2F0ZVVwKCkge1xuXG5cdFx0Ly8gUHJpb3JpdGl6ZSBoaWRpbmcgZnJhZ21lbnRzXG5cdFx0aWYoICggaXNPdmVydmlldygpIHx8IHByZXZpb3VzRnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS51cCApIHtcblx0XHRcdHNsaWRlKCBpbmRleGgsIGluZGV4diAtIDEgKTtcblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG5hdmlnYXRlRG93bigpIHtcblxuXHRcdC8vIFByaW9yaXRpemUgcmV2ZWFsaW5nIGZyYWdtZW50c1xuXHRcdGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBuZXh0RnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5kb3duICkge1xuXHRcdFx0c2xpZGUoIGluZGV4aCwgaW5kZXh2ICsgMSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRlcyBiYWNrd2FyZHMsIHByaW9yaXRpemVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG5cdCAqIDEpIFByZXZpb3VzIGZyYWdtZW50XG5cdCAqIDIpIFByZXZpb3VzIHZlcnRpY2FsIHNsaWRlXG5cdCAqIDMpIFByZXZpb3VzIGhvcml6b250YWwgc2xpZGVcblx0ICovXG5cdGZ1bmN0aW9uIG5hdmlnYXRlUHJldigpIHtcblxuXHRcdC8vIFByaW9yaXRpemUgcmV2ZWFsaW5nIGZyYWdtZW50c1xuXHRcdGlmKCBwcmV2aW91c0ZyYWdtZW50KCkgPT09IGZhbHNlICkge1xuXHRcdFx0aWYoIGF2YWlsYWJsZVJvdXRlcygpLnVwICkge1xuXHRcdFx0XHRuYXZpZ2F0ZVVwKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gRmV0Y2ggdGhlIHByZXZpb3VzIGhvcml6b250YWwgc2xpZGUsIGlmIHRoZXJlIGlzIG9uZVxuXHRcdFx0XHR2YXIgcHJldmlvdXNTbGlkZTtcblxuXHRcdFx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdFx0XHRwcmV2aW91c1NsaWRlID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKyAnLmZ1dHVyZScgKSApLnBvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHByZXZpb3VzU2xpZGUgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiArICcucGFzdCcgKSApLnBvcCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHByZXZpb3VzU2xpZGUgKSB7XG5cdFx0XHRcdFx0dmFyIHYgPSAoIHByZXZpb3VzU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkubGVuZ3RoIC0gMSApIHx8IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR2YXIgaCA9IGluZGV4aCAtIDE7XG5cdFx0XHRcdFx0c2xpZGUoIGgsIHYgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSByZXZlcnNlIG9mICNuYXZpZ2F0ZVByZXYoKS5cblx0ICovXG5cdGZ1bmN0aW9uIG5hdmlnYXRlTmV4dCgpIHtcblxuXHRcdC8vIFByaW9yaXRpemUgcmV2ZWFsaW5nIGZyYWdtZW50c1xuXHRcdGlmKCBuZXh0RnJhZ21lbnQoKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRpZiggYXZhaWxhYmxlUm91dGVzKCkuZG93biApIHtcblx0XHRcdFx0bmF2aWdhdGVEb3duKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0XHRuYXZpZ2F0ZUxlZnQoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRuYXZpZ2F0ZVJpZ2h0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYXV0by1zbGlkaW5nIGlzIGVuYWJsZWQgd2UgbmVlZCB0byBjdWUgdXBcblx0XHQvLyBhbm90aGVyIHRpbWVvdXRcblx0XHRjdWVBdXRvU2xpZGUoKTtcblxuXHR9XG5cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgYnkgYWxsIGV2ZW50IGhhbmRsZXJzIHRoYXQgYXJlIGJhc2VkIG9uIHVzZXJcblx0ICogaW5wdXQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblVzZXJJbnB1dCggZXZlbnQgKSB7XG5cblx0XHRpZiggY29uZmlnLmF1dG9TbGlkZVN0b3BwYWJsZSApIHtcblx0XHRcdHBhdXNlQXV0b1NsaWRlKCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGRvY3VtZW50IGxldmVsICdrZXlwcmVzcycgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbkRvY3VtZW50S2V5UHJlc3MoIGV2ZW50ICkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHByZXNzZWQga2V5IGlzIHF1ZXN0aW9uIG1hcmtcblx0XHRpZiggZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQuY2hhckNvZGUgPT09IDYzICkge1xuXHRcdFx0aWYoIGRvbS5vdmVybGF5ICkge1xuXHRcdFx0XHRjbG9zZU92ZXJsYXkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzaG93SGVscCggdHJ1ZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBkb2N1bWVudCBsZXZlbCAna2V5ZG93bicgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbkRvY3VtZW50S2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgY29uZGl0aW9uIHNwZWNpZmllZCBhbmQgaXQgcmV0dXJucyBmYWxzZSxcblx0XHQvLyBpZ25vcmUgdGhpcyBldmVudFxuXHRcdGlmKCB0eXBlb2YgY29uZmlnLmtleWJvYXJkQ29uZGl0aW9uID09PSAnZnVuY3Rpb24nICYmIGNvbmZpZy5rZXlib2FyZENvbmRpdGlvbigpID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIGlmIGF1dG8tc2xpZGluZyB3YXMgcGF1c2VkIHNvIHdlIGNhbiB0b2dnbGUgaXRcblx0XHR2YXIgYXV0b1NsaWRlV2FzUGF1c2VkID0gYXV0b1NsaWRlUGF1c2VkO1xuXG5cdFx0b25Vc2VySW5wdXQoIGV2ZW50ICk7XG5cblx0XHQvLyBDaGVjayBpZiB0aGVyZSdzIGEgZm9jdXNlZCBlbGVtZW50IHRoYXQgY291bGQgYmUgdXNpbmdcblx0XHQvLyB0aGUga2V5Ym9hcmRcblx0XHR2YXIgYWN0aXZlRWxlbWVudElzQ0UgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY29udGVudEVkaXRhYmxlICE9PSAnaW5oZXJpdCc7XG5cdFx0dmFyIGFjdGl2ZUVsZW1lbnRJc0lucHV0ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUgJiYgL2lucHV0fHRleHRhcmVhL2kudGVzdCggZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50YWdOYW1lICk7XG5cblx0XHQvLyBEaXNyZWdhcmQgdGhlIGV2ZW50IGlmIHRoZXJlJ3MgYSBmb2N1c2VkIGVsZW1lbnQgb3IgYVxuXHRcdC8vIGtleWJvYXJkIG1vZGlmaWVyIGtleSBpcyBwcmVzZW50XG5cdFx0aWYoIGFjdGl2ZUVsZW1lbnRJc0NFIHx8IGFjdGl2ZUVsZW1lbnRJc0lucHV0IHx8IChldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXlDb2RlICE9PSAzMikgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSApIHJldHVybjtcblxuXHRcdC8vIFdoaWxlIHBhdXNlZCBvbmx5IGFsbG93IFwidW5wYXVzaW5nXCIga2V5Ym9hcmQgZXZlbnRzIChiIGFuZCAuKVxuXHRcdGlmKCBpc1BhdXNlZCgpICYmIFs2NiwxOTAsMTkxXS5pbmRleE9mKCBldmVudC5rZXlDb2RlICkgPT09IC0xICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciB0cmlnZ2VyZWQgPSBmYWxzZTtcblxuXHRcdC8vIDEuIFVzZXIgZGVmaW5lZCBrZXkgYmluZGluZ3Ncblx0XHRpZiggdHlwZW9mIGNvbmZpZy5rZXlib2FyZCA9PT0gJ29iamVjdCcgKSB7XG5cblx0XHRcdGZvciggdmFyIGtleSBpbiBjb25maWcua2V5Ym9hcmQgKSB7XG5cblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhpcyBiaW5kaW5nIG1hdGNoZXMgdGhlIHByZXNzZWQga2V5XG5cdFx0XHRcdGlmKCBwYXJzZUludCgga2V5LCAxMCApID09PSBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gY29uZmlnLmtleWJvYXJkWyBrZXkgXTtcblxuXHRcdFx0XHRcdC8vIENhbGxiYWNrIGZ1bmN0aW9uXG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRcdHZhbHVlLmFwcGx5KCBudWxsLCBbIGV2ZW50IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gU3RyaW5nIHNob3J0Y3V0cyB0byByZXZlYWwuanMgQVBJXG5cdFx0XHRcdFx0ZWxzZSBpZiggdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgUmV2ZWFsWyB2YWx1ZSBdID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0UmV2ZWFsWyB2YWx1ZSBdLmNhbGwoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0cmlnZ2VyZWQgPSB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gMi4gU3lzdGVtIGRlZmluZWQga2V5IGJpbmRpbmdzXG5cdFx0aWYoIHRyaWdnZXJlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSB0cnVlIGFuZCB0cnkgdG8gcHJvdmUgZmFsc2Vcblx0XHRcdHRyaWdnZXJlZCA9IHRydWU7XG5cblx0XHRcdHN3aXRjaCggZXZlbnQua2V5Q29kZSApIHtcblx0XHRcdFx0Ly8gcCwgcGFnZSB1cFxuXHRcdFx0XHRjYXNlIDgwOiBjYXNlIDMzOiBuYXZpZ2F0ZVByZXYoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIG4sIHBhZ2UgZG93blxuXHRcdFx0XHRjYXNlIDc4OiBjYXNlIDM0OiBuYXZpZ2F0ZU5leHQoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGgsIGxlZnRcblx0XHRcdFx0Y2FzZSA3MjogY2FzZSAzNzogbmF2aWdhdGVMZWZ0KCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBsLCByaWdodFxuXHRcdFx0XHRjYXNlIDc2OiBjYXNlIDM5OiBuYXZpZ2F0ZVJpZ2h0KCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBrLCB1cFxuXHRcdFx0XHRjYXNlIDc1OiBjYXNlIDM4OiBuYXZpZ2F0ZVVwKCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBqLCBkb3duXG5cdFx0XHRcdGNhc2UgNzQ6IGNhc2UgNDA6IG5hdmlnYXRlRG93bigpOyBicmVhaztcblx0XHRcdFx0Ly8gaG9tZVxuXHRcdFx0XHRjYXNlIDM2OiBzbGlkZSggMCApOyBicmVhaztcblx0XHRcdFx0Ly8gZW5kXG5cdFx0XHRcdGNhc2UgMzU6IHNsaWRlKCBOdW1iZXIuTUFYX1ZBTFVFICk7IGJyZWFrO1xuXHRcdFx0XHQvLyBzcGFjZVxuXHRcdFx0XHRjYXNlIDMyOiBpc092ZXJ2aWV3KCkgPyBkZWFjdGl2YXRlT3ZlcnZpZXcoKSA6IGV2ZW50LnNoaWZ0S2V5ID8gbmF2aWdhdGVQcmV2KCkgOiBuYXZpZ2F0ZU5leHQoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIHJldHVyblxuXHRcdFx0XHRjYXNlIDEzOiBpc092ZXJ2aWV3KCkgPyBkZWFjdGl2YXRlT3ZlcnZpZXcoKSA6IHRyaWdnZXJlZCA9IGZhbHNlOyBicmVhaztcblx0XHRcdFx0Ly8gdHdvLXNwb3QsIHNlbWljb2xvbiwgYiwgcGVyaW9kLCBMb2dpdGVjaCBwcmVzZW50ZXIgdG9vbHMgXCJibGFjayBzY3JlZW5cIiBidXR0b25cblx0XHRcdFx0Y2FzZSA1ODogY2FzZSA1OTogY2FzZSA2NjogY2FzZSAxOTA6IGNhc2UgMTkxOiB0b2dnbGVQYXVzZSgpOyBicmVhaztcblx0XHRcdFx0Ly8gZlxuXHRcdFx0XHRjYXNlIDcwOiBlbnRlckZ1bGxzY3JlZW4oKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGFcblx0XHRcdFx0Y2FzZSA2NTogaWYgKCBjb25maWcuYXV0b1NsaWRlU3RvcHBhYmxlICkgdG9nZ2xlQXV0b1NsaWRlKCBhdXRvU2xpZGVXYXNQYXVzZWQgKTsgYnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dHJpZ2dlcmVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgaW5wdXQgcmVzdWx0ZWQgaW4gYSB0cmlnZ2VyZWQgYWN0aW9uIHdlIHNob3VsZCBwcmV2ZW50XG5cdFx0Ly8gdGhlIGJyb3dzZXJzIGRlZmF1bHQgYmVoYXZpb3Jcblx0XHRpZiggdHJpZ2dlcmVkICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0Ly8gRVNDIG9yIE8ga2V5XG5cdFx0ZWxzZSBpZiAoICggZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNzkgKSAmJiBmZWF0dXJlcy50cmFuc2Zvcm1zM2QgKSB7XG5cdFx0XHRpZiggZG9tLm92ZXJsYXkgKSB7XG5cdFx0XHRcdGNsb3NlT3ZlcmxheSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRvZ2dsZU92ZXJ2aWV3KCk7XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYXV0by1zbGlkaW5nIGlzIGVuYWJsZWQgd2UgbmVlZCB0byBjdWUgdXBcblx0XHQvLyBhbm90aGVyIHRpbWVvdXRcblx0XHRjdWVBdXRvU2xpZGUoKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSAndG91Y2hzdGFydCcgZXZlbnQsIGVuYWJsZXMgc3VwcG9ydCBmb3Jcblx0ICogc3dpcGUgYW5kIHBpbmNoIGdlc3R1cmVzLlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdHRvdWNoLnN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcblx0XHR0b3VjaC5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG5cdFx0dG91Y2guc3RhcnRDb3VudCA9IGV2ZW50LnRvdWNoZXMubGVuZ3RoO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyB0d28gdG91Y2hlcyB3ZSBuZWVkIHRvIG1lbW9yaXplIHRoZSBkaXN0YW5jZVxuXHRcdC8vIGJldHdlZW4gdGhvc2UgdHdvIHBvaW50cyB0byBkZXRlY3QgcGluY2hpbmdcblx0XHRpZiggZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDIgJiYgY29uZmlnLm92ZXJ2aWV3ICkge1xuXHRcdFx0dG91Y2guc3RhcnRTcGFuID0gZGlzdGFuY2VCZXR3ZWVuKCB7XG5cdFx0XHRcdHg6IGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WCxcblx0XHRcdFx0eTogZXZlbnQudG91Y2hlc1sxXS5jbGllbnRZXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHg6IHRvdWNoLnN0YXJ0WCxcblx0XHRcdFx0eTogdG91Y2guc3RhcnRZXG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlICd0b3VjaG1vdmUnIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0Ly8gRWFjaCB0b3VjaCBzaG91bGQgb25seSB0cmlnZ2VyIG9uZSBhY3Rpb25cblx0XHRpZiggIXRvdWNoLmNhcHR1cmVkICkge1xuXHRcdFx0b25Vc2VySW5wdXQoIGV2ZW50ICk7XG5cblx0XHRcdHZhciBjdXJyZW50WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcblx0XHRcdHZhciBjdXJyZW50WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuXHRcdFx0Ly8gSWYgdGhlIHRvdWNoIHN0YXJ0ZWQgd2l0aCB0d28gcG9pbnRzIGFuZCBzdGlsbCBoYXNcblx0XHRcdC8vIHR3byBhY3RpdmUgdG91Y2hlczsgdGVzdCBmb3IgdGhlIHBpbmNoIGdlc3R1cmVcblx0XHRcdGlmKCBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMiAmJiB0b3VjaC5zdGFydENvdW50ID09PSAyICYmIGNvbmZpZy5vdmVydmlldyApIHtcblxuXHRcdFx0XHQvLyBUaGUgY3VycmVudCBkaXN0YW5jZSBpbiBwaXhlbHMgYmV0d2VlbiB0aGUgdHdvIHRvdWNoIHBvaW50c1xuXHRcdFx0XHR2YXIgY3VycmVudFNwYW4gPSBkaXN0YW5jZUJldHdlZW4oIHtcblx0XHRcdFx0XHR4OiBldmVudC50b3VjaGVzWzFdLmNsaWVudFgsXG5cdFx0XHRcdFx0eTogZXZlbnQudG91Y2hlc1sxXS5jbGllbnRZXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR4OiB0b3VjaC5zdGFydFgsXG5cdFx0XHRcdFx0eTogdG91Y2guc3RhcnRZXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvLyBJZiB0aGUgc3BhbiBpcyBsYXJnZXIgdGhhbiB0aGUgZGVzaXJlIGFtb3VudCB3ZSd2ZSBnb3Rcblx0XHRcdFx0Ly8gb3Vyc2VsdmVzIGEgcGluY2hcblx0XHRcdFx0aWYoIE1hdGguYWJzKCB0b3VjaC5zdGFydFNwYW4gLSBjdXJyZW50U3BhbiApID4gdG91Y2gudGhyZXNob2xkICkge1xuXHRcdFx0XHRcdHRvdWNoLmNhcHR1cmVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGlmKCBjdXJyZW50U3BhbiA8IHRvdWNoLnN0YXJ0U3BhbiApIHtcblx0XHRcdFx0XHRcdGFjdGl2YXRlT3ZlcnZpZXcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRkZWFjdGl2YXRlT3ZlcnZpZXcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR9XG5cdFx0XHQvLyBUaGVyZSB3YXMgb25seSBvbmUgdG91Y2ggcG9pbnQsIGxvb2sgZm9yIGEgc3dpcGVcblx0XHRcdGVsc2UgaWYoIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRvdWNoLnN0YXJ0Q291bnQgIT09IDIgKSB7XG5cblx0XHRcdFx0dmFyIGRlbHRhWCA9IGN1cnJlbnRYIC0gdG91Y2guc3RhcnRYLFxuXHRcdFx0XHRcdGRlbHRhWSA9IGN1cnJlbnRZIC0gdG91Y2guc3RhcnRZO1xuXG5cdFx0XHRcdGlmKCBkZWx0YVggPiB0b3VjaC50aHJlc2hvbGQgJiYgTWF0aC5hYnMoIGRlbHRhWCApID4gTWF0aC5hYnMoIGRlbHRhWSApICkge1xuXHRcdFx0XHRcdHRvdWNoLmNhcHR1cmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRuYXZpZ2F0ZUxlZnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKCBkZWx0YVggPCAtdG91Y2gudGhyZXNob2xkICYmIE1hdGguYWJzKCBkZWx0YVggKSA+IE1hdGguYWJzKCBkZWx0YVkgKSApIHtcblx0XHRcdFx0XHR0b3VjaC5jYXB0dXJlZCA9IHRydWU7XG5cdFx0XHRcdFx0bmF2aWdhdGVSaWdodCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoIGRlbHRhWSA+IHRvdWNoLnRocmVzaG9sZCApIHtcblx0XHRcdFx0XHR0b3VjaC5jYXB0dXJlZCA9IHRydWU7XG5cdFx0XHRcdFx0bmF2aWdhdGVVcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoIGRlbHRhWSA8IC10b3VjaC50aHJlc2hvbGQgKSB7XG5cdFx0XHRcdFx0dG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuXHRcdFx0XHRcdG5hdmlnYXRlRG93bigpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgd2UncmUgZW1iZWRkZWQsIG9ubHkgYmxvY2sgdG91Y2ggZXZlbnRzIGlmIHRoZXkgaGF2ZVxuXHRcdFx0XHQvLyB0cmlnZ2VyZWQgYW4gYWN0aW9uXG5cdFx0XHRcdGlmKCBjb25maWcuZW1iZWRkZWQgKSB7XG5cdFx0XHRcdFx0aWYoIHRvdWNoLmNhcHR1cmVkIHx8IGlzVmVydGljYWxTbGlkZSggY3VycmVudFNsaWRlICkgKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBOb3QgZW1iZWRkZWQ/IEJsb2NrIHRoZW0gYWxsIHRvIGF2b2lkIG5lZWRsZXNzIHRvc3Npbmdcblx0XHRcdFx0Ly8gYXJvdW5kIG9mIHRoZSB2aWV3cG9ydCBpbiBpT1Ncblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIFRoZXJlJ3MgYSBidWcgd2l0aCBzd2lwaW5nIG9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIHVubGVzc1xuXHRcdC8vIHRoZSBkZWZhdWx0IGFjdGlvbiBpcyBhbHdheXMgcHJldmVudGVkXG5cdFx0ZWxzZSBpZiggbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCggL2FuZHJvaWQvZ2kgKSApIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlICd0b3VjaGVuZCcgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdHRvdWNoLmNhcHR1cmVkID0gZmFsc2U7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IHBvaW50ZXIgZG93biB0byB0b3VjaCBzdGFydC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYoIGV2ZW50LnBvaW50ZXJUeXBlID09PSBldmVudC5NU1BPSU5URVJfVFlQRV9UT1VDSCB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiICkge1xuXHRcdFx0ZXZlbnQudG91Y2hlcyA9IFt7IGNsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFkgfV07XG5cdFx0XHRvblRvdWNoU3RhcnQoIGV2ZW50ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydCBwb2ludGVyIG1vdmUgdG8gdG91Y2ggbW92ZS5cblx0ICovXG5cdGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYoIGV2ZW50LnBvaW50ZXJUeXBlID09PSBldmVudC5NU1BPSU5URVJfVFlQRV9UT1VDSCB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiICkgIHtcblx0XHRcdGV2ZW50LnRvdWNoZXMgPSBbeyBjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZIH1dO1xuXHRcdFx0b25Ub3VjaE1vdmUoIGV2ZW50ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydCBwb2ludGVyIHVwIHRvIHRvdWNoIGVuZC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uUG9pbnRlclVwKCBldmVudCApIHtcblxuXHRcdGlmKCBldmVudC5wb2ludGVyVHlwZSA9PT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIiApICB7XG5cdFx0XHRldmVudC50b3VjaGVzID0gW3sgY2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WSB9XTtcblx0XHRcdG9uVG91Y2hFbmQoIGV2ZW50ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBtb3VzZSB3aGVlbCBzY3JvbGxpbmcsIHRocm90dGxlZCB0byBhdm9pZCBza2lwcGluZ1xuXHQgKiBtdWx0aXBsZSBzbGlkZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbkRvY3VtZW50TW91c2VTY3JvbGwoIGV2ZW50ICkge1xuXG5cdFx0aWYoIERhdGUubm93KCkgLSBsYXN0TW91c2VXaGVlbFN0ZXAgPiA2MDAgKSB7XG5cblx0XHRcdGxhc3RNb3VzZVdoZWVsU3RlcCA9IERhdGUubm93KCk7XG5cblx0XHRcdHZhciBkZWx0YSA9IGV2ZW50LmRldGFpbCB8fCAtZXZlbnQud2hlZWxEZWx0YTtcblx0XHRcdGlmKCBkZWx0YSA+IDAgKSB7XG5cdFx0XHRcdG5hdmlnYXRlTmV4dCgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG5hdmlnYXRlUHJldigpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2xpY2tpbmcgb24gdGhlIHByb2dyZXNzIGJhciByZXN1bHRzIGluIGEgbmF2aWdhdGlvbiB0byB0aGVcblx0ICogY2xvc2VzdCBhcHByb3hpbWF0ZSBob3Jpem9udGFsIHNsaWRlIHVzaW5nIHRoaXMgZXF1YXRpb246XG5cdCAqXG5cdCAqICggY2xpY2tYIC8gcHJlc2VudGF0aW9uV2lkdGggKSAqIG51bWJlck9mU2xpZGVzXG5cdCAqL1xuXHRmdW5jdGlvbiBvblByb2dyZXNzQ2xpY2tlZCggZXZlbnQgKSB7XG5cblx0XHRvblVzZXJJbnB1dCggZXZlbnQgKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgc2xpZGVzVG90YWwgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICkubGVuZ3RoO1xuXHRcdHZhciBzbGlkZUluZGV4ID0gTWF0aC5mbG9vciggKCBldmVudC5jbGllbnRYIC8gZG9tLndyYXBwZXIub2Zmc2V0V2lkdGggKSAqIHNsaWRlc1RvdGFsICk7XG5cblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdHNsaWRlSW5kZXggPSBzbGlkZXNUb3RhbCAtIHNsaWRlSW5kZXg7XG5cdFx0fVxuXG5cdFx0c2xpZGUoIHNsaWRlSW5kZXggKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEV2ZW50IGhhbmRsZXIgZm9yIG5hdmlnYXRpb24gY29udHJvbCBidXR0b25zLlxuXHQgKi9cblx0ZnVuY3Rpb24gb25OYXZpZ2F0ZUxlZnRDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVMZWZ0KCk7IH1cblx0ZnVuY3Rpb24gb25OYXZpZ2F0ZVJpZ2h0Q2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlUmlnaHQoKTsgfVxuXHRmdW5jdGlvbiBvbk5hdmlnYXRlVXBDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVVcCgpOyB9XG5cdGZ1bmN0aW9uIG9uTmF2aWdhdGVEb3duQ2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlRG93bigpOyB9XG5cdGZ1bmN0aW9uIG9uTmF2aWdhdGVQcmV2Q2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlUHJldigpOyB9XG5cdGZ1bmN0aW9uIG9uTmF2aWdhdGVOZXh0Q2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlTmV4dCgpOyB9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSB3aW5kb3cgbGV2ZWwgJ2hhc2hjaGFuZ2UnIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25XaW5kb3dIYXNoQ2hhbmdlKCBldmVudCApIHtcblxuXHRcdHJlYWRVUkwoKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSB3aW5kb3cgbGV2ZWwgJ3Jlc2l6ZScgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSggZXZlbnQgKSB7XG5cblx0XHRsYXlvdXQoKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBmb3IgdGhlIHdpbmRvdyBsZXZlbCAndmlzaWJpbGl0eWNoYW5nZScgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblBhZ2VWaXNpYmlsaXR5Q2hhbmdlKCBldmVudCApIHtcblxuXHRcdHZhciBpc0hpZGRlbiA9ICBkb2N1bWVudC53ZWJraXRIaWRkZW4gfHxcblx0XHRcdFx0XHRcdGRvY3VtZW50Lm1zSGlkZGVuIHx8XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oaWRkZW47XG5cblx0XHQvLyBJZiwgYWZ0ZXIgY2xpY2tpbmcgYSBsaW5rIG9yIHNpbWlsYXIgYW5kIHdlJ3JlIGNvbWluZyBiYWNrLFxuXHRcdC8vIGZvY3VzIHRoZSBkb2N1bWVudC5ib2R5IHRvIGVuc3VyZSB3ZSBjYW4gdXNlIGtleWJvYXJkIHNob3J0Y3V0c1xuXHRcdGlmKCBpc0hpZGRlbiA9PT0gZmFsc2UgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSApIHtcblx0XHRcdC8vIE5vdCBhbGwgZWxlbWVudHMgc3VwcG9ydCAuYmx1cigpIC0gU1ZHcyBhbW9uZyB0aGVtLlxuXHRcdFx0aWYoIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEludm9rZWQgd2hlbiBhIHNsaWRlIGlzIGFuZCB3ZSdyZSBpbiB0aGUgb3ZlcnZpZXcuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbk92ZXJ2aWV3U2xpZGVDbGlja2VkKCBldmVudCApIHtcblxuXHRcdC8vIFRPRE8gVGhlcmUncyBhIGJ1ZyBoZXJlIHdoZXJlIHRoZSBldmVudCBsaXN0ZW5lcnMgYXJlIG5vdFxuXHRcdC8vIHJlbW92ZWQgYWZ0ZXIgZGVhY3RpdmF0aW5nIHRoZSBvdmVydmlldy5cblx0XHRpZiggZXZlbnRzQXJlQm91bmQgJiYgaXNPdmVydmlldygpICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cblx0XHRcdHdoaWxlKCBlbGVtZW50ICYmICFlbGVtZW50Lm5vZGVOYW1lLm1hdGNoKCAvc2VjdGlvbi9naSApICkge1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZWxlbWVudCAmJiAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICdkaXNhYmxlZCcgKSApIHtcblxuXHRcdFx0XHRkZWFjdGl2YXRlT3ZlcnZpZXcoKTtcblxuXHRcdFx0XHRpZiggZWxlbWVudC5ub2RlTmFtZS5tYXRjaCggL3NlY3Rpb24vZ2kgKSApIHtcblx0XHRcdFx0XHR2YXIgaCA9IHBhcnNlSW50KCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtaW5kZXgtaCcgKSwgMTAgKSxcblx0XHRcdFx0XHRcdHYgPSBwYXJzZUludCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWluZGV4LXYnICksIDEwICk7XG5cblx0XHRcdFx0XHRzbGlkZSggaCwgdiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNsaWNrcyBvbiBsaW5rcyB0aGF0IGFyZSBzZXQgdG8gcHJldmlldyBpbiB0aGVcblx0ICogaWZyYW1lIG92ZXJsYXkuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblByZXZpZXdMaW5rQ2xpY2tlZCggZXZlbnQgKSB7XG5cblx0XHRpZiggZXZlbnQuY3VycmVudFRhcmdldCAmJiBldmVudC5jdXJyZW50VGFyZ2V0Lmhhc0F0dHJpYnV0ZSggJ2hyZWYnICkgKSB7XG5cdFx0XHR2YXIgdXJsID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoICdocmVmJyApO1xuXHRcdFx0aWYoIHVybCApIHtcblx0XHRcdFx0c2hvd1ByZXZpZXcoIHVybCApO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgY2xpY2sgb24gdGhlIGF1dG8tc2xpZGluZyBjb250cm9scyBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25BdXRvU2xpZGVQbGF5ZXJDbGljayggZXZlbnQgKSB7XG5cblx0XHQvLyBSZXBsYXlcblx0XHRpZiggUmV2ZWFsLmlzTGFzdFNsaWRlKCkgJiYgY29uZmlnLmxvb3AgPT09IGZhbHNlICkge1xuXHRcdFx0c2xpZGUoIDAsIDAgKTtcblx0XHRcdHJlc3VtZUF1dG9TbGlkZSgpO1xuXHRcdH1cblx0XHQvLyBSZXN1bWVcblx0XHRlbHNlIGlmKCBhdXRvU2xpZGVQYXVzZWQgKSB7XG5cdFx0XHRyZXN1bWVBdXRvU2xpZGUoKTtcblx0XHR9XG5cdFx0Ly8gUGF1c2Vcblx0XHRlbHNlIHtcblx0XHRcdHBhdXNlQXV0b1NsaWRlKCk7XG5cdFx0fVxuXG5cdH1cblxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBMQVlCQUNLIENPTVBPTkVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuXHQvKipcblx0ICogQ29uc3RydWN0b3IgZm9yIHRoZSBwbGF5YmFjayBjb21wb25lbnQsIHdoaWNoIGRpc3BsYXlzXG5cdCAqIHBsYXkvcGF1c2UvcHJvZ3Jlc3MgY29udHJvbHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29tcG9uZW50IHdpbGwgYXBwZW5kXG5cdCAqIGl0c2VsZiB0byB0aGlzXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHByb2dyZXNzQ2hlY2sgQSBtZXRob2Qgd2hpY2ggd2lsbCBiZVxuXHQgKiBjYWxsZWQgZnJlcXVlbnRseSB0byBnZXQgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb24gYSByYW5nZVxuXHQgKiBvZiAwLTFcblx0ICovXG5cdGZ1bmN0aW9uIFBsYXliYWNrKCBjb250YWluZXIsIHByb2dyZXNzQ2hlY2sgKSB7XG5cblx0XHQvLyBDb3NtZXRpY3Ncblx0XHR0aGlzLmRpYW1ldGVyID0gNTA7XG5cdFx0dGhpcy50aGlja25lc3MgPSAzO1xuXG5cdFx0Ly8gRmxhZ3MgaWYgd2UgYXJlIGN1cnJlbnRseSBwbGF5aW5nXG5cdFx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cblx0XHQvLyBDdXJyZW50IHByb2dyZXNzIG9uIGEgMC0xIHJhbmdlXG5cdFx0dGhpcy5wcm9ncmVzcyA9IDA7XG5cblx0XHQvLyBVc2VkIHRvIGxvb3AgdGhlIGFuaW1hdGlvbiBzbW9vdGhseVxuXHRcdHRoaXMucHJvZ3Jlc3NPZmZzZXQgPSAxO1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cdFx0dGhpcy5wcm9ncmVzc0NoZWNrID0gcHJvZ3Jlc3NDaGVjaztcblxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblx0XHR0aGlzLmNhbnZhcy5jbGFzc05hbWUgPSAncGxheWJhY2snO1xuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5kaWFtZXRlcjtcblx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmRpYW1ldGVyO1xuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCB0aGlzLmNhbnZhcyApO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblxuXHR9XG5cblx0UGxheWJhY2sucHJvdG90eXBlLnNldFBsYXlpbmcgPSBmdW5jdGlvbiggdmFsdWUgKSB7XG5cblx0XHR2YXIgd2FzUGxheWluZyA9IHRoaXMucGxheWluZztcblxuXHRcdHRoaXMucGxheWluZyA9IHZhbHVlO1xuXG5cdFx0Ly8gU3RhcnQgcmVwYWludGluZyBpZiB3ZSB3ZXJlbid0IGFscmVhZHlcblx0XHRpZiggIXdhc1BsYXlpbmcgJiYgdGhpcy5wbGF5aW5nICkge1xuXHRcdFx0dGhpcy5hbmltYXRlKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9XG5cblx0fTtcblxuXHRQbGF5YmFjay5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHByb2dyZXNzQmVmb3JlID0gdGhpcy5wcm9ncmVzcztcblxuXHRcdHRoaXMucHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzQ2hlY2soKTtcblxuXHRcdC8vIFdoZW4gd2UgbG9vcCwgb2Zmc2V0IHRoZSBwcm9ncmVzcyBzbyB0aGF0IGl0IGVhc2VzXG5cdFx0Ly8gc21vb3RobHkgcmF0aGVyIHRoYW4gaW1tZWRpYXRlbHkgcmVzZXR0aW5nXG5cdFx0aWYoIHByb2dyZXNzQmVmb3JlID4gMC44ICYmIHRoaXMucHJvZ3Jlc3MgPCAwLjIgKSB7XG5cdFx0XHR0aGlzLnByb2dyZXNzT2Zmc2V0ID0gdGhpcy5wcm9ncmVzcztcblx0XHR9XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXG5cdFx0aWYoIHRoaXMucGxheWluZyApIHtcblx0XHRcdGZlYXR1cmVzLnJlcXVlc3RBbmltYXRpb25GcmFtZU1ldGhvZC5jYWxsKCB3aW5kb3csIHRoaXMuYW5pbWF0ZS5iaW5kKCB0aGlzICkgKTtcblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogUmVuZGVycyB0aGUgY3VycmVudCBwcm9ncmVzcyBhbmQgcGxheWJhY2sgc3RhdGUuXG5cdCAqL1xuXHRQbGF5YmFjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcHJvZ3Jlc3MgPSB0aGlzLnBsYXlpbmcgPyB0aGlzLnByb2dyZXNzIDogMCxcblx0XHRcdHJhZGl1cyA9ICggdGhpcy5kaWFtZXRlciAvIDIgKSAtIHRoaXMudGhpY2tuZXNzLFxuXHRcdFx0eCA9IHRoaXMuZGlhbWV0ZXIgLyAyLFxuXHRcdFx0eSA9IHRoaXMuZGlhbWV0ZXIgLyAyLFxuXHRcdFx0aWNvblNpemUgPSAxNDtcblxuXHRcdC8vIEVhc2UgdG93YXJkcyAxXG5cdFx0dGhpcy5wcm9ncmVzc09mZnNldCArPSAoIDEgLSB0aGlzLnByb2dyZXNzT2Zmc2V0ICkgKiAwLjE7XG5cblx0XHR2YXIgZW5kQW5nbGUgPSAoIC0gTWF0aC5QSSAvIDIgKSArICggcHJvZ3Jlc3MgKiAoIE1hdGguUEkgKiAyICkgKTtcblx0XHR2YXIgc3RhcnRBbmdsZSA9ICggLSBNYXRoLlBJIC8gMiApICsgKCB0aGlzLnByb2dyZXNzT2Zmc2V0ICogKCBNYXRoLlBJICogMiApICk7XG5cblx0XHR0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIHRoaXMuZGlhbWV0ZXIsIHRoaXMuZGlhbWV0ZXIgKTtcblxuXHRcdC8vIFNvbGlkIGJhY2tncm91bmQgY29sb3Jcblx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jb250ZXh0LmFyYyggeCwgeSwgcmFkaXVzICsgMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlICk7XG5cdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKCAwLCAwLCAwLCAwLjQgKSc7XG5cdFx0dGhpcy5jb250ZXh0LmZpbGwoKTtcblxuXHRcdC8vIERyYXcgcHJvZ3Jlc3MgdHJhY2tcblx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jb250ZXh0LmFyYyggeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UgKTtcblx0XHR0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy50aGlja25lc3M7XG5cdFx0dGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyM2NjYnO1xuXHRcdHRoaXMuY29udGV4dC5zdHJva2UoKTtcblxuXHRcdGlmKCB0aGlzLnBsYXlpbmcgKSB7XG5cdFx0XHQvLyBEcmF3IHByb2dyZXNzIG9uIHRvcCBvZiB0cmFja1xuXHRcdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jb250ZXh0LmFyYyggeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UgKTtcblx0XHRcdHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnRoaWNrbmVzcztcblx0XHRcdHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjZmZmJztcblx0XHRcdHRoaXMuY29udGV4dC5zdHJva2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRleHQudHJhbnNsYXRlKCB4IC0gKCBpY29uU2l6ZSAvIDIgKSwgeSAtICggaWNvblNpemUgLyAyICkgKTtcblxuXHRcdC8vIERyYXcgcGxheS9wYXVzZSBpY29uc1xuXHRcdGlmKCB0aGlzLnBsYXlpbmcgKSB7XG5cdFx0XHR0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xuXHRcdFx0dGhpcy5jb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBpY29uU2l6ZSAvIDIgLSAyLCBpY29uU2l6ZSApO1xuXHRcdFx0dGhpcy5jb250ZXh0LmZpbGxSZWN0KCBpY29uU2l6ZSAvIDIgKyAyLCAwLCBpY29uU2l6ZSAvIDIgLSAyLCBpY29uU2l6ZSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY29udGV4dC50cmFuc2xhdGUoIDIsIDAgKTtcblx0XHRcdHRoaXMuY29udGV4dC5tb3ZlVG8oIDAsIDAgKTtcblx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8oIGljb25TaXplIC0gMiwgaWNvblNpemUgLyAyICk7XG5cdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKCAwLCBpY29uU2l6ZSApO1xuXHRcdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcblx0XHRcdHRoaXMuY29udGV4dC5maWxsKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcblxuXHR9O1xuXG5cdFBsYXliYWNrLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCB0eXBlLCBsaXN0ZW5lciApIHtcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UgKTtcblx0fTtcblxuXHRQbGF5YmFjay5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oIHR5cGUsIGxpc3RlbmVyICkge1xuXHRcdHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSApO1xuXHR9O1xuXG5cdFBsYXliYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmKCB0aGlzLmNhbnZhcy5wYXJlbnROb2RlICkge1xuXHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuY2FudmFzICk7XG5cdFx0fVxuXG5cdH07XG5cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQVBJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cblx0UmV2ZWFsID0ge1xuXHRcdGluaXRpYWxpemU6IGluaXRpYWxpemUsXG5cdFx0Y29uZmlndXJlOiBjb25maWd1cmUsXG5cdFx0c3luYzogc3luYyxcblxuXHRcdC8vIE5hdmlnYXRpb24gbWV0aG9kc1xuXHRcdHNsaWRlOiBzbGlkZSxcblx0XHRsZWZ0OiBuYXZpZ2F0ZUxlZnQsXG5cdFx0cmlnaHQ6IG5hdmlnYXRlUmlnaHQsXG5cdFx0dXA6IG5hdmlnYXRlVXAsXG5cdFx0ZG93bjogbmF2aWdhdGVEb3duLFxuXHRcdHByZXY6IG5hdmlnYXRlUHJldixcblx0XHRuZXh0OiBuYXZpZ2F0ZU5leHQsXG5cblx0XHQvLyBGcmFnbWVudCBtZXRob2RzXG5cdFx0bmF2aWdhdGVGcmFnbWVudDogbmF2aWdhdGVGcmFnbWVudCxcblx0XHRwcmV2RnJhZ21lbnQ6IHByZXZpb3VzRnJhZ21lbnQsXG5cdFx0bmV4dEZyYWdtZW50OiBuZXh0RnJhZ21lbnQsXG5cblx0XHQvLyBEZXByZWNhdGVkIGFsaWFzZXNcblx0XHRuYXZpZ2F0ZVRvOiBzbGlkZSxcblx0XHRuYXZpZ2F0ZUxlZnQ6IG5hdmlnYXRlTGVmdCxcblx0XHRuYXZpZ2F0ZVJpZ2h0OiBuYXZpZ2F0ZVJpZ2h0LFxuXHRcdG5hdmlnYXRlVXA6IG5hdmlnYXRlVXAsXG5cdFx0bmF2aWdhdGVEb3duOiBuYXZpZ2F0ZURvd24sXG5cdFx0bmF2aWdhdGVQcmV2OiBuYXZpZ2F0ZVByZXYsXG5cdFx0bmF2aWdhdGVOZXh0OiBuYXZpZ2F0ZU5leHQsXG5cblx0XHQvLyBGb3JjZXMgYW4gdXBkYXRlIGluIHNsaWRlIGxheW91dFxuXHRcdGxheW91dDogbGF5b3V0LFxuXG5cdFx0Ly8gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgYXZhaWxhYmxlIHJvdXRlcyBhcyBib29sZWFucyAobGVmdC9yaWdodC90b3AvYm90dG9tKVxuXHRcdGF2YWlsYWJsZVJvdXRlczogYXZhaWxhYmxlUm91dGVzLFxuXG5cdFx0Ly8gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgYXZhaWxhYmxlIGZyYWdtZW50cyBhcyBib29sZWFucyAocHJldi9uZXh0KVxuXHRcdGF2YWlsYWJsZUZyYWdtZW50czogYXZhaWxhYmxlRnJhZ21lbnRzLFxuXG5cdFx0Ly8gVG9nZ2xlcyB0aGUgb3ZlcnZpZXcgbW9kZSBvbi9vZmZcblx0XHR0b2dnbGVPdmVydmlldzogdG9nZ2xlT3ZlcnZpZXcsXG5cblx0XHQvLyBUb2dnbGVzIHRoZSBcImJsYWNrIHNjcmVlblwiIG1vZGUgb24vb2ZmXG5cdFx0dG9nZ2xlUGF1c2U6IHRvZ2dsZVBhdXNlLFxuXG5cdFx0Ly8gVG9nZ2xlcyB0aGUgYXV0byBzbGlkZSBtb2RlIG9uL29mZlxuXHRcdHRvZ2dsZUF1dG9TbGlkZTogdG9nZ2xlQXV0b1NsaWRlLFxuXG5cdFx0Ly8gU3RhdGUgY2hlY2tzXG5cdFx0aXNPdmVydmlldzogaXNPdmVydmlldyxcblx0XHRpc1BhdXNlZDogaXNQYXVzZWQsXG5cdFx0aXNBdXRvU2xpZGluZzogaXNBdXRvU2xpZGluZyxcblxuXHRcdC8vIEFkZHMgb3IgcmVtb3ZlcyBhbGwgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzIChzdWNoIGFzIGtleWJvYXJkKVxuXHRcdGFkZEV2ZW50TGlzdGVuZXJzOiBhZGRFdmVudExpc3RlbmVycyxcblx0XHRyZW1vdmVFdmVudExpc3RlbmVyczogcmVtb3ZlRXZlbnRMaXN0ZW5lcnMsXG5cblx0XHQvLyBGYWNpbGl0eSBmb3IgcGVyc2lzdGluZyBhbmQgcmVzdG9yaW5nIHRoZSBwcmVzZW50YXRpb24gc3RhdGVcblx0XHRnZXRTdGF0ZTogZ2V0U3RhdGUsXG5cdFx0c2V0U3RhdGU6IHNldFN0YXRlLFxuXG5cdFx0Ly8gUHJlc2VudGF0aW9uIHByb2dyZXNzIG9uIHJhbmdlIG9mIDAtMVxuXHRcdGdldFByb2dyZXNzOiBnZXRQcm9ncmVzcyxcblxuXHRcdC8vIFJldHVybnMgdGhlIGluZGljZXMgb2YgdGhlIGN1cnJlbnQsIG9yIHNwZWNpZmllZCwgc2xpZGVcblx0XHRnZXRJbmRpY2VzOiBnZXRJbmRpY2VzLFxuXG5cdFx0Z2V0VG90YWxTbGlkZXM6IGdldFRvdGFsU2xpZGVzLFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgc2xpZGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG5cdFx0Z2V0U2xpZGU6IGdldFNsaWRlLFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgc2xpZGUgYmFja2dyb3VuZCBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcblx0XHRnZXRTbGlkZUJhY2tncm91bmQ6IGdldFNsaWRlQmFja2dyb3VuZCxcblxuXHRcdC8vIFJldHVybnMgdGhlIHByZXZpb3VzIHNsaWRlIGVsZW1lbnQsIG1heSBiZSBudWxsXG5cdFx0Z2V0UHJldmlvdXNTbGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHJldmlvdXNTbGlkZTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgY3VycmVudCBzbGlkZSBlbGVtZW50XG5cdFx0Z2V0Q3VycmVudFNsaWRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBjdXJyZW50U2xpZGU7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2NhbGUgb2YgdGhlIHByZXNlbnRhdGlvbiBjb250ZW50XG5cdFx0Z2V0U2NhbGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHNjYWxlO1xuXHRcdH0sXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5cdFx0Z2V0Q29uZmlnOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBjb25maWc7XG5cdFx0fSxcblxuXHRcdC8vIEhlbHBlciBtZXRob2QsIHJldHJpZXZlcyBxdWVyeSBzdHJpbmcgYXMgYSBrZXkvdmFsdWUgaGFzaFxuXHRcdGdldFF1ZXJ5SGFzaDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcXVlcnkgPSB7fTtcblxuXHRcdFx0bG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoIC9bQS1aMC05XSs/PShbXFx3XFwuJS1dKikvZ2ksIGZ1bmN0aW9uKGEpIHtcblx0XHRcdFx0cXVlcnlbIGEuc3BsaXQoICc9JyApLnNoaWZ0KCkgXSA9IGEuc3BsaXQoICc9JyApLnBvcCgpO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBCYXNpYyBkZXNlcmlhbGl6YXRpb25cblx0XHRcdGZvciggdmFyIGkgaW4gcXVlcnkgKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHF1ZXJ5WyBpIF07XG5cblx0XHRcdFx0cXVlcnlbIGkgXSA9IGRlc2VyaWFsaXplKCB1bmVzY2FwZSggdmFsdWUgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcXVlcnk7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybnMgdHJ1ZSBpZiB3ZSdyZSBjdXJyZW50bHkgb24gdGhlIGZpcnN0IHNsaWRlXG5cdFx0aXNGaXJzdFNsaWRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAoIGluZGV4aCA9PT0gMCAmJiBpbmRleHYgPT09IDAgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJucyB0cnVlIGlmIHdlJ3JlIGN1cnJlbnRseSBvbiB0aGUgbGFzdCBzbGlkZVxuXHRcdGlzTGFzdFNsaWRlOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBjdXJyZW50U2xpZGUgKSB7XG5cdFx0XHRcdC8vIERvZXMgdGhpcyBzbGlkZSBoYXMgbmV4dCBhIHNpYmxpbmc/XG5cdFx0XHRcdGlmKCBjdXJyZW50U2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdC8vIElmIGl0J3MgdmVydGljYWwsIGRvZXMgaXRzIHBhcmVudCBoYXZlIGEgbmV4dCBzaWJsaW5nP1xuXHRcdFx0XHRpZiggaXNWZXJ0aWNhbFNsaWRlKCBjdXJyZW50U2xpZGUgKSAmJiBjdXJyZW50U2xpZGUucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0Ly8gQ2hlY2tzIGlmIHJldmVhbC5qcyBoYXMgYmVlbiBsb2FkZWQgYW5kIGlzIHJlYWR5IGZvciB1c2Vcblx0XHRpc1JlYWR5OiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBsb2FkZWQ7XG5cdFx0fSxcblxuXHRcdC8vIEZvcndhcmQgZXZlbnQgYmluZGluZyB0byB0aGUgcmV2ZWFsIERPTSBlbGVtZW50XG5cdFx0YWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oIHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlICkge1xuXHRcdFx0aWYoICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgKSB7XG5cdFx0XHRcdCggZG9tLndyYXBwZXIgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwnICkgKS5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oIHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlICkge1xuXHRcdFx0aWYoICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgKSB7XG5cdFx0XHRcdCggZG9tLndyYXBwZXIgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwnICkgKS5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBQcm9ncmFtYXRpY2FsbHkgdHJpZ2dlcnMgYSBrZXlib2FyZCBldmVudFxuXHRcdHRyaWdnZXJLZXk6IGZ1bmN0aW9uKCBrZXlDb2RlICkge1xuXHRcdFx0b25Eb2N1bWVudEtleURvd24oIHsga2V5Q29kZToga2V5Q29kZSB9ICk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBSZXZlYWw7XG5cbn0pKTtcbiJdfQ==
