import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data: activity } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["todays-activity"],
  });
  return { isLoading, activity };
}
