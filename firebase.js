import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA0V814Gi3xfFWzkDb1Z6LJRmwZiC8yALQ',
  authDomain: 'facebook-2-yt-1753b.firebaseapp.com',
  projectId: 'facebook-2-yt-1753b',
  storageBucket: 'facebook-2-yt-1753b.appspot.com',
  messagingSenderId: '836412722749',
  appId: '1:836412722749:web:6a03a481080f39fad86454',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
