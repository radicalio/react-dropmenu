"use strict";

exports.__esModule = true;
exports.MenuContentTestCard = MenuContentTestCard;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuContentTestCard(_ref) {
    var item = _ref.item;


    var content = item.content;
    //const title = item.title;
    var onclick = function onclick(e) {
        console.log("MenuContentCard click", item.url);
    };

    // used to show just the single content of this item
    content = { __html: content };
    return _react2.default.createElement("div", { className: "content-item-body menu-card",
        onClick: onclick,
        dangerouslySetInnerHTML: content });
}

exports.default = MenuContentTestCard;