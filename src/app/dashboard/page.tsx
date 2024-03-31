"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const router = useRouter();

	React.useEffect(() => {
		router.push("/dashboard/monitoring");
	}, []);

	return <div className="text-center mt-8 animate-pulse">Loading..</div>;
}
