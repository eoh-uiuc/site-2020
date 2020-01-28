import React from 'react';

import InfoPane from 'components/InfoPane';

import defaultImage from 'assets/images/eoh-sign.jpg';
import startupImage from 'assets/images/startup_showcase.jpg';
import alumniImage from 'assets/images/Alumni.jpg';

const EventSection = () => (
  <div className="content section">
    <h1>Events</h1>
    <p>Register an exhibit <a href="https://docs.google.com/forms/d/e/1FAIpQLScG-vUzefQ7S-nSTGkylZyN9eRIqNHovTGSzrwB4K_-Yn5iag/viewform">here</a>!</p>
    <p>Sign up to be an exhibit judge <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKNS_bdedthZ5eyd9Qb751iFx94FTHt4J26y4rNWCn5UaXGQ/viewform">here</a>!</p>
    <InfoPane
      image={startupImage}
      time="Friday, 9 am - 4 pm | Saturday, 9 am - 3:30 pm"
      name="Startup Showcase"
    >
      <p>
        The Startup Showcase highlights Illinois innovation through booths hosted by startups founded
        by current students, alumni, and faculty. Stop by to discover new technologies and ideas, or
        sign up <a href="https://forms.gle/wcXKnBZJKvrXh76D7" target="_blank" rel="noopener noreferrer">here</a> to show off yours!
      </p>
    </InfoPane>
    <InfoPane
      image={defaultImage}
      name="Speaker Series"
    >
      <p>
      We have a series of exciting panels lined up for this year’s EOH! Our topics include a 
      Century of Innovation, what do you want to be when you grow up?, Student Leaders, and Startups. 
      Join us to hear about the experiences of students, alums, and professors in these areas. 
      If you are interested in being on one of our panels, please fill out <a href="https://docs.google.com/forms/u/2/d/e/1FAIpQLScnempdbGkpxP_56lnvc_xT2NW9BvFncssmR8L6sTj8LhjxWg/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">this form</a>.
      </p>
    </InfoPane>
    <InfoPane
      image={alumniImage}
      name="Alumni Welcome Center"
      time="Friday, 10 am - 3:30 pm | Saturday, 10 am - 3:30 pm"
      location="3rd Floor of Engineering Hall"
    >
      <p>
      The Grainger College of Engineering welcomes all alumni to the third floor of Engineering Hall 
      for snacks and a warm place to relax throughout the day.
      </p>
    </InfoPane>
    <InfoPane
      image={alumniImage}
      name="Plaque Dedication &amp; Alumni Reception"
      time="Saturday, 2 pm - 3:30 pm"
    >
      <p>
      To commemorate the past 100 years of EOH, we will be holding a plaque dedication ceremony to celebrate. 
      Come by to network with fellow alumni! Refreshments will be served.
      </p>
    </InfoPane>
  </div>
);

export default EventSection;
