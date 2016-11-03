import './movie.css';

export default (React) => {
  const Movie = ({ genre, imdb, name, rating, runtime, showtimes, trailer }) => {
    console.log(showtimes);

    return (
      <div className="movie" >
        <span className="movie-title">{name }</span>
        <span className="movie-showtimes">{showtimes.join(', ')}</span>
      </div>
  );
  };

  return Movie;
};
