"use client";

import React from "react";
import { singInWithEmailAndPassword } from "@/services/auth.service";

export default function LoginPage() {
	React.useEffect(() => {
		singInWithEmailAndPassword("mahmoud.elmahalawy@taaly.nl", "123456789").then((user) => {
			console.log(user);
		});
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="bg-primary-50">Login</div>
		</main>
	);
}
