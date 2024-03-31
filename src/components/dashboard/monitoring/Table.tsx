import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Table() {
	const tableHeaders = ["Name", "Level", "Program", "Organization", "Rating", "Hours spent", "Actions"];
	const tableData = [
		["Haitham Badran", "Medium B2", "Adults", "Amsterdam", "7/10", "7.5/10h", "View"],
		["Hebah Abdullah", "Medium B2", "Adults", "Amsterdam", "6/10", "7.5/10h", "View"],
		["Miles Esther", "Medium B2", "Adults", "Amsterdam", "9/10", "7.5/10h", "View"],
	];

	return (
		<section className="col-span-12 bg-white rounded-2xl">
			<div className="flex flex-col gap-6 p-6 pb-0">
				<div className="flex text-neutral-100 text-xl font-medium divide-x [&>a]:px-3 [&>a]:cursor-pointer">
					<a className="text-primary-500 underline !ps-0">Learners</a>
					<a>Language Buddies</a>
				</div>
				<div className="relative text-neutral-100">
					<button
						type="button"
						className="absolute inset-y-0 left-0 px-4 py-2 font-semibold rounded-l-lg focus:outline-none border-r border-neutral-100"
					>
						<AdjustmentsHorizontalIcon width={16} />
					</button>
					<div>
						<span className="absolute inset-y-0 left-14 flex items-center">
							<button disabled className="p-1 focus:outline-none focus:shadow-outline">
								<MagnifyingGlassIcon className="h-5 w-5" />
							</button>
						</span>
						<input
							type="text"
							placeholder="Search by Name, Level, etc"
							className="w-full border border-neutral-100 py-2 pl-24 pr-4 rounded-2xl focus:outline-none focus:ring-1"
						/>
					</div>
				</div>
			</div>
			<div className="rounded-2xl overflow-x-auto">
				<table className="min-w-full">
					<thead>
						<tr>
							{tableHeaders.map((header, index) => (
								<th
									key={`${header + index}`}
									className="text-left leading-4 font-normal text-neutral-100 tracking-wider px-2 py-6"
								>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-neutral-50">
						{tableData.map((row, index) => (
							<tr key={`${row[index] + index}`}>
								{row.map((data, index) => (
									<td key={`${data + index}`} className="font-semibold px-2 py-6 whitespace-no-wrap">
										{data}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
