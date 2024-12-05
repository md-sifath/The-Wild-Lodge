import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateSetting from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <Row type="vertical">
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSetting />
    </Row>
  );
}

export default Settings;
