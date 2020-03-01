import React from 'react';

import ShuttleIcon from 'assets/icons/bus.svg';

import './styles.scss';

const Info = () => {
  return (
    <div className="info dark-page">
      <div className="container">
        {/* <div className="intro">
          <h3>Getting Around Campus</h3>
          <p className="intro-text">
            To make your visit to Engineering Open House as smooth as possible, we have reserved
            multiple parking lots on campus for visitors to utilize free of charge. We also offer
            a free bus shuttle with multiple stops near the action of EOH and the parking lots.
            The shuttle will run during all EOH exhibiting hours. See the map below for details.
            If you are a teacher arriving via school bus, please refer to the instructions on
            the "For Teachers" page.
          </p>
        </div> */}

        {/* <div className="map">
          <div className="legend">
            <div className="item">
              <span className="exhibit area" />
              <p>Exhibiting Areas</p>
            </div>
            <div className="item">
              <span className="parking area" />
              <p>Parking Lots</p>
            </div>
            <div className="item">
              <span className="shuttle-route" />
              <p>Shuttle Route</p>
            </div>
            <div className="item">
              <img className="shuttle-icon" src={ShuttleIcon} alt="" />
              <p>Shuttle Stops</p>
            </div>
          </div>
          <p>Shuttle moves in a clockwise direction</p>
        </div> */}

        <div className="transportation">
          <div className="header-wrapper">
            <h1>Frequently Asked Questions</h1>
          </div>

          <div className="qa-wrapper">
            <div className="qa">
              <h6>How can I commute around campus during EOH?</h6>
              <p>
                There is a shuttle service that will be provided on Friday and Saturday from 8am-5:30pm
                that runs from lot E-14 to North Quad/Engineering Campus.
              </p>
            </div>

            <div className="qa">
              <h6>Where are the shuttle stops located?</h6>

              <p>Shuttle stops are located:</p>
              <ul>
                <li>Near Talbot Laboratory on Wright St</li>
                <li>Near Lot B-22 on Clark St.</li>
                <li>Near Loomis Laboratory on Goodwin St.</li>
              </ul>
              <p>The stops will be indicated by signs and are located on the map.</p>
            </div>

            <div className="qa">
              <h6>Where can I park?</h6>

              <p>
                On Friday, March 8th, you can park for free at B-22 or E-14. You may also
                park on street parking assuming you pay for the meters. On Saturday, March 9th, you
                may park in any University lot for free as parking is not enforced on the weekends.
              </p>
              <br />
              <p>
                Note: The visitors guide says "you can park for free in any covered lot". This is
                incorrect and you will be ticketed if you don't pay the meter!
              </p>
            </div>

            <div className="qa">
              <h6>I am arriving in a school bus with my class, where should the bus drop off?</h6>

              <p>
                School buses should drop of students and teachers at the designated EOH stops on
                Goodwin Ave (marked by signs).  The bus drivers should then proceed to lot E-14 to park
                the bus and take the shuttle to Engineering Campus.
              </p>
            </div>

            <div className="qa">
              <h6>How far of a walk is it to EOH from the shuttle stops and lots?</h6>

              <p>
                All the lots mentioned above except for lot E-14 are within a block of Engineering
                Campus. Lot E-14 is about 1.5 miles from center of EOH action, which is why we provide
                the shuttle.
              </p>
            </div>

            <div className="qa">
              <h6>Do I need to pay for parking?</h6>

              <p>
                Parking is free in the lots mentioned above but you will have to pay for metered
                street parking.
              </p>
            </div>

            <div className="qa">
              <h6>Will there be any streets that are closed off or limited access?</h6>

              <p>
                Springfield Avenue will be closed from Wright St to Matthews Ave. Matthews Ave will
                also be closed from Green St to Springfield Ave. These street closures will be enforced
                from 7am to 5pm. Only corporate sponsors, judging, emergency vehicles, and food trucks
                may access these routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
