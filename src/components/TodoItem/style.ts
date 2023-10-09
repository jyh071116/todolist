import styled, { css } from "styled-components";
import check from "assets/check.svg";

export const Delete = styled.div`
  transition: all 0.1s;
  opacity: 0;
  margin-left: auto;
  cursor: pointer;
`;

export const TodoLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5%;
  margin-top: 3.5%;
  &:hover ${Delete} {
    opacity: 1;
  }
`;

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
          background: no-repeat center url(${check});
        `
      : css`
          border: 1px solid gray;
        `}
`;

export const Text = styled.div<{ isChecked: boolean }>`
  ${(props) =>
    props.isChecked &&
    css`
      color: gray;
      text-decoration: line-through;
    `}
`;
