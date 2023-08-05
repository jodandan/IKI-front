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

/*
위: 기존코드
아래: 수정코드
*/

export const PageBox = styled.div`
  padding: 0 20px;
`;

export const EachBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 8px;
  padding-top: 22px;
`;

export const Name = styled.div`
  padding: 9px;
  border-radius: 6px;
  font-size: var(--font-big);
  font-weight: 500; // bold해야할수도..
  background-color: var(--third-color);
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 7px;
`;
