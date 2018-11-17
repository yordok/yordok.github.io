(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//  TODO: start by creating simple shape tweens
/**
 * start and end object shape:
 * {
 *   x,
 *   y,
 *   width,
 *   height
 * }
 */
var Animator = function () {
    function Animator(type, start, end) {
        _classCallCheck(this, Animator);

        this.started = false;
        this.currentX = start.x;
        this.currentY = start.y;
        this.currentWidth = start.width;
        this.currentHeight = start.height;
        //  passed values
        this.type = type;
        this.start = start;
        this.end = end;
    }

    _createClass(Animator, [{
        key: "startAnim",
        value: function startAnim() {
            this.started = true;
        }
    }, {
        key: "animate",
        value: function animate() {}
    }]);

    return Animator;
}();

exports.default = Animator;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = function Constants() {
    _classCallCheck(this, Constants);

    this.FPS = 30;
    this.CANVAS_WIDTH = window.innerWidth;
    this.CANVAS_HEIGHT = window.innerHeight;
    this.CANVAS_CLEAR_COLOR = '#000000';
};

exports.default = new Constants();

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //  main entry point


var _Constants = require('./common/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _AppManager = require('./managers/AppManager');

var _AppManager2 = _interopRequireDefault(_AppManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main(document) {
        _classCallCheck(this, Main);

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        this.canvas = document.getElementById('Canvas');
        this.canvas.style.height = windowHeight + 'px';
        this.canvas.style.width = windowWidth + 'px';
        this.ctx = this.canvas.getContext('2d');
        console.log('Window loaded...');
        console.log('Initializing...');
        this.initialize();
    }

    /**
     * Initialization of app
     */


    _createClass(Main, [{
        key: 'initialize',
        value: function initialize() {
            var _this = this;

            this.AppManager = new _AppManager2.default(this.ctx);
            setInterval(function () {
                _this.update();
            }, 1000 / _Constants2.default.FPS);
        }

        /**
         * made game loop
         */

    }, {
        key: 'update',
        value: function update() {
            console.info('update called');
            this.AppManager.update(this.ctx);
        }
    }]);

    return Main;
}();

window.onload = function () {
    //  initialize the app
    var mainApp = new Main(document); //eslint-disable-line
};

},{"./common/Constants":2,"./managers/AppManager":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = require('../common/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _Animator = require('../animations/Animator');

var _Animator2 = _interopRequireDefault(_Animator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppManager = function () {
    function AppManager() {
        _classCallCheck(this, AppManager);

        this.initializing = false;
        var start = {
            x: 0,
            y: 0,
            width: 10,
            height: 10
        };

        var end = {
            x: 100,
            y: 100,
            width: 10,
            height: 10
        };
        this.sampleAnim = new _Animator2.default('', start, end);
        this.initialize();
    }

    _createClass(AppManager, [{
        key: 'initialize',
        value: function initialize() {
            this.initializing = true;
        }
    }, {
        key: 'clearScreen',
        value: function clearScreen(ctx) {
            ctx.fillStyle = _Constants2.default.CANVAS_CLEAR_COLOR;
            ctx.fillRect(0, 0, _Constants2.default.CANVAS_WIDTH, _Constants2.default.CANVAS_HEIGHT);
        }
    }, {
        key: 'update',
        value: function update(ctx) {
            this.clearScreen(ctx);
            if (this.sampleAnim.started) {
                this.sampleAnim.animate();
            } else {
                this.sampleAnim.startAnim();
            }
        }
    }]);

    return AppManager;
}();

// const renderOpeningAnimation = function() {
//     this.y = Constants.CANVAS_HEIGHT / 2;
//     this.x = 0;
//     this.width = 10;
//     this.height = 10
// }


exports.default = AppManager;

},{"../animations/Animator":1,"../common/Constants":2}]},{},[3]);
