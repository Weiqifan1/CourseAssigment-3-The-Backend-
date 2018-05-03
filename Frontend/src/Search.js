import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'
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

    onSearch = async(evt) => {
        evt.preventDefault(); 
       
        function doesStuffToKaninAndRendersIt(kanin){
            //stuff
            console.log(kanin);
        }

   var kanin =  await fourfacade.fetchData(this.state.location, doesStuffToKaninAndRendersIt)
    
        //this.setState({restaurants:kanin})
        //console.log("i onSearch"+this.state.restaurants)
       
       
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
                
                        <div>
                            <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right"></img>
                            <table className="table">
                                <thead>
                                    <tr><th></th><th>Logo</th><th>Restaurant</th><th>Logo</th><th>Food Type</th><th>Home Page</th><th>Price Range</th><th>Reviews</th></tr>
                                </thead>
                                <tbody>
                               
                                </tbody>
                            </table>
                        </div>
                    
                

        {!this.state.location==="" ? (<fourfacade id="5u" onSearch={this.onSearch} />) :

(<div>
{this.state.restaurants}
</div>)}

            </div>
        )
    }
}

export default Search;
