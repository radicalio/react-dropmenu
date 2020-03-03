import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import useDimensions from "react-use-dimensions"
import DropMenu from "../index"

const MenuAnchor = ({ page, navClass, id, children }) => {

    const tolerance = "50";
    //const url = "/" + page.slug;
    const url = page.url;
    const items = page.items;
    const type = page.type;
    const hasChildren = items && items.length > 0
    let timer = null;
    const [visible, setVisible] = useState( false );
    const [direction, setDirection] = useState( "RIGHT" );
    const [position, setPosition] = useState( { id: "none", x: 0, y: 0 } );
    const [ref, dims] = useDimensions();
    const content = children || page.title;

    async function handleMouseEnter(event) {
        let ypos = event.currentTarget.offsetTop + event.currentTarget.offsetHeight;
        if (ypos < 0 ) {
            console.warn("panel is offscreen ", ypos);
        }
        setPosition({
            x: event.currentTarget.offsetLeft,
            y: ypos,
        })
        setVisible(true);
    }
    async function handleMouseLeave(event) {
        timer = setTimeout(function() {
            setVisible(false);
        }, 50);
    }
    async function enterMenu(event) {
        setTimeout(() => {
            if (timer) {
                clearTimeout(timer);
            }
        }, 10);

    }
    async function onExit() {
        setVisible(false);
    }

    return (
        <Fragment>
            <a id={id} className={navClass} href={url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={ref}
            >
                {content}
            </a>
            {/* visible = hover state // hasChildren = only show menu for children */}
            {visible && hasChildren &&
                <DropMenu
                    id={id}
                    top={position.y}
                    left={position.x}
                    tolerance={tolerance}
                    data={items}
                    onExit={onExit}
                    onMouseEnter={enterMenu}
                    />
            }
        </Fragment>
    )
}

MenuAnchor.defaultProps = {
    navClass: `site-nav-item`,
}

MenuAnchor.propTypes = {
    page: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    navClass: PropTypes.string.isRequired,
}

export default MenuAnchor;
