import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../configs/firebase.config";

const auth = getAuth(app);

export const useAuthState = () => {
	const [user, setUser] = React.useState<any>(null);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log({ user });
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return { user, loading };
};
