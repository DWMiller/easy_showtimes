import createTheater from '../theater/theater';

export default (React) => {
  const Theater = createTheater(React);

  const Theaters = ({ theaters }) => {
    const list = theaters.map(theater => <Theater key={theater.id} {...theater} />);

    return (
      <div>
        {list}
      </div>
);
  };


  // Theaters.propTypes = {
  //   children: React.PropTypes.node.isRequired,
  // };

  return Theaters;
};
