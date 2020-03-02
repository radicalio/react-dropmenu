
/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * https://gomakethings.com/how-to-check-if-any-part-of-an-element-is-out-of-the-viewport-with-vanilla-js/
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 */
export const isOutOfViewport = function (elem) {
    // Get element's bounding
    let bounding = elem.getBoundingClientRect();
    // Check if it's out of the viewport on each side
    let innerHeight = 0;
    if (window) {
        innerHeight = window.innerHeight;
    }
    let clientHeight = 0;
    if (document && document.documentElement) {
        clientHeight = document.documentElement.clientHeight;
    }
    var out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (innerHeight || clientHeight);
    out.right = bounding.right > (innerWidth || clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;
    return out;
};
export default { isOutOfViewport };
