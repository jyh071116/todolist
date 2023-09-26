import styled, { css } from "styled-components";

export const CheckButton = styled.button<{ isChecked: boolean }>`
  aspect-ratio: 1;
  width: 7.5%;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
  ${(props) =>
    props.isChecked
      ? css`
          border: 1px solid #4e76dc;
        `
      : css`
          border: 1px solid black;
        `}
`;
