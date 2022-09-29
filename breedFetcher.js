const request = require('request');
const argv = process.argv.slice(2);

let URL = 'https://api.thecsdsdsatapi.com/v1/breeds/search?q=';





const getAndPrintBreed = (URL) => {
  
  
  
  request(URL)
}


request(URL + argv[0], (err, response, body) => {

  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];

  if (breed) {
    console.log(breed.description);
  } else {
    console.log("Breed not found.");
  }
});