
//const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/';
const URL = 'http://localhost:8084/jwtbackend/api/';


class UserFacade {
 
  async fetchAllUsers() {
    const userFetch = 'user';

    const result = await fetch(URL + userFetch).then(response => response.json());
   
    return result;
  }
}

const facade = new UserFacade();

export default facade;
