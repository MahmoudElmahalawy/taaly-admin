interface SummaryCardProps {
	icon: React.ReactNode;
	title: string;
	value: number;
}

export default function SummaryCard(props: SummaryCardProps) {
	return (
		<div className="h-28 flex items-center gap-4 bg-primary-500 p-4 rounded-2xl overflow-hidden">
			<div className="w-14 h-14 bg-white text-neutral-200 p-3 rounded-full">{props.icon}</div>
			<div className="flex flex-col text-white">
				<h3 className="text-xl font-semibold text-clip">
					<span className="block">Total</span>
					{props.title}
				</h3>
				<p className="text-2xl">{props.value}</p>
			</div>
		</div>
	);
}
