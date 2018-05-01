import React from 'react';
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'

//UserSearchResult shows a list of restaurants based on what the user entered in the search field.
class UserSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = { headlines: this.props.dummydata, restaurants: this.props.dummydata }

    }

    componentDidMount() {
        //TODO: At some point we will use fetch to get data from our rest endpoints but not made yet. 
        /*     fetch(URL)
              .then(results => {
                if (!results.ok) {
                  throw Error(results.statusText);
                }
                return results.json();
              }).then(data => {
        */

        const restaurants = dummydata.map((restaurant) => {

            return (

                <tr key={restaurant.id}>
                    <td>{restaurant.id}</td><td><img src={restaurant.imgurl} alt="thumb" width="50"></img></td>
                    <td>{restaurant.name}</td><td><img src={Logo_black} alt="Logo" width="20"></img></td>
                    <td>{restaurant.type}{restaurant.pricerange}</td>
                    <td>{restaurant.url}</td><td>{restaurant.price_range}</td>
                    <td>Reviews {restaurant.number_of_reviews}</td>
                </tr>
            )
        })
        this.setState({ restaurants: restaurants });

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

export default UserSearchResult;

const dummydata = [{
    "id": "1",
    "name": "Dominos",
    "type": "fast food",
    "price_range": "cheap",
    "number_of_reviews": "33",
    "url": "dominos.dk",
    "imgurl": "http://mediacdn.dominos.co.il/_media/images/header/logo.png"
},
{
    "id": "2",
    "name": "McDonalds",
    "type": "fast food, family",
    "price_range": "cheap",
    "number_of_reviews": "4",
    "url": "www.mcdonalds.dk",
    "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif"
},
{
    "id": "3",
    "name": "Burger King",
    "type": "fast food, family",
    "price_range": "cheap",
    "number_of_reviews": "15",
    "url": "www.burgerking.dk",
    "imgurl": "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg"
},
{
    "id": "4",
    "name": "Cafe Woody",
    "type": "family, local",
    "price_range": "expensive",
    "number_of_reviews": "02",
    "url": "www.cafewoody.dk",
    "imgurl": "http://cafewoody.dk/wp-content/uploads/2012/07/woody_logo21.png"
},
{
    "id": "5",
    "name": "Sticks'nSushi",
    "type": "family, local, asian",
    "price_range": "expensive",
    "number_of_reviews": "99",
    "url": "www.sushi.dk",
    "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif"
},
{
    "id": "6",
    "name": "Big Mamma's Pizzaria",
    "type": "fast food, family, local, pizzaria",
    "price_range": "average",
    "number_of_reviews": "5",
    "url": "www.bigmamma-pizzahouse.dk",
    "imgurl": "http://www.bigmamma-pizzahouse.dk/wp-content/themes/monmarthe/images/header-bg.jpg"
},
{
    "id": "7",
    "name": "Rådvad Kro",
    "type": "luxus, family",
    "price_range": "expensive",
    "number_of_reviews": "1",
    "url": "www.raadvadkro.dk",
    "imgurl": "http://www.raadvadkro.dk/images/logo.png"
},
{
    "id": "8",
    "name": "Post-Pop Steakhouse",
    "type": "local, luxus, steakhouse",
    "price_range": "expensive",
    "number_of_reviews": "8",
    "url": "www.postpub.dk/",
    "imgurl": "http://www.postpub.dk/wp-content/uploads/2016/07/Asset-1.svg"
},
{
    "id": "9",
    "name": "Noma",
    "type": "luxus, gourmet",
    "price_range": "very expensive",
    "number_of_reviews": "7",
    "url": "www.noma.dk",
    "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif"
},];
