import React from 'react';

import InfoPane from 'components/InfoPane';

import defaultImage from 'assets/images/eoh-sign.jpg';
import startupImage from 'assets/images/startup_showcase.jpg';
import alumniImage from 'assets/images/Alumni.jpg';

const EventSection = () => (
  <div className="content section">
    <h1>Events</h1>
    <InfoPane
      image={defaultImage}
      name="Illini Solar Car Unveiling"
      time="Friday, 11:30 am - 12:15 pm"
      location="ECEB 1002"
    >
      <p>
      Illini Solar Car is proud to unveil their all-new solar car at Engineering Open House 2020. Stop by during
      the event to see the next generation of the Illini Solar Car released, or see both the new and old cars on display during the remainder of 
      Engineering Open House! We'll be discussing how we designed and built our new car as well as the upcoming race this summer. This 
      event is best for high school students and adults interested in learning about solar cars and competitive road racing.
      </p>
    </InfoPane>
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
