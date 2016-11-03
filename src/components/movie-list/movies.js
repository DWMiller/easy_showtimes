import createMovie from '../movie/movie';

export default (React) => {
  const Movie = createMovie(React);
  const MovieList = ({ movies }) => {
    const list = movies.map(movie => <Movie key={movie.id} {...movie} />);

    return (
      <div>
        {list}
      </div>
);
  };


  // Theaters.propTypes = {
  //   children: React.PropTypes.node.isRequired,
  // };

  return MovieList;
};
