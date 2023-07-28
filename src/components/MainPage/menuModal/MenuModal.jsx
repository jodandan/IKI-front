import { styled } from "styled-components";
import { useState } from "react";
import MenuDetailData from "./MenuDetail.json"

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명한 회색 배경 */
`;
const ModalContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ModalButton = styled.button`
    all: unset;
    position: fixed;
    bottom: 0;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--primary-color);
    font-size: var(--font-big);
`
const OptionConainer=styled.div`
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar { display: none; };
`
const OptionTitle=styled.h2`
    background-color: #5977e0;
    color: white;
    font-weight: bolder;
    font-size: var(--font-big);
    border-radius: 10px;
    width: 100%;
    padding: 7px 0px;
    text-align: center;
`
const Options=styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
`
const Option=styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: var(--font-big);
    background-color: var(--third-color);
    font-weight: bold;
    height: 150px;/*반응형으로 고치기?*/
    border-radius: 10px;
`
export default function MenuModal({menusId, onCloseModal, orderUsers}){
    // 선택받은 옵션을 저장하는 배열-> 모달창을 닫으면 백엔드로 전송

    //menusId에 따라 모든 정보를 조회하는 api/v1/menuOptions/all/{menusId} 사용하여 json받기
    console.log(MenuDetailData);

    // 백엔드로 넘길 정보들
    const [cart, setCart] = useState({
        menusId: menusId,
        orderUsers: orderUsers?orderUsers:null,//최초 장바구니 담기는 null
        menuOptionsIdList: "", // 처음에는 빈 문자열로 초기화, [옵션의 PK 스트링으로 ,로 엮어서]
    });

    //메뉴 선택시에 menuOptionIdList 수정
    const addMenuOptionId = (menuOptionId) => {
        setCart((prevCart) => ({
          ...prevCart,
          menuOptionsIdList: prevCart.menuOptionsIdList ? `${prevCart.menuOptionsIdList}, ${menuOptionId}` : menuOptionId.toString()
        }));
        console.log(cart);
    };

    //서버로부터 받은 옵션데이터를 카테고리별로 나누어주는 함수
    const groupMenuOptionsByCategory = (optionsList) => {
        const groupedOptions = {};
        optionsList.forEach(option => {
          const { menuOptionsCategory, menuOptionsContents, menuOptionsPrice, menuOptionsId } = option;
          if (!groupedOptions[menuOptionsCategory]) {
            groupedOptions[menuOptionsCategory] = [];
          }
          groupedOptions[menuOptionsCategory].push({ contents: menuOptionsContents, price: menuOptionsPrice, id: menuOptionsId });
        });
        return groupedOptions;
    };

    return(
        <>
            <ModalBackground/>
            <ModalContainer>
                <OptionConainer>
                    {Object.entries(groupMenuOptionsByCategory(MenuDetailData.menuOptionsList)).map(([category, options]) => (
                        <div key={category}>
                            <OptionTitle>{category}</OptionTitle>
                            <Options>
                                {options.map(option => (
                                <Option key={option.id} onClick={() => addMenuOptionId(option.id)}>
                                    <p style={{marginBottom:"5px"}}>{option.contents}</p><p>{(option.price===0)?null:option.price}</p>
                                </Option>))}
                            </Options>
                        </div>
                    ))}
                </OptionConainer>
                <ModalButton  onClick={()=>{onCloseModal();}}>계속 주문하기</ModalButton>
            </ModalContainer>
        </>
    )
}