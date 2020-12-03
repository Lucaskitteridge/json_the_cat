const request = require('request');
const args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args, (error, response, body) => {
  console.error('error:', error);
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found');
  }
  for (let key of data) {
    console.log(key.description);
  }
});