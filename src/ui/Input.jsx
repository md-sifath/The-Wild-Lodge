import styled from "styled-components";

const Input = styled.input`
  border: 2px solid var(--color-grey-200);
  height: 35px;
  width: auto;
  border-radius: 8px;
  padding-left: 8px;

  &:focus {
    outline: none;
    padding-left: 8px;
  }
`;

export default Input;
