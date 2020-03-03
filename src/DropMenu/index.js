import React from 'react';
import { Fragment, useState } from 'react';
import useDimensions from "react-use-dimensions"
import { MenuItem } from "../MenuItem";
import { MenuContent } from "../MenuContent";
import utils from "../utils/index";
const { dismissTimeout, possiblyActivate } = utils;

export function DropMenu ({ top, left, tolerance, direction, data, onExit, onMouseEnter  }) {
    
    // local variable is an array
    let mouseLocs;
    
    // state
    const [activeRow, setActiveRow] = useState( -1 );
    const [timeoutID, setTimeoutID] = useState( null );
    const [lastDelayLoc, setLastDelayLoc] = useState();
    const [ref, dims] = useDimensions();
    const instance = React.createRef();
    direction = direction || "RIGHT";
    // used to place the menu container
    let containerProps = {
        top: top,
        left: left,
    };
    async function recordMouse (e) {
        const x = e.pageX, y = e.pageY;
        let newMouseLocs = [];
        if (mouseLocs) {
            newMouseLocs = mouseLocs.slice();
        }
        newMouseLocs.push({ x, y });
        if (newMouseLocs.length > 8) {
            newMouseLocs.shift();
        }
        mouseLocs = newMouseLocs;
    }
    async function mouseEnterContainer() {
        if (onMouseEnter) {
            onMouseEnter();
        }
    }
    async  function mouseLeave() {
        dismissTimeout(timeoutID);
        if (onExit) {
            onExit();
        }
        setActiveRow(-1);
    }
    async function mouseEnterRow(row) {
        dismissTimeout(timeoutID);
        possiblyActivate(row, setTimeoutID, setLastDelayLoc, setActiveRow, activeRow, tolerance, instance, lastDelayLoc, mouseLocs, direction);
    }
    function enterSubMenu() {
        if (timeoutID) {
            dismissTimeout(timeoutID);
        }
    }
    
    return (
        <div style={containerProps}
            className="menu-container"
            ref={ref}
            onMouseLeave={mouseLeave}
            onMouseEnter={mouseEnterContainer}
        >
            <div className="menu-container-inner">
    
                <div className="menu-list">
                    <ul id="menu"
                        className="drop-menu"
                        ref={instance}
                        onMouseMove={recordMouse}
                    >
                        {data.map((item, i) => {
                            const { title, id, content, items } = item;
                            const hasData = items !== undefined && items.length > 0;
                            return (
                                <MenuItem
                                    selected={i === activeRow}
                                    hasData={hasData}
                                    content={content}
                                    items={items}
                                    mouseEntered={() => mouseEnterRow(i)}
                                    title={title}
                                    key={id}
                                />
                            )
                        })}
                    </ul>
                </div>
                {activeRow > -1 && data[activeRow].items && (
                    <MenuContent
                        item={data[activeRow]}
                        className="menu-content"
                        direction={direction}
                        dimensions={dims}
                        mouseEntered={enterSubMenu}
                        content={data[activeRow].content}
                        title={data[activeRow].title}
                        items={data[activeRow].items}
                        type={data[activeRow].type}
                    />
                )}
            </div>
        </div>
    );
}

export default DropMenu;
