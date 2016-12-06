import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './Home';
import FrontPage from './FrontPage';
import Contact from './Contact';
import Work from './Work';

class Routers extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={FrontPage} />
          <Route path="work" component={Work} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}

// /  Home
// /about  home+about
// /work  home+work


// /about = Home + About
// /about/work = Home + About +Work
// /about/work/contact = Home + About +Work +Contact

export default Routers;
