import React from "react";
import { styled } from "styled-components";

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

const Upper = styled.div`
 margin-bottom: 5rem;
`;

const IndentedContainer = styled.div`
  margin-top: 2rem;
  white-space: pre-wrap;
`;

const ShowNextPopUp = ({ onReceiptButtonClick, onPointButtonClick }) => {
  return (
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
        <PopUpButton onClick={onReceiptButtonClick}>영수증 받기</PopUpButton>
        <PopUpButton onClick={onPointButtonClick}>포인트 적립하기</PopUpButton>
      </PopUpContent>
    </div>
  );
};

export default ShowNextPopUp;
