import React from 'react'
import PropTypes from 'prop-types'
import MenuAnchor from "../MenuAnchor/index"

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const NavBar = ({ pages, navClass, useButtons }) => {
    const classesList = ["primary-navigation"]
    if (useButtons) {
        classesList.push("asButton");
    }
    const classes = classesList.join(" ");
    //console.log("Pages", pages);
    if (!pages || !page.length) {
        return <Fragment />
    } else {
        console.log("Pages", pages);
        return (
            <div className={classes}>
                {pages.map((page, i) => {
                    const id = "mega-menu-" + i;
                    return (
                        <MenuAnchor page={page} navClass={navClass} id={id} key={i}>
                            {page.title}
                        </MenuAnchor>
                    )
                    // TODO: For Gatsby use Link
                    // return <Link className={navClass} to={url} key={i}>{navitem.node.title}</Link>
                })}
            </div>
        )
    }
}

NavBar.defaultProps = {
    navClass: `site-nav-item`,
}

NavBar.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default NavBar

// For Gatsby
//            if (navitem.node.url.match(/^\s?http(s?)/gi)) {
//                return <a className={navClass} href={navitem.node.url} key={i} target="_blank" rel="noopener noreferrer">{navitem.node.title}</a>
//            } else {
//                return <Link className={navClass} to={navitem.node.url} key={i}>{navitem.node.title}</Link>
//            }
