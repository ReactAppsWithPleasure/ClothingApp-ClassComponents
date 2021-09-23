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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
