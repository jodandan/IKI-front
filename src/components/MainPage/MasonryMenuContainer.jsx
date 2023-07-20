import { styled } from "styled-components";
import { DUMMY_DATA } from "./MenuItemData";

// flex를 이용한 구현 (나중에 라이브러리 필요할 수도 있어요.)
// const List=styled.div `
//     display: flex; // 1
//     flex-direction: column; // 2
//     flex-wrap: wrap; // 3
//     align-content: start; // 4
//     height: 700px; // 5
//     column-gap:10px;
//     width: 100%;
// `

// const Item= styled.div`
//     width: 48%; // 6
//     background-color: green;
//     height: ${(props )=> props.height || '100px'};
//     margin-bottom: 10px;
// `

const ListBox = styled.div`
  padding: 0 1.2vw; /* 위아래 패딩 0으로 수정 */
  overflow-y: scroll; /* 마지막에 스크롤 없애기 */
`;

//column을 이용한 구현
const List = styled.div`
  column-count: 2;
  column-gap: 10px;
`;

const Item = styled.div`
  width: 100%;
  height: ${(props) => props.height || "100px"};
  background-color: lightgray;
  display: inline-block;
  break-inside: avoid;
  margin-bottom: 10px;
`;

export function MasonryMenuContainer() {
  return (
    <ListBox>
      <List>
        <Item height="200px" />
        <Item height="130px" />
        <Item height="150px" />
        <Item height="200px" />
        <Item height="150px" />
        <Item height="150px" />
        <Item height="180px" />
      </List>
    </ListBox>
  );
}
