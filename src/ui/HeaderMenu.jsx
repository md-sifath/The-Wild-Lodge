import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUserCircle } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const StyeledName = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;
const UserAvater = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #439c8a;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 500;
`;

function HeaderMenu() {
  const { user } = useUser();

  const userName = user?.user_metadata?.fullName;
  const firstLetter = userName?.charAt(0);
  //   console.log(user);
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <StyeledName>
          <UserAvater>{firstLetter}</UserAvater>
          {userName}
        </StyeledName>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUserCircle />
        </ButtonIcon>
      </li>

      {/* <li>
        <Logout />
      </li> */}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
