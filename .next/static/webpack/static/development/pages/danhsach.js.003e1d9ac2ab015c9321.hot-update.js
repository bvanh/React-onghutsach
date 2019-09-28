webpackHotUpdate("static\\development\\pages\\danhsach.js",{

/***/ "./components/danhsachsanpham.js":
/*!***************************************!*\
  !*** ./components/danhsachsanpham.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./components/data.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\React-onghutsach\\components\\danhsachsanpham.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





function Rating(props) {
  var rater = [];

  for (var i = 0; i < props.value; i++) {
    rater.push(__jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      key: i,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStar"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }

  return rater;
}

var Danhsachssanpham =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Danhsachssanpham, _React$Component);

  function Danhsachssanpham(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Danhsachssanpham);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Danhsachssanpham).call(this, props));
    _this.state = {
      items: _data__WEBPACK_IMPORTED_MODULE_7__["default"].items
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Danhsachssanpham, [{
    key: "render",
    value: function render() {
      var list = this.state.items;
      var printDanhsach = list.map(function (item, index) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/chitiet",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, __jsx("div", {
          className: "col-sm-4 pt-1 pb-3 productItem",
          "data-price": "5-10",
          "data-level": 4,
          "data-popularity": 5,
          "data-comment": 4,
          "data-kindhouse": "canho",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, __jsx("a", {
          className: "card-title",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("img", {
          src: item.src,
          className: "card-img-top",
          alt: "...",
          style: {
            paddingBottom: '.5rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }), __jsx("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, item.ten, "(", __jsx("i", {
          className: "soluong",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, item.soluong), ")"), __jsx(Rating, {
          value: item.danhgia,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, item.gia.toLocaleString(), " vn\u0111"))));
      });
      return __jsx("div", {
        className: "row products ",
        style: {
          paddingTop: '1rem'
        },
        id: "products1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, printDanhsach);
    }
  }]);

  return Danhsachssanpham;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Danhsachssanpham);

/***/ })

})
//# sourceMappingURL=danhsach.js.003e1d9ac2ab015c9321.hot-update.js.map