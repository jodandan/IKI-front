import { styled } from "styled-components";
import { DUMMY_DATA } from "./MenuItemData";
import { useState } from "react";
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
  height: 100%;
`;

//column을 이용한 구현
const List = styled.div`
  column-count: 2;
  column-gap: 10px;
`;

const Item = styled.div`
  width: 100%;
  /* height: ${(props) => props.height || "100px"}; */
  background-color: lightgray;
  display: inline-block;
  break-inside: avoid;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const CategoryTltleStyle=styled.h2`
  padding-bottom: 10px;
  font-size: 20px; 
  font-weight: bold;
`

const MenuStyle=styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  margin:2px;
  border-radius: 10px;
  /* 선택된 메뉴 블록의 스타일*/
  ${({ selected}) =>
    selected && `
    background-color: #8bacff;
  `}
`
const SoldOutStyle=styled.div`
  display: flex; 
  position: relative;
  justify-content: space-between;
  width: 100%;
  color: gray;
`;
const SoldOutLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1.5px;
  background-color: black;
`;
const SoldOutText=styled.div`
  position: absolute;
  padding: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: black;
  background-color: lightgray;
`;

export function MasonryMenuContainer() {
  const [selected, setSelected] = useState([]);

  const handleMenuItemClick = (category, itemName) => {
    const selectedMenu = `${category}-${itemName}`;
    setSelected((prevSelected) =>
      prevSelected.includes(selectedMenu)
        ? prevSelected.filter((item) => item !== selectedMenu)
        : [...prevSelected, selectedMenu]
    );
    console.log(selected);
  }

  return (
    <ListBox id="listBox">
      <List id="list">
        {Object.entries(DUMMY_DATA).map(([category, items]) => (
          <Item key={category}>
            <div style={{padding: "10px"}}>
            <CategoryTltleStyle>{category}</CategoryTltleStyle>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <MenuStyle 
                    id="menuStyle" 
                    selected={selected.includes(`${category}-${item.name}`)} 
                    onClick={() => {if(!item.soldout) {handleMenuItemClick(category, item.name);}}}
                    >
                      {item.soldout?
                        <SoldOutStyle>
                          <SoldOutLine/>
                          <SoldOutText>품절</SoldOutText>
                          <div>{item.name}</div><div>{item.price}원</div>
                        </SoldOutStyle>:
                        <><div>{item.name}</div><div>{item.price}원</div></>
                      }
                    {/* <div>{item.name}</div><div>{item.price}원</div> */}
                  </MenuStyle>
                </li>
              ))}
            </ul>
            </div>
          </Item>
        ))}
      </List>
    </ListBox>
  );
}