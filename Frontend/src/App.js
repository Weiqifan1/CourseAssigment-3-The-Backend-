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

const dummydata = [
  {
  id: 1,
  name: "Dominos",
  type :  "fast food",
  price_range: "cheap",
  number_of_reviews : "00",
  url : "dominos.dk"
},
{
  id: 2,
  name : "McDonalds",
  type :  "fast food, family",
  price_range : "cheap",
  number_of_reviews : "00",
  url : "www.mcdonalds.dk"
},
{
  id: 3,
  name : "Burger King",
  type :  "fast food, family",
  price_range : "cheap",
  number_of_reviews : "00",
  url: "www.burgerking.dk"
},
{
  id: 4,
  name : "Cafe Woody",
  type :  "family, local",
  price_range : "expensive",
  number_of_reviews : "00",
  url : "www.cafewoody.dk"
},
{
  id: 5,
  name : "Sticks'nSushi",
  type :  "family, local, asian",
  price_range : "expensive",
  number_of_reviews : "00",
  url : "www.sushi.dk"
},
{
  id: 6,
  name : "Big Mamma's Pizzaria",
  type :  "fast food, family, local, pizzaria",
  price_range : "average",
  number_of_reviews : "00",
  url : "www.bigmamma-pizzahouse.dk"
},
{
  id: 7,
  name : "Rådvad Kro",
  type :  "luxus, family",
  price_range : "expensive",
  number_of_reviews : "00",
  url : "www.raadvadkro.dk"
},
{
  id: 8,
  name : "Post-Pop Steakhouse",
  type :  "local, luxus, steakhouse",
  price_range : "expensive",
 number_of_reviews : "00",
  url : "www.postpub.dk/"
},
{
  id: 9,
 name : "Noma",
  type :  "luxus, gourmet",
  price_range : "very expensive",
  number_of_reviews : "00",
  url : "www.noma.dk"
},
]

 function searchingFor(term){
 return function(x){
  return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
 }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }

    this.state = {
      dummydata: dummydata ,
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({ term: event.target.value});
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

    const {term, dummydata} = this.state;

    return (
      
      <div>

      <div>
        <form>
          <input type="text" onChange={this.searchHandler}
          value={term} />
          
          </form>
        {
          dummydata.filter(searchingFor(term)).map( cusines =>
          
          <div key={cusines.id}> 
         <h2> {cusines.name} </h2>
         <h2> {cusines.type} </h2>
         <h2> {cusines.url} </h2>
          </div>
        )
        }
         </div>
    );
      }


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
