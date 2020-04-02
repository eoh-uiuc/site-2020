import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './card.jsx';

import Logo from 'assets/logo.png';
import menuIcon from 'assets/icons/menu_icon.svg';
import close from 'assets/icons/left.svg';
import './styles.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      top: true,
      open: false,
      dropdownOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { open } = this.state;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && open) {
      this.setState({
        open: false,
      });
    }
  }

  handleScroll() {
    if (window.scrollY === 0) {
      this.setState({ top: true });
    } else {
      this.setState({ top: false });
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    const { open, top } = this.state;

    return (
      <nav id="site-nav" className={top ? 'clear' : 'filled'}>
        <Link className="logo" to="/">
          <img src={Logo} alt="EOH Logo" />
        </Link>

        <div className="spacing" />

        <img
          className="menu-icon"
          src={menuIcon}
          alt="Menu Button"
          onClick={this.toggleMenu}
        />

        <nav ref={this.setWrapperRef} className={`nav-links ${open ? 'open' : 'closed'}`}>
          <img className="close" src={close} alt="close pane" onClick={this.toggleMenu} />
          <img src={Logo} alt="EOH Logo" />
          {/* <Link onClick={this.toggleMenu} to="/transportation">Transportation</Link>
          <Link onClick={this.toggleMenu} to="/teachers">For Teachers</Link>
          <a href="https://www.volunteer.eohillinois.org">Volunteer</a> */}
          <Link onClick={this.toggleMenu} to="/">Home</Link>
          {/* <Link onClick={this.toggleMenu} to="/events">Tours &amp; Events</Link> */}
          {/* <Link onClick={this.toggleMenu} to="/transportation">Transportation</Link> */}
          <Link onClick={this.toggleMenu} to="/eoh-comes-to-you">EOH Comes to You</Link>
          <Link onClick={this.toggleMenu} to="/teachers">For Teachers</Link>
          {/* <a href="https://www.signupgenius.com/go/70a0545a8ad2fa7fa7-engineering" target="_blank" rel="noopener noreferrer" >Volunteer</a> */}
          <Dropdown />
          <Link onClick={this.toggleMenu} to="/about">About Us</Link>
        </nav>
      </nav>
    );
  }
}

export default Nav;