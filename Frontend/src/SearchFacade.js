

const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/';
//const URL = 'http://localhost:8084/jwtbackend/api/';


class SearchFacade {
 
  //Fetch the users from backend
  async fetchAllUsers() {
    const userFetch = 'users';

    const result = await fetch(URL + userFetch).then(response => response.json());
   
    return result;
  }

  async fetchGogglePlaces(location) {
    const gogglePlaces = "googleplaces/";

    const result = await fetch(URL + gogglePlaces + location).then(response => response.json());

    return result;
  }

}

const facade = new SearchFacade();

export default facade;