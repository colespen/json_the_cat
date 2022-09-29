const request = require('request');

let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = (breedName, callbackFn) => {

  request((URL + breedName), (err, response, body) => {

    if (err) { // err parameter is used
      callbackFn(err, null);
      return; //exit, error
    }
    
    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      callbackFn("Breed not found.", null);
      return; //exit, error
    }
      
    callbackFn(null, breed.description);
    
  });
};

module.exports = fetchBreedDescription;
