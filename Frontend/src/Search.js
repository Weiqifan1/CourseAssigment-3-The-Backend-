import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
//import RestaurantsSearchResult from './RestaurantsSearchResult'
import FoursquareFacade from './FoursquareFacade';
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { lokation: "" }
    }


    onSearch = (evt) => {
        evt.preventDefault(); 
        var chrtest = FoursquareFacade(this.state.lokation);
        console.log("onSearch start - " +chrtest);
        console.log("er vi her"+chrtest)
        chrtest.map((restaurant) => {

            return (

                <tr key={restaurant.id}>
                    <td>{restaurant.id}</td>
                    {/* <td><img src={restaurant.imgurl} alt="thumb" width="50"></img></td> */}
                    <td>{restaurant.name}</td><td><img src={Logo_black} alt="Logo" width="20"></img></td>
                    {/* <td>{restaurant.type}{restaurant.pricerange}</td>
                        <td>{restaurant.url}</td><td>{restaurant.price_range}</td>
                        <td>Reviews {restaurant.number_of_reviews}</td> */}
                </tr>
            )
        })

        //console.log("hello 20180502-12.52 " + BenTest);
        
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

                    
                </div>
            </form>

            <div>
                <table className="table">

                    <thead>
                        <tr><th></th><th>Logo</th><th>Restaurant</th><th>Logo</th><th>Food Type</th><th>Home Page</th><th>Price Range</th><th>Reviews</th></tr>
                    </thead>

                    <tbody>
                        {this.onSearch}
                    </tbody>

                </table>
            </div>

        </div>
    )
}
}



export default Search;
