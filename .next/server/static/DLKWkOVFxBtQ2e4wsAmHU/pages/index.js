module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "regenerator-runtime"
var external_regenerator_runtime_ = __webpack_require__("cu1A");
var external_regenerator_runtime_default = /*#__PURE__*/__webpack_require__.n(external_regenerator_runtime_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./functions/index.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var butter = __webpack_require__("TNrN")("8d6d186981c0902966f48b2f7db8a6aaa5205822");

function getHome() {
  return _getHome.apply(this, arguments);
}

function _getHome() {
  _getHome = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var fetchHome, homeData, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return butter.page.retrieve('*', 'home');

          case 2:
            fetchHome = _context.sent;
            _context.next = 5;
            return fetchHome;

          case 5:
            homeData = _context.sent;
            data = homeData.data.data.fields;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getHome.apply(this, arguments);
}
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__("VMnw");
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);

// CONCATENATED MODULE: ./theme.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var breakPointTheme = Object(styles_["createMuiTheme"])(); // Site Palette Colors

var palette = {
  primary: {
    main: '#000',
    // Black
    light: '#FFF' // White

  },
  secondary: {
    main: '#5B6770',
    // Dark Gray
    light: '#F5F5F5' // Light Gray

  },
  error: {
    main: '#B93E21' // Bright Red

  },
  holiday: {
    main: '#990118' // Dark Red

  },
  background: {
    white: '#FFF',
    // White
    main: '#F5F5F5',
    // Light Gray
    medium: '#ccc',
    // Medium Gray
    darkGray: '#5B6770',
    // Dark Gray
    "default": 'white' // White - Used by MuiCssBaseline

  },
  spacing: {
    container: 15,
    row: 15
  },
  disabled: {
    lightGray: '#F5F5F5',
    // Light Gray
    darkGray: '#5B6770' // Dark Gray

  },
  button: {
    hoverBackgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  overlayBanner: {
    background: 'rgba(0, 0, 0, .7)',
    hoverBackground: 'rgba(91, 103, 112, .9)'
  }
}; // Max Width of Site Content

var maxWidth = '1180px'; // Font Definitions and Fallbacks
// Futura (Bold)

var futuraBold = 'futuraBold,Arial,sans-serif'; // Futura (Medium)

var futuraMedium = 'futuraMedium,Arial,sans-serif'; // Futura PT (Bold)

var futuraPTBold = 'futuraPTBold,Arial,sans-serif'; // Futura PT (Book)

var futuraPTBook = 'futuraPTBook,Arial,sans-serif'; // Futura PT (Demi)

var futuraPTDemi = 'futuraPTDemi,Arial,sans-serif'; // Futura PT (Medium)

var futuraPTMedium = 'futuraPTMedium,Arial,sans-serif'; // Georgia

var georgia = 'Georgia,Arial,sans-serif';
var fonts = {
  futuraPTBold: futuraPTBold,
  futuraMedium: futuraMedium,
  futuraBold: futuraBold,
  futuraPTDemi: futuraPTDemi,
  futuraPTMedium: futuraPTMedium,
  futuraPTBook: futuraPTBook,
  georgia: georgia
}; // General Header Styling

var header = {
  fontFamily: futuraBold,
  textTransform: 'uppercase',
  color: palette.primary.main
}; // H1 Styling

var h1 = _defineProperty({
  fontFamily: futuraPTMedium,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 36,
  textTransform: 'capitalize'
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 28
}); // H1 Alternate Styling - Home Page and Special Landing Pages


var h1Alt = _defineProperty({
  fontFamily: futuraBold,
  textShadow: '-1px 2px 0 #000000',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.16,
  letterSpacing: '1.2px',
  color: palette.primary.main,
  textTransform: 'uppercase',
  fontSize: 50
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 35
}); // H2 Styling


var h2 = _defineProperty({
  fontFamily: futuraPTBold,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 30
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 24
}); // H2 Alternate Styling - Home Page and Special Landing Pages


var h2Alt = _defineProperty({
  fontFamily: futuraBold,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 36
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 25
}); // H2 Alternate Light Styling - Home Page and Special Landing Pages


var h2AltLight = _defineProperty({
  fontFamily: futuraMedium,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 36
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 25
}); // H3 Styling


var h3 = _defineProperty({
  fontFamily: futuraPTMedium,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 28
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 20
}); // H4 Styling


var h4 = _defineProperty({
  fontFamily: futuraPTDemi,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 24
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 18
}); // H5 Styling


var h5 = _defineProperty({
  fontFamily: futuraPTBook,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 24
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 18
}); // H6 Styling


var h6 = _defineProperty({
  fontFamily: futuraPTMedium,
  fontSize: 18,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.22,
  letterSpacing: 'normal',
  color: palette.primary.main
}, breakPointTheme.breakpoints.down('sm'), {
  fontSize: 16
}); // Body Styling - Regular Variant


var body1 = {
  fontFamily: futuraPTBook,
  fontSize: 16,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.25,
  letterSpacing: 'normal',
  color: palette.primary.main
}; // Body Styling - Smaller Variant

var body2 = {
  fontFamily: futuraPTBook,
  fontSize: 14,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.25,
  letterSpacing: 'normal',
  color: palette.primary.main
}; // Button Text Styling

var theme_button = {
  fontFamily: futuraPTDemi,
  fontSize: 18,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  textTransform: 'uppercase'
};
var buttons = {
  // Black Button, White Text (No Hover Effect)
  darkButton: {
    background: palette.primary.main,
    color: palette.primary.light,
    '& span': {
      color: palette.primary.light
    },
    border: "1.7px solid ".concat(palette.primary.main),
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.main
    }
  },
  // Black Button, White Text (Hover: White Button, Black Text)
  darkButtonHover: {
    background: palette.primary.main,
    color: palette.primary.light,
    '& span': {
      color: palette.primary.light
    },
    border: "1.7px solid ".concat(palette.primary.main),
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.light,
      color: palette.primary.main,
      '& span': {
        color: palette.primary.main
      }
    }
  },
  // White Button, Black Text (No Hover Effect)
  lightButton: {
    background: palette.primary.light,
    color: palette.primary.main,
    '& span': {
      color: palette.primary.main
    },
    border: "1.7px solid ".concat(palette.primary.main),
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.light
    }
  },
  // White Button, Black Text (Hover: Black Button, White Text)
  lightButtonHover: {
    background: palette.primary.light,
    color: palette.primary.main,
    '& span': {
      color: palette.primary.main
    },
    border: "1.7px solid ".concat(palette.primary.main),
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.main,
      color: palette.primary.light,
      '& span': {
        color: palette.primary.light
      }
    }
  }
};
var links = {
  // Body copy - in text link
  bodyLink: {
    fontFamily: futuraPTBold,
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: palette.primary.main,
    '&:hover': {
      color: palette.secondary.main,
      borderBottom: "1px solid ".concat(palette.disabled.darkGray)
    }
  },
  // Text link button on Page - Larger CTA Link
  ctaLink: {
    fontFamily: futuraPTMedium,
    fontSize: 18,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: palette.primary.main,
    borderBottom: "1px solid ".concat(palette.primary.main),
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: 'fit-content',
    '&:hover': {
      color: palette.disabled.darkGray,
      borderBottom: "1px solid ".concat(palette.disabled.darkGray)
    }
  },
  // Text link button on hover of shop tag - Smaller CTA Link
  ctaLinkSmall: {
    fontFamily: futuraPTMedium,
    fontSize: 15,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: palette.primary.main,
    borderBottom: "1px solid ".concat(palette.primary.main),
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: 'fit-content',
    '&:hover': {
      color: palette.disabled.darkGray,
      borderBottom: "1px solid ".concat(palette.disabled.darkGray)
    }
  }
}; // Add To Cart CTA for PDP and Quick Shop

