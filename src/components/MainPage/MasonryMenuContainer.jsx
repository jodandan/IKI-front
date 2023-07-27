import { styled } from "styled-components";
import { DUMMY_DATA } from "./MenuItemData.jsx";
import menuDataJson from "./MenuItemData.json";
import { useState } from "react";
import MenuModal from "./menuModal/MenuModal";

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
  const [modalMenusId, setModalMenusId] = useState(null);
  const handleMenuItemClick = (menusId) => {  setModalMenusId(menusId); }
  // json데이터 출력
  console.log(menuDataJson);

  // 서버에서부터 데이터 받기
  // useEffect(() => {
  //   // ownerId에 해당하는 데이터를 백엔드로부터 GET 요청으로 받아옵니다.
  //   const ownerId = 'yourOwnerId'; // ownerId 값을 적절히 변경해주세요.

  //   axios.get(`/api/v1/menus/all/${ownerId}`)
  //     .then(response => {
  //       // 요청이 성공적으로 완료되었을 때 실행되는 코드
  //       console.log(response.data); // 서버로부터 받은 데이터 출력
  //       setMenuData(response.data.responseData); // 받은 데이터를 menuData에 저장
  //     })
  //     .catch(error => {
  //       // 요청이 실패했을 때 실행되는 코드
  //       console.error(error);
  //     });
  // }, []);

  
  const handleCloseModal = () => {
    setModalMenusId(null);
  };

  return (
    <ListBox id="listBox">
      <List id="list">
        {/* 데이터 받기 */}
        {Object.entries(DUMMY_DATA).map(([category, items]) => (
          <Item key={category}>
            <div style={{padding: "10px"}}>
            <CategoryTltleStyle>{category}</CategoryTltleStyle>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <MenuStyle 
                    id="menuStyle" 
                    onClick={() => {
                      if(!item.soldOut) {handleMenuItemClick(item.menusId);};
                    }}
                    >
                      {item.soldOut?
                        <SoldOutStyle>
                          <SoldOutLine/>
                          <SoldOutText>품절</SoldOutText>
                          <div>{item.name}</div><div>{item.price}원</div>
                        </SoldOutStyle>:
                        <><div>{item.name}</div><div>{item.price}원</div></>
                      }
                  </MenuStyle>
                </li>
              ))}
            </ul>
            </div>
          </Item>
        ))}
      </List>
      {modalMenusId && (
        <MenuModal menusId={modalMenusId} onCloseModal={handleCloseModal} orderUsers={false}/>
      )}
    </ListBox>
  );
}