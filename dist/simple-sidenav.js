module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuIcon = exports.SideNav = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SideNav = _react2.default.createClass({
	  displayName: 'SideNav',

	  propTypes: {
	    style: _react2.default.PropTypes.object,
	    navStyle: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node,
	    showNav: _react2.default.PropTypes.bool,
	    onHideNav: _react2.default.PropTypes.func,
	    onShowNav: _react2.default.PropTypes.func,
	    title: _react2.default.PropTypes.node,
	    titleStyle: _react2.default.PropTypes.object,
	    items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node),
	    itemStyle: _react2.default.PropTypes.object,
	    itemHoverStyle: _react2.default.PropTypes.object
	  },

	  getInitialState: function getInitialState() {
	    return {
	      showNav: this.props.showNav || false
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.showNav != this.props.showNav && nextProps.showNav != this.state.showNav) nextProps.showNav ? this.showNav() : this.hideNav();
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextStates) {
	    if (nextProps.showNav != this.props.showNav && nextProps.showNav == this.state.showNav) return false;
	    return true;
	  },
	  showNav: function showNav() {
	    this.refs.nav.style.transition = 'transform 0.33s cubic-bezier(0,0,0.3,1)';
	    this.setState({ showNav: true }, this.props.onShowNav);
	  },
	  hideNav: function hideNav() {
	    this.refs.nav.style.transition = 'transform 0.13s cubic-bezier(0,0,0.3,1)';
	    this.setState({ showNav: false }, this.props.onHideNav);
	  },
	  onTouchStart: function onTouchStart(evt) {
	    this.startX = evt.touches[0].pageX;
	    this.currentX = this.startX;
	    this.touchingSideNav = true;
	    requestAnimationFrame(this.update);
	  },
	  onTouchMove: function onTouchMove(evt) {
	    if (!this.touchingSideNav) return;
	    this.currentX = evt.touches[0].pageX;
	    var translateX = Math.min(0, this.currentX - this.startX);
	    if (translateX < 0) evt.preventDefault();
	  },
	  onTouchEnd: function onTouchEnd(evt) {
	    if (!this.touchingSideNav) return;
	    this.touchingSideNav = false;
	    var translateX = Math.min(0, this.currentX - this.startX);
	    this.refs.nav.style.transform = '';
	    if (translateX < 0) this.hideNav();
	  },
	  update: function update() {
	    if (!this.touchingSideNav) return;
	    requestAnimationFrame(this.update);
	    var translateX = Math.min(0, this.currentX - this.startX);
	    this.refs.nav.style.transform = 'translateX(' + translateX + 'px)';
	  },
	  getDefaultContent: function getDefaultContent() {
	    var _this = this;

	    var styles = {
	      title: {
	        background: '#E91E63',
	        color: '#fff',
	        fontWeight: 400,
	        margin: 0,
	        lineHeight: '82px',
	        padding: 22
	      },
	      li: {
	        padding: 22,
	        cursor: 'pointer',
	        backgroundColor: '#fff'
	      }
	    };

	    Object.assign(styles.li, this.props.itemStyle);
	    Object.assign(styles.title, this.props.titleStyle);

	    var handleItemHover = function handleItemHover(e, enter) {
	      if (enter) Object.assign(e.currentTarget.style, styles.li, _this.props.itemHoverStyle || { backgroundColor: '#f5f5f5' });else Object.assign(e.currentTarget.style, styles.li);
	    };

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        { style: styles.title },
	        this.props.title || 'Simple SideNav'
	      ),
	      _react2.default.createElement(
	        'ul',
	        null,
	        this.props.items ? this.props.items.map(function (item, key) {
	          return _react2.default.createElement(
	            'li',
	            { key: 'item' + key, style: styles.li, onMouseOver: function onMouseOver(e) {
	                return handleItemHover(e, true);
	              }, onMouseOut: function onMouseOut(e) {
	                return handleItemHover(e, false);
	              } },
	            item
	          );
	        }) : _react2.default.createElement(
	          'li',
	          { key: 'item1', style: styles.li },
	          'Item 1'
	        )
	      )
	    );
	  },
	  getStyle: function getStyle() {
	    var styles = {
	      root: {
	        left: 0,
	        top: 0,
	        width: '100%',
	        height: '100%',
	        position: 'fixed',
	        overflow: 'hidden',
	        zIndex: 8,
	        pointerEvents: this.state.showNav ? 'auto' : 'none'
	      },
	      nav: {
	        position: 'relative',
	        width: '90%',
	        maxWidth: 400,
	        height: '100%',
	        background: '#FFF',
	        boxShadow: '2px 0 12px rgba(0,0,0,0.4)',
	        transform: this.state.showNav ? 'none' : 'translateX(-102%)',
	        display: 'flex',
	        willChange: 'transform',
	        flexDirection: 'column'
	      },
	      overlay: {
	        position: 'absolute',
	        width: '100%',
	        height: '100%',
	        top: 0,
	        left: 0,
	        opacity: this.state.showNav ? 1 : 0,
	        background: 'rgba(0,0,0,0.4)',
	        transition: 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
	        willChange: 'opacity'
	      }
	    };

	    Object.assign(styles.root, this.props.style);
	    Object.assign(styles.nav, this.props.navStyle);
	    return styles;
	  },
	  render: function render() {
	    var styles = this.getStyle();

	    return _react2.default.createElement(
	      'aside',
	      { style: styles.root },
	      _react2.default.createElement('div', { style: styles.overlay, onClick: this.hideNav }),
	      _react2.default.createElement(
	        'nav',
	        { style: styles.nav,
	          onTransitionEnd: function onTransitionEnd(e) {
	            e.target.style.transition = 'none';
	          },
	          onTouchStart: this.onTouchStart,
	          onTouchMove: this.onTouchMove,
	          onTouchEnd: this.onTouchEnd,
	          ref: 'nav' },
	        this.props.children || this.getDefaultContent()
	      )
	    );
	  }
	});

	var MenuIcon = _react2.default.createClass({
	  displayName: 'MenuIcon',
	  render: function render() {
	    return _react2.default.createElement(
	      'svg',
	      _extends({}, this.props, { xmlns: 'http://www.w3.org/2000/svg', cursor: 'pointer', fill: '#fff', height: '24', viewBox: '0 0 24 24', width: '24' }),
	      _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	      _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	    );
	  }
	});

	exports.SideNav = SideNav;
	exports.MenuIcon = MenuIcon;
	exports.default = SideNav;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);