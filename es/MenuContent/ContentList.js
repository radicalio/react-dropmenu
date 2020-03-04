export { ContentList };
import React from "react";
import ContentListItem from "./ContentListItem";

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
        return React.createElement(
            "div",
            { className: "content-item-group" },
            React.createElement(
                "div",
                { className: "content-item-group-title", onClick: function onClick(event) {
                        _onclick(event, item);
                    } },
                "Collection: ",
                title
            ),
            items.map(function (item, i) {
                return React.createElement(ContentListItem, { key: i, item: item, onclick: function onclick(event) {
                        _onclick(event, item);
                    } });
            })
        );
    } else {
        // format a single item as a header with no children
        // TODO: add something under the header?
        return React.createElement(
            "div",
            { className: "content-item-group" },
            React.createElement(
                "div",
                { className: "content-item-group-title", onClick: function onClick(event) {
                        _onclick(event, item);
                    } },
                "Collection: ",
                title
            ),
            React.createElement(
                "div",
                { className: "content-item", onClick: function onClick(event) {
                        _onclick(event, item);
                    } },
                " (empty) "
            )
        );
    }
}

export default ContentList;