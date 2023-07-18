import { styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Receiptoutput from './../../../CreditPage/Receiptoutput';
import Pointpopup from './../../../CreditPage/Pointpopup';

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

const PayButtonBox = styled.button`
  background-color: var(--primary-color);
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-radius: 11px;
  box-shadow: none;
  height: 62px;
  padding: 0 20px;
  cursor: pointer;

  &:active {
    background-color: #2764ff;
  }
`;

const Upper = styled.div`
 margin-bottom: 5rem;
`;

const IndentedContainer = styled.div`
  margin-top: 2rem;
`;

export default function PayButton() {
  const [isPaymentComplete, setPaymentComplete] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showNextPopUp, setShowNextPopUp] = useState(false);
  const [showSmallPopUp, setShowSmallPopUp] = useState(false);
  const [showReceiptPopup, setShowReceiptPopup] = useState(false);

  const handlePayButtonClick = () => {
    setPaymentComplete(true);
  };
  
  const openReceiptPopup = () => {
    setShowReceiptPopup(true);
    setShowNextPopUp(false); // 영수증 팝업을 열면 결제 완료 팝업을 닫습니다.
  };
  


  const openSmallPopUp = () => {
    setShowSmallPopUp(true);
  };

  const closeSmallPopUp = () => { 
    setShowSmallPopUp(false);
  }

  const closeReceiptPopup = () => {
  setShowReceiptPopup(false);
};


  useEffect(() => {
    if (isPaymentComplete) {
      setShowPopUp(true);

      // Close the current popup after 3 seconds and show the next popup
      const timeout = setTimeout(() => {
        setShowPopUp(false);
        setShowNextPopUp(true);
      }, 3000);

      // Clean up the timeout on component unmount or if payment status changes
      return () => clearTimeout(timeout);
    }
  }, [isPaymentComplete]);

  useEffect(() => {
    if (showReceiptPopup) {
      const timeout = setTimeout(() => {
        setShowReceiptPopup(false);
        // 페이지 이동
        window.location.href = "http://localhost:3000/main"; // 메인 페이지의 URL로 변경해야 합니다.
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showReceiptPopup]);

  return (
    <>
      {!isPaymentComplete ? (
        <PayButtonBox onClick={handlePayButtonClick}>결제하기</PayButtonBox>
      ) : (
        <MainBox>
          {showPopUp && ( //결제중 팝업
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
                <span>결제중</span>
              </PopUpContent>
            </div>
          )}
          {showNextPopUp && ( //결제완료 팝업
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
                </PopUpContent>
              </div>
          )}
          {showReceiptPopup && ( //영수증 발급 완료 팝업
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
                <Receiptoutput onClose={closeReceiptPopup} />
              </div>
          )}    

          {showSmallPopUp && ( //포인트적립 팝업
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
              <Pointpopup onClose={closeSmallPopUp}></Pointpopup>
              </div>
            )}
        </MainBox>
      )}
    </>
  );
}