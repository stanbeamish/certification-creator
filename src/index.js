import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as themes from './theme/schema.json';

import { writeToLocalStorage } from './utils/storage';

const Index = () => {
  // write the theme data as JSON to the LocalStorage of the Browser
  writeToLocalStorage('all-themes', themes.default);
  return (
    <App />
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

