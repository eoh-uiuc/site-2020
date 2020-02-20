import React from 'react';

import TeachersImage from 'assets/images/Teachers.jpg';

import './styles.scss';

const Teachers = () => {
    return (
      <div className="teachers dark-page">
        <div className="container">
          <div className="columns">
            <div>
              <h1>Teachers</h1>
              <p>
                All teachers are welcome to bring their classes on field trips to Engineering Open House!
                EOH is a great way to inspire your students with hands-on, fun, and exciting projects
                made by engineering students at the University of Illinois at Urbana-Champaign.
                Check out our Tours &amp; Events page for information on student competitions and even more events!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJ5QLnc_1xhmwimAQEnLNTjVxTAANIcW2OH0tbSL4u8ywOqA/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="button-gradient yellow"
              >
                Register Your Trip
              </a>
            </div>
            <div className="image-wrapper">
              <img src={TeachersImage} alt="" />
            </div>
          </div>
          <div className="columns columns-2">
            <div>
              <h1>Teacher Workshop</h1>
              <p>
                TEACHERS! COUNSELORS! Register for the Grainger College of Engineering College Steps Workshop on 
                Friday March 27th from 11:30am – 1:00pm.  This session will educate you about ways to expose your 
                students to STEM, our majors, STEM activity lesson plans, preparatory classes, the admissions process and more.  
                Plan to have chaperones for your students.  Lunch provided.  All secondary educators (grades 6 – 12th) are welcome to join.
              </p>
              <a
                href="https://forms.illinois.edu/sec/5108032"
                className="button-gradient yellow"
              >
                Workshop Sign-Up
              </a>
            </div>
            {/* <div>
              <h1>Discover EOH</h1>
              <p>
                If you would like a more interactive experience with your class, this year’s Discover EOH
                challenge is a BINGO card!  The card can be printed ahead of time or picked up at any of
                the EOH information booths.  Prizes for completed cards can also be picked up at the
                information booths.
              </p>
              <a href="/discover_eoh.pdf" className="button-gradient purple"><em>Discover</em> EOH PDF</a>
            </div>
            <div>
              <h1>Transportation</h1>
              <p>
                We ask that you please have your bus driver drop off riders at our designated bus stop
                then proceed to the EOH parking lot and take the EOH shuttle to join
                the group. This allows for a smoother drop-off of students close to the event and a
                prevention of our shuttles being too crowded, potentially separating groups in the process.
              </p>
              <a href="/ShuttleMap.pdf" className="button-gradient purple">Shuttle Map</a>
              <a href="/School-Bus-Instructions.pdf" className="button-gradient purple">School Bus Instructions</a>
            </div> */}
          </div>
          <br />
          <div className="final-flex-wrapper">
            <div className="final-wrapper">
              <p className="final">
                Thank you for your support of EOH 2020!  We look forward to seeing you soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Teachers;