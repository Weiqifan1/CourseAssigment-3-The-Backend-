
const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/';
const URLFOURSQUARE = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/';
//const URL = 'http://localhost:8084/jwtbackend/api/';

class SearchFacade {

  //Fetch the users from backend.
  async fetchAllUsers() {
    const userFetch = 'users';

    const result = await fetch(URL + userFetch).then(response => response.json());

    return result;
  }

  //Fetch restaurants on goggle search. 
  async fetchGogglePlaces(location) {
    const gogglePlaces = "googleplaces/";

    const result = await fetch(URL + gogglePlaces + location).then(response => response.json());

    return result;
  }

  //Fetch from autocomplete with latitude and longtitude.
  async fetchFromAutoComplete(latitude, longtitude) {
    const latlngURL = 'googleplaces/latlgt/';

    const result = await fetch(`${URL + latlngURL + latitude},${longtitude}`).then(response => response.json());

    return result;
  }

  //FETCH TIL FOURSQUARE

  //If the user does not choice a restaurant type then make this fetch.
  async fetchFoursquareNoType(location) {
    const FETCHURL = `${URLFOURSQUARE}name/${location}`;

    const result = await fetch(FETCHURL).then(response => response.json());

    return result;
  }

  //If the user choice type and restaurant use this fetch.
  async fetchFoursquareWithType(location, type) {
    var FETCHURL = `${URL}locationtype/${location}&categoryId=4d4b7105d754a06374d81259&query=${type}`;

    const result = await fetch(FETCHURL).then(response => response.json());

    return result;
  }

}

const facade = new SearchFacade();

export default facade;


// Gemmes til fejlhåndtering
/* export default function fetchRestaurantsByLocation(url) { // , callback
  fetch(url)

    .then(async (results) => {
      if (!results.ok) {
        throw Error(results.statusText);
      }
      return results.json();
    });
} */





/* export default function fetchRestaurantsByLocation(url) { // , callback
  fetch(url)

    .then(async (results) => {
      if (!results.ok) {
        throw Error(results.statusText);
      }
      return results.json();
    });
} */

