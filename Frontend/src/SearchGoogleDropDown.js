import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import SearchFacade from './SearchFacade';
import FoursquareFacade from './FoursquareFacade';


class SearchGoogleDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = { location: '', restaurants: [], restaurantTable: '' };
    this.state = { locationAndType: '', restaurants: [], restaurantTable: '' };
    this.someAction = this.someAction.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }


  onSubmit = async (evt) => {
    evt.preventDefault();
    await SearchFacade.fetchGogglePlaces(this.state.location);
  
    this.setState({ restaurants:  SearchFacade.fetchGogglePlaces(this.state.location) });


    const restaurantArray = this.state.restaurants.map(restaurant =>
      (

        <div>

          <table className="table">
            <thead />
            <tbody>
              <tr key={restaurant.id}>
                <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM`} height="75" alt="noimage" /></td>
                <td><p>{restaurant.name}</p>{restaurant.formatted_address}</td>
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

  onSubmitNd = async (evtNd) => {
    evtNd.preventDefault();
    await FoursquareFacade.fetchRestaurantsByLocationandType(this.state.locationAndType);
    FoursquareFacade.getRestaurantsByLocationandType();
    this.setState({ restaurants: FoursquareFacade.getRestaurantsByLocationandType });


    const restaurantArray = this.state.restaurants.map(restaurant =>
      (

        <div>

          <table className="table">
            <thead />
            <tbody>
              <tr key={restaurant.id}>
                <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM`} height="75" alt="noimage" /></td>
                <td><p>{restaurant.name}</p>{restaurant.formatted_address}</td>
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

  someAction(event) {
    this.setState({ restaurants: ['fem'] });
  }

  handleChange(eventNd) {
    this.setState({ value: eventNd.target.value });
  }


  // Her skal laves de der if statements så dropdwon menuen kommer til at virke:
  handleSubmit(eventNd) {
    alert(`You are getting Cuisines by: ${this.state.value}`);
    eventNd.preventDefault();
    if (this.setState = 'location') {
      this.onSubmit;
    }
    if (this.setState = 'locationAndType') {
      this.onSubmitNd;
    }
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
         Choose how to find a Cuisine
            <select value={this.state.value} onChange={this.handleChange} >
              <option value="locationAndType">Location and Type</option>
              <option value="location">Location just</option>
            </select>
          </label>
          <input placeholder="Location" id="location" />
          <button className="8">search</button>
        </form>

        <form onSubmit={this.onSubmit} onChange={this.onChange} >
          <div id="search">
            <input placeholder="Location" id="location" />
            <button className="8">search</button>
          </div>

          <div className="container">
            <CheckboxForFoodTypes id="3" />


          </div>
        </form>

        <div>  {this.state.restaurantTable}   </div>


      </div>
    );
  }
}

export default SearchGoogleDropDown;
