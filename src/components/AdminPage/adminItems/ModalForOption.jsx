// ModalForOption.js

import React, { useState } from "react";
import { styled } from "styled-components";

const PopupBox = styled.div`
  background-color: white;
  border: 1px solid var(--primary-color);
  border-radius: 15px;  
  width: 60%;
  height: 55%;
  position: fixed;
  top: 100px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  margin-left: 2%;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center; /* 가운데 정렬 추가 */
  margin-left: 30%;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 3%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 13px;
  border: none;
  margin-bottom: 10px;
  background: #F2F2F2;
  display: flex;
  margin-left: 13%;
  margin-top: 5rem;
  
  
`;

const InputButton = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 5rem;
  background: #D1DBFF;
  flex-shrink: 0;
  color: #002ECF;
  font-weight: 700;
  border-radius: 13px;
 
`;

const Box = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
`;

const InputTitle =  styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-top: 20%;
`;

const TitlePlusInput = styled.div`
  margin-left: 14%;

`;

export const AddOptionModal = ({ onClose }) => {
  const [optionName, setOptionName] = useState("");
  const [optionPrice, setOptionPrice] = useState("");

  const handleOptionNameChange = (e) => {
    setOptionName(e.target.value);
  };

  const handleOptionPriceChange = (e) => {
    setOptionPrice(e.target.value);
  };

  const handleAddOption = () => {
    // TODO: 옵션을 추가하는 기능을 수행하는 코드 작성
    console.log(`옵션:${optionName}/가격:${optionPrice} 추가 완료`);
    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
        <Header>
            <ModalTitle>옵션명/가격을 입력해주세요.</ModalTitle>
            <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Box>
        <TitlePlusInput>
            <InputTitle>옵션명</InputTitle>
            <Input
              type="text"
              placeholder="옵션명"
              value={optionName}
              onChange={handleOptionNameChange}
            />
        </TitlePlusInput>
        <TitlePlusInput>
            <InputTitle>가격</InputTitle> 
            <Input
              type="number"
              placeholder="옵션 가격"
              value={optionPrice}
              onChange={handleOptionPriceChange}
            />
        </TitlePlusInput>
        </Box>
        <InputButton onClick={handleAddOption}>추가</InputButton>
    </PopupBox>
  );
};

export const EditOptionModal = ({ selectedOptionId, selectedOptionData, onClose }) => {
  const [optionData, setOptionData] = useState({
    name: selectedOptionData.optionName,
    price: selectedOptionData.optionPrice,
  });

  const handleOptionDataChange = (e) => {
    const { name, value } = e.target;
    setOptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditOption = () => {
    // TODO: 옵션을 수정하는 기능을 수행하는 코드 작성
    console.log(optionData); // 예시: 수정된 옵션 정보를 콘솔에 출력

    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
        <Header>
            <ModalTitle>옵션 수정을 수정해주세요.</ModalTitle>
            <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Box>
        <TitlePlusInput>
        <InputTitle>옵션명</InputTitle>
            <Input
              type="text"
              name="name"
              value={optionData.name}
              onChange={handleOptionDataChange}
            />
        </TitlePlusInput>
        <TitlePlusInput>
        <InputTitle>옵션명</InputTitle>
            <Input
              type="number"
              name="price"
              value={optionData.price}
              onChange={handleOptionDataChange}
            />
        </TitlePlusInput>
        </Box>
        <InputButton onClick={handleEditOption}>저장</InputButton>
    </PopupBox>
  );
};

export const EditOptionCategoryModal = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleEditCategory = () => {
    // TODO: 카테고리명 수정하는 로직 작성
    console.log(`수정된 카테고리명: ${categoryName}`);
    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
      <Header>
        <ModalTitle>옵션 카테고리명 수정</ModalTitle>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <Box>
        <TitlePlusInput>
          <InputTitle>새로운 카테고리명</InputTitle>
          <Input
            type="text"
            placeholder="카테고리명"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </TitlePlusInput>
      </Box>
      <InputButton onClick={handleEditCategory}>저장</InputButton>
    </PopupBox>
  );
};


