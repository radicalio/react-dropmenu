'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUseDimensions = require('react-use-dimensions');

var _reactUseDimensions2 = _interopRequireDefault(_reactUseDimensions);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MenuAnchor = function MenuAnchor(_ref) {
    var handleMouseEnter = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
            var ypos;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            ypos = event.currentTarget.offsetTop + event.currentTarget.offsetHeight;

                            if (ypos < 0) {
                                console.warn("panel is offscreen ", ypos);
                            }
                            setPosition({
                                x: event.currentTarget.offsetLeft,
                                y: ypos
                            });
                            setVisible(true);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function handleMouseEnter(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    var handleMouseLeave = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            timer = setTimeout(function () {
                                setVisible(false);
                            }, 50);

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function handleMouseLeave(_x2) {
            return _ref3.apply(this, arguments);
        };
    }();

    var enterMenu = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            setTimeout(function () {
                                if (timer) {
                                    clearTimeout(timer);
                                }
                            }, 10);

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function enterMenu(_x3) {
            return _ref4.apply(this, arguments);
        };
    }();

    var onExit = function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            setVisible(false);

                        case 1:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function onExit() {
            return _ref5.apply(this, arguments);
        };
    }();

    var page = _ref.page,
        navClass = _ref.navClass,
        id = _ref.id,
        children = _ref.children;


    var tolerance = "50";
    //const url = "/" + page.slug;
    var url = page.url;
    var items = page.items;
    var type = page.type;
    var hasChildren = items && items.length > 0;
    var timer = null;

    var _useState = (0, _react.useState)(false),
        visible = _useState[0],
        setVisible = _useState[1];

    var _useState2 = (0, _react.useState)("RIGHT"),
        direction = _useState2[0],
        setDirection = _useState2[1];

    var _useState3 = (0, _react.useState)({ id: "none", x: 0, y: 0 }),
        position = _useState3[0],
        setPosition = _useState3[1];

    var _useDimensions = (0, _reactUseDimensions2.default)(),
        ref = _useDimensions[0],
        dims = _useDimensions[1];

    var content = children || page.title;

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            'a',
            { id: id, className: navClass, href: url,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                ref: ref
            },
            content
        ),
        visible && hasChildren && _react2.default.createElement(_index2.default, {
            id: id,
            top: position.y,
            left: position.x,
            tolerance: tolerance,
            data: items,
            onExit: onExit,
            onMouseEnter: enterMenu
        })
    );
};

MenuAnchor.defaultProps = {
    navClass: 'site-nav-item'
};

MenuAnchor.propTypes = process.env.NODE_ENV !== "production" ? {
    page: _propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        url: _propTypes2.default.string.isRequired
    }).isRequired,
    navClass: _propTypes2.default.string.isRequired
} : {};

exports.default = MenuAnchor;
module.exports = exports['default'];