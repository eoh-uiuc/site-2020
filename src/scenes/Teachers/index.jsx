import React from 'react';

import TeachersImage from 'assets/images/Teachers.jpg';

import './styles.scss';

const Teachers = () => {
    return (
      <div className="teachers dark-page">
        <div className="container">
          <div className="columns">
            <div>
              <h1>College Steps Workshop</h1>
              <p>
                TEACHERS! COUNSELORS! Register for the Grainger College of Engineering College Steps Workshop on 
                Friday March 27th from 11:30am – 12:30pm.  This session will educate you about ways to expose your 
                students to STEM, our majors, STEM activity lesson plans, preparatory classes, the admissions process and more.  
                All secondary educators (grades 6 – 12th) are welcome to join.
              </p>
              <br />
              <p>
                Login at 11:30am on Friday, March 27th <a href="https://us.bbcollab.com/collab/ui/session/guest/f49279dc6f914f05a5b280a46f990cf7" style={{textDecoration: 'underline', fontWeight: "bold"}}>HERE</a>.
              </p>
              <a
                href="https://forms.illinois.edu/sec/5108032"
                className="button-gradient yellow"
              >
                Register
              </a>
            </div>
            <div className="image-wrapper">
              <img src={TeachersImage} alt="" />
            </div>
          </div>
          <br />
          <div className="final-flex-wrapper">
            <div className="final-wrapper">
              <p className="final">
                Thank you for supporting EOH!  We look forward to seeing you next year!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Teachers;