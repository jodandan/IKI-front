import React, { useState } from "react";
import { styled } from "styled-components";

const OptionButton = styled.button` /* 옵션 누르는 버튼(나중에 조정해야할듯 해요) */
  background-color: #FFFFFF;
  margin-left: 1rem;
  height: 25px;

  border: none;
  z-index: 9000;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;
const PopupContainer = styled.div`
  position: fixed;
  z-index:9999;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #FFFFFF;
  width: 595px;
  height: 834px;
  padding: 20px;
`;

export default function Option() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOptionButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <OptionButton onClick={handleOptionButtonClick}>옵션</OptionButton>
      <PopupContainer isOpen={isPopupOpen} onClick={handleClosePopup}>
        <PopupContent onClick={(e) => e.stopPropagation()}>
          {/* Add the content for the pop-up here */}
          <h2>Popup Content</h2>
          {/* ... (add your content here) */}
        </PopupContent>
      </PopupContainer>
    </>
  );
}
