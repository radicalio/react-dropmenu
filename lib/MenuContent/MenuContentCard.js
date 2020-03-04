"use strict";

exports.__esModule = true;
exports.MenuContentCard = MenuContentCard;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Mountain = require("../../img/Mountain.png");

var _Mountain2 = _interopRequireDefault(_Mountain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuContentCard(_ref) {
    var item = _ref.item;


    var content = item.content;
    var title = item.title;
    var onclick = function onclick(e) {
        console.log("MenuContentCard click", item.url);
    };

    // used to show just the single content of this item
    content = { __html: content };
    return _react2.default.createElement(
        "div",
        { className: "content-item-body menu-card", onClick: onclick },
        _react2.default.createElement(
            "div",
            { className: "nav-card" },
            _react2.default.createElement("img", {
                src: _Mountain2.default,
                alt: title
            }),
            _react2.default.createElement(
                "div",
                { className: "nav-card-info" },
                _react2.default.createElement(
                    "h4",
                    null,
                    title
                ),
                _react2.default.createElement("p", { dangerouslySetInnerHTML: content })
            )
        )
    );
}

exports.default = MenuContentCard;