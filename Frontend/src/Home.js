import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
import LoginAs from './LoginAs';

class Home extends Component {
    
    render() {
        return (
            <div>
                <h2>Home</h2>

                <div id="search">
                    <input placeholder="Location" id="4" />
                    <button id="8">search</button>
                </div>

                <div className="container">
                    <CheckboxForFoodTypes id="3" />
                    <UserSearchResult id="5b" />
                </div>

               <LoginAs /> 

            </div>
        )
    }
}

export default Home;
