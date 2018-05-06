import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes';
import UserSearchResult from './UserSearchResult';
import LoginAs from './LoginAs';
import Search from './Search';
import SearchManyWords from './SearchManyWords';
import SearchGoogle from './SearchGoogle';
// import RestaurantsSearchResult from './RestaurantsSearchResult'
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Search />
        <h6>Search eks. mcdonalds in copenhagen</h6>
        <SearchGoogle />

        <LoginAs />

      </div>
    );
  }
}

export default Home;
