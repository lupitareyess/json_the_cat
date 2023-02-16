const request = require('request');

// Allows for command line arguments
// Prints as array but need string, so get first element in the array
const findBreed = process.argv.slice(2)[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${findBreed}`;

request(url, (error, response, body) => {
  // need to catch error before parsing data
  if (error) {
    return console.log('Request error');
  }

  const data = JSON.parse(body);
  const breed = data[0];

  if (!breed) {
    return console.log(`${findBreed} does not exist. Please try again.`);
  }
  return console.log(breed.description);
});

