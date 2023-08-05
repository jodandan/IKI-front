import { styled } from "styled-components";

export const Box = styled.div`
  height: 100px;
  width: 100%;
  background-color: lightblue;
  margin: 1px;
`;

export const PopupBox = styled.div`
  background-color: white;
  border: 1px solid var(--primary-color);
  width: 40%;
  height: 20%;
  position: fixed;
  left: 0;
  right: 0;
`;
