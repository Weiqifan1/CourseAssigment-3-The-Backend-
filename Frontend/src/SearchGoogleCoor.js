// SearchGoogleCoor

import React from 'react';
import GoogleFacadeCoor from './SearchGoogleCoorFacade';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';


export default class SearchGoogleCoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '', location: '', restaurants: [], restaurantTable: '',
    };
  }
  onChange =async (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }


  onSubmit = async (evt) => {
    console.log(this.state.location);
    evt.preventDefault();
    await GoogleFacadeCoor.fetchRestaurantsByQuery(this.state.location);
    GoogleFacadeCoor.getRestaurantsByLocation();
    this.setState({ restaurants: GoogleFacadeCoor.getRestaurantsByLocation() });
    const restaurantArray = this.state.restaurants.map(restaurant =>
      (

        <div>

          <table className="table">
            <thead />
            <tbody>
              <tr key={restaurant.name}>
                <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM`} height="75" alt="noimage" /></td>
                <td><p>{restaurant.name}</p>{restaurant.vicinity}</td>
                <td>Rating: {restaurant.rating}</td>
                <td />

              </tr>

            </tbody>
          </table>
        </div>
      ),
    );

    this.setState({ restaurantTable: restaurantArray });
  };

  render() {
    return (
      <div>

        <form onSubmit={this.onSubmit} onChange={this.onChange} >
          <CheckboxForFoodTypes id="3" />
          <div id="search">
            <input placeholder="Location" id="location" />
            <button id="8">search</button>
          </div>

          <div className="container" />
        </form>


        <div>  {this.state.restaurantTable}   </div>

      </div>);
  }
}
