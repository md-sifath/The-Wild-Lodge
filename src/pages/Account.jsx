import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import styled from "styled-components";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

const StyledDataForm = styled.div`
  padding: 2rem;
  background-color: var(--color-grey-50);
  border-radius: 1rem;
`;

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row type="vertical">
        <Heading as="h3">Update user data</Heading>
        <StyledDataForm>
          <UpdateUserDataForm />
        </StyledDataForm>
      </Row>
      <Row type="vertical">
        <Heading as="h3">Update password</Heading>
        <StyledDataForm>
          <UpdatePasswordForm />
        </StyledDataForm>
      </Row>
    </>
  );
}

export default Account;
