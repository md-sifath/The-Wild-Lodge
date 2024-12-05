import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

const SideBarStyle = styled.aside`
  border-right: 1px solid var(--color-grey-100);
  padding: 2rem 1rem;
  grid-row: 1/-1;
  background-color: var(--color-grey-0);

  @media (max-width: 640px) {
    position: fixed;
    left: -100%;
    top: 0;
    height: 100%;
    width: 240px;
    transition: left 0.3s ease-in-out;
  }
  &.active {
    @media (max-width: 640px) {
      left: 0;
      background-color: var(--color-grey-0);
    }
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 640px) {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--color-gray-0);
    background-color: var(--color-gray-0);
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    z-index: 30;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? (
          <HiOutlineXMark size={24} />
        ) : (
          <HiOutlineMenuAlt2 size={24} />
        )}
      </ToggleButton>
      <SideBarStyle className={isOpen ? "active" : ""}>
        <Logo />
        <MainNav />
      </SideBarStyle>
    </>
  );
}

export default Sidebar;
