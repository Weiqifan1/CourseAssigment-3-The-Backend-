
//const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/';
const URL = 'http://localhost:8080/jwtbackend/api/googleplaces/';

class GoogleFacade2 {
    fetchRestaurantsByQuery = (location) => { // , callback
      fetch(URL + location)

        .then(async (results) => {
          if (!results.ok) {
            throw Error(results.statusText);
          }
          return results.json();
          console.log("hello googleFacade 2");
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