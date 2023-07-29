import { useState } from "react";
import styled from "styled-components";
import { PlusButton, CloseButton } from "./ButtonCSS";
import TempData from "./TempData";

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
  // justify-content: space-between;
  background-color: white;
  height: 60vh;
  width: 50vw; /* FIXME!! - 추후 수정 */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const OptionContents = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

const OptionModal = ({ isOpen, onClose }) => {
  // if (!isOpen) return null;
  const menuName = "아메리카노";
  const [numCategories, setNumCategories] = useState(1);
  const addCategory = () => {
    setNumCategories((prev) => prev + 1);
  };
  const categories = [];
  for (let i = 0; i < numCategories; i++) {
    categories.push(<TempData key={i} />);
  }

  return (
    <ModalBackground>
      <OptionModalBox>
        <div
          style={{
            margin: "18px",
            fontWeight: "bold",
            fontSize: "var(--font-big)",
          }}
        >
          {menuName}
        </div>
        <OptionContents>
          {categories}
          <PlusButton addCategory={addCategory}>카테고리 추가</PlusButton>
        </OptionContents>
        <CloseButton onClick={onClose}>입력 완료</CloseButton>
      </OptionModalBox>
    </ModalBackground>
  );
};

export default OptionModal;
