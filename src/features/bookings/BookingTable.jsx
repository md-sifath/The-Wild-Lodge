import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import { useBooking } from "./useBookings";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const { isLoading, data: bookings, error } = useBooking();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") || "all";
  let filterData;

  if (filterValue === "all") {
    filterData = bookings;
  }
  if (filterValue === "unconfirmed") {
    filterData = bookings?.filter(
      (booking) => booking.status === "unconfirmed"
    );
  }
  if (filterValue === "checked-in") {
    filterData = bookings?.filter((booking) => booking.status === "checked-in");
  }
  if (filterValue === "checked-out") {
    filterData = bookings?.filter(
      (booking) => booking.status === "checked-out"
    );
  }
  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={filterData}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
    </Table>
  );
}

export default BookingTable;
