import React from 'react';

import committee from './committee.js';
import './styles.scss';

const Member = (props) => {
    const { name, position, major, year, image } = props;
    return (
      <div className="member">
        <div className="content" style={{ backgroundImage: `url(${image})` }}>
          <div className="info">
            <h4>{ name }</h4>
            <h6>{ position }</h6>
            <p>{ major }</p>
            <p>{ year }</p>
          </div>
        </div>
      </div>
    );
  };
  
  const About = () => (
    <div className="about">
      <div className="container">
        <div className="committee">
          { committee.map(c => <Member {...c} key={c.name} />) }
        </div>
      </div>
    </div>
  );
  
  export default About;