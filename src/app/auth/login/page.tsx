"use client";

import React from "react";
import { LoginForm, LoginSection } from "@/components/login";

export default function LoginPage() {
	return (
		<main className="bg-primary-50 lg:min-h-screen lg:grid lg:place-items-center">
			<LoginSection />
		</main>
	);
}
