import React, { useState } from "react";
import { styled } from "styled-components";
import OptionModal from "../adminOption/OptionModal";
import Category from "./Category";

const AdminContainerBox = styled.div`
  padding: 0 1.2vw;
  overflow-y: auto;
  height: 100%;
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
            padding: "5px 25px",
            borderRadius: "5px",
            background: "#D1DBFF",
            color: "#002ECF",
            cursor: "pointer",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
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
