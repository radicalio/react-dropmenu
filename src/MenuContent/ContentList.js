import React from "react";
import ContentListItem from "./ContentListItem"

export function ContentList({ item, onclick }) {
    
    const title = item.title;
    const items = item.items;
    const hasChildren = items && items.length > 0;
    //console.log("ContentList has children:", title, hasChildren);
    
//    const childOnClick = (e, item) => {
//        console.log(" ContentList click", item.url)
//        //TODO: change location
//    }
    if (hasChildren) {
        // here child items of a ContentListItem is not used but might exist
        return (
            <div className="content-item-group">
                <div className="content-item-group-title" onClick={(event => {
                    onclick(event, item)
                })}>Collection: {title}</div>
                {items.map((item, i) => {
                    return (
                        <ContentListItem key={i} item={item} onclick={(event => {
                            onclick(event, item)
                        })} />
                    )
                })}
            </div>
        )
    } else {
        // format a single item as a header with no children
        // TODO: add something under the header?
        return (
            <div className="content-item-group">
                <div className="content-item-group-title" onClick={(event => {
                    onclick(event, item)
                })}>Collection: {title}</div>
                <div className="content-item" onClick={(event => {
                    onclick(event, item)
                })}> (empty) </div>
            </div>
        )
    
    }
}

export default ContentList;
