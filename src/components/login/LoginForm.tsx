import Link from "next/link";
import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginForm() {
	return (
		<form className="w-full flex flex-col items-center">
			<div className="w-full mb-5">
				<label htmlFor="email" className="font-bold">
					Email
				</label>
				<div className="relative text-neutral-50 border-1 focus-within:text-gray-400">
					<span className="absolute inset-y-0 right-2 flex items-center">
						<button disabled className="p-1 focus:outline-none focus:shadow-outline">
							<AtSymbolIcon className="h-5 w-5" />
						</button>
					</span>
					<input
						id="email"
						type="email"
						placeholder="example@mail.com"
						className="w-full border-[1px] rounded-md px-4 py-2"
					/>
				</div>
			</div>
			<div className="w-full mb-4">
				<label htmlFor="email" className="font-bold">
					Password
				</label>
				<div className="relative text-neutral-50 border-1 focus-within:text-gray-400">
					<span className="absolute inset-y-0 right-2 flex items-center">
						<button disabled className="p-1 focus:outline-none focus:shadow-outline">
							<EyeIcon className="h-5 w-5" />
						</button>
					</span>
					<input
						id="email"
						type="email"
						placeholder="6+ strong characters"
						className="w-full border-[1px] rounded-md px-4 py-2"
					/>
				</div>
			</div>
			<div className="mb-4">
				<Link href="/auth/forgot-password" className="text-neutral-100 text-sm">
					Forgot password?
				</Link>
			</div>
			<button type="submit" className="bg-primary-500 text-white text-xl font-semibold rounded-md px-16 py-3">
				Login
			</button>
		</form>
	);
}
