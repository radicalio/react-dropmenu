import React, { Fragment } from "react";
import ContentList from "./ContentList";
import ContentListItem from "./ContentListItem";

export function MenuContentList(_ref) {
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
            itemslist.map(function (itm, i) {
                var items = itm.items;
                var hasChildren = items && items.length > 0;
                if (hasChildren) {
                    return React.createElement(ContentList, { item: itm, onclick: onclick, key: i });
                } else {
                    return React.createElement(ContentListItem, { item: itm, onclick: onclick, key: i });
                }
            })
        )
    );
}

export default MenuContentList;