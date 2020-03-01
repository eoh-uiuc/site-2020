import React from 'react';

import InfoPane from 'components/InfoPane';
import generalImage from 'assets/images/GeneralTour.jpg';
import customImage from 'assets/images/CustomTour.jpg';

const Tours = () => (
  <div className="content section">
    <h1>Tours</h1>
    <InfoPane
      image={customImage}
      time="Friday &amp; Saturday, 9 am - 4 pm"
      name="Custom Tours"
    >
      <p>
        The custom tours are meant for groups that would like to explore a certain category
        of exhibits. We will work with your group to find the best tour route and times.
        The exhibits will be customized by age preference and subject matter. In order to
        participate in a custom tour please
        register <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbU8SClimdERh7zDwVBtiDaUNZbsdqpDMl1yrE_cOK5IXdlw/viewform?usp=sf_link">here</a>.
      </p>
    </InfoPane>
  </div>
);

export default Tours;
