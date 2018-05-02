import React, { Component } from "react";
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'


function handleHttpErrors(res) {
    if (!res.ok) {
        throw { message: res.statusText, status: res.status };
    }

    return res.json();
    console.log("Lad os se her : " + res.json)
}
const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/";


class RestaurantsSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = { restaurants: "", };
        
    }

    componentDidMount() {
        console.log("RestaurantsSearchResult - componentDidMount AAA");
        //TODO: At some point we will use fetch to get data from our rest endpoints but not made yet. 
        fetch(URL + "koge")
            .then(results => {
                if (!results.ok) {
                    throw Error(results.statusText);
                }
                return results.json();

            }).then(data => {
                var arr = []
                arr = data.response.groups[0].items;
                console.log(arr[3])
                const restaurants = arr.map((restaurant) => {

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
                })
                console.log("RestaurantsSearchResult - componentDidMount BBB");
                this.setState({ restaurants: restaurants });

            })
    }

    render() {


        return (

            <div>

                <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right"></img>
                <table className="table">

                    <thead>
                        <tr><th></th><th>Logo</th><th>Restaurant</th><th>Logo</th><th>Food Type</th><th>Home Page</th><th>Price Range</th><th>Reviews</th></tr>
                    </thead>

                    <tbody>
                        {this.state.restaurants}
                    </tbody>

                </table>

            </div>

        );
    }

}

export default RestaurantsSearchResult;
