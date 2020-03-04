import React from "react";
import useDimensions from "react-use-dimensions";
import MenuContentCard from "./MenuContentCard";
import MenuContentTestCard from "./MenuContentTestCard";
import MenuContentList from "./MenuContentList";
import MenuContentListList from "./MenuContentListList";

export function MenuContent(_ref) {
    var item = _ref.item,
        mouseEntered = _ref.mouseEntered,
        dimensions = _ref.dimensions;


    var TYPES = {
        CARD: "card",
        LIST: "list",
        LISTLIST: "list-list",
        TESTCARD: "test-card"
    };
    var items = item.items;
    var type = item.type;
    var hasItems = items !== undefined && items.length > 0;

    var _useDimensions = useDimensions(),
        ref = _useDimensions[0],
        dims = _useDimensions[1];
    // console.log("Menu Dimensions", dimensions);


    var leftAt = 0 + dimensions.width;
    var topAt = 0 - 1;
    var clientWidth = 3000;
    var offset = 6;
    if (window && document && document.documentElement) {
        clientWidth = window.innerWidth || document.documentElement.clientWidth;
    }
    if (dims.x + dims.width > clientWidth) {
        if (dimensions.x - dims.width < 0) {
            //console.warn("potential offscreen left", dimensions.x, dims.width, dimensions.x - dims.width);
        } else {
            // -- is Left Direction
            //leftAt = 0 - dims.width - offset;
            leftAt = 0 - dims.width;
        }
    }
    var position = {
        left: leftAt,
        top: topAt
        //console.log("Content Dimensions: ", dims);
        //console.log("Menu: ", dimensions.x);
        //console.log("Content: ", dims.x);

    };if (hasItems && type === "card") {
        console.warn("type was card, but has children", item.title);
    }
    var card = void 0;
    switch (type) {
        case TYPES.CARD:
            card = React.createElement(MenuContentCard, { item: item });
            break;
        case TYPES.LIST:
            card = React.createElement(MenuContentList, { item: item });
            break;
        case TYPES.LISTLIST:
            card = React.createElement(MenuContentListList, { item: item });
            break;
        case TYPES.TESTCARD:
            card = React.createElement(MenuContentTestCard, { item: item });
            break;
        default:
            card = React.createElement(MenuContentCard, { item: item });
            break;
    }

    return React.createElement(
        "div",
        {
            ref: ref,
            onMouseEnter: mouseEntered,
            className: "menu-content",
            style: position },
        card
    );
}

export default MenuContent;