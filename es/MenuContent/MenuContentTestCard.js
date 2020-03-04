import React from "react";

export function MenuContentTestCard(_ref) {
    var item = _ref.item;


    var content = item.content;
    //const title = item.title;
    var onclick = function onclick(e) {
        console.log("MenuContentCard click", item.url);
    };

    // used to show just the single content of this item
    content = { __html: content };
    return React.createElement("div", { className: "content-item-body menu-card",
        onClick: onclick,
        dangerouslySetInnerHTML: content });
}

export default MenuContentTestCard;