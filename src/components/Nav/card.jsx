import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.showMenu} className="dropdown-button">
                    Support Us
                </button>

                {this.state.showMenu ? 
                    <div className="dropdown-menu">
                        <Link onClick={this.toggleMenu} to="/sponsor">Sponsors</Link>
                        <Link onClick={this.toggleMenu} to="/donor">Donors</Link>
                    </div>
                    : null
                }
                
            </div>
        );
    }
}

export default Card;