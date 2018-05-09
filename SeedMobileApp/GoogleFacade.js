const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';
const URLCOORDINATES = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';

class GoogleFacade {

    fetchRestaurantsByQuery = (location) => { // , callback
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

    

    fetchRestaurantsByCoordinates = (location) => { // , callback
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



    setRestaurantsByLocation = (responseFromFetch) => {
        try {
            await AsyncStorage.setItem('restaurantsByLocation', JSON.stringify(responseFromFetch)); // JSON.stringify (gør den til en string.) Key value pair name(key)/value
        } catch (error) {

        }
    };

    getRestaurantsByLocation = () => JSON.parse(await AsyncStorage.getItem('restaurantsByLocation')); // Is the same as the 3 lines below.
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