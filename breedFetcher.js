const request = require('request');

// Allows for command line arguments
// Prints as array but need string, so get first element in the array


const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // need to catch error before parsing data
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      callback(`${breedName} does not exist. Please try again.`, null);
      return;
    }

    callback(null, breed.description);
    return;
  });
};

module.exports = { fetchBreedDescription };