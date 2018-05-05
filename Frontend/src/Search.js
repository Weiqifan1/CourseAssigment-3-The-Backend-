import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import UserSearchResult from './UserSearchResult';
import Logo_black from './images/Logo_black.jpg';
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png';
// import RestaurantsSearchResult from './RestaurantsSearchResult'
import FoursquareFacade from './FoursquareFacade';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      restaurants: '',
    };
  }


    onSubmit = async (evt) => {
      evt.preventDefault();
      await FoursquareFacade.fetchRestaurantsByLocation(this.state.location);
      FoursquareFacade.getRestaurantsByLocation();
      this.setState({ restaurants: FoursquareFacade.getRestaurantsByLocation() });
      // console.log(this.state.restaurants);
    }

    onChange = (evt) => {
      console.log(evt.target.value);
      this.setState({ [evt.target.id]: evt.target.value });
    }

    render() {
      const data = this.state.restaurants;
      console.log(data);

      /* const restaurantTable = data.response.groups[0].items.map(restaurant =>
      // console.log(restaurant.venue.name)

        (

          <div>

            <table className="table">
              <thead>
                <tr><th /><th>Logo</th><th>Restaurant</th><th>Type</th><th>Address</th><th>Popularity</th></tr>
              </thead>
              <tbody>
                <tr key={restaurant.venue.id}>
                  <td><img src={Logo_black} alt="Logo" width="20" /></td>
                  <td><img src={restaurant.venue.categories[0].icon.prefix + restaurant.venue.categories[0].icon.suffix} alt="Logo" width="20" /></td>
                  <td>{restaurant.venue.name}</td>
                  <td>{restaurant.venue.categories[0].name}</td>
                  <td>{restaurant.venue.location.address}</td>
                  <td>{restaurant.reasons.items[0].summary}</td>

                </tr>

              </tbody>
            </table>
          </div>
        ),
      ); */

      return (
        <div>

          <form onSubmit={this.onSubmit} onChange={this.onChange} >
            <div id="search">
              <input placeholder="Location" id="location" />
              <button id="8">search</button>
            </div>

            <div className="container">
              <CheckboxForFoodTypes id="3" />
              {/* <RestaurantsSearchResult id="5u" /> */}

            </div>

            <div>
              {/* {restaurantTable} */}

            </div>

            <div>

              <p>{this.state.location}</p>
              <p>{this.state.arr}</p>
            </div>
          </form>


        </div>
      );
    }
}

export default Search;

// <RestaurantsSearchResult id="5u"/>
// <p>{this.state.userlocation}</p>
// brugerlokation={this.state.lokation}


// Fredags nødløsningen
/* class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { location: '', names: '', poweredlogo: '' };
    this.someAction = this.someAction.bind(this);
  }


  onChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  }

  onSearch = async (evt) => {
  //     evt.preventDefault();
  //   var  kanin =  await this.fetchData(this.state.location, doesStuffToKaninAndRendersIt)
  }

  someAction(event) {
    this.setState({ names: 'recent' });
  }


    render() {
      console.log(this.state.names);
      return (
        <div>

          <form onSubmit={this.fetchData} onChange={this.onChange} >
            <div id="search">
              <input placeholder="Location" id="location" />
              <button id="8">search</button>
            </div>

            <div className="container">
              <CheckboxForFoodTypes id="3" />


            </div>
          </form>

          <div>  {this.state.poweredlogo}{this.state.names}   </div>


        </div>
      );
    }
}

export default Search;

fetchData = () => {
      const parent = this;
      const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/';
      fetch(`${URL}name/${this.state.location}`).then(response => response.json())
        .then((data) => {
          const restaurantArray = data.response.groups[0].items.map(restaurant =>
          // console.log(restaurant.venue.name)

            (

              <div>

                <table className="table">
                  <thead>
                    <tr><th /><th>Logo</th><th>Restaurant</th><th>Type</th><th>Address</th><th>Popularity</th></tr>
                  </thead>
                  <tbody>
                    <tr key={restaurant.venue.id}>
                      <td><img src={Logo_black} alt="Logo" width="20" /></td>
                      <td><img src={restaurant.venue.categories[0].icon.prefix + restaurant.venue.categories[0].icon.suffix} alt="Logo" width="20" /></td>
                      <td>{restaurant.venue.name}</td>
                      <td>{restaurant.venue.categories[0].name}</td>
                      <td>{restaurant.venue.location.address}</td>
                      <td>{restaurant.reasons.items[0].summary}</td>

                    </tr>

                  </tbody>
                </table>
              </div>
            ),
          );

          parent.setState({ names: restaurantArray, poweredlogo: <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right" /> });
        });
    } */

