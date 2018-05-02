import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
//import RestaurantsSearchResult from './RestaurantsSearchResult'
import fourfacade from './FoursquareFacade'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { location: "", restaurants: "", boo:false }
    }
  

  
    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ [evt.target.id]: evt.target.value })
       
    }

    onSearch = (evt) => {
        evt.preventDefault(); 
       
        fourfacade.fetchData(this.state.location)
      
       
       
    }
    render() {
        return (
            <div>

                <form onSubmit={this.onSearch} onChange={this.onChange} >
                    <div id="search">
                        <input placeholder="Location" id="location" />
                        <button id="8">search</button>
                    </div>

                    <div className="container">
                        <CheckboxForFoodTypes id="3" />
       
                        
                    </div>
                </form>
{fourfacade.renderRestaurants()}

            </div>
        )
    }
}

export default Search;