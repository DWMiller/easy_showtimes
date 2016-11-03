const express = require('express');
const Showtimes = require('showtimes');
const cors = require('express-cors');

const app = express();

app.use(cors({
  allowedOrigins: [
    'localhost:3000',
  ],
}));

const api = new Showtimes('Hamilton, Ontario', {});

app.get('/api', (req, res) => {
  api.getTheaters((error, theaters) => {
    if (error) {
      throw error;
    }

    console.log(theaters);
    res.send(theaters);
  // const addresses = theaters.map(theater => theater.address);

  // const movies = theaters.map(theater => theater.movies);

  // const nameAndTimes = [].concat(...movies).map(movie => ({
  //   name: movie.name,
  //   showtimes: movie.showtimes,
  // }));
  });
});

app.listen(80, () => {
  console.log('Example app listening on port 80!');
});
