import React from 'react';
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'
import star2 from './images/star2.jpg'

//This component shows statistics to the admin.
class Statistics extends React.Component {

    constructor(props) {
        super(props);
        this.state = { headlines: this.props.dummydata, restaurantStats: this.props.dummydata }

    }

    componentDidMount() {
        //at some point we will use fetch to get data from our rest endpoints but not made yet. 
        /*     fetch(URL)
              .then(results => {
                if (!results.ok) {
                  throw Error(results.statusText);
                }
                return results.json();
              }).then(data => {
        */
        const headlines =

            <tr>
                <th></th><th>id</th><th >Name</th><th >url</th><th >views</th><th >Price class</th><th >reviews</th><th >average  <img src={star2} alt="Star2" width="10"></img></th>
            </tr>

        this.setState({ headlines: headlines })

        const restaurantStats = dummydata.map((restaurant) => {
    
           
            return (

                <tr key={restaurant.name}>
                    <td><img src={Logo_black} alt="Logo" width="20"></img></td>
                    <td>{restaurant.id}</td>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.url}</td>
                    <td>{restaurant.views}</td>
                    <td>{restaurant.price_range}</td>
                    <td>{restaurant.number_of_reviews}</td>
                    <td>{restaurant.avrgReviews}</td>
                </tr>
            )
             })
        this.setState({ restaurantStats: restaurantStats })

    }

    render() {

        return (

            <div>

                <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right"></img>
                <table className="table">

                    <thead>
                        {this.state.headlines}
                    </thead>

                    <tbody>
                        {this.state.restaurantStats}
                    </tbody>

                </table>
            </div>
        );
    }

}

export default Statistics;

const dummydata = [
    {
        "id":"1", 
        "name": "Dominos",
        "type": "fast food",
        "price_range": "cheap",
        "number_of_reviews": "33",
        "url": "dominos.dk",
        "imgurl": "http://mediacdn.dominos.co.il/_media/images/header/logo.png",
        "views": "426",
        "avrgReviews": "3.2"
    },
    {
        "id":"2", 
        "name": "McDonalds",
        "type": "fast food, family",
        "price_range": "cheap",
        "number_of_reviews": "222",
        "url": "www.mcdonalds.dk",
        "imgurl": "https://www.mcdonalds.com/content/dam/prelaunch/nordic/icons/m_logo.png",
        "views": "6524",
        "avrgReviews": "2.6"
    },
    {
        "id":"3", 
        "name": "Burger King",
        "type": "fast food, family",
        "price_range": "cheap",
        "number_of_reviews": "15",
        "url": "www.burgerking.dk",
        "imgurl": "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg",
        "views": "654",
        "avrgReviews": "3"
    },
    {
        "id":"4", 
        "name": "Cafe Woody",
        "type": "family, local",
        "price_range": "expensive",
        "number_of_reviews": "1",
        "url": "www.cafewoody.dk",
        "imgurl": "http://cafewoody.dk/wp-content/uploads/2012/07/woody_logo21.png",
        "views": "1",
        "avrgReviews": "5"
    },
    {
        "id":"5", 
        "name": "Sticks'nSushi",
        "type": "family, local, asian",
        "price_range": "expensive",
        "number_of_reviews": "567",
        "url": "www.sushi.dk",
        "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif",
        "views": "1456",
        "avrgReviews": "4.8"
    },
    {
        "id":"6", 
        "name": "Big Mamma's Pizzaria",
        "type": "fast food, family, local, pizzaria",
        "price_range": "average",
        "number_of_reviews": "41",
        "url": "www.bigmamma-pizzahouse.dk",
        "imgurl": "http://www.bigmamma-pizzahouse.dk/wp-content/themes/monmarthe/images/header-bg.jpg",
        "views": "578",
        "avrgReviews": "4"
    },
    {
        "id":"7", 
        "name": "Rådvad Kro",
        "type": "luxus, family",
        "price_range": "expensive",
        "number_of_reviews": "10",
        "url": "www.raadvadkro.dk",
        "imgurl": "http://www.raadvadkro.dk/images/logo.png",
        "views": "214",
        "avrgReviews": "5"
    },
    {
        
        "id":"8", 
        "name": "Post-Pop Steakhouse",
        "type": "local, luxus, steakhouse",
        "price_range": "expensive",
        "number_of_reviews": "5",
        "url": "www.postpub.dk/",
        "imgurl": "http://www.postpub.dk/wp-content/uploads/2016/07/Asset-1.svg",
        "views": "56",
        "avrgReviews": "3"
    },
    {
        "id":"9", 
        "name": "Noma",
        "type": "luxus, gourmet",
        "price_range": "very expensive",
        "number_of_reviews": "13",
        "url": "www.noma.dk",
        "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif",
        "views": "7776",
        "avrgReviews": "4.9"
    }];