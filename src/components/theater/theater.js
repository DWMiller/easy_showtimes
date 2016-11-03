import createMovieList from '../movie-list/movies';

export default (React) => {
  const MovieList = createMovieList(React);

  const Theater = ({ address, movies, name }) => {
    return (
      <div className="theater">
        <h3>{name}</h3>
        <h4>{address}</h4>
        <MovieList movies={movies} />
      </div>
  );
  };

  return Theater;
};
