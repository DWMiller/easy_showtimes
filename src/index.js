import React from 'react';
import ReactDOM from 'react-dom';
import createApp from './components/app/app';

import './index.css';

const App = createApp(React);

const state = {
  theaters: [],
};

fetch('http://localhost:80/api').then((response) => {
  response.json().then((json) => {
    state.theaters = json;
    render();
    // console.log(json);
  });
});

function render() {
  ReactDOM.render(<App theaters={state.theaters} />, document.getElementById('root'));
}
