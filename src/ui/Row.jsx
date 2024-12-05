import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;

      /* resposive code  */
      @media (max-width: 767px) {
        flex-direction: column;
        gap: 1.5rem;
      }
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 2rem;
    `}
    @media (max-width:767px) {
    gap: 1rem;
  }
`;

export default Row;
