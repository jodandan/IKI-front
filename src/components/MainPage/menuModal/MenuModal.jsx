import { styled } from "styled-components";
import { useState } from "react";

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
`;

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
    background-color: lightgray;
    font-size: var(--font-big);
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
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    height: 150px;/*반응형으로 고치기?*/
`
export default function MenuModal({modalMenu, onCloseModal}){
    // 선택받은 옵션을 저장하는 배열-> 모달창을 닫으면 백엔드로 전송
    // const [selectedOptions, setSelectedOptions] = useState([]); 
    
    return(
        <>
            <ModalBackground/>
            <ModalContainer>
                <OptionConainer>
                    <OptionTitle>필수선택-메뉴이름: {modalMenu}</OptionTitle>
                    <Options>
                        <Option><div>차갑게<br/>+1000원</div></Option>
                        <Option>뜨겁게<br/>+0원</Option>
                    </Options>
                    <OptionTitle>추가주문</OptionTitle>
                    <Options>
                        <Option><div>차갑게<br/>+1000원</div></Option>
                        <Option>뜨겁게<br/>+0원</Option>
                        <Option><div>차갑게<br/>+1000원</div></Option>
                        <Option>뜨겁게<br/>+0원</Option>
                        <Option><div>차갑게<br/>+1000원</div></Option>
                        <Option>뜨겁게<br/>+0원</Option>
                    </Options>
                </OptionConainer>
                <ModalButton  onClick={()=>{onCloseModal();}}>계속 주문하기</ModalButton>
            </ModalContainer>
        </>
    )
}