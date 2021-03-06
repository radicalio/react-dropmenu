import _regeneratorRuntime from 'babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import React from 'react';
import { Fragment, useState } from 'react';
import useDimensions from "react-use-dimensions";
import { MenuItem } from "../MenuItem";
import { MenuContent } from "../MenuContent";
import utils from "../utils/index";
var dismissTimeout = utils.dismissTimeout,
    possiblyActivate = utils.possiblyActivate;


export function DropMenu(_ref) {
    var recordMouse = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
            var x, y, newMouseLocs;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            x = e.pageX, y = e.pageY;
                            newMouseLocs = [];

                            if (mouseLocs) {
                                newMouseLocs = mouseLocs.slice();
                            }
                            newMouseLocs.push({ x: x, y: y });
                            if (newMouseLocs.length > 8) {
                                newMouseLocs.shift();
                            }
                            mouseLocs = newMouseLocs;

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function recordMouse(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    var mouseEnterContainer = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (onMouseEnter) {
                                onMouseEnter();
                            }

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function mouseEnterContainer() {
            return _ref3.apply(this, arguments);
        };
    }();

    var mouseLeave = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            dismissTimeout(timeoutID);
                            if (onExit) {
                                onExit();
                            }
                            setActiveRow(-1);

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function mouseLeave() {
            return _ref4.apply(this, arguments);
        };
    }();

    var mouseEnterRow = function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(row) {
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            dismissTimeout(timeoutID);
                            possiblyActivate(row, setTimeoutID, setLastDelayLoc, setActiveRow, activeRow, tolerance, instance, lastDelayLoc, mouseLocs, direction);

                        case 2:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function mouseEnterRow(_x2) {
            return _ref5.apply(this, arguments);
        };
    }();

    var top = _ref.top,
        left = _ref.left,
        tolerance = _ref.tolerance,
        direction = _ref.direction,
        data = _ref.data,
        onExit = _ref.onExit,
        onMouseEnter = _ref.onMouseEnter;


    // local variable is an array
    var mouseLocs = void 0;

    // state

    var _useState = useState(-1),
        activeRow = _useState[0],
        setActiveRow = _useState[1];

    var _useState2 = useState(null),
        timeoutID = _useState2[0],
        setTimeoutID = _useState2[1];

    var _useState3 = useState(),
        lastDelayLoc = _useState3[0],
        setLastDelayLoc = _useState3[1];

    var _useDimensions = useDimensions(),
        ref = _useDimensions[0],
        dims = _useDimensions[1];

    var instance = React.createRef();
    direction = direction || "RIGHT";
    // used to place the menu container
    var containerProps = {
        top: top,
        left: left
    };

    function enterSubMenu() {
        if (timeoutID) {
            dismissTimeout(timeoutID);
        }
    }

    return React.createElement(
        'div',
        { style: containerProps,
            className: 'menu-container',
            ref: ref,
            onMouseLeave: mouseLeave,
            onMouseEnter: mouseEnterContainer
        },
        React.createElement(
            'div',
            { className: 'menu-container-inner' },
            React.createElement(
                'div',
                { className: 'menu-list' },
                React.createElement(
                    'ul',
                    { id: 'menu',
                        className: 'drop-menu',
                        ref: instance,
                        onMouseMove: recordMouse
                    },
                    data.map(function (item, i) {
                        var title = item.title,
                            id = item.id,
                            content = item.content,
                            items = item.items;

                        var hasData = items !== undefined && items.length > 0;
                        return React.createElement(MenuItem, {
                            selected: i === activeRow,
                            hasData: hasData,
                            content: content,
                            items: items,
                            mouseEntered: function mouseEntered() {
                                return mouseEnterRow(i);
                            },
                            title: title,
                            key: id
                        });
                    })
                )
            ),
            activeRow > -1 && data[activeRow].items && React.createElement(MenuContent, {
                item: data[activeRow],
                className: 'menu-content',
                direction: direction,
                dimensions: dims,
                mouseEntered: enterSubMenu,
                content: data[activeRow].content,
                title: data[activeRow].title,
                items: data[activeRow].items,
                type: data[activeRow].type
            })
        )
    );
}

export default DropMenu;