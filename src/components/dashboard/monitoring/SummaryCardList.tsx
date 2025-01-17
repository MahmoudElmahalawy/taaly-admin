import SummaryCard from "./SummaryCard";
import { UserGroupIcon, BuildingLibraryIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function SummaryCardList() {
	return (
		<>
			<div className="col-span-3">
				<SummaryCard icon={<UserGroupIcon width={30} />} title={"Learners"} value={12} />
			</div>
			<div className="col-span-3">
				<SummaryCard icon={<UserGroupIcon width={30} />} title={"Language Buddies"} value={12} />
			</div>
			<div className="col-span-3">
				<SummaryCard icon={<BuildingLibraryIcon width={30} />} title={"Organizations"} value={12} />
			</div>
			<div className="col-span-3">
				<SummaryCard icon={<AcademicCapIcon width={30} />} title={"Projects"} value={12} />
			</div>
		</>
	);
}
