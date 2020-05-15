webpackHotUpdate("static/development/pages/Registration.js",{

/***/ "./components/Buttons.js":
/*!*******************************!*\
  !*** ./components/Buttons.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FloatingActionButtonZoom; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ \"./node_modules/@material-ui/core/esm/Tabs/index.js\");\n/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ \"./node_modules/@material-ui/core/esm/Tab/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Fab */ \"./node_modules/@material-ui/core/esm/Fab/index.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ \"./node_modules/@material-ui/icons/Add.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"./node_modules/@material-ui/icons/Edit.js\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ \"./node_modules/@material-ui/icons/KeyboardArrowUp.js\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Login */ \"./components/Login.js\");\n/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Register */ \"./components/Register.js\");\n\n\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS/components/Buttons.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction TabPanel(props) {\n  var children = props.children,\n      value = props.value,\n      index = props.index,\n      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props, [\"children\", \"value\", \"index\"]);\n\n  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    component: \"div\",\n    role: \"tabpanel\",\n    hidden: value !== index,\n    id: \"action-tabpanel-\".concat(index),\n    \"aria-labelledby\": \"action-tab-\".concat(index)\n  }, other, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n    p: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 27\n    }\n  }, children));\n}\n\n_c = TabPanel;\nTabPanel.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired\n};\n\nfunction a11yProps(index) {\n  return {\n    id: \"action-tab-\".concat(index),\n    'aria-controls': \"action-tabpanel-\".concat(index)\n  };\n}\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      backgroundColor: theme.palette.background.paper,\n      width: 500,\n      position: 'relative',\n      minHeight: 200\n    },\n    fab: {\n      position: 'absolute',\n      bottom: theme.spacing(2),\n      right: theme.spacing(2)\n    },\n    fabGreen: {\n      color: theme.palette.common.white,\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__[\"green\"][500],\n      '&:hover': {\n        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__[\"green\"][600]\n      }\n    }\n  };\n});\nfunction FloatingActionButtonZoom() {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"useTheme\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var handleChange = function handleChange(event, newValue) {\n    setValue(newValue);\n  };\n\n  var handleChangeIndex = function handleChangeIndex(index) {\n    setValue(index);\n  };\n\n  var transitionDuration = {\n    enter: theme.transitions.duration.enteringScreen,\n    exit: theme.transitions.duration.leavingScreen\n  };\n  var fabs = [{\n    color: 'primary',\n    className: classes.fab,\n    icon: __jsx(_Login__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }\n    }),\n    label: 'Add'\n  }, {\n    color: 'secondary',\n    className: classes.fab,\n    icon: __jsx(_Register__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 13\n      }\n    }),\n    label: 'Edit'\n  }, {}];\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    position: \"static\",\n    color: \"default\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    value: value,\n    onChange: handleChange,\n    indicatorColor: \"primary\",\n    textColor: \"primary\",\n    variant: \"fullWidth\",\n    \"aria-label\": \"action tabs example\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    label: \"Login\"\n  }, a11yProps(0), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    label: \"Register\"\n  }, a11yProps(1), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  })))), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',\n    index: value,\n    onChangeIndex: handleChangeIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, __jsx(TabPanel, {\n    value: value,\n    index: 0,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, \"Login\"), __jsx(TabPanel, {\n    value: value,\n    index: 1,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, \"Register\")), fabs.map(function (fab, index) {\n    return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      key: fab.color,\n      \"in\": value === index,\n      timeout: transitionDuration,\n      style: {\n        transitionDelay: \"\".concat(value === index ? transitionDuration.exit : 0, \"ms\")\n      },\n      unmountOnExit: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      \"aria-label\": fab.label,\n      className: fab.className,\n      color: fab.color,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 11\n      }\n    }, fab.icon));\n  }));\n}\n\n_s(FloatingActionButtonZoom, \"XiKagzVFXgRowwwDg+e/VhBURoA=\", false, function () {\n  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"useTheme\"]];\n});\n\n_c2 = FloatingActionButtonZoom;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TabPanel\");\n$RefreshReg$(_c2, \"FloatingActionButtonZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbnMuanM/ZjExZSJdLCJuYW1lcyI6WyJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiYW55IiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJ3aWR0aCIsInBvc2l0aW9uIiwibWluSGVpZ2h0IiwiZmFiIiwiYm90dG9tIiwic3BhY2luZyIsInJpZ2h0IiwiZmFiR3JlZW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiZ3JlZW4iLCJGbG9hdGluZ0FjdGlvbkJ1dHRvblpvb20iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlSW5kZXgiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJlbnRlciIsInRyYW5zaXRpb25zIiwiZHVyYXRpb24iLCJlbnRlcmluZ1NjcmVlbiIsImV4aXQiLCJsZWF2aW5nU2NyZWVuIiwiZmFicyIsImNsYXNzTmFtZSIsImljb24iLCJsYWJlbCIsImRpcmVjdGlvbiIsIm1hcCIsInRyYW5zaXRpb25EZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBLE1BQ2ZDLFFBRGUsR0FDc0JELEtBRHRCLENBQ2ZD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QUFBO0FBQUE7QUFBQSxPQUNHTCxHQUFHLENBQUM0QixJQURQLENBVEYsQ0FEUTtBQUFBLEdBQVQsQ0E1QkgsQ0FERjtBQThDRDs7R0FsRnVCbkIsd0I7VUFDTnBCLFMsRUFDRnNCLGlFOzs7TUFGUUYsd0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgVXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXAnO1xuaW1wb3J0IHsgZ3JlZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vUmVnaXN0ZXInO1xuXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5XG4gICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxuICAgICAgaWQ9e2BhY3Rpb24tdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgYWN0aW9uLXRhYi0ke2luZGV4fWB9XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiA8Qm94IHA9ezN9PntjaGlsZHJlbn08L0JveD59XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBgYWN0aW9uLXRhYi0ke2luZGV4fWAsXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgYWN0aW9uLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgfTtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICB3aWR0aDogNTAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1pbkhlaWdodDogMjAwLFxuICB9LFxuICBmYWI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGZhYkdyZWVuOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JlZW5bNTAwXSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JlZW5bNjAwXSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbG9hdGluZ0FjdGlvbkJ1dHRvblpvb20oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICBzZXRWYWx1ZShpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0ge1xuICAgIGVudGVyOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICBleGl0OiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxuICB9O1xuXG4gIGNvbnN0IGZhYnMgPSBbXG4gICAge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5mYWIsXG4gICAgICBpY29uOiA8TG9naW4gLz4sXG4gICAgICBsYWJlbDogJ0FkZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuZmFiLFxuICAgICAgaWNvbjogPFJlZ2lzdGVyIC8+LFxuICAgICAgbGFiZWw6ICdFZGl0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuICAgICAgICA8VGFic1xuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImFjdGlvbiB0YWJzIGV4YW1wbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPFRhYiBsYWJlbD1cIkxvZ2luXCIgey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICA8VGFiIGxhYmVsPVwiUmVnaXN0ZXJcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICAgIFxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxTd2lwZWFibGVWaWV3c1xuICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgIGluZGV4PXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9XG4gICAgICA+XG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgXG4gICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAge2ZhYnMubWFwKChmYWIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxab29tXG4gICAgICAgICAga2V5PXtmYWIuY29sb3J9XG4gICAgICAgICAgaW49e3ZhbHVlID09PSBpbmRleH1cbiAgICAgICAgICB0aW1lb3V0PXt0cmFuc2l0aW9uRHVyYXRpb259XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7dmFsdWUgPT09IGluZGV4ID8gdHJhbnNpdGlvbkR1cmF0aW9uLmV4aXQgOiAwfW1zYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxGYWIgYXJpYS1sYWJlbD17ZmFiLmxhYmVsfSBjbGFzc05hbWU9e2ZhYi5jbGFzc05hbWV9IGNvbG9yPXtmYWIuY29sb3J9PlxuICAgICAgICAgICAge2ZhYi5pY29ufVxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L1pvb20+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Buttons.js\n");

/***/ })

})