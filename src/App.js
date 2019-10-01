import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from 'scenes/Home';
import Footer from 'components/Footer';
import About from 'scenes/About';
import Nav from 'components/Nav';
import ExternalRoute from 'scenes/ExternalRoute';

import corporatePacket from 'assets/EOH-100-Corporate-Packet.pdf';

function App() {
  return (
    <Router>
      <div classname="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sponsor" exact component={ExternalRoute(corporatePacket)} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
