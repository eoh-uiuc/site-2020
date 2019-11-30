import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from 'scenes/Home';
import Footer from 'components/Footer';
import About from 'scenes/About';
import Events from 'scenes/Events';
import Nav from 'components/Nav';
import ExternalRoute from 'scenes/ExternalRoute';

import corporatePacket from 'assets/EOH-100-Corporate-Packet.pdf';
const exhibitorRegistration = 'https://docs.google.com/forms/d/e/1FAIpQLSe6lJrI3qEUPq25G9HpB_c-hWFiv44mh4nSXde7GbcVjKUC4w/viewform';
const judgingForm = 'https://docs.google.com/forms/d/e/1FAIpQLSfKNS_bdedthZ5eyd9Qb751iFx94FTHt4J26y4rNWCn5UaXGQ/viewform';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/sponsor" exact component={ExternalRoute(corporatePacket)} />
          <Route path="/register" exact component={ExternalRoute(exhibitorRegistration)} />
          <Route path="/judging" exact component={ExternalRoute(judgingForm)} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
