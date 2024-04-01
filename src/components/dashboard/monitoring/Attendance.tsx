import { CircularProgress } from "@/components/common";
import { UsersIcon } from "@heroicons/react/24/outline";

export default function Attendance() {
	return (
		<div className="flex flex-col items-center bg-primary-50 rounded-2xl px-6 py-4">
			<h2 className="self-start text-primary-500 text-xl font-bold mb-4">Attendance</h2>
			<div className="mb-8">
				<CircularProgress percentage={75} progressColor="#1E00B9" remainingColor="#988ADF" strokeWidth={12}>
					<CircularProgress
						percentage={75}
						progressColor="#B4E13C"
						remainingColor="#DDF1A5"
						strokeWidth={12}
						size={150}
					>
						<div className="text-neutral-200">
							<UsersIcon width={40} />
						</div>
					</CircularProgress>
				</CircularProgress>
			</div>
			<div className="flex">
				<div className="w-1/2 h-full flex flex-col gap-3 text-start">
					<h3 className="text-neutral-200 text-xl">Learners</h3>
					<div className="text-primary-500 text-4xl font-bold">91%</div>
				</div>
				<div className="w-1/2 h-full flex flex-col gap-3 text-start">
					<h3 className="text-neutral-200 text-xl">Language Buddies</h3>
					<div className="text-secondary-500 text-4xl font-bold">95%</div>
				</div>
			</div>
		</div>
	);
}
