
import React, { Component } from "react";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw { message: res.statusText, status: res.status };
    }

    return res.json();
    console.log("Lad os se her : " + res.json)
}
const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/";


function FoursquareFacade(location) {
    var arr = [];
    var myString = "";
    fetch(URL + location)
        .then(results => {
            if (!results.ok) {
                throw Error(results.statusText);
            }
            return results.json();

        }).then(data => {
            
            //arr = data.response.groups[0].items;
            //myString = data.response.groups[0].items.venue[3].name;
            myString = "FoursquareFacade (simpel)";
            //console.log(arr[3])
            //console.log("simpelFacade: " + myString);
        })
        return myString;

}

function FoursquareFacadeXXXXX(location) {

    //TODO: At some point we will use fetch to get data from our rest endpoints but not made yet. 
    var arr = [];
    fetch(URL + location)
        .then(results => {
            if (!results.ok) {
                throw Error(results.statusText);
            }
            return results.json();

        }).then(data => {
            
            arr = data.response.groups[0].items;
            console.log(arr[3])
        })

    return arr;
}


export default FoursquareFacade;