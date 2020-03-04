var DELAY = 150;

export function possiblyActivate(row, setTimeoutID, setLastDelayLoc, setActiveRow, activeRow, tolerance, instance, lastDelayLoc, mouseLocs, direction) {
    //console.log("possiblyActivate row", row);
    var delay = getActivationDelay(activeRow, tolerance, instance, lastDelayLoc, mouseLocs, direction, setTimeoutID, setLastDelayLoc);
    if (delay) {
        var timeoutID = setTimeout(function () {
            possiblyActivate(row, setTimeoutID, setLastDelayLoc, setActiveRow, activeRow, tolerance, instance, lastDelayLoc, mouseLocs, direction);
        }, delay);
        //setState({ timeoutID } as any);
        setTimeoutID(timeoutID);
    } else {
        activate(row, setActiveRow, activeRow);
    }
}

export function activate(row, setActiveRow, activeRow) {
    if (row === activeRow) {
        return;
    }
    setActiveRow(row);
}

export function genCoords(x, y) {
    return { x: x, y: y };
}

export function calcSlope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}

export function dismissTimeout(timeoutID) {
    if (timeoutID) {
        clearTimeout(timeoutID);
    }
}

/**
 * Relies on state & props.
 *
 * If there is no current active row _OR_
 * If the mouse location was not previously recorded _OR_
 * If the mouse location comes in from outside of the menu _OR_
 * If the mouse hasn't moved since last delay _OR_
 * DEFAULT:
 * @return 0 delay.
 *
 * If the slope is smaller than slope to top corner, or bigger than slope to bottom corner
 * @return DELAY's value
 *
 * @memberof ReactMegaMenu
 */
// export function getActivationDelay() {
export function getActivationDelay(activeRow, tolerance, instance, lastDelayLoc, mouseLocs, direction, setTimeoutID, setLastDelayLoc) {
    if (activeRow < 0) {
        return 0;
    }
    if (!instance || !instance.current) {
        return 0;
    }
    var bounds = instance.current.getBoundingClientRect();
    var upperLeft = genCoords(bounds.left, bounds.top - (tolerance || 0)),
        upperRight = genCoords(bounds.left + bounds.width, upperLeft.y),
        lowerLeft = genCoords(bounds.left, bounds.top + bounds.height + (tolerance || 0)),
        lowerRight = genCoords(bounds.left + bounds.width, lowerLeft.y);

    var loc = mouseLocs[mouseLocs.length - 1];
    var prevLoc = mouseLocs[0];

    if (!loc) {
        return 0;
    }
    if (!prevLoc) {
        prevLoc = loc;
    }

    if (prevLoc.x < bounds.left || prevLoc.x > lowerRight.x || prevLoc.y < bounds.top || prevLoc.y > lowerRight.y) {
        // If the previous mouse location was outside of the entire
        // menu's bounds, immediately activate.
        return 0;
    }

    if (lastDelayLoc && loc.x === lastDelayLoc.x && loc.y === lastDelayLoc.y) {
        // If the mouse hasn't moved since the last time we checked
        // for activation status, immediately activate.
        return 0;
    }
    var decreasingCorner = void 0,
        increasingCorner = void 0;
    switch (direction) {
        case "LEFT":
        default:
            {
                decreasingCorner = lowerRight;
                increasingCorner = upperRight;
            }
            break;
        case "RIGHT":
            {
                decreasingCorner = upperLeft;
                increasingCorner = lowerLeft;
            }
            break;
    }

    var decreasingSlope = calcSlope(loc, decreasingCorner),
        increasingSlope = calcSlope(loc, increasingCorner),
        prevDecreasingSlope = calcSlope(prevLoc, decreasingCorner),
        prevIncreasingSlope = calcSlope(prevLoc, increasingCorner);

    if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
        // Mouse is moving from previous location towards the
        // currently activated submenu. Delay before activating a
        // new menu row, because user may be moving into submenu.
        //setState({ lastDelayLoc: loc });
        setLastDelayLoc(loc);
        return DELAY;
    }

    //setState({ lastDelayLoc: undefined });
    setLastDelayLoc(loc);
    return 0;
}