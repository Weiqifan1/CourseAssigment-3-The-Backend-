import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import UserSearchResult from './UserSearchResult';
import Logo_black from './images/Logo_black.jpg';
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png';
// import RestaurantsSearchResult from './RestaurantsSearchResult'
import fourfacade from './FoursquareFacade';

const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/';
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '', type: 'notype', restaurants: '', poweredlogo: '',
    };
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
  fetchData = () => {
    console.log(this.state.type);
    const parent = this; // her tager vi det ydre scopes this og sætter som variabel dermed kan ændringer føres ud af den indre funktion


    if (this.state.type === 'notype') {
      var URLchange = `${URL}name/${this.state.location}`;
      fetch(URLchange).then(response => response.json())
        .then((data) => {
          const restaurantArray = data.response.groups[0].items.map(restaurant =>
            // console.log(restaurant.venue.name)

            (
              <div>

                <table className="table">
                  <thead>
                    <tr><th /></tr>
                  </thead>
                  <tbody>
                    <tr key={restaurant.venue.name}>
                      <td><img src={Logo_black} alt="Logo" width="20" /></td>
                      <td><img src={`${restaurant.venue.categories[0].icon.prefix}100*100${restaurant.venue.categories[0].icon.suffix}`} alt="picture" /></td>
                      <td><p>{restaurant.venue.name}</p>{restaurant.venue.location.address}</td>
                      <td><p>{restaurant.venue.categories[0].name}</p>{restaurant.reasons.items[0].summary}</td>

                    </tr>
                  </tbody>

                </table>
              </div>
            ),
          );

          parent.setState({ restaurants: restaurantArray, poweredlogo: <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right" /> });
        });
    } else {
      var URLchange = `${URL}locationtype/${this.state.location}&categoryId=4d4b7105d754a06374d81259&query=${this.state.type}`;
      console.log(URLchange);
      fetch(URLchange).then(response => response.json())
        .then((data) => {
          const restaurantArray = data.response.venues.map(restaurant =>
            // console.log(restaurant.venue.name)

            (

              <div>

                <table className="table">
                  <thead>
                    <tr><th /></tr>
                  </thead>
                  <tbody>
                    <tr key={restaurant.name}>
                      <td><img src={Logo_black} alt="Logo" width="20" /></td>
                      <td><img src={`${restaurant.categories[0].icon.prefix  }width${36  }${restaurant.categories[0].icon.suffix}`} alt="picture" /></td>
                      <td><p>{restaurant.name}</p>{restaurant.location.address}</td>
                      <td><p>{restaurant.categories[0].name}</p></td>

                    </tr>
                  </tbody>

                </table>
              </div>
            ),
          );

          parent.setState({ restaurants: restaurantArray, poweredlogo: <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right" /> });
        });
    }
  };


  someAction(event) {
    this.setState({ restaurants: 'recent', type: 'notype' });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.fetchData} onChange={this.onChange} >
          <div id="search">
            <input placeholder="Location" id="location" />
            <button id="8">search</button>
          </div>

          <div className="container">
            <p />
            <CheckboxForFoodTypes id="3" />
          </div>
        </form>

        <div>  {this.state.poweredlogo}
          {this.state.restaurants}
        </div>


      </div>
    );
  }
}

export default Search;

