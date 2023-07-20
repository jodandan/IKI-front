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

const IndentedContainer = styled.div`
  margin-top: 2rem;
  white-space: pre-wrap;
`;

export default function ShowTakeoutPopUp({ onShowFirstPopUp }) {
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
        <IndentedContainer>
          <span>
            포장여부를 선택하면
            <br />
            <br />
            결제가 진행됩니다.
          </span>
        </IndentedContainer>
        <PopUpButton onClick={() => onShowFirstPopUp(true)}>포장하기</PopUpButton>
        <PopUpButton onClick={() => onShowFirstPopUp(true)}>먹고가기</PopUpButton>
      </PopUpContent>
    </div>
  );
}
