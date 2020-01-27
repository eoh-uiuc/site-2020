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
                Check out our Events &amp; Tours page for even more events!
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
          {/* <div className="columns columns-3">
            <div>
              <h1>Custom Tours</h1>
              <p>
                You may register for custom tours at the following link!  Custom tours are
                a great way to organize your trip around certain categories to match your class’s interests.
                Custom tour sign-ups are due February 27th.
              </p>
              <a
                href="https://goo.gl/forms/HBfHXdsWfQ0Dwf3P2"
                className="button-gradient purple"
              >
                Custom Tour Sign-Up
              </a>
            </div>
            <div>
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
            </div>
          </div> */}
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