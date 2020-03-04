import React from "react";
import useDimensions from "react-use-dimensions";
import MenuContentCard from "./MenuContentCard"
import MenuContentTestCard from "./MenuContentTestCard"
import MenuContentList from "./MenuContentList"
import MenuContentListList from "./MenuContentListList"

export function MenuContent({ item, mouseEntered, dimensions }) {
    
    const TYPES = {
        CARD: "card",
        LIST: "list",
        LISTLIST: "list-list",
        TESTCARD: "test-card",
    };
    const items = item.items;
    const type = item.type;
    const hasItems = items !== undefined && items.length > 0;
    const [ref, dims] = useDimensions();
    // console.log("Menu Dimensions", dimensions);
    let leftAt = 0 + dimensions.width;
    let topAt = 0 - 1;
    let clientWidth = 3000;
    let offset = 6;
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
    let position = {
        left: leftAt,
        top: topAt,
    }
    //console.log("Content Dimensions: ", dims);
    //console.log("Menu: ", dimensions.x);
    //console.log("Content: ", dims.x);
    
    if (hasItems && type === "card") {
        console.warn("type was card, but has children", item.title)
    }
    let card;
    switch (type) {
        case TYPES.CARD:
            card = <MenuContentCard item={item} />
            break;
        case TYPES.LIST:
            card = <MenuContentList item={item} />
            break;
        case TYPES.LISTLIST:
            card = <MenuContentListList item={item} />
            break;
        case TYPES.TESTCARD:
            card = <MenuContentTestCard item={item} />
            break;
        default:
            card = <MenuContentCard item={item}/>
            break;
    }
    
    return (
        <div
            ref={ref}
            onMouseEnter={mouseEntered}
            className="menu-content"
            style={position}>
            {card}
        </div>
    )
}

export default MenuContent;



