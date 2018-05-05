
function handleHttpErrors(res) {
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }

  return res.json();
}

const URL = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/restaurants/name';

class FoursquareFacade {
    handleData = (data, callback) => {
      let restaurants = [];
      restaurants = data.response.groups[0].items;
      callback(restaurants);
    }

    fetch = location => // , callback

      fetch(URL + location)
        .then(async (results) => {
          if (!results.ok) {
            throw Error(results.statusText);
          }
          return await results.json();
        })
        /*  .then(data => {
             var restaurants = []
             restaurants = data.response.groups[0].items;
             callback(restaurants);
         }) */
}

const fourfacade = new FoursquareFacade();

export default fourfacade;
