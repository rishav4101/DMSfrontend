webpackHotUpdate("static/development/pages/Registration.js",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CenteredTabs; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./components/Login.js\");\n/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register */ \"./components/Register.js\");\n/* harmony import */ var _RegisterFormH__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterFormH */ \"./components/RegisterFormH.js\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tabs */ \"./node_modules/@material-ui/core/esm/Tabs/index.js\");\n/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tab */ \"./node_modules/@material-ui/core/esm/Tab/index.js\");\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS/components/Tabs.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__[\"makeStyles\"])({\n  root: {\n    flexGrow: 1\n  }\n});\nfunction CenteredTabs() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var handleChange = function handleChange(event, newValue) {\n    setValue(newValue);\n  };\n\n  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    value: value,\n    onChange: handleChange,\n    indicatorColor: \"primary\",\n    textColor: \"primary\",\n    centered: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    label: \"Item One\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    label: \"Item Two\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    label: \"Item Three\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(CenteredTabs, \"BDkWVlEh8+DaKPHysXJ2gpEmtFI=\", false, function () {\n  return [useStyles];\n});\n\n_c = CenteredTabs;\n\nvar _c;\n\n$RefreshReg$(_c, \"CenteredTabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYnMuanM/MTYzMCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwiQ2VudGVyZWRUYWJzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROO0FBRHFCLENBQUQsQ0FBNUI7QUFNZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEcUMsd0JBRVhNLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRlc7QUFBQTtBQUFBLE1BRTlCQyxLQUY4QjtBQUFBLE1BRXZCQyxRQUZ1Qjs7QUFJckMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3hDSCxZQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLCtEQUFEO0FBQU8sYUFBUyxFQUFFUCxPQUFPLENBQUNILElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsU0FBSyxFQUFFTSxLQURUO0FBRUUsWUFBUSxFQUFFRSxZQUZaO0FBR0Usa0JBQWMsRUFBQyxTQUhqQjtBQUlFLGFBQVMsRUFBQyxTQUpaO0FBS0UsWUFBUSxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDZEQUFEO0FBQUssU0FBSyxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyw2REFBRDtBQUFLLFNBQUssRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsNkRBQUQ7QUFBSyxTQUFLLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBZUQ7O0dBdkJ1Qk4sWTtVQUNOSixTOzs7S0FETUksWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFicy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vUmVnaXN0ZXInO1xuaW1wb3J0IFJlZ2lzdGVyRm9ybUggZnJvbSAnLi9SZWdpc3RlckZvcm1IJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VudGVyZWRUYWJzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8VGFic1xuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjZW50ZXJlZFxuICAgICAgPlxuICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBPbmVcIiAvPlxuICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBUd29cIiAvPlxuICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBUaHJlZVwiIC8+XG4gICAgICA8L1RhYnM+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tabs.js\n");

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Box/Box.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Box/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Fab/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Zoom/Zoom.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Zoom/index.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/computeIndex.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/constant.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/index.js":
false,

/***/ "./node_modules/react-swipeable-views-core/lib/mod.js":
false,

/***/ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/react-swipeable-views/lib/SwipeableViews.js":
false,

/***/ "./node_modules/react-swipeable-views/lib/index.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/warning/warning.js":
false

})