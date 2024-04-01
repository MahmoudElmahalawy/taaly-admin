"use client";

import React from "react";
import Header from "../../components/layouts/dashboard/Header";
import Sidebar from "../../components/layouts/dashboard/Sidebar";
import OverallActivity from "@/components/dashboard/monitoring/OverallActivity";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-12 gap-4 pt-8 pb-6">
				<Header />
			</div>
			<div className="h-[calc(100vh-200px)] grid grid-cols-10 gap-4">
				<Sidebar />
				<div className="bg-primary-50 col-span-6 rounded-2xl">{children}</div>
				<div className="col-span-2">
					<OverallActivity />
				</div>
			</div>
		</div>
	);
}
