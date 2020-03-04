import React, { Fragment } from "react";
import ContentList from "./ContentList";

export function MenuContentListList(_ref) {
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
    return React.createElement(
        Fragment,
        null,
        React.createElement(
            "div",
            { className: "content-item-header", onClick: function onClick(event) {
                    onclick(event, item);
                } },
            "Header: ",
            title
        ),
        React.createElement(
            "div",
            { className: "content-item-body" },
            React.createElement(
                "div",
                { className: "content-item-body-inner" },
                itemslist.map(function (item, i) {
                    return React.createElement(ContentList, { item: item, onclick: onclick, key: i });
                })
            )
        )
    );
}

export default MenuContentListList;