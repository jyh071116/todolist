import styled from "styled-components";

export const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  aspect-ratio: 3/4;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 2.5% 2%;
  overflow: scroll;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Day = styled.div`
  margin-top: 1%;
  color: grey;
`;

export const Button = styled.div`
  font-size: 25px;
  cursor: pointer;
`