import React, { Fragment } from "react";

export function ContentListItem(_ref) {
    var item = _ref.item,
        onclick = _ref.onclick;

    var title = void 0,
        items = void 0;
    if (item) {
        title = item.title;
        items = item.items;
    } else {
        return React.createElement(Fragment, null);
    }
    if (items && items.length > 0) {
        console.log("not showing children of item: ", title);
    }
    return React.createElement(
        "div",
        { className: "content-item", onClick: function onClick(event) {
                onclick(event, item);
            } },
        title
    );
}

export default ContentListItem;