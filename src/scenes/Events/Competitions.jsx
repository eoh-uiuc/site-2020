import React from 'react';

import InfoPane from 'components/InfoPane';

import defaultImage from 'assets/images/eoh-sign.jpg';
import mrdcImage from 'assets/images/MRDC.jpg';

const Competitions = () => (
  <div className="content section">
    <h1>Competitions</h1>
    <InfoPane
      image={mrdcImage}
      time="Friday, 9 am - 4 pm | Saturday, 9 am - 3 pm"
      name="MRDC"
      location="Kenney Gym Annex"
    >
      <p>
        The Midwest Robotics Design Competition (MRDC) is a 
        student-run annual robotics competition that lasts two days and features great
        ingenuity displayed by all participating teams. This competition started in 1987,
        making it one of the oldest continuing robotics competitions in America, predating
        both Battlebots and FIRST Robotics by several years.
      </p>
      <br />
      <p>
        The course involves the traversal of various obstacles to obtain game pieces.
        These game pieces will be rolled, thrown, or dropped into their respective goals,
        in order to score points. Each year there is a plethora of robot types, ranging
        from wheeled and manually-controlled robots, to autonomous robots and quadcopters.
        The arena is a raised platform with several different tiers. Obstacles can include
        moats, tunnels, and massive teeter totters. At the end of a competition there is an
        optional demolition round, in which robots can obliterate each other in a free for
        all frenzy to the last robot moving.
      </p>
      <br />
      <p>Find out more at <a href="http://mrdc.ec.illinois.edu/" target="_blank" rel="noopener noreferrer">mrdc.ec.illinois.edu</a>!</p>
    </InfoPane>
    <InfoPane
      image={defaultImage}
      time="Friday"
      name="HSDC"
      location="ECEB"
    >
      <p>
        The High School Design Competition is a competiton for High Schoolers to show off
        the Rube Goldberg contraptions they have been designing and building. The deadline to register is
        February 20, 2020. Find out more at <a href="http://rubegoldberg.com/">rubegoldberg.com</a>!
      </p>
    </InfoPane>
  </div>
);

export default Competitions;
