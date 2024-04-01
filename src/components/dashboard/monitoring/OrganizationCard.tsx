export default function OrganizationCard() {
	return (
		<div
			style={{
				backgroundColor: "#B4E13C",
			}}
			className="h-60 relative rounded-2xl overflow-hidden"
		>
			<div
				style={{
					background:
						'url("/static/images/backgrounds/card-bottom.svg") no-repeat bottom left, url("/static/images/backgrounds/card-top.svg") no-repeat top right',
				}}
				className="w-full h-full p-4"
			>
				<h2 className="text-3xl font-bold mb-2">Amsterdam Organization</h2>
				<div className="font-semibold mb-2">*Location</div>
				<div className="font-semibold">*Overview about the organization</div>
				<div className="w-[calc(100%-32px)] flex flex-col absolute bottom-4">
					<button className="self-end bg-secondary-800 text-sm font-semibold px-4 py-2 rounded">
						Details
					</button>
				</div>
			</div>
		</div>
	);
}
