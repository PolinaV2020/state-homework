import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkbox from './Checkbox';
import Play from './Play.js';
import Font from './Font.js';


ReactDOM.render(
  <React.StrictMode>
    <Play />
    <Checkbox />
    <Font />
  </React.StrictMode>,
  document.getElementById('root')
);

