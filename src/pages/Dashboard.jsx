import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useRecentBooking } from "../features/dashboard/useRecentBooking";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <Row type="vertical">
        <DashboardLayout />
      </Row>
    </>
  );
}

export default Dashboard;
