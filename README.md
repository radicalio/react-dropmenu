<p align="center"><img src="./img/react-supply-store.png"></p>

# react-dropmenu 
> A more natural feeling navigation menu component that can distinguish an 
option selection and an attempt to navigate to the submenu's content.

![favicon-32x32](./img/favicon.png) 
[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]


## Installation

```sh
npm install react-dropmenu --save
```

## Background

The menu is responsive, going up and down as expected, but when you attempt 
to point to the content container, it recognizes it and allows for a smooth 
transition without switching sections accidentally:

The menu can also present the content to the left instead of to the right:

## Usage

You can use the code to create an individual dropmenu from a memu anchor, 
or a NavBar of anchors and menus. 

When using the NavBar it uses an array of page objects to render a horizontal 
array of MenuAnchor links. These are created as anchor "a" tags but can also be 
styled as buttons. using the useButtons boolean. 

### Data
You will need to load data. I expect that you will do this as JSON data from an API, 
but the demo shows loading data as a javascript object statically. If using the static 
data approach, the data must be an exported as an object called `MenuData` containg an 
array of page objects. 

```sh
import { MenuData } from "./MOCK_DATA.js"
```
If using an API you can retrieve the array of data as JSON. You need an array of objects in JSON.
 

Each page object looks like this. (shown here as javascript objects)

```sh
module.exports = {
    MenuData: [
        {
            title: "Radical Page",
            type: "anchor",
            content: "Content for Radical Page",
            id: "123451",
            url: "/radical-page",
            items: [],
        },
        {
            title: "Radical Page 2",
            type: "anchor",
            content: "Content for Radical Page 2",
            id: "123452",
            url: "/radical-page",
            items: [],
        },
    ]
}
```
The `items` array can contain an array of child page objects!

### Import NavBar
Next, import NavBar class from the package

```sh
import { NavBar } from "react-dropmenu"
```

The component takes in a few props:
- pages: an array of objects that represent each element in the NavBar
- navClass: a css style class name that will
- useButtons: [true | false] a boolean to toggle style use between link an button 
appearance. All of the achors are contained in a div with the class "primary-navigation". 
Setting useButtons also adds the "asButton" style to the container. 

```
...
<NavBar 
  pages={MenuData}    // array of page objects
  navClass="site-nav-item" // your style that will be applied to each anchor in the bar
  useButtons={true|false}  // a function to be called when a mouse leaves the container
/>
...
```

Internally the NavBar creates MenuAnchor components for each page object. A MenuAnchor 
is a styled "a" link with a DropMenu components attached. 

### or Import DropMenu 

If you want to use the drop menu yourself directly without the NavBar you can import 
and use the DropMenu.

```sh
import { DropMenu } from "react-dropmenu"
```
Then use the Drop Menu on your 
```jsx harmony
<MenuAnchor 
    page={page}        // (object) one page data object, with child items
    navClass="site-nav-item" // css class for link
    id={id}            // (string) The HTML element id name
    key={i}            // React key (to be unique)
>
   {page.title}        // Anything here, will be wrapped inside an "a" anchor tag.
</MenuAnchor>

```

## Development setup

1.  Clone repo: `git clone ...`
2.  run `npm install`
3.  run `npm start` to see a live demo

## Meta

Ian Sim – [@simiansim](https://twitter.com/simiansim) – ian@radical.io  
Radical I/O – [@radicalio](https://twitter.com/radicalio) – info@radical.io  

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/radicalio/react-dropmenu](https://github.com/radicalio)

## Contributing

1. Fork it (<https://github.com/radicalio/react-dropmenu/fork>) 
2. Create your feature branch (`git checkout -b feature/mychanges`)
3. Commit your changes (`git commit -am 'Add some mychanges'`)
4. Push to the branch (`git push origin feature/mychanges`)
5. Create a new Pull Request

## Inspired by:
https://github.com/SUPPLYcom/react-mega-menu  
https://github.com/kamens/jQuery-menu-aim  

<!-- Markdown link & img dfn's 
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-mega-menu
[npm-downloads]: https://img.shields.io/npm/dm/react-mega-menu.svg?style=flat-square
-->
