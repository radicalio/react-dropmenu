import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import logo from "../../img/Radical-I-O-Logo.png"
import "./demo.css"

import { NavBar } from "../../src/index"
import { MenuData } from "./MOCK_DATA"

class Demo extends Component {
    
    render() {
        return (
            <Fragment>
                <header className="site-header">
                    <img height="50" alt="" className="logo-mobile" src={logo} />
                </header>
                <main className="site-main">
                    <NavBar pages={MenuData} navClass="site-nav-item" useButtons={false} />
                </main>
            </Fragment>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
