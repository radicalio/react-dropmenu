"use strict";

exports.__esModule = true;
exports.MenuItem = MenuItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuItem(_ref) {
    var selected = _ref.selected,
        title = _ref.title,
        content = _ref.content,
        items = _ref.items,
        type = _ref.type,
        mouseEntered = _ref.mouseEntered,
        hasData = _ref.hasData,
        props = _ref.props,
        selectedProps = _ref.selectedProps;


    var cname = "menu-item";
    if (selected) {
        cname = "menu-item-selected";
    }

    return _react2.default.createElement(
        "li",
        { id: "menu-item", className: cname, onMouseEnter: mouseEntered },
        title
    );
}

exports.default = MenuItem;