import React, { Component } from 'react';
import LoginAs from './LoginAs';
import Search from './Search';
import SearchGoogle from './GoogleSearch';
// import SearchGoogle from './AutoSearchGoogle';
import LocationSearchInput from './AutocomplGooglePlaces';
import SearchWithType from './FoursquareSearchWithType';
import SearchGoogleCoor from './SearchGoogleCoor';

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
        <h6>Søg på koordinater</h6>
        <SearchGoogleCoor />
        <LoginAs />

      </div>
    );
  }
}

export default Home;
