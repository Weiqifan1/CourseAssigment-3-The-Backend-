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
    fetchData = async (location, callback) => {

        fetch(URL + location).then(async function (response) {
            return await response.json();
        })
            .then(function (data) {


                const restaurantsTbody = data.response.groups[0].items
            
               callback(restaurantsTbody)
            })
    }
}





const fourfacade = new FoursquareFacade();

export default fourfacade;