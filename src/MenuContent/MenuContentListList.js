import React, {Fragment} from "react";
import ContentList from "./ContentList";

export function MenuContentListList({ item }) {
    
    // let content = item.content;
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
        console.log("MenuContentListList click", item.title, item.url)
    }
    
    // used to generate content using the array of items
    return (
        <Fragment>
            <div className="content-item-header" onClick={(event => {
                onclick(event, item)
            })}>
                Header: {title}
            </div>
            <div className="content-item-body">
                <div className="content-item-body-inner">
                {itemslist.map((item, i) => {
                    return (
                        <ContentList item={item} onclick={onclick} key={i} />
                    )
                })}
                </div>
            </div>
        </Fragment>
    );
}

export default MenuContentListList;
