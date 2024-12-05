import styled from "styled-components";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow, { Error, Label } from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { insertCabin } from "../../services/apiCabins";

function CreateCabinForm({ onClose }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();

  // function for insert new Cabin
  const mutation = useMutation({
    mutationFn: insertCabin,

    // IF CABIN INSERT IS SUCCESS
    onSuccess: () => {
      toast.success("Create Cabin Succesfull");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      onClose();
      reset();
    },
    // IF ERROR OCCUERS
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { errors } = formState;

  // calling onsubmit form function
  function onSubmit(data) {
    mutation.mutate({ ...data, image: data.image[0] });
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onClose ? "modal" : "regular"}
    >
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is Required",
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is Required",
            min: {
              value: 1,
              message: "Value should be greater than 1",
            },
          })}
        />
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is Required",
            min: {
              value: 100,
              message: "Price should be greater than 100",
            },
            max: {
              value: 2000,
              message: "Price should be less then 2001",
            },
          })}
        />
        {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is Required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount Price should be less then regular Price",
          })}
        />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is Required",
          })}
        />
        {errors?.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image")}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={mutation.isPending}>Create New Cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