var addToCartCTA = {
  addToCartWrapper: {
    background: palette.primary.main,
    width: '100%',
    display: 'flex',
    '&:hover': {
      background: palette.primary.main
    },
    '&:hover button': {
      background: palette.primary.main
    }
  },
  addToCartButton: {
    fontWeight: 'bold',
    width: '100%',
    margin: 5,
    padding: 0,
    border: '1px solid white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& h6': {
      color: 'white'
    }
  },
  disabledAddToCart: {
    fontWeight: 'bold',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    '& h6': {
      color: 'white'
    }
  },
  selectSizeButton: {
    background: palette.error.main,
    color: 'white',
    border: "1px solid ".concat(palette.error.main),
    width: '100%',
    padding: 0,
    '& h6': {
      color: 'white'
    },
    '&:hover': {
      background: palette.error.main
    }
  }
};
var divider = {
  // Default divider line - black
  line: "1px solid rgba(0, 0, 0, 0.4)",
  // Light divider line - light gray
  lightLine: "1px solid ".concat(palette.secondary.light),
  //Medium divider line - medium gray
  mediumLine: "1px solid ".concat(palette.background.medium)
};
var arrows = {
  defaultArrowIcon: _defineProperty({
    width: 36,
    height: 36,
    fill: palette.primary.main
  }, breakPointTheme.breakpoints.down('sm'), {
    width: 30,
    height: 30
  })
}; // Typography Variants - Make use of these when using the typography component

