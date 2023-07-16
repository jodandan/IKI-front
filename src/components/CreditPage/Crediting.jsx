
import { useState } from "react";
import { styled } from "styled-components";
import Completed from "./Completed.jsx"

const MainBox = styled.div`
  padding: 1vw 1.2vw;
  height: 100vh; /* Modify later to fit the length of the menu board */
`;

const PopUpButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #FFF;
  width: 295px;
  height: 92px;
  flex-shrink: 0;
  font-size: 25px;
`;

const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  font-size: 30px;
`;



export default function Crediting() {
  const [showPopUp, setShowPopUp] = useState(false);

  const openPopUp = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <MainBox>
      <div>
      <PopUpButton onClick={openPopUp}>결제중 팝업 열기</PopUpButton>
      <Completed/>
      </div>  
      {showPopUp && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 82, 212, 0.70)", 
            zIndex: 9999,
            color: "White"
          }}
        >
           <PopUpContent>
            <span>결제중</span>
            <PopUpButton onClick={closePopUp}>결제 중 팝업 닫기</PopUpButton>
          </PopUpContent>
          
        </div>
      )}
    </MainBox>
  );
}
