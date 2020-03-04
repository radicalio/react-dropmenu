import React, {Fragment} from "react";

export function ContentListItem({ item, onclick }) {
    let title, items;
    if (item) {
        title = item.title
        items = item.items;
    } else {
        return <Fragment></Fragment>;
    }
    if (items && items.length > 0) {
        console.log("not showing children of item: ", title);
    }
    return (
        <div className="content-item" onClick={(event => {onclick(event, item)})}>{title}</div>
    )
}

export default ContentListItem;
