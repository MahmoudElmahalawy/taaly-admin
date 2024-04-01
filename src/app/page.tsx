"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	React.useEffect(() => {
		setTimeout(() => {
			router.replace("/auth/login");
		}, 3000);
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="bg-primary-50 text-center">
				Home
				<p className="text-neutral-200">Redirecting to Login...</p>
			</div>
		</main>
	);
}
