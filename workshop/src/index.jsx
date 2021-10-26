import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Gif from './components/Gif';
import Giflist from './components/GifList';

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
