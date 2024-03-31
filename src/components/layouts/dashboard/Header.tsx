import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import TaalyWithTextLogo from "../../../../public/static/images/logos/taaly-with-text.svg";
import ProfilePicture from "../../../../public/static/images/profile-pictures/jenny.png";

export default function Header() {
	return (
		<header className="col-span-12 flex items-center justify-between bg-primary-50 rounded-2xl px-6 py-4">
			<div>
				<Link href={"/dashboard"}>
					<Image src={TaalyWithTextLogo} alt="Taaly logo" />
				</Link>
			</div>
			<div className="flex grow">
				<div className="grow max-w-xl mx-auto">
					<div className="relative text-neutral-100 border-1 focus-within:text-gray-400">
						<span className="absolute inset-y-0 left-2 flex items-center">
							<button disabled className="p-1 focus:outline-none focus:shadow-outline">
								<MagnifyingGlassIcon className="h-5 w-5" />
							</button>
						</span>
						<input
							id="search"
							type="text"
							placeholder="search"
							className="w-full border border-neutral-100 rounded-2xl ps-10 py-2 placeholder:text-neutral-100"
						/>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-6">
				<button className="relative text-neutral-200">
					<BellIcon className="h-8 w-8" />
					<span className="absolute top-1 right-1 bg-danger-600 text-blue-100 text-xs font-bold rounded-full p-1"></span>
				</button>
				<div className="text-xl font-bold">Hi, Jenny</div>
				<div tabIndex={0} className="relative cursor-pointer [&>.dropdown]:focus-within:block">
					<Image src={ProfilePicture} alt="profile picture" width={87} height={87} className="rounded-full" />
					<div className="dropdown hidden absolute -left-2 text-xl py-2 bg-white border border-neutral-100 mt-2 rounded-lg">
						<button className="w-full p-5 hover:bg-primary-50">Logout</button>
					</div>
				</div>
			</div>
		</header>
	);
}
