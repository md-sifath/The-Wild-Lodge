import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
  padding: 3.2rem 4rem;
  transition: all 0.5s;

  /* responsive design  */
  @media (max-width: 1023) {
    width: 80vw;
    padding: 2.4rem;
    background-color: red;
  }

  @media (max-width: 767) {
    width: 90vw;
    padding: 1.6rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(2px);
  z-index: 1000;
  transition: all 0.5s;

  @media (max-width: 767) {
    backdrop-filter: blur(3px);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }

  @media (max-width: 767px) {
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function Modal({ children, onClose }) {
  return (
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        {children}
      </StyledModal>
    </Overlay>
  );
}

export default Modal;
