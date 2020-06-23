import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzLNSY_34e40K3ckZglyvG1WOu45ZuZy0",
    authDomain: "note-taker-2a5a9.firebaseapp.com",
    databaseURL: "https://note-taker-2a5a9.firebaseio.com",
    projectId: "note-taker-2a5a9",
    storageBucket: "note-taker-2a5a9.appspot.com",
    messagingSenderId: "178429655226",
    appId: "1:178429655226:web:57035a155b4fc0609d6a83",
    measurementId: "G-BTJ6Z9BR73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
