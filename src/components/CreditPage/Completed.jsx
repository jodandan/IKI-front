import { useState } from "react";
import { styled } from "styled-components";
import Pointpopup from "./Pointpopup";
import Receiptoutput from "./Receiptoutput";
import RegistrationComplete from "./RegistrationComplete";


const MainBox = styled.div`
  padding: 1vw 1.2vw;
  height: 100vh;
`;

const PopUpButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #fff;
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
  font-size: 25px;
`;

const IndentedContainer = styled.div`
  margin-top: 2rem;
`;

const Upper = styled.div`
 margin-bottom: 5rem;
`;

const SmallPopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  font-size: 25px;
`;

const SmallPopUpHeader = styled.h2`
  padding-bottom: 2rem;
  margin-bottom: 6rem;
  color: black;
  font-weight: bold;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
`;

const RegisterButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 20px;
  border-radius: 5px;
  background: #4277ff;
  color: white;
`;

const NumericKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 1rem;
`;

const NumericKey = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  background: #fff;
  font-size: 20px;
`;

export default function Completed() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSmallPopUp, setShowSmallPopUp] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState("");
  const [showReceiptPopup, setShowReceiptPopup] = useState(false);
  const [RegistrationComplete, setRegistrationComplete] = useState(false);

  const openReceiptPopup = () => {
    setShowReceiptPopup(true);
    setShowSmallPopUp(false); // Hide the small popup when receipt popup is opened
  };

  const closeReceiptPopup = () => {
    setShowReceiptPopup(false);
  };

  const openPopUp = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const openSmallPopUp = () => {
    setShowSmallPopUp(true);
  };

  const closeSmallPopUp = () => {
    setShowSmallPopUp(false);
  };

  const handleNumericKeyClick = (number) => {
    setEnteredNumber((prevNumber) => prevNumber + number);
  };

  const handleClearButtonClick = () => {
    setEnteredNumber("");
  };

  const handleOneStepClearButtonClick = () => {
    setEnteredNumber((prevNumber) => prevNumber.slice(0, -1));
  };

  const handleRegisterButtonClick = () => {
    // Perform registration logic with enteredNumber
    console.log("Registering points:", enteredNumber);
  };

  return (
    <MainBox>
      <PopUpButton onClick={openPopUp}>결제 완료 팝업 열기</PopUpButton>
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
            color: "white",
          }}
        >
          <PopUpContent>
            <Upper>
              <IndentedContainer>
                <span>00000원</span>
              </IndentedContainer>
              <IndentedContainer>
                <span>결제 완료</span>
              </IndentedContainer>
            </Upper>
            <IndentedContainer>
              <span>주문 번호: 00번</span>
            </IndentedContainer>
            <PopUpButton onClick={openReceiptPopup}>영수증 받기</PopUpButton>
            <PopUpButton onClick={openSmallPopUp}>포인트 적립하기</PopUpButton>
            <PopUpButton onClick={closePopUp}>
              결제 완료 팝업 닫기
            </PopUpButton>
          </PopUpContent>
        </div>
      )}
      {showSmallPopUp && (
        <div
          style={{
            position: "fixed",
            top: "5%",
            left: "30%",
            width: "40%",
            height: "90%",
            background: "#FFFFFF",
            zIndex: 9999,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "11px",
          }}
        >
          <Pointpopup onClose={closeSmallPopUp} />
        </div>
      )}
      {showReceiptPopup && (
        <div
          style={{
            position: "fixed",
            top: "5%",
            left: "30%",
            width: "40%",
            height: "90%",
            backgroundColor: "rgba(0, 82, 212, 0.70)",
            zIndex: 9999,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "11px",
          }}
        >
          <Receiptoutput onClose={closeReceiptPopup} />
        </div>
      )}
        {RegistrationComplete && (
        <div
          style={{
            position: "fixed",
            top: "5%",
            left: "30%",
            width: "40%",
            height: "90%",
            backgroundColor: "rgba(0, 82, 212, 0.70)",
            zIndex: 9999,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "11px",
          }}
        >
          <RegistrationComplete onClose={closeReceiptPopup} />
        </div>
      )}


    </MainBox>
  );
}
