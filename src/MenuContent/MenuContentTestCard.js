import React from "react";

export function MenuContentTestCard({ item }) {
    
    let content = item.content;
    //const title = item.title;
    const onclick = (e) => {
        console.log("MenuContentCard click", item.url)
    }
    
    // used to show just the single content of this item
    content = {__html: content};
    return (
        <div className="content-item-body menu-card"
             onClick={onclick}
            dangerouslySetInnerHTML={content}>
        </div>
    );
}

export default MenuContentTestCard;
