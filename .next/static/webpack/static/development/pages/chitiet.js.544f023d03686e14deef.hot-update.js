webpackHotUpdate("static\\development\\pages\\chitiet.js",{

/***/ "./components/motasanpham.js":
/*!***********************************!*\
  !*** ./components/motasanpham.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Motasanpham; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\buianh\\Desktop\\Github\\React-onghutsach\\components\\motasanpham.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Motasanpham =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Motasanpham, _React$Component);

  function Motasanpham(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Motasanpham);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Motasanpham).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Motasanpham, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "mota",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
        tabs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Tab1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Moar Tabs"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabContent"], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "motasanpham",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "TH\xD4NG TIN CHI TI\u1EBET"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Th\u01B0\u01A1ng hi\u1EC7u"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "K\xEDch c\u1EE1"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "M\xE0u/ H\u1ECDa ti\u1EBFt"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Xu\u1EA5t s\u1EE9"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "K\xEDch th\u01B0\u1EE1c"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "M\u1ED5 t\u1EA3 s\u1EA3n ph\u1EA9m"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "N\u1EBFu \u1ED1ng h\xFAt c\u1ECF b\xE0ng m\u1ECFng manh th\xEDch h\u1EE3p d\xF9ng cho m\u1ED9t l\u1EA7n th\xEC \u1ED1ng h\xFAt kim lo\u1EA1i l\u1EA1i l\xE0 l\u1EF1a ch\u1ECDn b\u1EC1n v\u1EEFng theo th\u1EDDi gian, chi ph\xED ban \u0111\u1EA7u h\u01A1i cao nh\u01B0ng tu\u1ED5i th\u1ECD v\xF4 bi\xEAn.\u1ED0ng h\xFAt kim lo\u1EA1i \u0111\u01B0\u1EE3c l\xE0m t\u1EEB th\xE9p kh\xF4ng g\u1EC9, n\u1EB7ng tay v\xE0 ch\u1EAFc ch\u1EAFn h\u01A1n c\xE1c lo\u1EA1i \u1ED1ng h\xFAt th\xF4ng th\u01B0\u1EDDng.C\xF3 ba ki\u1EC3u thi\u1EBFt k\u1EBF cho b\u1EA1n l\u1EF1a ch\u1ECDn: lo\u1EA1i \u1ED1ng h\xFAt \u0111\u1EA7u th\u1EB3ng v\xE0 lo\u1EA1i \u0111\u01B0\u1EE3c u\u1ED1ng cong 90 \u0111\u1ED9 \u1EDF 1/3 \u0111\u1EA7u \u1ED1ng v\xE0 lo\u1EA1i \u1ED1ng to h\xFAt tr\xE0 s\u1EEFa tr\xE2n ch\xE2u. S\u1EA3n ph\u1EA9m n\xE0y c\xF3 k\xEDch th\u01B0\u1EDBc t\u01B0\u01A1ng t\u1EF1 \u1ED1ng h\xFAt nh\u1EF1a b\xECnh th\u01B0\u1EDDng. Vi\u1EC7c h\xFAt n\u01B0\u1EDBc r\u1EA5t d\u1EC5 d\xE0ng.V\xEC l\xE0m t\u1EEB kim lo\u1EA1i n\xEAn s\u1EA3n ph\u1EA9m d\u1EABn nhi\u1EC7t kh\xE1 t\u1ED1t. N\u1EBFu \u0111\u1ED3 u\u1ED1ng n\xF3ng khi\u1EBFn b\u1EA1n ph\u1EA3i d\xE8 ch\u1EEBng v\xEC c\xF3 th\u1EC3 l\xE0m b\u1ECFng mi\u1EC7ng th\xEC \u0111\u1ED3 u\u1ED1ng m\xE1t khi d\xF9ng c\xF9ng \u1ED1ng h\xFAt kim lo\u1EA1i s\u1EBD \"\u0111\xE3\" h\u01A1n r\u1EA5t nhi\u1EC1u."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "B\u1EA1n c\xF3 th\u1EC3 t\u1EF1 tin mang \u1ED1ng h\xFAt \u0111i mu\xF4n n\u01A1i, \u0111\u1EC3 m\u1ED7i khi g\u1ECDi n\u01B0\u1EDBc, b\xEAn c\u1EA1nh c\xE1c l\u1EF1a ch\u1ECDn v\u1EC1 \u0111\u01B0\u1EDDng, \u0111\xE1, b\u1EA1n c\xF2n c\xF3 th\u1EC3 t\u1EF1 h\xE0o n\xF3i th\xEAm \"kh\xF4ng d\xF9ng \u1ED1ng h\xFAt\" v\xE0 ki\xEAu h\xE3nh r\xFAt \u1ED1ng kim lo\u1EA1i th\xE2n thi\u1EC7n v\u1EDBi m\xF4i tr\u01B0\u1EDDng ra d\xF9ng. C\xE1c c\u1EEDa h\xE0ng b\xE1n \u0111\u1ED3 u\u1ED1ng c\u0169ng c\xF3 th\u1EC3 \u0111\u1EA7u t\u01B0 s\u1EED d\u1EE5ng \u1ED1ng h\xFAt kim lo\u1EA1i v\xE0 v\u1EC7 sinh h\u1EB1ng ng\xE0y \u0111\u1EC3 gi\u1EA3m l\u01B0\u1EE3ng \u1ED1ng h\xFAt nh\u1EF1a kh\u1ED5ng l\u1ED3 th\u1EA3i ra m\xF4i tr\u01B0\u1EDDng."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })));
    }
  }]);

  return Motasanpham;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=chitiet.js.544f023d03686e14deef.hot-update.js.map