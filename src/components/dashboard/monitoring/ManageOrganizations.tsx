import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function ManageOrganizations() {
	return (
		<div className="bg-primary-500 rounded-2xl flex flex-col items-center justify-center grow gap-3">
			<div className="text-white">
				<Cog6ToothIcon width={42} />
			</div>
			<div className="text-white text-2xl font-semibold">Manage Organizations</div>
		</div>
	);
}
