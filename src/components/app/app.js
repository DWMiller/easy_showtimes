import createTheaters from '../theaters/theaters';
import './app.css';

export default (React) => {
  const Theaters = createTheaters(React);

  const app = props =>
     (
       <div className="App">
         {props.children}
         <Theaters theaters={props.theaters} />
       </div>
  );

  // app.propTypes = {
  //   children: React.PropTypes.node.isRequired,
  // };

  return app;
};
