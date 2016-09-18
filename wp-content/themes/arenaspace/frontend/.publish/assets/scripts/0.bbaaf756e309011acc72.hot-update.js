webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(4);
	__webpack_require__(5);
	
	(0, _jquery2.default)(document).ready(function () {
	
	    (0, _jquery2.default)('.dg-container').gallery();
	    (0, _jquery2.default)('.columnize-js').columnize({
	        columns: 2
	    });
	
	    (0, _jquery2.default)(".nav a").click(function () {
	        var elementClick = (0, _jquery2.default)(this).attr("href");
	        var destination = (0, _jquery2.default)(elementClick).offset().top - 100;
	        (0, _jquery2.default)('html,body').animate({ scrollTop: destination }, 1100);
	        return false;
	    });
	
	    (0, _jquery2.default)(document).scroll(function () {
	        var s_top = (0, _jquery2.default)("body").scrollTop();
	        var yes = (0, _jquery2.default)("#section-form").offset().top;
	        if (s_top > yes) {
	            console.log("Yes");
	            (0, _jquery2.default)('.section-form .center').animate({ width: "1030px", overflow: "visible" }, 1000);
	            (0, _jquery2.default)('.section-form__form').animate({ opacity: "1" }, 2000);
	            (0, _jquery2.default)('.section-form__title').animate({ opacity: "1" }, 2000);
	        }
	    });
	});

/***/ }
])
//# sourceMappingURL=0.bbaaf756e309011acc72.hot-update.js.map