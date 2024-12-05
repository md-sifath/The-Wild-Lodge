import styled from "styled-components";
import { useRecentBooking } from "./useRecentBooking";
import { useStaysBooking } from "./useStaysBooking";
import Stats from "./Stats";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  /* responsive design  */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`;

function DashboardLayout() {
  const { isLoading, booking } = useRecentBooking();
  const { isLoading: isStaying, confirmedStays } = useStaysBooking();

  if (isStaying || isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={booking} confirmedStays={confirmedStays} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
