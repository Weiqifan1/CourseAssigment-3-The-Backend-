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
      
        this.state = { location: "", names:""}
        this.someAction = this.someAction.bind(this);
    }
 
    fetchData = () => {
        var parent=this;
        const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/";
        fetch(URL + this.state.location).then( function (response) {
            return response.json();
        })
            .then(function (data) {


                const restaurantArray = data.response.groups[0].items.map ((restaurant) => {
                    // console.log(restaurant.venue.name)
               
                   return (
                       
               <div>
               <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right"></img>
               <table className="table">
                   <thead>
                       <tr><th></th><th>Logo</th><th>Restaurant</th><th>Logo</th><th>Food Type</th><th>Home Page</th><th>Price Range</th><th>Reviews</th></tr>
                   </thead>
                   <tbody>
                       <tr key={restaurant.venue.id}>
                           <td>{restaurant.venue.id}</td>
                           <td>{restaurant.venue.name}</td>
                           <td><img src={Logo_black} alt="Logo" width="20"></img></td>
                       </tr>
               
                   </tbody>
               </table>
               </div>       
               )
                         })
            
                         parent.setState({names:restaurantArray})
            })
        }
        
    someAction(event) {
        this.setState({names: 'recent'});
      }
  
    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ [evt.target.id]: evt.target.value })
       
    }

    onSearch = async (evt) => {
    //     evt.preventDefault(); 
    //   var  kanin =  await this.fetchData(this.state.location, doesStuffToKaninAndRendersIt)
    }
    
   
    
    render() {
      console.log(this.state.names)
        return (
            <div>

                <form onSubmit={this.fetchData} onChange={this.onChange} >
                    <div id="search">
                        <input placeholder="Location" id="location" />
                        <button id="8">search</button>
                    </div>

                    <div className="container">
                        <CheckboxForFoodTypes id="3" />
            
                        
                    </div>
                </form>
                
          <div>  {this.state.names}   </div>           



   

            </div>
        )
    }
}

export default Search;


