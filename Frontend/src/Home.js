import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
import LoginAs from './LoginAs';
import Search from './Search';
import SearchManyWords from './SearchManyWords';
// import RestaurantsSearchResult from './RestaurantsSearchResult'
class Home extends Component {
  

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Search />
                <p3>Search eks. mac donalds in copenhagen</p3>
                <SearchManyWords />
               
                <LoginAs />

            </div>
        )
    }
}

export default Home;
