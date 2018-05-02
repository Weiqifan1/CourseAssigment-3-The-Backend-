import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
//import RestaurantsSearchResult from './RestaurantsSearchResult'
import fourfacade from './FoursquareFacade'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { location: "", restaurants: ""}
    }
  

  
    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ [evt.target.id]: evt.target.value })
       
    }

    onSearch = (evt) => {
        evt.preventDefault(); 
       
     fourfacade.fetchData(this.state.location)
    
        this.setState({restaurants: fourfacade.fetchData(this.state.location)})
        console.log("i onSearch"+this.state.restaurants)
       
       
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


            </div>
        )
    }
}

export default Search;
