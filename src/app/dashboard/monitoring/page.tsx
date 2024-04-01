import OrganizationCardList from "@/components/dashboard/monitoring/OrganizationCardList";
import SummaryCardList from "@/components/dashboard/monitoring/SummaryCardList";
import Table from "@/components/dashboard/monitoring/Table";

export default function MonitoringPage() {
	return (
		<div className="grid grid-cols-12 gap-6 px-12 py-8">
			<SummaryCardList />
			<Table />
			<OrganizationCardList />
		</div>
	);
}
