webpackHotUpdate("static/development/pages/Registration.js",{

/***/ "./components/Menua.js":
/*!*****************************!*\
  !*** ./components/Menua.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/rishav/DMSfrontend/components/Menua.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction SimpleMenu() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    \"aria-controls\": \"simple-menu\",\n    \"aria-haspopup\": \"true\",\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    id: \"simple-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    href: \"\\\\index\",\n    onClick: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"Home\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    href: \"\\\\Registration\",\n    onClick: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, \"Enter Data\")));\n}\n\n_s(SimpleMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n\n_c = SimpleMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"SimpleMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVhLmpzPzYyZTUiXSwibmFtZXMiOlsiU2ltcGxlTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLHdCQUNEQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQURDO0FBQUE7QUFBQSxNQUMxQkMsUUFEMEI7QUFBQSxNQUNoQkMsV0FEZ0I7O0FBR2pDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQkYsZUFBVyxDQUFDRSxLQUFLLENBQUNDLGFBQVAsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkosZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnRUFBRDtBQUFRLHFCQUFjLGFBQXRCO0FBQW9DLHFCQUFjLE1BQWxEO0FBQXlELFdBQU8sRUFBRUMsV0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFPSSxNQUFDLDhEQUFEO0FBQ0ksTUFBRSxFQUFDLGFBRFA7QUFFSSxZQUFRLEVBQUVGLFFBRmQ7QUFHSSxlQUFXLE1BSGY7QUFJSSxRQUFJLEVBQUVNLE9BQU8sQ0FBQ04sUUFBRCxDQUpqQjtBQUtJLFdBQU8sRUFBRUssV0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxrRUFBRDtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXdCLFdBQU8sRUFBRUEsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLEVBUUksTUFBQyxrRUFBRDtBQUFVLFFBQUksRUFBQyxnQkFBZjtBQUErQixXQUFPLEVBQUVBLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkosQ0FQSixDQURKO0FBcUJIOztHQWhDdUJSLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnVhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVNZW51KCkge1xuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8TWVudUljb24+XG5cbiAgICAgICAgICAgICAgICA8L01lbnVJY29uPlxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCJcXGluZGV4XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PkhvbWU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiXFxSZWdpc3RyYXRpb25cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+RW50ZXIgRGF0YTwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Menua.js\n");

/***/ })

})