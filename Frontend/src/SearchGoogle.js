import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import GoogleFacade from './GoogleFacade';
import FoursquareFacade from './FoursquareFacade';


class SearchGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = { location: '', restaurants: [], restaurantTable: '' };
  }


  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }


  onSubmit = async (evt) => {
    evt.preventDefault();
    await GoogleFacade.fetchRestaurantsByQuery(this.state.location);
    GoogleFacade.getRestaurantsByLocation();
    this.setState({ restaurants: GoogleFacade.getRestaurantsByLocation() });


    const restaurantArray = this.state.restaurants.map(restaurant =>
      (

        <div>

          <table className="table">
            <thead />
            <tbody>
              <tr key={restaurant.id}>
                {/* <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM`} height="75" alt="noimage" /></td> */}
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


  render() {
    return (
      <div>


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

export default SearchGoogle;

