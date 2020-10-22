import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDQ7mWwaAHipuWNTZqMi312rdiZm-Houzo',
  authDomain: 'react-netflix-clone-bacdd.firebaseapp.com',
  databaseURL: 'https://react-netflix-clone-bacdd.firebaseio.com',
  projectId: 'react-netflix-clone-bacdd',
  storageBucket: 'react-netflix-clone-bacdd.appspot.com',
  messagingSenderId: '1025925444699',
  appId: '1:1025925444699:web:5685353ea44a40d0217b7e',
  measurementId: 'G-9KC1PE0VTB',
};

export const firebase = Firebase.initializeApp(config);
