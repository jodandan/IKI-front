import React from "react";
import { styled } from "styled-components";

const ReceiptContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 25px;
`;


const Receiptoutput = ({ onClose }) => {


  return (
    <>
        <ReceiptContainer>
          <span>영수증 발급 완료</span>
        </ReceiptContainer>
    </>
  );
};

export default Receiptoutput;
