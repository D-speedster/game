"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sticky */ \"(app-pages-browser)/./node_modules/react-sticky/lib/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    let [ClassNeed, SetClassNeed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        if (scrollPosition > 50) {\n            SetClassNeed(\"bg-dark fixed-top\");\n        } else {\n            SetClassNeed(\"\");\n        }\n    }, [\n        scrollPosition\n    ]);\n    console.log(scrollPosition);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header-area \".concat(ClassNeed, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"main-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"LogoWeb d-flex\",\n                                style: {\n                                    marginTop: \"5px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/images/Logo5.png\",\n                                        style: {\n                                            height: \"55px\",\n                                            width: \"55px\",\n                                            aspectRatio: \"1.5\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mt-3\",\n                                        style: {\n                                            fontWeight: \"600\",\n                                            color: \"#FFF\",\n                                            fontSize: \"14px\"\n                                        },\n                                        children: \"اسپارتا\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"nav\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/\",\n                                            className: \"active\",\n                                            children: \"خانه\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"products\",\n                                            children: \"فروشگاه ما\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"product-details.html\",\n                                            children: \"ویژه\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"contact\",\n                                            children: \"تماس با ما\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        color: \"#FFF\",\n                                        fontSize: \"15px\"\n                                    },\n                                    children: \"و سبد خرید\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\speedster\\\\Desktop\\\\New folder\\\\game\\\\components\\\\Header.js\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n}\n_s(Header, \"oh5OcupsUCV4Tjpsf0xGVPqQMpQ=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzRCO0FBQ3NCO0FBQ0s7QUFDeEMsU0FBU007O0lBRXRCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsSUFBSSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1RLGVBQWU7UUFDbkIsTUFBTUMsV0FBV0MsT0FBT0MsV0FBVztRQUNuQ04sa0JBQWtCSTtJQUNwQjtJQUVBVixnREFBU0EsQ0FBQztRQUNSVyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSixjQUFjO1lBQUVLLFNBQVM7UUFBSztRQUNoRSxJQUFJVCxpQkFBaUIsSUFBSTtZQUV2QkcsYUFBYTtRQUNmLE9BQU87WUFDTEEsYUFBYTtRQUNmO0lBR0YsR0FBRztRQUFDSDtLQUFlO0lBQ25CVSxRQUFRQyxHQUFHLENBQUNYO0lBQ1oscUJBR0ksOERBQUNZO1FBQU9DLFdBQVcsZUFBeUIsT0FBVlgsV0FBVTtrQkFDMUMsNEVBQUNZO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUlGLFdBQVU7OzBDQUViLDhEQUFDQztnQ0FBSUQsV0FBVTtnQ0FBaUJHLE9BQU87b0NBQUVDLFdBQVc7Z0NBQU07O2tEQUN4RCw4REFBQ0M7d0NBQUlDLEtBQUk7d0NBQW9CSCxPQUFPOzRDQUFFSSxRQUFROzRDQUFRQyxPQUFPOzRDQUFRQyxhQUFhO3dDQUFNOzs7Ozs7a0RBQ3hGLDhEQUFDQzt3Q0FBS1YsV0FBVTt3Q0FBT0csT0FBTzs0Q0FBRVEsWUFBWTs0Q0FBT0MsT0FBTzs0Q0FBUUMsVUFBVTt3Q0FBTztrREFBRzs7Ozs7Ozs7Ozs7OzBDQUV4Riw4REFBQ0M7Z0NBQUdkLFdBQVU7O2tEQUNaLDhEQUFDZTtrREFDQyw0RUFBQ25DLGlEQUFJQTs0Q0FBQ29DLE1BQUs7NENBQUloQixXQUFVO3NEQUFTOzs7Ozs7Ozs7OztrREFJcEMsOERBQUNlO2tEQUNDLDRFQUFDbkMsaURBQUlBOzRDQUFDb0MsTUFBSztzREFBVzs7Ozs7Ozs7Ozs7a0RBRXhCLDhEQUFDRDtrREFDQyw0RUFBQ25DLGlEQUFJQTs0Q0FBQ29DLE1BQUs7c0RBQXVCOzs7Ozs7Ozs7OztrREFFcEMsOERBQUNEO2tEQUNDLDRFQUFDbkMsaURBQUlBOzRDQUFDb0MsTUFBSztzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXpCLDhEQUFDRjswQ0FDQyw0RUFBQ0M7b0NBQUlaLE9BQU87d0NBQUNTLE9BQVE7d0NBQVFDLFVBQVc7b0NBQU07OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQm5FO0dBckV3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3RpY2t5Q29udGFpbmVyLCBTdGlja3kgfSBmcm9tICdyZWFjdC1zdGlja3knO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcblxyXG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgbGV0IFtDbGFzc05lZWQsIFNldENsYXNzTmVlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+IDUwKSB7XHJcblxyXG4gICAgICBTZXRDbGFzc05lZWQoJ2JnLWRhcmsgZml4ZWQtdG9wJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFNldENsYXNzTmVlZCgnJylcclxuICAgIH1cclxuXHJcblxyXG4gIH0sIFtzY3JvbGxQb3NpdGlvbl0pO1xyXG4gIGNvbnNvbGUubG9nKHNjcm9sbFBvc2l0aW9uKVxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgaGVhZGVyLWFyZWEgJHtDbGFzc05lZWR9IGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTG9nb1dlYiBkLWZsZXgnIHN0eWxlPXt7IG1hcmdpblRvcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL0xvZ281LnBuZycgc3R5bGU9e3sgaGVpZ2h0OiAnNTVweCcsIHdpZHRoOiAnNTVweCcsIGFzcGVjdFJhdGlvOiAnMS41JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J210LTMnIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBjb2xvcjogJyNGRkYnLCBmb250U2l6ZTogJzE0cHgnIH19Ptin2LPZvtin2LHYqtinPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg2K7Yp9mG2YdcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwicHJvZHVjdHNcIj7Zgdix2YjYtNqv2KfZhyDZhdinPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInByb2R1Y3QtZGV0YWlscy5odG1sXCI+2YjbjNqY2Yc8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiY29udGFjdFwiPtiq2YXYp9izINio2Kcg2YXYpzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgIHN0eWxlPXt7Y29sb3IgOiAnI0ZGRicsIGZvbnRTaXplIDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICDZiCDYs9io2K8g2K7YsduM2K9cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIHsvKiAqKioqKiBNZW51IEVuZCAqKioqKiAqL31cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RpY2t5Q29udGFpbmVyIiwiU3RpY2t5IiwiSGVhZGVyIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsIkNsYXNzTmVlZCIsIlNldENsYXNzTmVlZCIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiLCJzdHlsZSIsIm1hcmdpblRvcCIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYXNwZWN0UmF0aW8iLCJzcGFuIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJ1bCIsImxpIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.js\n"));

/***/ })

});