var typography = {
  useNextVariants: true,
  fontFamily: futuraPTBook,
  holiday: {
    fontFamily: georgia,
    color: palette.holiday.main,
    fontStyle: 'italic'
  },
  // Body Text
  body1: body1,
  body2: body2,
  // Button Text - No color by default - Use button themes to give button element and text correct colors
  button: theme_button,
  // Header Text
  header: header,
  // Default Headers
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  // Alternate Headers
  h1Alt: h1Alt,
  h2Alt: h2Alt,
  h2AltLight: h2AltLight,
  subtitle1: {
    fontFamily: futuraPTBook,
    color: palette.primary.main,
    lineHeight: '1.3em',
    fontSize: 16
  },
  subtitle2: {
    fontFamily: futuraPTBook,
    color: palette.primary.main,
    fontSize: 13
  },
  caption: {
    color: palette.primary.main
  }
};
var overrides = {
  RSFPages: {
    root: {
      backgroundColor: 'white',
      '& p:focus': {
        outline: 'none'
      }
    }
  },
  RSFLoadMask: {
    fullscreen: {
      height: "calc(100vh - 181px)"
    }
  },
  RSFToolbarButton: {
    wrap: {
      fontSize: '13px',
      color: palette.primary.main,
      position: 'relative',
      margin: 0,
      padding: 0
    }
  },
  MuiIconButton: {
    root: {
      width: 40,
      height: 40,
      padding: 8,
      boxSizing: 'content-box',
      display: 'inline'
    }
  },
  RSFMenu: {
    list: {
      backgroundColor: palette.background.main
    },
    expander: {
      maxHeight: 50,
      '&:hover': {
        backgroundColor: palette.background.white
      },
      '@media(hover: none)': {
        'div &:hover': {
          backgroundColor: palette.background.white
        }
      }
    },
    expanded: {
      backgroundColor: palette.background.white
    },
    listItemIcon: {
      display: 'block'
    }
  },
  MuiTabs: {
    indicator: {
      backgroundColor: palette.primary.main
    },
    scrollButtons: _defineProperty({
      width: 20,
      height: 48
    }, breakPointTheme.breakpoints.up('md'), {
      display: 'none'
    }),
    scrollable: {
      overflowX: 'auto',
      '@supports (-ms-ime-align: auto)': {
        overflowX: 'hidden'
      },
      '@supports (-moz-appearance:none)': {
        overflowX: 'hidden'
      }
    }
  },
  MuiListItem: {
    root: {
      paddingTop: '16px',
      paddingBottom: '16px',
      fontFamily: typography.header.fontFamily,
      fontWeight: 500,
      color: palette.primary.main,
      backgroundColor: 'white',
      '& svg': {
        color: palette.primary.main
      }
    }
  },
  MuiTab: {
    root: {
      fontFamily: typography.header.fontFamily,
      fontSize: '18px',
      '@media (min-width:960px)': {
        fontSize: '16px'
      }
    },
    wrapper: {
      color: palette.primary.main
    },
    label: _objectSpread(_objectSpread({}, typography.h3), {}, _defineProperty({
      textTransform: 'capitalize'
    }, breakPointTheme.breakpoints.down('sm'), {
      fontSize: 15
    }))
  },
  MuiDialog: {
    paper: {
      padding: 10,
      minWidth: 300,
      borderRadius: 0
    }
  },
  MuiDialogContent: {
    root: {
      padding: 20
    }
  },
  MuiDialogContentText: {
    root: {
      lineHeight: 1.2
    }
  },
  RSFExpandableSection: {
    withCollapseIcon: {
      right: -15
    }
  },
  MuiButton: {
    root: {
      borderRadius: 0,
      border: "1px solid ".concat(palette.primary.main),
      '&$disabled': {
        border: "1px solid ".concat(palette.disabled.lightGray),
        backgroundColor: palette.disabled.lightGray,
        color: palette.disabled.darkGray
      }
    },
    contained: {
      backgroundColor: 'white',
      boxShadow: 'none',
      color: palette.primary.main,
      '&$disabled': {
        backgroundColor: '#eee',
        border: '1px solid #999'
      }
    },
    label: {
      '$disabled &:first-child': {
        borderColor: 'transparent'
      }
    },
    containedSecondary: {
      backgroundColor: palette.primary.main,
      color: 'white'
    }
  },
  MuiPrivateTabIndicator: {
    root: {
      height: '4px'
    }
  },
  RSFRating: {
    root: {
      '& svg': {
        fill: palette.secondary.main
      }
    }
  },
  RSFAmpExpandableSection: {
    title: {
      color: 'white',
      fontFamily: futuraBold,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    accordion: {
      borderBottom: 'none'
    }
  },
  RSFContainer: {
    root: {
      maxWidth: maxWidth
    }
  },
  ExpandIcon: Add_default.a,
  CollapseIcon: Remove_default.a
};
var zIndex = {
  chatButton: 999,
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  matching: 1425,
  search: 1450,
  tooltip: 1500,
  chatWindow: 1600
};
var screenReaderText = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  width: 1,
  overflow: 'hidden',
  position: 'absolute'
};
var theme = Object(styles_["createMuiTheme"])({
  typography: typography,
  buttons: buttons,
  links: links,
  divider: divider,
  arrows: arrows,
  palette: palette,
  fonts: fonts,
  addToCartCTA: addToCartCTA,
  overrides: overrides,
  zIndex: zIndex,
  maxWidth: maxWidth,
  screenReaderText: screenReaderText
});
/* harmony default export */ var theme_0 = (theme);
var breakpointValues = breakPointTheme.breakpoints.values;
// CONCATENATED MODULE: ./components/layout.js




