import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';



const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';


class SearchGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '', restaurants: [], restaurantTable: '', errormessage: '',
    };

  }


  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

    onSubmit = (evt) => {
      evt.preventDefault();
      fetch(URL + this.state.location)
        .then((res) => {
          if (!res.ok) {
            throw Error(`error in results:  ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          //---------------------------------------------------------

          const restaurantArray = data.results.map(restaurant =>

            (
              <div>

                <table className="table">
                  <thead />
                  <tbody>
                    <tr key={restaurant.id}>
                      {/* <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM`} height="75" alt="noimage" /></td> */}
                      {/* <td><img src={`https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/image/${restaurant.photos[0].photo_reference}`} height="75" alt="noimage" /></td> */}
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
        });
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


        </div>
      );
    }

}

export default SearchGoogle;

