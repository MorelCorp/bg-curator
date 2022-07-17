// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, doc, getFirestore, getDocs, query } from 'firebase/firestore/lite';
import { firebaseConfig } from '../../private/config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
{
	initializeApp(firebaseConfig);
}
export const app = getApp();

// Auth exports
export const auth = getAuth(app);

// Firestore exports
export const db = getFirestore();
// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
// export const fromMillis = firebase.firestore.Timestamp.fromMillis;
// export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
// export const storage = firebase.storage();
// export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export const gamesCollection = collection(db, 'games');

export function userDoc(userId: string) {
	return doc(db, 'users', userId);
}

export function gameDoc(gameId: string) {
	return doc(db, 'games', gameId);
}

export function gamesDoc() {
	return getDocs(query(collection(db, 'games')));
}
