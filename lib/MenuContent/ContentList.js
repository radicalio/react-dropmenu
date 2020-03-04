"use strict";

exports.__esModule = true;
exports.ContentList = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ContentListItem = require("./ContentListItem");

var _ContentListItem2 = _interopRequireDefault(_ContentListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentList(_ref) {
    var item = _ref.item,
        _onclick = _ref.onclick;


    var title = item.title;
    var items = item.items;
    var hasChildren = items && items.length > 0;
    //console.log("ContentList has children:", title, hasChildren);

    //    const childOnClick = (e, item) => {
    //        console.log(" ContentList click", item.url)
    //        //TODO: change location
    //    }
    if (hasChildren) {
        // here child items of a ContentListItem is not used but might exist
        return _react2.default.createElement(
            "div",
            { className: "content-item-group" },
            _react2.default.createElement(
                "div",
                { className: "content-item-group-title", onClick: function onClick(event) {
                        _onclick(event, item);
                    } },
                "Collection: ",
                title
            ),
            items.map(function (item, i) {
                return _react2.default.createElement(_ContentListItem2.default, { key: i, item: item, onclick: function onclick(event) {
                        _onclick(event, item);
                    } });
            })
        );
    } else {
        // format a single item as a header with no children
        // TODO: add something under the header?
        return _react2.default.createElement(
            "div",
            { className: "content-item-group" },
            _react2.default.createElement(
                "div",
                { className: "content-item-group-title", onClick: function onClick(event) {
                        _onclick(event, item);
                    } },
                "Collection: ",
                title
            ),
            _react2.default.createElement(
                "div",
                { className: "content-item", onClick: function onClick(event) {
                        _onclick(event, item);
                    } },
                " (empty) "
            )
        );
    }
}

exports.ContentList = ContentList;
exports.default = ContentList;