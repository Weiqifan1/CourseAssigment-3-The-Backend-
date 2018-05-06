import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import UserSearchResult from './UserSearchResult';
import Logo_black from './images/Logo_black.jpg';
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png';
// import RestaurantsSearchResult from './RestaurantsSearchResult'
import fourfacade from './FoursquareFacade';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { location: '', names: '' };
    this.someAction = this.someAction.bind(this);
  }

  onSearch = async (evt) => {
    //     evt.preventDefault();
    //   var  kanin =  await this.fetchData(this.state.location, doesStuffToKaninAndRendersIt)
  }


  onChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  }

  someAction(event) {
    this.setState({ names: 'recent' });
  }

    fetchData = () => {
      const parent = this;
      const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';

      fetch(URL + this.state.location).then(response =>
      // console.log(URL + this.state.location);
        response.json(),
      )
        .then((data) => {
          const restaurantArray = data.results.map(restaurant =>

            (

              <div>

                <table className="table">
                  <thead>
                    {/* <tr><th></th><th>Restaurant</th><th>Rating</th><th>Address</th><th>Home Page</th><th>Price Range</th><th>Reviews</th></tr> */}
                  </thead>
                  <tbody>
                    <tr key={restaurant.id}>
                      <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=5000&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyBbdu5tPAp2P0EGbFgdGfzk_Vz7GUbsNO0`} height="75" alt="noimage" /></td>
                      <td><p>{restaurant.name}</p>{restaurant.formatted_address}</td>
                      <td>Rating{restaurant.rating}</td>
                      <td />

                    </tr>

                  </tbody>
                </table>
              </div>
            ),
          );

          parent.setState({ names: restaurantArray });
        });
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

          <div>  {this.state.names}   </div>


        </div>
      );
    }
}

export default Search;

