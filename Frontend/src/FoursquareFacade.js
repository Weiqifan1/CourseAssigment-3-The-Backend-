import React, { Component } from "react";
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'
import facade from './ApiFacade'


const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/";


function handleHttpErrors(res) {
    if (!res.ok) {
      
        throw { message: res.statusText, status: res.status };
    }

    return res.json();
}
var getRestaurants = "";
class FoursquareFacade {


    //TODO: At some point we will use fetch to get data from our rest endpoints but not made yet. 
    fetchData = (location, callback) => {

        fetch(URL + location).then(async function (response) {
            return await response.json();
        })
            .then(function (data) {
              

             const restaurantsTbody=   data.response.groups[0].items.map((restaurant) => {
                
                    return (

                        <tr key={restaurant.venue.id}>
                            <td>{restaurant.venue.id}</td>
                            {/* <td><img src={restaurant.imgurl} alt="thumb" width="50"></img></td> */}
                            <td>{restaurant.venue.name}</td><td><img src={Logo_black} alt="Logo" width="20"></img></td>
                            {/* <td>{restaurant.type}{restaurant.pricerange}</td>
                    <td>{restaurant.url}</td><td>{restaurant.price_range}</td>
                    <td>Reviews {restaurant.number_of_reviews}</td> */}
                        </tr>
                    )
                }
                )

             callback(restaurantsTbody)
            })
    }
}





const fourfacade = new FoursquareFacade();

export default fourfacade;