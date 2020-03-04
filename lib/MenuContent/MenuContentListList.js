"use strict";

exports.__esModule = true;
exports.MenuContentListList = MenuContentListList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ContentList = require("./ContentList");

var _ContentList2 = _interopRequireDefault(_ContentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuContentListList(_ref) {
    var item = _ref.item;


    // let content = item.content;
    var title = item.title;
    var items = item.items;
    var hasItems = items !== undefined && items.length > 0;
    var itemslist = [];
    if (hasItems) {
        for (var x = 0; x < items.length; x++) {
            itemslist[x] = items[x];
        }
    }

    var onclick = function onclick(e, item) {
        console.log("MenuContentListList click", item.title, item.url);
    };

    // used to generate content using the array of items
    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "div",
            { className: "content-item-header", onClick: function onClick(event) {
                    onclick(event, item);
                } },
            "Header: ",
            title
        ),
        _react2.default.createElement(
            "div",
            { className: "content-item-body" },
            _react2.default.createElement(
                "div",
                { className: "content-item-body-inner" },
                itemslist.map(function (item, i) {
                    return _react2.default.createElement(_ContentList2.default, { item: item, onclick: onclick, key: i });
                })
            )
        )
    );
}

exports.default = MenuContentListList;