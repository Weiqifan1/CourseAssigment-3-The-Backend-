
const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT';

function handleHttpErrors(res) {
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }
  return res.json();
}

class UserFacade {

}

const facade = new UserFacade();

export default facade;
