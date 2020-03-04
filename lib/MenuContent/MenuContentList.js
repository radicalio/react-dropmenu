"use strict";

exports.__esModule = true;
exports.MenuContentList = MenuContentList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ContentList = require("./ContentList");

var _ContentList2 = _interopRequireDefault(_ContentList);

var _ContentListItem = require("./ContentListItem");

var _ContentListItem2 = _interopRequireDefault(_ContentListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuContentList(_ref) {
    var item = _ref.item;


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
        console.log("MenuContentList click", item.url);
        //TODO: change location
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
            itemslist.map(function (itm, i) {
                var items = itm.items;
                var hasChildren = items && items.length > 0;
                if (hasChildren) {
                    return _react2.default.createElement(_ContentList2.default, { item: itm, onclick: onclick, key: i });
                } else {
                    return _react2.default.createElement(_ContentListItem2.default, { item: itm, onclick: onclick, key: i });
                }
            })
        )
    );
}

exports.default = MenuContentList;