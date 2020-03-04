import React from "react";
import mountain from "../../img/Mountain.png";

export function MenuContentCard(_ref) {
    var item = _ref.item;


    var content = item.content;
    var title = item.title;
    var onclick = function onclick(e) {
        console.log("MenuContentCard click", item.url);
    };

    // used to show just the single content of this item
    content = { __html: content };
    return React.createElement(
        "div",
        { className: "content-item-body menu-card", onClick: onclick },
        React.createElement(
            "div",
            { className: "nav-card" },
            React.createElement("img", {
                src: mountain,
                alt: title
            }),
            React.createElement(
                "div",
                { className: "nav-card-info" },
                React.createElement(
                    "h4",
                    null,
                    title
                ),
                React.createElement("p", { dangerouslySetInnerHTML: content })
            )
        )
    );
}

export default MenuContentCard;