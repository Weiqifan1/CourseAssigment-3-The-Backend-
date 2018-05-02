import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
import RestaurantsSearchResult from './RestaurantsSearchResult'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { lokation: "" }
    }
  

    onSearch = (evt) => {
        evt.preventDefault(); console.log(this.state.lokation)
       
       
    }
    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ [evt.target.id]: evt.target.value })
       
    }


    render() {
        return (
            <div>

                <form onSubmit={this.onSearch} onChange={this.onChange} >
                    <div id="search">
                        <input placeholder="Location" id="lokation" />
                        <button id="8">search</button>
                    </div>

                    <div className="container">
                        <CheckboxForFoodTypes id="3" />
                    
                        <RestaurantsSearchResult id="5u" /> 
                    </div>
                </form>


            </div>
        )
    }
}

export default Search;
