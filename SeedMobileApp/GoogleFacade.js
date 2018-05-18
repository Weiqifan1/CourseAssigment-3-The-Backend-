
/* eslint-disable no-undef */
import AsyncStorage from 'react-native';
const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';
const URLGETRESTAURANTSBYCOORDINATES = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/latlgt/';

class GoogleFacade {

    fetchRestaurantsByCoordinates = async (latlng) => { // , callback
        console.log("fetchRestaurantsByCoor" + latlng)
        await fetch(URLGETRESTAURANTSBYCOORDINATES + latlng)

            .then(res => {

                if (!res.ok) {
                    throw Error("error" + res);
                }
                return res.json();

            })
            .then((data) => {
                this.setRestaurantsByLocation(data.results);

                // callback(restaurants);
            });
    }


    setRestaurantsByLocation = (responseFromFetch) => {

        try {

            AsyncStorage.setItem('restaurantsByLocation', JSON.stringify(responseFromFetch)); // JSON.stringify (gør den til en string.) Key value pair name(key)/value
        } catch (error) {
            console.log("error" + error)
        }
    };

    getRestaurantsByLocation = async () => JSON.parse(await AsyncStorage.getItem('restaurantsByLocation'));  // Is the same as the 3 lines below.

}

const googlefacade = new GoogleFacade();

export default googlefacade;

