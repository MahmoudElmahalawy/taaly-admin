"use client";

import React from "react";
import { LoginForm } from "@/components/login";

export default function LoginPage() {
	return (
		<main className="bg-primary-50 min-h-screen grid place-items-center">
			<div className="max-w-7xl bg-white">
				<LoginForm />
			</div>
		</main>
	);
}
