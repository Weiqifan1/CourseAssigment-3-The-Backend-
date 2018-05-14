

const baseURL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/';
const latlngURL = 'api/googleplaces/latlgt/';

class GoogleFacade {
  fetchRestaurantsByQuery = async (location) => { // , callback
    fetch(`${baseURL + latlngURL + location.lat},${location.lng}`)

      .then((results) => {
        if (!results.ok) {
          throw Error(results.statusText);
        }

        return results.json();
      })
      .then((data) => {
        let restaurants = [];
        restaurants = data.results;
        console.log(restaurants);
        this.setRestaurantsByLocation(restaurants);
        // callback(restaurants);
      });
  }

  setRestaurantsByLocation = (responseFromFetch) => {
    localStorage.setItem('restaurantsByLocation', JSON.stringify(responseFromFetch)); // JSON.stringify (gør den til en string.) Key value pair name(key)/value
  };

  getRestaurantsByLocation = () => JSON.parse(localStorage.getItem('restaurantsByLocation'));
  getErrorMessageNoResults=() => JSON.parse({ NullError: 'Your search returned nothing try to specify your search' })
}
const googlefacade = new GoogleFacade();

export default googlefacade;
