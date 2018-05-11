import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import GoogleFacade from './AutoGoogleFacade';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '', location: '', restaurants: [], restaurantTable: '', prediction: '',
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
  onSubmit = async (evt) => {
    console.log(this.state.location);
    evt.preventDefault();
    await GoogleFacade.fetchRestaurantsByQuery(this.state.location);
    GoogleFacade.getRestaurantsByLocation();
    this.setState({ restaurants: GoogleFacade.getRestaurantsByLocation() });
  }
  render() {
    return (
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
    );
  }
}
