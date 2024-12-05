import BookingDetail from "../features/bookings/BookingDetail";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

function SingleBooking() {
  const moveBack = useMoveBack();

  return <BookingDetail />;
}

export default SingleBooking;
