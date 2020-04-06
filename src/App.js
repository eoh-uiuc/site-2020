import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from 'scenes/Home';
import Sponsor from 'scenes/Sponsor';
import Footer from 'components/Footer';
import About from 'scenes/About';
import Nav from 'components/Nav';
import Donors from 'scenes/Donor';
import EOHComesToYou from 'scenes/EOHComesToYou';
// import Transportation from 'scenes/Transportation';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/events" exact component={Events} /> */}
          <Route path="/sponsor" exact component={Sponsor} />
          {/* <Route path="/register" exact component={ExternalRoute(exhibitorRegistration)} /> */}
          {/* <Route path="/judging" exact component={ExternalRoute(judgingForm)} /> */}
          <Route path="/about" exact component={About} />
          <Route path="/donate" exact component={Donors} />
          <Route path="/eoh-comes-to-you" exact component={EOHComesToYou} />
          {/* <Route path="/volunteer" exact component={ExternalRoute(volunteerForm)} /> */}
          {/* <Route path="/transportation" exact component={Transportation} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
