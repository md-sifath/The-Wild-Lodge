import Form from "../../ui/Form";
import FormRow, { Label } from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSetting } from "./useSetting";
import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isPending, error, setting } = useSetting();

  const { isUpdating, UpdateSetting } = useUpdateSetting();

  function handleUpdate(e, field) {
    UpdateSetting({ [field]: e.target.value });
  }

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <Form>
          <FormRow>
            <Label>Minimum nights/booking</Label>

            <Input
              type="number"
              id="min-nights"
              defaultValue={setting?.minBookingLength}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "minBookingLength")}
            />
          </FormRow>

          <FormRow>
            <Label>Maximum nights/booking</Label>
            <Input
              type="number"
              id="max-nights"
              defaultValue={setting?.maxBookingLength}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "maxBookingLength")}
            />
          </FormRow>

          <FormRow>
            <Label>Maximum guests/booking</Label>
            <Input
              type="number"
              id="max-guests"
              defaultValue={setting?.maxGuestPerPerson}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "maxGuestPerPerson")}
            />
          </FormRow>

          <FormRow>
            <Label>Breakfast price</Label>
            <Input
              type="number"
              id="breakfast-price"
              defaultValue={setting?.breakfastPrice}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "breakfastPrice")}
            />
          </FormRow>
        </Form>
      )}
    </>
  );
}

export default UpdateSettingsForm;
