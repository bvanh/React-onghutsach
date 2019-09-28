webpackHotUpdate("static\\development\\pages\\giohang.js",{

/***/ "./components/cart/giohang.js":
/*!************************************!*\
  !*** ./components/cart/giohang.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./components/data.js");





var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\React-onghutsach\\components\\cart\\giohang.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Cart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, _React$Component);

  function Cart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).call(this, props));
    _this.state = {
      items: _data__WEBPACK_IMPORTED_MODULE_7__["default"].items
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "render",
    value: function render() {
      var list = this.state.items;
      var printList = list.map(item);
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "S\u1EA3n ph\u1EA9m"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Gi\xE1"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "S\u1ED1 l\u01B0\u1EE3ng"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "T\u1EA1m t\xEDnh"))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("th", {
        scope: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "1"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Mark"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Otto"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "@mdo"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "@mdo"))));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/data.js":
/*!****************************!*\
  !*** ./components/data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var danhsach = {
  items: [{
    id: 1,
    src: './static/img/cobang1.png',
    ten: 'Ống hút cỏ tươi',
    soluong: 'Hộp 50 ống',
    thongtin: ['50 ống hút cỏ bàng đường kính từ 4mm – 7mm để uống cafe, nước lọc và trà.', 'Ống hút được làm thủ công tại Việt Nam từ cây cỏ bàng; đạt tiêu chuẩn xuất khẩu sang Đức.', '100% thân thiện với tự nhiên, an toàn với sức khỏe con người.', 'Ống hút được bảo quản trong hộp đựng bằng giấy Kraft cao cấp có thiết kế độc đáo.'],
    gia: 60000,
    danhgia: 3
  }, {
    id: 2,
    src: './static/img/cobang2.jpg',
    ten: 'Ống hút cỏ khô',
    soluong: 'Hộp 50 ống',
    gia: 50000,
    danhgia: 4
  }, {
    id: 3,
    src: './static/img/cobang3.jpg',
    ten: 'Ống hút cỏ khô',
    soluong: 'Hộp 100 ống',
    gia: 100000,
    danhgia: 4
  }, {
    id: 4,
    src: './static/img/cobang4.jpg',
    ten: 'Ống hút cỏ tươi',
    soluong: 'Hộp 250 ống',
    gia: 250000,
    danhgia: 3
  }, {
    id: 5,
    src: './static/img/cobangkho4.jpg',
    ten: 'Ống hút cỏ khô',
    soluong: 'Hộp 500 ống',
    gia: 500000,
    danhgia: 2
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (danhsach);

/***/ })

})
//# sourceMappingURL=giohang.js.38d94190302e6c250d55.hot-update.js.map