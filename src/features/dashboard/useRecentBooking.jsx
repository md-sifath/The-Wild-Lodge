import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";

import { getBookingsAfterDate } from "../../services/apiBookings";
export function useRecentBooking() {
  const [searchParam] = useSearchParams();

  const numDays = !searchParam.get("last")
    ? 7
    : Number(searchParam.get("last"));
  console.log(numDays);

  const queryDates = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: booking } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDates),
    queryKey: ["bookings", `last-${numDays}`],
  });
  return { isLoading, booking };
}
