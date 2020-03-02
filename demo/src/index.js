import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Menu } from "./MOCK_DATA"
import logo from "../../img/Radical-I-O-Logo.png"
import { NavBar } from "../../src/index"
import "./demo.css"

class Demo extends Component {
    
    render() {
        return (
            <Fragment>
                <header className="site-header">
                    <img height="60" alt="" className="logo-mobile" src={logo} />
                </header>
                <main className="site-main">
                    <NavBar pages={Menu} navClass="site-nav-item" useButtons={false} />
                </main>
            </Fragment>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
