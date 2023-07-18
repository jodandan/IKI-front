import React from "react";
import { styled } from "styled-components";

const RegistrationCompleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 82, 212, 0.70);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 25px;
`;

const RegistrationComplete = () => {
  return (
    <RegistrationCompleteContainer>
      <span>포인트 등록 완료</span>
    </RegistrationCompleteContainer>
  );
};

export default RegistrationComplete;
