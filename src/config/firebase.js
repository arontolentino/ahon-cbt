import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCwMsBn1dJRb758BHo9k7UU7j_FVUw5H1M',
	authDomain: 'ahon-cbt.firebaseapp.com',
	databaseURL: 'https://ahon-cbt.firebaseio.com',
	projectId: 'ahon-cbt',
	storageBucket: 'ahon-cbt.appspot.com',
	messagingSenderId: '496676972511',
	appId: '1:496676972511:web:1fd7d690a4c512d4a9066a'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
