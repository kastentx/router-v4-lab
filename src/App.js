import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicID}</h3>
  </div>
)

const Topics = ({match}) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/intro`}>
          intro
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/pageOne`}>
          page one
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/moreInfo`}>
          more info
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/aboutUs`}>
          about us
        </Link>
      </li>
    </ul>


    <Route path={`${match.url}/:topicID`} component={Topic}/>
    <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
  </div>
)

const Home = () => (
  <div>
    <h3>Hom<Link to="/secret">e</Link></h3>
  </div>
)

const Secret = () => (
  <div>
    <h3>Secret Page</h3>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/secret" component={Secret}/>
    </div>
  </Router>
)

export default App;
