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
	        }
	    });
	});

/***/ }
])
//# sourceMappingURL=0.3e641dc1341d0d8dfd6a.hot-update.js.map