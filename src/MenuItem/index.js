import React from "react";

export function MenuItem({ selected, title, content, items, type, mouseEntered, hasData, props, selectedProps }) {
    
    let cname = "menu-item";
    if (selected) {
        cname = "menu-item-selected"
    }
    
    return (
        <li id="menu-item" className={cname} onMouseEnter={mouseEntered} >
            {title}
        </li>
    );
}

export default MenuItem;
