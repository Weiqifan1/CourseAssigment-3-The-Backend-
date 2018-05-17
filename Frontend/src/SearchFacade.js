

export default function fetchRestaurantsByLocation(url) { // , callback
  fetch(url)

    .then(async (results) => {
      if (!results.ok) {
        throw Error(results.statusText);
      }
      return results.json();
    });
}

