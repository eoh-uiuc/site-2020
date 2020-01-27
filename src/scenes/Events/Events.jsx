import React from 'react';

import InfoPane from 'components/InfoPane';

import startupImage from 'assets/images/startup_showcase.jpg';

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
  </div>
);

export default EventSection;
