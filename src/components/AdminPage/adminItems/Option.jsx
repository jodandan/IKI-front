import React, { useState } from "react";
import { styled } from "styled-components";
import OptionModal from "../adminOption/OptionModal";
import Category from "./Category";

const AdminContainerBox = styled.div`
  padding: 0 1.2vw;
  overflow-y: auto;
  height: 100%;
`;

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

export default function Option(numCategories) {

  const categories = [];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  for (let i = 0; i < numCategories; i++) {
    categories.push(<Category key={i} />);
  }


  return (
    <>
      <AdminContainerBox>

         <div
          onClick={openModal}
          style={{
            padding: "10px",
            background: "pink",
            cursor: "pointer",
          }}
        >
          옵션
        </div>
        <OptionModal isOpen={isModalOpen} onClose={closeModal} /> 
        {categories}
      </AdminContainerBox>
    </>
  );
}
