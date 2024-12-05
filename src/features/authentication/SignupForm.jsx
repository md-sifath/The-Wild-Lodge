import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow, { Label, Error } from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCreateUser } from "./useCreateUser";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, getValues, formState, handleSubmit, reset } = useForm();
  const { mutate, isPending } = useCreateUser();

  const { errors } = formState;

  function onSubmit(data) {
    mutate(data, { onSettled: reset });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label>Full Name</Label>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
        {errors?.fullName?.message && (
          <Error>{errors?.fullName?.message}</Error>
        )}
      </FormRow>

      <FormRow error={""}>
        <Label>Email address</Label>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Input a valid email",
            },
          })}
        />
        {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label>Password (min 8 characters)</Label>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is requird",
            minLength: {
              value: 8,
              message: "Password should be atleast 8 charecter long",
            },
          })}
        />
        {errors?.password?.message && (
          <Error>{errors?.password?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label>Confirm password</Label>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password did not matched",
          })}
        />
        {errors?.passwordConfirm?.message && (
          <Error>{errors?.passwordConfirm?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
