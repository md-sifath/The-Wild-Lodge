import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: (bookingId) => updateBooking(bookingId),

    onSuccess: (data) => {
      toast.success(`Booking #${data?.id} is sucessfully checked-in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: (err) => {
      toast.error("There was an error while check-in");
    },
  });
  return { checkin, isCheckingIn };
}
