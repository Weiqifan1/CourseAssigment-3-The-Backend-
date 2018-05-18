import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import SearchFacade from './SearchFacade';

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '', location: '', prediction: '', goggleSearch: [],
    };
  }

  handleChange = (address) => {
    this.setState({ address });
    console.log(this.state.address);
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => (this.setState({ location: latLng })))
      .catch(error => console.error('Error', error));
  }

  onSubmit = (evt) => {
    evt.preventDefault();

    this.componentDidMount();
  }

  handleChange = (address) => {
    this.setState({ address });
    console.log(this.state.address);
  }

  async componentDidMount() {
    const goggleSearchResult = await SearchFacade.fetchFromAutoComplete(this.state.location.lat, this.state.location.lng);

    this.setState({ goggleSearch: goggleSearchResult });
  }

  render() {

    //Table for the restaurant search.
    console.log(this.state.goggleSearch);
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
        <form onSubmit={this.onSubmit} >
          <PlacesAutocomplete
            value={this.state.address}
            value2={this.state.type}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
                <CheckboxForFoodTypes id="3" />
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { className, style })}>
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </PlacesAutocomplete>
          <button id="8">search</button>
        </form>

        <div>
          {tableToGoggleSearch}
        </div>

      </div>

    );
  }
}
