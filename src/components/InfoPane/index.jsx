import React, { Component } from 'react';

import arrow from 'assets/icons/left.svg';
import './styles.scss';

const BASE_HEIGHT = 150;
const EXPANDED_HEIGHT = 220;

class InfoPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.toggle = this.toggle.bind(this);
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    this.contentHeight = this.contentRef.current.clientHeight;
  }

  toggle(e) {
    if (e.target.tagName.toLowerCase() !== 'a') {
      this.setState(prevState => ({
        collapsed: !prevState.collapsed,
      }));
    }
  }

  render() {
    const { image, time, location, name, children } = this.props;
    const { collapsed } = this.state;

    const paneStyles = {
      height: collapsed ? BASE_HEIGHT : EXPANDED_HEIGHT + this.contentHeight + 40,
    };
    const paneImageStyles = {
      backgroundImage: `url(${image})`,
      height: collapsed ? BASE_HEIGHT : EXPANDED_HEIGHT,
    };
    if (!collapsed) { paneImageStyles.opacity = 1; }
    const contentStyles = {
      paddingTop: collapsed ? 13 : EXPANDED_HEIGHT + 20,
    }

    return (
      <div className='info-pane' style={paneStyles} onClick={this.toggle}>
        <div className="pane-img" style={paneImageStyles}/>

        <div ref={this.contentRef} className="content" style={contentStyles}>
          <div className="logistics">
            <p className="time">{time}</p>
            <p className="location">{location}</p>
          </div>

          <div className="split">
            <div className="name"><h3>{name}</h3></div>
            <div className={`description ${collapsed ? 'inactive' : 'active'}`}>{children}</div>
          </div>
        </div>

        <img className={`arrow ${collapsed ? 'down' : 'up'}`} src={arrow} alt="arrow" />
      </div>
    );
  }
}

export default InfoPane;
