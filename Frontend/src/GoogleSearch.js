import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import SearchFacade from './SearchFacade';

class SearchGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      errormessage: '',
      goggleSearch: [],
    };

  }


  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }


  onSubmit = (evt) => {
    evt.preventDefault();

    this.componentDidMount();
  }

  async componentDidMount() {
    const goggleSearchResult = await SearchFacade.fetchGogglePlaces(this.state.location);

    this.setState({ goggleSearch: goggleSearchResult });
  }

  render() {

    //Table for the restaurant search.
    const tableToGoggleSearch = this.state.goggleSearch.results && this.state.goggleSearch.results.map((restaurant) => (
      <table className="table">
        <thead><th>Restaurant</th><th>Rating</th></thead>
        <tbody>
          <tr key={restaurant.id}>
            <td><p>{restaurant.name}</p>{restaurant.formatted_address}</td>
            <td>Rating: {restaurant.rating}</td>
          </tr>
        </tbody>
      </table>
    ))

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

        <div>
          {tableToGoggleSearch}
        </div>

      </div>
    );
  }

}

export default SearchGoogle;
