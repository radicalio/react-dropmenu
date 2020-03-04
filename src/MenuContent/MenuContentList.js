import React, {Fragment} from "react";
import ContentList from "./ContentList";
import ContentListItem from "./ContentListItem"

export function MenuContentList({ item }) {
    
    const title = item.title;
    const items = item.items;
    const hasItems = items !== undefined && items.length > 0;
    let itemslist = [];
    if (hasItems) {
        for (let x = 0; x < items.length; x++) {
            itemslist[x] = items[x];
        }
    }
    
    const onclick = (e, item) => {
        console.log("MenuContentList click", item.url)
        //TODO: change location
    }
    
    // used to generate content using the array of items
    return (
        <Fragment>
            <div className="content-item-header" onClick={(event => { onclick(event, item) })}>
                Header: {title}
            </div>
            <div className="content-item-body">
                {itemslist.map((itm, i) => {
                    const items = itm.items;
                    const hasChildren = items && items.length > 0
                    if (hasChildren) {
                        return (
                            <ContentList item={itm} onclick={onclick} key={i} />
                        )
                    } else {
                        return(
                            <ContentListItem item={itm} onclick={onclick} key={i} />
                        )
                    }
                })}
            </div>
        </Fragment>
    );
}

export default MenuContentList;



