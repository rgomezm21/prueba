import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBUS-AihY0xT53nB2hG15IW8xviqwB6Pwk',
	authDomain: 'minimarket-951a1.firebaseapp.com',
	databaseURL: 'https://minimarket-951a1.firebaseio.com',
	projectId: 'minimarket-951a1',
	storageBucket: 'minimarket-951a1.appspot.com',
	messagingSenderId: '216877613942',
	appId: '1:216877613942:web:54f0b4284d883176b4f057',
	measurementId: 'G-K2F39339HE',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