/* harmony default export */ var layout = (function (_ref) {
  var children = _ref.children;
  Object(external_react_["useEffect"])(function () {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", function (user) {
        if (!user) {
          window.netlifyIdentity.on("login", function () {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, "HomePage Demo"), /*#__PURE__*/external_react_default.a.createElement("script", {
    src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
  })), /*#__PURE__*/external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: theme_0
  }, children));
});
// CONCATENATED MODULE: ./components/home/Header.js
function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var useStyles = Object(core_["makeStyles"])(function (theme) {
  var _quickShopTagClass, _quickShopTagClass2, _homePageHeaderRootGr, _homePageHeaderGrid, _homePageHeaderTextGr, _homePageHeaderOuterG;

  return {
    homePageHeaderRootGrid: (_homePageHeaderRootGr = {
      '& .quickGrid_0': {
        '& .quickShopTagClass': (_quickShopTagClass = {}, Header_defineProperty(_quickShopTagClass, theme.breakpoints.down('xl'), {
          top: '45% !important',
          left: '12% !important'
        }), Header_defineProperty(_quickShopTagClass, theme.breakpoints.down('lg'), {
          top: '45% !important',
          left: '12% !important'
        }), Header_defineProperty(_quickShopTagClass, theme.breakpoints.down('md'), {
          top: '45% !important',
          left: '12% !important'
        }), Header_defineProperty(_quickShopTagClass, theme.breakpoints.down('sm'), {
          top: '68% !important',
          left: '14% !important'
        }), Header_defineProperty(_quickShopTagClass, theme.breakpoints.down('xs'), {
          top: '32% !important',
          left: '14% !important'
        }), _quickShopTagClass)
      },
      '& .quickGrid_1': {
        '& .quickShopTagClass': (_quickShopTagClass2 = {}, Header_defineProperty(_quickShopTagClass2, theme.breakpoints.down('xl'), {
          top: '32% !important',
          left: '82% !important'
        }), Header_defineProperty(_quickShopTagClass2, theme.breakpoints.down('lg'), {
          top: '32% !important',
          left: '82% !important'
        }), Header_defineProperty(_quickShopTagClass2, theme.breakpoints.down('md'), {
          top: '32% !important',
          left: '82% !important'
        }), Header_defineProperty(_quickShopTagClass2, theme.breakpoints.down('sm'), {
          top: '46% !important',
          left: '87% !important'
        }), Header_defineProperty(_quickShopTagClass2, theme.breakpoints.down('xs'), {
          top: '26% !important',
          left: '86% !important'
        }), _quickShopTagClass2)
      }
    }, Header_defineProperty(_homePageHeaderRootGr, theme.breakpoints.up("md"), {
      minHeight: "440px"
    }), Header_defineProperty(_homePageHeaderRootGr, theme.breakpoints.up("lg"), {
      minHeight: "440px"
    }), Header_defineProperty(_homePageHeaderRootGr, theme.breakpoints.up("xl"), {
      minHeight: "733px"
    }), _homePageHeaderRootGr),
    homePageHeaderGrid: (_homePageHeaderGrid = {
      maxHeight: '578px'
    }, Header_defineProperty(_homePageHeaderGrid, theme.breakpoints.between('sm', 'sm'), {
      overflow: 'hidden'
    }), Header_defineProperty(_homePageHeaderGrid, theme.breakpoints.up('lg'), {
      maxHeight: '100%'
    }), Header_defineProperty(_homePageHeaderGrid, '& amp-img', {
      minWidth: '100%'
    }), _homePageHeaderGrid),
    heroImage: {
      width: '100%'
    },
    homePageHeaderTextGrid: (_homePageHeaderTextGr = {}, Header_defineProperty(_homePageHeaderTextGr, theme.breakpoints.up('md'), {
      maxWidth: '570px',
      textAlign: 'right',
      justifyContent: 'flex-end'
    }), Header_defineProperty(_homePageHeaderTextGr, theme.breakpoints.down('sm'), {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }), _homePageHeaderTextGr),
    homePageHeaderLevelOne: Header_objectSpread(Header_objectSpread({}, theme.typography.h1Alt), {}, {
      color: theme.palette.primary.light,
      maxHeight: '116px'
    }),
    homePageSubHeader: {
      textShadow: ' -1px 1px 0 #5b6770',
      maxHeight: '70px',
      marginBottom: '20px',
      color: theme.palette.primary.light
    },
    homePageHeaderButton: Header_objectSpread(Header_objectSpread({}, theme.buttons.lightButtonHover), {}, {
      margin: 'initial'
    }),
    homePageHeaderOuterGrid: (_homePageHeaderOuterG = {
      maxWidth: '1180px',
      position: 'absolute',
      top: '48%',
      left: '50%',
      padding: '0',
      transform: 'translateX(-50%)'
    }, Header_defineProperty(_homePageHeaderOuterG, theme.breakpoints.down('md'), {
      top: '40%',
      padding: '0 40px'
    }), Header_defineProperty(_homePageHeaderOuterG, theme.breakpoints.down('sm'), {
      top: '50%',
      padding: 0
    }), Header_defineProperty(_homePageHeaderOuterG, theme.breakpoints.down('xs'), {
      top: '40%',
      padding: 0
    }), _homePageHeaderOuterG)
  };
});
/* harmony default export */ var Header = (function (props) {
  var data = props.data,
      classData = props.classData;
  var classes = useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    style: {
      position: 'relative'
    },
    className: classes.homePageHeaderRootGrid
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    className: classes.homePageHeaderGrid
  }, /*#__PURE__*/external_react_default.a.createElement("picture", {
    className: classes.heroImage
  }, /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mobileurl,
    media: "(max-width: 400px)"
  }), /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mobileurl,
    media: "(min-width: 401px) and (max-width: 414px)"
  }), /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mobileurl,
    media: "(min-width: 415px) and (max-width: 800px)"
  }), /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mediaurl,
    media: "(min-width: 801px) and (max-width: 1400px)"
  }), /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mediaurl,
    media: "(min-width: 1401px) and (max-width: 1600px)"
  }), /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mediaurl,
    media: "(min-width: 1601px) and (max-width: 1919px)"
  }), /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: data.mediaurl,
    media: "(min-width: 1920px)"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: data.mobileurl,
    alt: data.actiontext,
    className: classes.heroImage
  })), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    justify: "flex-end",
    className: classes.homePageHeaderOuterGrid
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    className: "".concat(classes.homePageHeaderTextGrid),
    item: true,
    xs: 12
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    component: "h1",
    className: classes.homePageHeaderLevelOne
  }, data.header_level_one), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h3",
    className: classes.homePageSubHeader
  }, ' ', data.subheader, ' '), /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    className: classes.homePageHeaderButton
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "button"
  }, data.actiontext))))), data.quicklinks && data.quicklinks.map(function (x, y) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "quickGrid_".concat(y),
      key: y
    });
  }));
});
// CONCATENATED MODULE: ./components/home/Divider.js

