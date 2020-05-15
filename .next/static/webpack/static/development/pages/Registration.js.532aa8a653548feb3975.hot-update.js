webpackHotUpdate("static/development/pages/Registration.js",{

/***/ "./components/Buttons.js":
/*!*******************************!*\
  !*** ./components/Buttons.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FloatingActionButtonZoom; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ \"./node_modules/@material-ui/core/esm/Tabs/index.js\");\n/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ \"./node_modules/@material-ui/core/esm/Tab/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Fab */ \"./node_modules/@material-ui/core/esm/Fab/index.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ \"./node_modules/@material-ui/icons/Add.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"./node_modules/@material-ui/icons/Edit.js\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ \"./node_modules/@material-ui/icons/KeyboardArrowUp.js\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Login */ \"./components/Login.js\");\n/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Register */ \"./components/Register.js\");\n\n\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS/components/Buttons.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction TabPanel(props) {\n  var children = props.children,\n      value = props.value,\n      index = props.index,\n      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props, [\"children\", \"value\", \"index\"]);\n\n  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    component: \"div\",\n    role: \"tabpanel\",\n    hidden: value !== index,\n    id: \"action-tabpanel-\".concat(index),\n    \"aria-labelledby\": \"action-tab-\".concat(index)\n  }, other, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n    p: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 27\n    }\n  }, children));\n}\n\n_c = TabPanel;\nTabPanel.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired\n};\n\nfunction a11yProps(index) {\n  return {\n    id: \"action-tab-\".concat(index),\n    'aria-controls': \"action-tabpanel-\".concat(index)\n  };\n}\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      backgroundColor: theme.palette.background.paper,\n      width: 500,\n      position: 'relative',\n      minHeight: 200\n    },\n    fab: {\n      position: 'absolute',\n      bottom: theme.spacing(2),\n      right: theme.spacing(2)\n    },\n    fabGreen: {\n      color: theme.palette.common.white,\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__[\"green\"][500],\n      '&:hover': {\n        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__[\"green\"][600]\n      }\n    }\n  };\n});\nfunction FloatingActionButtonZoom() {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"useTheme\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  var handleChange = function handleChange(event, newValue) {\n    setValue(newValue);\n  };\n\n  var handleChangeIndex = function handleChangeIndex(index) {\n    setValue(index);\n  };\n\n  var transitionDuration = {\n    enter: theme.transitions.duration.enteringScreen,\n    exit: theme.transitions.duration.leavingScreen\n  };\n  var fabs = [{\n    color: 'primary',\n    className: classes.fab,\n    icon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }\n    }),\n    label: 'Add'\n  }, {\n    color: 'secondary',\n    className: classes.fab,\n    icon: __jsx(_Login__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 13\n      }\n    }),\n    label: 'Edit'\n  }, {\n    color: 'inherit',\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(classes.fab, classes.fabGreen),\n    icon: __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_16___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 13\n      }\n    }),\n    label: 'Expand'\n  }];\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    position: \"static\",\n    color: \"default\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    value: value,\n    onChange: handleChange,\n    indicatorColor: \"primary\",\n    textColor: \"primary\",\n    variant: \"fullWidth\",\n    \"aria-label\": \"action tabs example\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    label: \"Login\"\n  }, a11yProps(0), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    label: \"Register\"\n  }, a11yProps(1), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  })))), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',\n    index: value,\n    onChangeIndex: handleChangeIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }\n  }, __jsx(TabPanel, {\n    value: value,\n    index: 0,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, \"Login\"), __jsx(TabPanel, {\n    value: value,\n    index: 1,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, \"Register\")), fabs.map(function (fab, index) {\n    return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      key: fab.color,\n      \"in\": value === index,\n      timeout: transitionDuration,\n      style: {\n        transitionDelay: \"\".concat(value === index ? transitionDuration.exit : 0, \"ms\")\n      },\n      unmountOnExit: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      \"aria-label\": fab.label,\n      className: fab.className,\n      color: fab.color,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 11\n      }\n    }, fab.icon));\n  }));\n}\n\n_s(FloatingActionButtonZoom, \"XiKagzVFXgRowwwDg+e/VhBURoA=\", false, function () {\n  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"useTheme\"]];\n});\n\n_c2 = FloatingActionButtonZoom;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TabPanel\");\n$RefreshReg$(_c2, \"FloatingActionButtonZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbnMuanM/ZjExZSJdLCJuYW1lcyI6WyJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiYW55IiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJ3aWR0aCIsInBvc2l0aW9uIiwibWluSGVpZ2h0IiwiZmFiIiwiYm90dG9tIiwic3BhY2luZyIsInJpZ2h0IiwiZmFiR3JlZW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiZ3JlZW4iLCJGbG9hdGluZ0FjdGlvbkJ1dHRvblpvb20iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlSW5kZXgiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJlbnRlciIsInRyYW5zaXRpb25zIiwiZHVyYXRpb24iLCJlbnRlcmluZ1NjcmVlbiIsImV4aXQiLCJsZWF2aW5nU2NyZWVuIiwiZmFicyIsImNsYXNzTmFtZSIsImljb24iLCJsYWJlbCIsImNsc3giLCJkaXJlY3Rpb24iLCJtYXAiLCJ0cmFuc2l0aW9uRGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQSxNQUNmQyxRQURlLEdBQ3NCRCxLQUR0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QUpUO0FBT0UsbUJBQWEsTUFQZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0UsTUFBQyw4REFBRDtBQUFLLG9CQUFZeEIsR0FBRyxDQUFDNkIsS0FBckI7QUFBNEIsZUFBUyxFQUFFN0IsR0FBRyxDQUFDMkIsU0FBM0M7QUFBc0QsV0FBSyxFQUFFM0IsR0FBRyxDQUFDSyxLQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dMLEdBQUcsQ0FBQzRCLElBRFAsQ0FURixDQURRO0FBQUEsR0FBVCxDQTVCSCxDQURGO0FBOENEOztHQXJGdUJuQix3QjtVQUNOcEIsUyxFQUNGc0IsaUU7OztNQUZRRix3QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgU3dpcGVhYmxlVmlld3MgZnJvbSAncmVhY3Qtc3dpcGVhYmxlLXZpZXdzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcbmltcG9ydCBVcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcCc7XG5pbXBvcnQgeyBncmVlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9SZWdpc3Rlcic7XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHlcbiAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICBpZD17YGFjdGlvbi10YWJwYW5lbC0ke2luZGV4fWB9XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2BhY3Rpb24tdGFiLSR7aW5kZXh9YH1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICB7dmFsdWUgPT09IGluZGV4ICYmIDxCb3ggcD17M30+e2NoaWxkcmVufTwvQm94Pn1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufTtcblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGBhY3Rpb24tdGFiLSR7aW5kZXh9YCxcbiAgICAnYXJpYS1jb250cm9scyc6IGBhY3Rpb24tdGFicGFuZWwtJHtpbmRleH1gLFxuICB9O1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHdpZHRoOiA1MDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWluSGVpZ2h0OiAyMDAsXG4gIH0sXG4gIGZhYjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgZmFiR3JlZW46IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmVlbls1MDBdLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmVlbls2MDBdLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsb2F0aW5nQWN0aW9uQnV0dG9uWm9vbSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbmRleCA9IChpbmRleCkgPT4ge1xuICAgIHNldFZhbHVlKGluZGV4KTtcbiAgfTtcblxuICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSB7XG4gICAgZW50ZXI6IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICAgIGV4aXQ6IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXG4gIH07XG5cbiAgY29uc3QgZmFicyA9IFtcbiAgICB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmZhYixcbiAgICAgIGljb246IDxBZGRJY29uIC8+LFxuICAgICAgbGFiZWw6ICdBZGQnLFxuICAgIH0sXG4gICAge1xuICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmZhYixcbiAgICAgIGljb246IDxMb2dpbiAvPixcbiAgICAgIGxhYmVsOiAnRWRpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuZmFiLCBjbGFzc2VzLmZhYkdyZWVuKSxcbiAgICAgIGljb246IDxVcEljb24gLz4sXG4gICAgICBsYWJlbDogJ0V4cGFuZCcsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuICAgICAgICA8VGFic1xuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImFjdGlvbiB0YWJzIGV4YW1wbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPFRhYiBsYWJlbD1cIkxvZ2luXCIgey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICA8VGFiIGxhYmVsPVwiUmVnaXN0ZXJcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICAgIFxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxTd2lwZWFibGVWaWV3c1xuICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgIGluZGV4PXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9XG4gICAgICA+XG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgXG4gICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAge2ZhYnMubWFwKChmYWIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxab29tXG4gICAgICAgICAga2V5PXtmYWIuY29sb3J9XG4gICAgICAgICAgaW49e3ZhbHVlID09PSBpbmRleH1cbiAgICAgICAgICB0aW1lb3V0PXt0cmFuc2l0aW9uRHVyYXRpb259XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7dmFsdWUgPT09IGluZGV4ID8gdHJhbnNpdGlvbkR1cmF0aW9uLmV4aXQgOiAwfW1zYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxGYWIgYXJpYS1sYWJlbD17ZmFiLmxhYmVsfSBjbGFzc05hbWU9e2ZhYi5jbGFzc05hbWV9IGNvbG9yPXtmYWIuY29sb3J9PlxuICAgICAgICAgICAge2ZhYi5pY29ufVxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L1pvb20+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Buttons.js\n");

/***/ })

})