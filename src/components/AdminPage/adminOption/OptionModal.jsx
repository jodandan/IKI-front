import React from "react";
import styled from "styled-components";

/* FIXME!! - 추후 fit in body하게 수정*/
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 55vh;
  width: 50vw; /* FIXME!! - 추후 수정 */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  width: 120px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  background: var(--secondary-color);
  color: var(--primary-color);
`;

const OptionModal = ({ isOpen, onClose }) => {
  // if (!isOpen) return null;

  return (
    <ModalBackground>
      <OptionModalBox>
        <div style={{ padding: "30px" }}> 모달입니다~</div>
        <CloseButton onClick={onClose}>입력 완료</CloseButton>
      </OptionModalBox>
    </ModalBackground>
  );
};

export default OptionModal;
