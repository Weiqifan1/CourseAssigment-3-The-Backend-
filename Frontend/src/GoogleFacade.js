

const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';

class GoogleFacade {
    fetchRestaurantsByQuery = (location) => { // , callback
      console.log(location);
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
          localStorage.setItem('restaurantsByLocation', JSON.stringify(responseFromFetch)); // JSON.stringify (gør den til en string.) Key value pair name(key)/value
        };

        getRestaurantsByLocation = () => JSON.parse(localStorage.getItem('restaurantsByLocation')); // Is the same as the 3 lines below.
}

const googlefacade = new GoogleFacade();

export default googlefacade;
