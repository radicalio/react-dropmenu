'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../MenuAnchor/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var NavBar = function NavBar(_ref) {
    var pages = _ref.pages,
        navClass = _ref.navClass,
        useButtons = _ref.useButtons;

    var classesList = ["primary-navigation"];
    if (useButtons) {
        classesList.push("asButton");
    }
    var classes = classesList.join(" ");
    console.log("Pages", pages);
    return _react2.default.createElement(
        'div',
        { className: classes },
        pages.map(function (page, i) {
            var id = "mega-menu-" + i;
            return _react2.default.createElement(
                _index2.default,
                { page: page, navClass: navClass, id: id, key: i },
                page.title
            );
            // TODO: For Gatsby use Link
            // return <Link className={navClass} to={url} key={i}>{navitem.node.title}</Link>
        })
    );
};

NavBar.defaultProps = {
    navClass: 'site-nav-item'
};

NavBar.propTypes = process.env.NODE_ENV !== "production" ? {
    pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        url: _propTypes2.default.string.isRequired
    }).isRequired).isRequired,
    navClass: _propTypes2.default.string
} : {};

exports.default = NavBar;

// For Gatsby
//            if (navitem.node.url.match(/^\s?http(s?)/gi)) {
//                return <a className={navClass} href={navitem.node.url} key={i} target="_blank" rel="noopener noreferrer">{navitem.node.title}</a>
//            } else {
//                return <Link className={navClass} to={navitem.node.url} key={i}>{navitem.node.title}</Link>
//            }

module.exports = exports['default'];