import React, { Component } from "react";
import facade from "./ApiFacade";
import { HashRouter, Route, Switch } from 'react-router-dom'; //, Redirect (For the log out method)
import './App.css';
import LogIn from './Login';
import Home from './Home';
import Navigation from './Navigation';
import Users from './Users';
import Statistics from './Statisitics'
import UserProfile from './UserProfile';
import RegisterUser from './RegisterUser';
import UserHistory from './UserHistory';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }
  }

  logout = () => {
    //TODO: Change url and go to home. The redirect does not work.
    //<Redirect to="/" component={Home} />
    this.setState({ loggedIn: false });
    facade.logout();
  }

  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }

  render() {

    return (
      <div>

        <HashRouter>
          <div>

            <Header id="1" />

            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user_history" component={UserHistory} />
              <Route path="/Statistics" component={Statistics} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/users" component={Users} />
              <Route path="/register" component={RegisterUser} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </HashRouter>

        {!this.state.loggedIn ? (<LogIn id="2" login={this.login} />) :

          (<div>
            <button onClick={this.logout}>Logout</button>
          </div>)}

        <Footer id="6"></Footer>

      </div>
    );
  }
}

export default App;

const NoMatch = () => (
  <div>
    <h1>404 Wrong url!</h1>
  </div>
);
