
const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/';
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

}

const facade = new SearchFacade();

export default facade;



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

