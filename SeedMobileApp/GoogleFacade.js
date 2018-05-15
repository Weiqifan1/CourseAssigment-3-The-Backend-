
/* eslint-disable no-undef */
import AsyncStorage from 'react-native';
const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';
const URLGETRESTAURANTSBYCOORDINATES = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/latlgt/';

class GoogleFacade {

    /* fetchRestaurantsByQuery = (location) => { // , callback
        fetch(URL + location)

            .then(async (results) => {
                if (!results.ok) {
                    throw Error(results.statusText);
                }
                return results.json();
            })
            .then((data) => {
                let restaurants = [];
                restaurants = data.results;
                this.setRestaurantsByLocation(restaurants);
                // callback(restaurants);
            });
    }
 */


 fetchRestaurantsByCoordinates =async (latlng) => { // , callback
    console.log("fetchRestaurantsByCoor"+latlng)
await fetch(URLGETRESTAURANTSBYCOORDINATES + latlng)
  
            .then( res => {
                console.log("results"+res)
                if (!res.ok) {
                    throw Error("error" +res);
                }
                return res.json();
                console.log("res.json()")
            })
            .then((data) => {         
                this.setRestaurantsByLocation(data.results);
                console.log("gf42")
                // callback(restaurants);
            });
    }


    setRestaurantsByLocation =  (responseFromFetch) => {
        console.log("responsefromfetch"+responseFromFetch[0].name)
        try {
        
         AsyncStorage.setItem('restaurantsByLocation', JSON.stringify(responseFromFetch)); // JSON.stringify (gør den til en string.) Key value pair name(key)/value
        } catch (error) {
            console.log("error"+error)
        }
    };

    getRestaurantsByLocation = async () => JSON.parse(await AsyncStorage.getItem('restaurantsByLocation'));  // Is the same as the 3 lines below.

}

const googlefacade = new GoogleFacade();

export default googlefacade;

// Fra dokumentationen.
/* try {
    const value = await AsyncStorage.getItem('@MySuperStore:key');
    if (value !== null) {
        // We have data!!
        console.log(value);
    }
} catch (error) {
    // Error retrieving data
} */

/* getRestaurantsByLocation = async () => {
    try {
        let allRestaurants = JSON.parse(await AsyncStorage.getItem('restaurantsByLocation');
        if (allRestaurants !== null) {
            return allRestaurants;
        }
    } catch (error) {
        console.log('Error in get from asyncStorage');
    }
}
} */
{/* <List>
<FlatList
    data={this.state.restaurants}
    renderItem={({ restaurant }) => (
        <ListItem
            roundAvatar
            title={`${restaurant.name} ${restaurant.name}`}
            subtitle={restaurant.formatted_address}
            avatar={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM` }}
        />
    )}
/>
</List>
 */}