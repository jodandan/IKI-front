import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const ReceiptContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 25px;
`;

const RegisterButton = styled.button`
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  font-size: 20px;
  border-radius: 5px;
  background: #FFFFFF;
  color: black;
`;


const Receiptoutput = ({ onClose }) => {

    const [showSmallPopUp, setShowSmallPopUp] = useState(false);

    const closeSmallPopUp = () => {
        setShowSmallPopUp(false);
        onClose();
      };

  return (
    <>
        <ReceiptContainer>
          <span>영수증 발급 완료</span>
        </ReceiptContainer>
        <RegisterButton onClick={closeSmallPopUp}>
              뒤로 가기
        </RegisterButton>
    </>
  );
};

export default Receiptoutput;
