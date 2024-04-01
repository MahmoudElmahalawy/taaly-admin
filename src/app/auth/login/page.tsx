"use client";

import React from "react";
import { LoginSection } from "@/components/login";
import { SnackbarProvider } from "notistack";

export default function LoginPage() {
	return (
		<SnackbarProvider>
			<main className="bg-primary-50 lg:min-h-screen lg:grid lg:place-items-center">
				<LoginSection />
			</main>
		</SnackbarProvider>
	);
}
