import React, { Component } from 'react';
import LoginAs from './LoginAs';
import Search from './Search';
import SearchGoogle from './GoogleSearch';
// import SearchGoogle from './AutoSearchGoogle';
import LocationSearchInput from './AutocomplGooglePlaces';
import SearchWithType from './FoursquareSearchWithType';

class Home extends Component {
  render() {
    console.log(`log${process.env.PUBLIC_URL}`);
    return (
      <div>
        <h2>Home</h2>
        {/* Search 4Square: <Search /> */}
       Search with type 4Square:  <SearchWithType />
        <h6>Search eks. mcdonalds in copenhagen</h6>
       Search many words google  <SearchGoogle />
        <LocationSearchInput />
        <LoginAs />

      </div>
    );
  }
}

export default Home;
