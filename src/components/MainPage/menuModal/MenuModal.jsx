import { styled } from "styled-components";
import { useState } from "react";
import MenuDetailData from "./MenuDetail.json"//더미데이터(서버로 받은 데이터)

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
  /* 넓이 반응형으로 고치기 */
  max-width: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  padding: 0 20px;
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
    bottom: 0;
    margin: 1rem 0;
    /* margin: auto; */
    padding: 10px;
    border-radius: 10px;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-size: var(--font-big);
    font-weight: bold;
`
const OptionConainer=styled.div`
    width: 100%;
    overflow-y: scroll;
`
const OptionTitle=styled.h2`
    background-color: ${(props) => (props.mandatory==="true" ? "var(--primary-color)" : "var(--secondary-color)")};
    color: ${(props) => (props.mandatory==="true" ? "white" : "black")};
    font-weight: bolder;
    font-size: var(--font-regular);
    border-radius: 5px;
    width: 100%;
    padding: 4px 0px;
    text-align: center;
`
const Options=styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 10px 0;
`
const Option=styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: var(--font-regular);
    background-color: var(--third-color);
    font-weight: bold;
    height: 14vh;/*반응형으로 고치기?*/
    border-radius: 10px;
    /* 선택된 메뉴 블록의 스타일*/
    ${({ selected}) =>
        selected && `
        background-color: var(--secondary-color);
    `}
`
//서버로부터 받은 데이터를 카테고리별, 필수순으로 나열해주는 함수
function transformData(data) {
    const menuOptionsMap = new Map();
  
    data.menuOptionsList.forEach((option) => {
      const { menuOptionsCategory, mandatory, menuOptionsContents, menuOptionsPrice, menuOptionsId } = option;
  
      if (!menuOptionsMap.has(menuOptionsCategory)) {
        menuOptionsMap.set(menuOptionsCategory, {
          menuOptionsCategory,
          mandatory,
          menuOptionsContents: [],
        });
      }
  
      menuOptionsMap.get(menuOptionsCategory).menuOptionsContents.push({
        menuOptionsContents: menuOptionsContents,
        menuOptionsPrice: menuOptionsPrice,
        menuOptionsId:menuOptionsId,
      });
    });
  
    const transformedData = Array.from(menuOptionsMap.values());
  
    // mandatory: true인 것들을 배열 앞쪽으로 이동
    const sortedData = transformedData.sort((a, b) => {
      if (a.mandatory && !b.mandatory) {
        return -1;
      } else if (!a.mandatory && b.mandatory) {
        return 1;
      } else {
        return 0;
      }
    });
  
    return sortedData;
  }

export default function MenuModal({menusId, onCloseModal, orderUsers}){


    //menusId에 따라 모든 정보를 조회하는 api/v1/menuOptions/all/{menusId} 사용하여 json받기
    // console.log(MenuDetailData);

    //선택된 옵션들, 옵션 선택시에 selected만 수정하고, 메뉴 제출시에 menuOptionIdList <= selected
    const [selectedOptions, setSelectedOptions] = useState([]);

    //옵션 선택시, selected를 수정하는 함수
    const handleOptionClick = (optionId) => {
        setSelectedOptions(prevOptions => {
          if (prevOptions.includes(optionId)) {
            return prevOptions.filter(id => id !== optionId); // 선택 해제
          } else {
            return [...prevOptions, optionId]; // 선택 추가
          }
        });
    };

    //메뉴 옵션 선택 후, 하단 버튼 클릭시 , 서버로 전송하는 것 추가하기++서버로부터 장바구니 데이터 받기
    const handleSubmitButton=() =>{

        const cart= {
            menusId: menusId,
            orderUsers: orderUsers?orderUsers:null,//최초 장바구니 담기는 null
            menuOptionsIdList: selectedOptions.join(","), // 처음에는 빈 문자열로 초기화, [옵션의 PK 스트링으로 ,로 엮어서]
        };
        console.log("submit");
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
        console.log(groupedOptions);
        return groupedOptions; 
    };
    console.log(transformData(MenuDetailData));

    return(
        <>
            <ModalBackground/>
            <ModalContainer>
                <h2 style={{fontSize:"var(--font-big)", fontWeight:"bold", margin:"0.8rem 0"}}>{MenuDetailData.menusName}</h2>
                <OptionConainer>
                    {transformData(MenuDetailData).map((category)=>(
                        <div key={`category_${category.menuOptionsCategory}`} style={{paddingTop: "8px"}}>
                            <OptionTitle mandatory={category.mandatory.toString()}>{category.menuOptionsCategory}({category.mandatory?"필수":"선택"})</OptionTitle>
                            <Options>
                                {category.menuOptionsContents.map((option)=>(
                                    <Option
                                        key={`optionId_${option.menuOptionsId}`}
                                        onClick={() => handleOptionClick(option.menuOptionsId)}
                                        selected={selectedOptions.includes(option.menuOptionsId)}
                                        >
                                        <p style={{marginBottom:"5px"}}>{option.menuOptionsContents}</p>
                                        <p>{(option.menuOptionsPrice===0)?null:`(${option.menuOptionsPrice})`}</p>
                                    </Option>
                                ))}
                            </Options>
                        </div>
                    ))}
                </OptionConainer>
                <div style={{backgroundColor: "white", width: "100%", position: "sticky", borderRadius: "20px", display: "flex", justifyContent: "center"}}>
                    <ModalButton  onClick={()=>{onCloseModal(); handleSubmitButton();}}>선택 완료</ModalButton>
                </div>
            </ModalContainer>
        </>
    )
}