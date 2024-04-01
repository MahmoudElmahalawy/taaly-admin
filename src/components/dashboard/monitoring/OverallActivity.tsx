import { CircularProgress } from "@/components/common";

export default function OverallActivity() {
	return (
		<div className="flex flex-col items-center bg-primary-50 rounded-2xl px-6 py-4">
			<h2 className="self-start text-primary-500 text-xl font-bold">Overall Activity</h2>
			<p className="text-neutral-200 mb-4">Hours spent by organizations starting from January</p>
			<CircularProgress percentage={75} strokeWidth={15} progressColor="#1E00B9" remainingColor="#988ADF">
				<div className="flex flex-col items-center text-4xl text-primary-500 font-bold">
					<span>200</span>
					<span>hours</span>
				</div>
			</CircularProgress>
		</div>
	);
}
