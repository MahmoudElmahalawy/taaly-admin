"use client";

import React from "react";
import { LoginForm } from "@/components/login";

export default function LoginPage() {
	return (
		<main className="bg-primary-50 min-h-screen grid items-center p-24">
			<div className="bg-white">
				<LoginForm />
			</div>
		</main>
	);
}
