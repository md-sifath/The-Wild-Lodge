import ButtonIcon from "../../ui/ButtonIcon";

import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import Heading from "../../ui/Heading";

function Logout() {
  const { logOut, isPending } = useLogout();
  return (
    <>
      <ButtonIcon onClick={logOut} disabled={isPending}>
        {isPending ? <SpinnerMini /> : <HiOutlineLogout />}
        <span>Logout</span>
      </ButtonIcon>
    </>
  );
}

export default Logout;
