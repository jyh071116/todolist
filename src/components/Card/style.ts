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
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const Day = styled.div`
  text-align: center; 
  margin-bottom: 1%;
  color: grey;
`;

export const Button = styled.img`
  width: 3%;
  cursor: pointer;
`;
