import React from "react";

export function MenuItem(_ref) {
    var selected = _ref.selected,
        title = _ref.title,
        content = _ref.content,
        items = _ref.items,
        type = _ref.type,
        mouseEntered = _ref.mouseEntered,
        hasData = _ref.hasData,
        props = _ref.props,
        selectedProps = _ref.selectedProps;


    var cname = "menu-item";
    if (selected) {
        cname = "menu-item-selected";
    }

    return React.createElement(
        "li",
        { id: "menu-item", className: cname, onMouseEnter: mouseEntered },
        title
    );
}

export default MenuItem;