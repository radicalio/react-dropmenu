"use strict";

exports.__esModule = true;
exports.ContentListItem = ContentListItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentListItem(_ref) {
    var item = _ref.item,
        onclick = _ref.onclick;

    var title = void 0,
        items = void 0;
    if (item) {
        title = item.title;
        items = item.items;
    } else {
        return _react2.default.createElement(_react.Fragment, null);
    }
    if (items && items.length > 0) {
        console.log("not showing children of item: ", title);
    }
    return _react2.default.createElement(
        "div",
        { className: "content-item", onClick: function onClick(event) {
                onclick(event, item);
            } },
        title
    );
}

exports.default = ContentListItem;