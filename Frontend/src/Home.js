import React, { Component } from 'react';
import LoginAs from './LoginAs';
import SearchGoogle from './GoogleSearch';
import LocationSearchInput from './AutocomplGooglePlaces';
import SearchWithType from './FoursquareSearchWithType';
import SearchGoogleDropDown from './SearchGoogleDropDown';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h6>Search with type 4Square:  </h6>
        <SearchWithType />
        <hr id="line1" />
        <h6>Search eks. mcdonalds in copenhagen</h6>
        <SearchGoogle />
        <hr id="line2" />
        <h6>Autocomplete</h6>
        <LocationSearchInput />
        {/* <SearchGoogleDropDown/> */}
        <LoginAs />

      </div>
    );
  }
}

export default Home;