/* harmony default export */ var Divider = (function (props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      margin: "".concat(props.margin, "px auto")
    }
  });
});
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/misc/TrendTile.js
function TrendTile_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TrendTile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TrendTile_ownKeys(Object(source), true).forEach(function (key) { TrendTile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TrendTile_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TrendTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import QuickShopTag from "./QuickShopTag"

var TrendTile_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    bannersDescription: TrendTile_defineProperty({
      margin: "17px auto 18px",
      fontFamily: theme.fonts.futuraPTDemi
    }, theme.breakpoints.down("sm"), {
      margin: "25px auto 20px"
    }),
    bannersActionText: TrendTile_objectSpread(TrendTile_objectSpread({}, theme.links.ctaLink), {}, {
      width: "fit-content",
      margin: "0 auto"
    }),
    bannerImage: {
      "& amp-img": {
        width: "100%"
      }
    }
  };
});
/* harmony default export */ var TrendTile = (function (props) {
  var data = props.data;
  var classes = TrendTile_useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: data.mediaurl,
    style: {
      "height": "auto",
      "width": "100%"
    },
    className: classes.bannerImage
  })), data.header_level_one && data.header_level_one !== '' && /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    align: "center",
    variant: "h5",
    className: "".concat(classes.bannersDescription, " bannerDescription")
  }, data.header_level_one), data.actiontext && data.actiontext !== '' && /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      "padding": "3px 0px 40px 0px",
      margin: "0 auto"
    },
    className: "trendTileActionTextGrid"
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    align: "center",
    className: "".concat(classes.bannersActionText, " trendTileActionText")
  }, data.actiontext)));
});
// CONCATENATED MODULE: ./components/home/TrendBanners.js
function TrendBanners_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TrendBanners_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TrendBanners_ownKeys(Object(source), true).forEach(function (key) { TrendBanners_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TrendBanners_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TrendBanners_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var TrendBanners_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    homePageTrendBannerTiles: TrendBanners_defineProperty({
      maxWidth: '32%'
    }, theme.breakpoints.down('xs'), {
      maxWidth: '100%'
    }),
    homePageTrendingBannerTitleWrapper: TrendBanners_defineProperty({
      textAlign: 'left'
    }, theme.breakpoints.down('sm'), {
      textAlign: 'center'
    }),
    trendBannerTitleBold: TrendBanners_objectSpread({}, theme.typography.h2Alt),
    homePageTrendingBannerTitle: TrendBanners_objectSpread({}, theme.typography.h2AltLight),
    homePageTrendingBannerSubtitle: TrendBanners_defineProperty({
      textAlign: 'left',
      maxWidth: '80%'
    }, theme.breakpoints.down('sm'), {
      textAlign: 'center',
      margin: '0 auto'
    }),
    tilesGrid: TrendBanners_defineProperty({}, theme.breakpoints.down("sm"), {
      maxWidth: "95%",
      margin: "0 auto"
    }),
    trendBannerLazyBlock: TrendBanners_defineProperty({}, theme.breakpoints.up("md"), {
      minHeight: "650px"
    })
  };
});
/* harmony default export */ var TrendBanners = (function (props) {
  var data = props.data,
      classData = props.classData;
  var classes = TrendBanners_useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    className: classData.homePage
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    component: "h2",
    className: external_classnames_default()(classes.trendBannerTitleBold, classes.homePageTrendingBannerTitleWrapper)
  }, "New ", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: classes.homePageTrendingBannerTitle
  }, "Shirts and Ties")), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    className: classes.homePageTrendingBannerSubtitle,
    variant: "h5"
  }, "A round-up of strong trends and notable\xA0new arrivals"), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "25"
  }), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    justify: "space-between",
    className: classes.tilesGrid
  }, data.map(function (x, y) {
    return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      key: y,
      container: true,
      item: true,
      xs: 12,
      sm: 4,
      className: classes.homePageTrendBannerTiles
    }, /*#__PURE__*/external_react_default.a.createElement(TrendTile, {
      data: x
    }));
  })));
});
// CONCATENATED MODULE: ./components/home/VideoBanner.js
function VideoBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VideoBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VideoBanner_ownKeys(Object(source), true).forEach(function (key) { VideoBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VideoBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function VideoBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var VideoBanner_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    homePageVideoBannerRoot: {
      width: "100%",
      height: "375px",
      '& img': {
        height: 'auto',
        width: '100%'
      }
    },
    homePageVideoBannerTextGrid: VideoBanner_defineProperty({}, theme.breakpoints.down('sm'), {
      marginTop: '30px'
    }),
    homePageVideoBannerHeaderLevelOne: VideoBanner_objectSpread(VideoBanner_objectSpread({}, theme.typography.h2Alt), {}, {
      margin: '25px 0 0px'
    }),
    homePageVideoBannerHeaderLevelTwo: VideoBanner_objectSpread(VideoBanner_objectSpread({}, theme.typography.h2AltLight), {}, {
      margin: '0 0 25px'
    }),
    homePageVideoBannerActionText: VideoBanner_objectSpread(VideoBanner_objectSpread({}, theme.links.ctaLink), {}, {
      margin: '0 auto',
      padding: '3px 0'
    })
  };
});
/* harmony default export */ var VideoBanner = (function (props) {
  var classData = props.classData,
      data = props.data;
  var classes = VideoBanner_useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    className: classData.homePage,
    container: true
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    md: 8,
    justify: "center"
  }, /*#__PURE__*/external_react_default.a.createElement(core_["CardMedia"], {
    component: "iframe",
    height: 350,
    width: 500,
    onClick: function onClick() {
      return home.videoBannerClicked(data);
    },
    classes: {
      root: classes.homePageVideoBannerRoot,
      media: "homePageMedia"
    },
    alt: "Behind the Shoot",
    title: "Behind the Shoot",
    src: data.mediaurl
  })), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    justify: "center",
    align: "center",
    className: classes.homePageVideoBannerTextGrid
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    direction: "column",
    justify: "center"
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    align: "center",
    variant: "h4"
  }, data.title), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    align: "center",
    component: "h2",
    className: classes.homePageVideoBannerHeaderLevelOne
  }, data.header_level_one), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    align: "center",
    component: "h2",
    className: classes.homePageVideoBannerHeaderLevelTwo
  }, data.header_level_two), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    align: "center",
    variant: "h4",
    className: classes.homePageVideoBannerActionText
  }, data.actiontext))));
});
// CONCATENATED MODULE: ./components/home/OptionsBanner.js
function OptionsBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function OptionsBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { OptionsBanner_ownKeys(Object(source), true).forEach(function (key) { OptionsBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { OptionsBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function OptionsBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var OptionsBanner_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    homePageOptionsBannerGrid: OptionsBanner_defineProperty({
      borderTop: theme.divider.line,
      borderBottom: theme.divider.line,
      padding: '49px 0'
    }, theme.breakpoints.down('sm'), {
      padding: '49px 0'
    }),
    homePageOptionsGrid: OptionsBanner_defineProperty({
      maxWidth: '30%'
    }, theme.breakpoints.down('sm'), {
      maxWidth: '100%'
    }),
    homePageOptionButtons: OptionsBanner_objectSpread(OptionsBanner_objectSpread({}, theme.buttons.lightButtonHover), {}, OptionsBanner_defineProperty({
      fontSize: '24px',
      fontFamily: theme.fonts.futuraPTDemi,
      height: '92px',
      marginBottom: '10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 0,
      boxShadow: 'none'
    }, theme.breakpoints.down('sm'), {
      height: '62px',
      width: '255px',
      fontSize: '18px'
    }))
  };
});
/* harmony default export */ var OptionsBanner = (function (props) {
  var data = props.data,
      classData = props.classData;
  var classes = OptionsBanner_useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    className: "".concat(classData.homePage, " ").concat(classes.homePageOptionsBannerGrid)
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    justify: "space-between"
  }, data.map(function (x, y) {
    return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      container: true,
      item: true,
      xs: 12,
      sm: 12,
      md: 4,
      justify: "center",
      key: y,
      className: classes.homePageOptionsGrid
    }, /*#__PURE__*/external_react_default.a.createElement(core_["Paper"], {
      className: classes.homePageOptionButtons
    }, x.actiontext));
  })));
});
// CONCATENATED MODULE: ./components/home/CelebrityBannerHeader.js
function CelebrityBannerHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CelebrityBannerHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CelebrityBannerHeader_ownKeys(Object(source), true).forEach(function (key) { CelebrityBannerHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CelebrityBannerHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CelebrityBannerHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CelebrityBannerHeader_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    homePageCelebrityTitle: CelebrityBannerHeader_defineProperty({
      textAlign: 'left'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      textAlign: 'center'
    }),
    homePageCelebrityTitleCopy: CelebrityBannerHeader_objectSpread({}, theme.typography.h2Alt),
    homePageCelebritySubText: CelebrityBannerHeader_objectSpread({}, theme.typography.h2AltLight),
    homePageCelebritySubTitle: CelebrityBannerHeader_defineProperty({
      textAlign: 'left',
      maxWidth: '80%'
    }, theme.breakpoints.down('sm'), {
      textAlign: 'center',
      margin: '0 auto'
    })
  };
});
/* harmony default export */ var CelebrityBannerHeader = (function (props) {
  var classData = props.classData;
  var classes = CelebrityBannerHeader_useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    className: classData.homePage
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    component: "h2",
    className: external_classnames_default()(classes.homePageCelebrityTitle, classes.homePageCelebrityTitleCopy),
    gutterBottom: true
  }, "Celebrity ", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: classes.homePageCelebritySubText
  }, "Style")), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h5",
    className: classes.homePageCelebritySubTitle
  }, "Dress like your favorite celebrities with items from Tie Bar."));
});
// CONCATENATED MODULE: ./components/home/CelebrityBanner.js
function CelebrityBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CelebrityBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CelebrityBanner_ownKeys(Object(source), true).forEach(function (key) { CelebrityBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CelebrityBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CelebrityBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import QuickShopTag from '../components/QuickShopTag'

var CelebrityBanner_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    hideSmall: CelebrityBanner_defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    homePageMainGrid: CelebrityBanner_defineProperty({}, theme.breakpoints.down('sm'), {
      width: '95%'
    }),
    homePageCelebrityRoot: {
      height: "100%",
      width: "100%",
      '& img': CelebrityBanner_defineProperty({
        width: '100%',
        height: "100%"
      }, theme.breakpoints.down('xs'), {
        height: 'auto',
        width: '100%'
      })
    },
    homePageCelebrityBannerTiles: CelebrityBanner_defineProperty({
      maxWidth: '49%'
    }, theme.breakpoints.down('xs'), {
      maxWidth: '100%',
      margin: "0 0 20px 0"
    }),
    homePageCelebrityHeaderLevelTwo: {
      fontFamily: theme.fonts.futuraPTBook,
      marginBottom: "18px"
    },
    homePageCelebrityHeaderActionText: CelebrityBanner_objectSpread(CelebrityBanner_objectSpread({}, theme.links.ctaLink), {}, {
      "float": 'right'
    }),
    homePageCelebrityHeaderActionTextAlt: CelebrityBanner_objectSpread(CelebrityBanner_objectSpread({}, theme.links.ctaLink), {}, {
      margin: '0px auto'
    }),
    celebrityFirstTile: CelebrityBanner_defineProperty({
      width: '100%',
      height: '100%',
      position: 'relative'
    }, theme.breakpoints.down("xs"), {
      height: "450px",
      margin: "20px 0"
    }),
    celebrityBannerTextGrid: CelebrityBanner_defineProperty({
      position: 'absolute',
      bottom: "20px",
      zIndex: 7,
      right: "50px"
    }, theme.breakpoints.down("sm"), {
      right: "25px",
      bottom: "0px"
    })
  };
});
/* harmony default export */ var CelebrityBanner = (function (props) {
  var data = props.data,
      classData = props.classData;
  var classes = CelebrityBanner_useStyles(props);
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    className: "".concat(classData.homePage, " ").concat(classes.homePageMainGrid),
    justify: "space-between"
  }, data.map(function (x, y) {
    var _classnames;

    return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      key: y,
      container: true,
      item: true,
      xs: 12,
      sm: 6,
      md: 6,
      justify: "center",
      style: {
        maxHeight: '804px'
      },
      className: classes.homePageCelebrityBannerTiles
    }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      container: true,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      style: {
        width: '100%',
        marginBottom: '30px'
      },
      item: true,
      xs: 12,
      className: external_classnames_default()((_classnames = {}, CelebrityBanner_defineProperty(_classnames, classes.hideSmall, y === 1), CelebrityBanner_defineProperty(_classnames, classes.celebrityBannerTextGrid, y === 0), _classnames))
    }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
      align: "right",
      variant: "h4"
    }, ' ', x.header_level_one, ' '), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
      align: "right",
      variant: "h5",
      className: classes.homePageCelebrityHeaderLevelTwo
    }, ' ', x.header_level_two, ' '), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
      align: "right",
      variant: "h4",
      className: classes.homePageCelebrityHeaderActionText
    }, x.actiontext)), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      container: true,
      item: true,
      xs: 12,
      justify: "center"
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: x.mediaurl,
      className: classes.homePageCelebrityRoot
    }), /*#__PURE__*/external_react_default.a.createElement(core_["Hidden"], {
      mdUp: true,
      implementation: "css",
      xsUp: y === 0
    }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
      style: {
        width: '100%',
        marginTop: '20px'
      },
      item: true,
      xs: 12
    }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
      align: "center",
      variant: "h4"
    }, ' ', x.header_level_one, ' '), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
      align: "center",
      variant: "h5",
      className: classes.homePageCelebrityHeaderLevelTwo
    }, ' ', x.header_level_two, ' '), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
      align: "center",
      variant: "h4",
      className: classes.homePageCelebrityHeaderActionTextAlt
    }, x.actiontext))))));
  }));
});
// CONCATENATED MODULE: ./pages/index.js
function pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function pages_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var pages_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    homePage: {
      // maxWidth: '1180px',
      margin: '0 auto',
      overflow: 'hidden'
    },
    homePageMainBodyGrid: pages_defineProperty({
      padding: '0 40px'
    }, theme.breakpoints.down('sm'), {
      padding: '0'
    })
  };
});
/* harmony default export */ var pages = __webpack_exports__["default"] = (function (props) {
  var classes = pages_useStyles(props);
  var _props$data = props.data,
      homebanner = _props$data.homebanner,
      trendbanners = _props$data.trendbanners,
      videobanner = _props$data.videobanner,
      optionbanners = _props$data.optionbanners,
      options = _props$data.options,
      celebritybanners = _props$data.celebritybanners,
      mediabanners = _props$data.mediabanners;
  return /*#__PURE__*/external_react_default.a.createElement(layout, null, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], null, /*#__PURE__*/external_react_default.a.createElement(Header, {
    data: homebanner
  }), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "50"
  }), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    className: classes.homePageMainBodyGrid
  }, /*#__PURE__*/external_react_default.a.createElement(TrendBanners, {
    data: trendbanners,
    classData: classes
  }), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "50"
  }), /*#__PURE__*/external_react_default.a.createElement(VideoBanner, {
    data: videobanner,
    classData: classes
  }), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "50"
  }), /*#__PURE__*/external_react_default.a.createElement(OptionsBanner, {
    data: optionbanners,
    classData: classes
  }), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "50"
  }), /*#__PURE__*/external_react_default.a.createElement(CelebrityBannerHeader, {
    classData: classes
  }), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "23"
  }), /*#__PURE__*/external_react_default.a.createElement(CelebrityBanner, {
    data: celebritybanners,
    classData: classes
  }), /*#__PURE__*/external_react_default.a.createElement(Divider, {
    margin: "67"
  }))));
});
function getStaticProps() {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = pages_asyncToGenerator( /*#__PURE__*/external_regenerator_runtime_default.a.mark(function _callee() {
    return external_regenerator_runtime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getHome();

          case 2:
            _context.t0 = _context.sent;
            _context.t1 = {
              fallback: true,
              data: _context.t0
            };
            return _context.abrupt("return", {
              props: _context.t1
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/***/ }),

/***/ "TNrN":
/***/ (function(module, exports) {

module.exports = require("buttercms");

/***/ }),

/***/ "VMnw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });