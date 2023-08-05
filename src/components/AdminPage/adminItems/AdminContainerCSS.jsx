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
  margin: 10px 0;
`;

export const NameBox = styled.div`
  margin: 4px 0;
  font-size: var(--font-big);
  font-weight: 500; // bold해야할수도..
  padding: 6px;
  background-color: var(--third-color);
`;
