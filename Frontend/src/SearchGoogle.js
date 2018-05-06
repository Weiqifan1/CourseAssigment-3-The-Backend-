import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import GoogleFacade from './GoogleFacade';


class SearchGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = { location: '', restaurants: [], restaurantTable: '' };
    this.someAction = this.someAction.bind(this);
  }


  onChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  }

  someAction(event) {
    this.setState({ restaurants: ['fem'] });
  }

  onSubmit = async (evt) => {
    evt.preventDefault();
    const parent = this;
    await GoogleFacade.fetchRestaurantsByQuery(this.state.location);
    GoogleFacade.getRestaurantsByLocation();
    this.setState({ restaurants: GoogleFacade.getRestaurantsByLocation() });
    // console.log(this.state.restaurants);


    const restaurantArray = this.state.restaurants.map(restaurant =>
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

    this.setState({ restaurantTable: restaurantArray });
  };


  render() {
    console.log(this.state.restaurantTable);
    return (
      <div>

        <form onSubmit={this.onSubmit} onChange={this.onChange} >
          <div id="search">
            <input placeholder="Location" id="location" />
            <button id="8">search</button>
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

