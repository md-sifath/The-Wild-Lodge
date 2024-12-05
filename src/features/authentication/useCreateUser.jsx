import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useCreateUser() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: (data) => createUser(data),
    onSuccess: () => {
      toast.success("User created successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { mutate, isPending };
}
