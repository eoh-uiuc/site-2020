import React, { Component } from 'react';

import MainView from './scenes/MainView';
import About from './scenes/About';
import './styles.scss';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <MainView />
                <About />
            </div>
        );
    }
}

export default Home;