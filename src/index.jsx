import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './contexts';

render(
  <>
    {/* <FirebaseContext.Provider value={firebase}> </FirebaseContext.Provider> */}
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
