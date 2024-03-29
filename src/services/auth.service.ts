import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword as firebaseSignIn,
	signOut as firebaseSignOut,
} from "firebase/auth";
import app from "../configs/firebase.config";

const auth = getAuth(app);

export const signUpWithEmailAndPassword = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error) {
		throw error;
	}
};

export const signInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		const userCredential = await firebaseSignIn(auth, email, password);
		return userCredential.user;
	} catch (error) {
		throw error;
	}
};

export const signOut = async () => {
	try {
		await firebaseSignOut(auth);
	} catch (error) {
		throw error;
	}
};
