import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

const Prompt = (props) => (
  <div>
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder="Enter Username..."
        type="text"/>
      <button
        style={{backgroundColor : '#f51aff', color: 'white'}}
        type="submit">
        Lookup
      </button>
    </form>
  </div>
)

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

const UserInfo = (props) => (
  <div>
    <h3>{`[${props.match.params.userID}]`}</h3>
  </div>
)

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      username: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value)
    this.setState({
      username: this.state.value,
      value: ''
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={() => (
              // this method needs tweaking for subsequent usernames
              this.state.username ? <Redirect to={`/usertown/${this.state.username}`} /> : <Home/>
          )}/>
        <Route path="/usertown/:userID" component={UserInfo}/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <div>
            <Prompt
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              value={this.state.value} />
        </div>

          <Route exact path="/topics" component={Topics}/>
          <Route path="/secret" component={Secret}/>
          <Route path={`/topics/:topicID`} component={Topic}/>
        </div>
      </Router>
    )
  }
}

export default App;
