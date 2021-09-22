import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyAQUjusUowesAeJopG4xUZ0H0ZDktp3FpE',
	authDomain: 'clothingapp66-db.firebaseapp.com',
	projectId: 'clothingapp66-db',
	storageBucket: 'clothingapp66-db.appspot.com',
	messagingSenderId: '650635120734',
	appId: '1:650635120734:web:7d38822f82f3b60a3a64cf',
	measurementId: 'G-ZNE5MR1TNG'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
