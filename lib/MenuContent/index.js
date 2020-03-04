"use strict";

exports.__esModule = true;
exports.MenuContent = MenuContent;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactUseDimensions = require("react-use-dimensions");

var _reactUseDimensions2 = _interopRequireDefault(_reactUseDimensions);

var _MenuContentCard = require("./MenuContentCard");

var _MenuContentCard2 = _interopRequireDefault(_MenuContentCard);

var _MenuContentTestCard = require("./MenuContentTestCard");

var _MenuContentTestCard2 = _interopRequireDefault(_MenuContentTestCard);

var _MenuContentList = require("./MenuContentList");

var _MenuContentList2 = _interopRequireDefault(_MenuContentList);

var _MenuContentListList = require("./MenuContentListList");

var _MenuContentListList2 = _interopRequireDefault(_MenuContentListList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuContent(_ref) {
    var item = _ref.item,
        mouseEntered = _ref.mouseEntered,
        dimensions = _ref.dimensions;


    var TYPES = {
        CARD: "card",
        LIST: "list",
        LISTLIST: "list-list",
        TESTCARD: "test-card"
    };
    var items = item.items;
    var type = item.type;
    var hasItems = items !== undefined && items.length > 0;

    var _useDimensions = (0, _reactUseDimensions2.default)(),
        ref = _useDimensions[0],
        dims = _useDimensions[1];
    // console.log("Menu Dimensions", dimensions);


    var leftAt = 0 + dimensions.width;
    var topAt = 0 - 1;
    var clientWidth = 3000;
    var offset = 6;
    if (window && document && document.documentElement) {
        clientWidth = window.innerWidth || document.documentElement.clientWidth;
    }
    if (dims.x + dims.width > clientWidth) {
        if (dimensions.x - dims.width < 0) {
            //console.warn("potential offscreen left", dimensions.x, dims.width, dimensions.x - dims.width);
        } else {
            // -- is Left Direction
            //leftAt = 0 - dims.width - offset;
            leftAt = 0 - dims.width;
        }
    }
    var position = {
        left: leftAt,
        top: topAt
        //console.log("Content Dimensions: ", dims);
        //console.log("Menu: ", dimensions.x);
        //console.log("Content: ", dims.x);

    };if (hasItems && type === "card") {
        console.warn("type was card, but has children", item.title);
    }
    var card = void 0;
    switch (type) {
        case TYPES.CARD:
            card = _react2.default.createElement(_MenuContentCard2.default, { item: item });
            break;
        case TYPES.LIST:
            card = _react2.default.createElement(_MenuContentList2.default, { item: item });
            break;
        case TYPES.LISTLIST:
            card = _react2.default.createElement(_MenuContentListList2.default, { item: item });
            break;
        case TYPES.TESTCARD:
            card = _react2.default.createElement(_MenuContentTestCard2.default, { item: item });
            break;
        default:
            card = _react2.default.createElement(_MenuContentCard2.default, { item: item });
            break;
    }

    return _react2.default.createElement(
        "div",
        {
            ref: ref,
            onMouseEnter: mouseEntered,
            className: "menu-content",
            style: position },
        card
    );
}

exports.default = MenuContent;