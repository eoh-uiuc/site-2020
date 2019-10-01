import React, { Component } from 'react';

import logo from 'assets/logo-white.png';

class MainView extends Component {
    render() {
        return(
            <div className="splash">
                <img src={logo} className="splash-logo" alt="logo" />
                <h1>A Century of Innovation</h1>
                <h2>Engineering Open House</h2>
                <h3>March 27 - 28, 2020</h3>
            </div>
        );
    }
}

export default MainView;