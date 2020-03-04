import React from "react";
import mountain from "../../img/Mountain.png"

export function MenuContentCard({ item }) {
    
    let content = item.content;
    const title = item.title;
    const onclick = (e) => {
        console.log("MenuContentCard click", item.url)
    }
    
    // used to show just the single content of this item
    content = {__html: content};
    return (
        <div className="content-item-body menu-card" onClick={onclick}>
            <div className='nav-card'><img
                src={mountain}
                alt={title}
            />
                <div className="nav-card-info">
                    
                    <h4>{title}</h4>
                    
                    <p dangerouslySetInnerHTML={content} />
                    
                </div>
            </div>
        </div>
    );
}

export default MenuContentCard;
