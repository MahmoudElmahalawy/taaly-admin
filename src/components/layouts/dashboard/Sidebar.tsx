"use client";

import {
	AcademicCapIcon,
	BookOpenIcon,
	BuildingLibraryIcon,
	ClipboardDocumentIcon,
	Cog6ToothIcon,
	ComputerDesktopIcon,
	InformationCircleIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();
	const sidebarItems = [
		{
			icon: <ComputerDesktopIcon width={28} />,
			text: "Monitoring",
			path: "/dashboard/monitoring",
		},
		{
			icon: <UsersIcon width={28} />,
			text: "Matching",
			path: "/dashboard/matching",
		},
		{
			icon: <ClipboardDocumentIcon width={28} />,
			text: "Reporting",
			path: "/dashboard/reporting",
		},
		{
			icon: <BuildingLibraryIcon width={28} />,
			text: "Organizations",
			path: "/dashboard/organizations",
		},
		{
			icon: <AcademicCapIcon width={28} />,
			text: "Projects",
			path: "/dashboard/projects",
		},
		{
			icon: <BookOpenIcon width={28} />,
			text: "Learning tracks",
			path: "/dashboard/learning-tracks",
		},
	];

	return (
		<nav className="h-full bg-primary-50 col-span-2 text-2xl font-medium rounded-2xl px-4 py-8">
			<ul className="h-full flex flex-col justify-between">
				<div>
					{sidebarItems.map((item, i) => (
						<li key={i}>
							<Link
								href={item.path}
								className={
									"flex items-center gap-2 whitespace-nowrap px-2 py-4 mb-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-10" +
									(pathname === item.path ? " !bg-primary-500 text-white" : "")
								}
							>
								<span className="inline-block">{item.icon}</span>
								{item.text}
							</Link>
						</li>
					))}
				</div>
				<div className="mb-16">
					<li>
						<Link
							href={"/dashboard/settings"}
							className={
								"flex items-center gap-2 whitespace-nowrap px-2 py-4 mb-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-10" +
								(pathname === "/dashboard/settings"! ? " bg-primary-500 text-white" : "")
							}
						>
							<span className="inline-block">
								<Cog6ToothIcon width={28} />
							</span>
							Settings
						</Link>
					</li>
					<li>
						<Link
							href={"/dashboard/help"}
							className={
								"flex items-center gap-2 whitespace-nowrap px-2 py-4 mb-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-10" +
								(pathname === "/dashboard/help"! ? " bg-primary-500 text-white" : "")
							}
						>
							<span className="inline-block">
								<InformationCircleIcon width={28} />
							</span>
							Help
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}
