import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";

const StyleHeader = styled.header`
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyleHeader>
      <HeaderMenu />
    </StyleHeader>
  );
}

export default Header;
