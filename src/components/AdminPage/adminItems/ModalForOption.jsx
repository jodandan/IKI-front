import React, { useState } from "react";
import axios from "axios";
import {
  PopupBox,
  ModalTitle,
  CloseButton,
  Input,
  InputButton,
  Box,
  InputTitle,
  TitlePlusInput,
  CheckboxLabel,
} from "./AdminModalCSS";

export const AddOptionModal = ({ onClose, menusId, onAddOption }) => {
  const [isRequired, setIsRequired] = useState(false);
  const [optionGroup, setOptionGroup] = useState("");
  const [optionName, setOptionName] = useState("");
  const [optionPrice, setOptionPrice] = useState("");

  const handleRequiredChange = (e) => {
    setIsRequired(e.target.checked);
  };

  const handleOptionGroupChange = (e) => {
    setOptionGroup(e.target.value);
  };

  const handleOptionNameChange = (e) => {
    setOptionName(e.target.value);
  };

  const handleOptionPriceChange = (e) => {
    setOptionPrice(e.target.value);
  };

  const handleAddOption = async () => {
    try {
      //const response = await axios.post(
      await axios.post(
        `${process.env.REACT_APP_SERVER_IP}/api/v1/menuoptions/${menusId}`,
        {
          menuOptionsCategory: optionGroup,
          menuOptionsContents: optionName,
          menuOptionsPrice: optionPrice,
          mandatory: isRequired,
        }
      );
      // console.log(response);
      // console.log(`${optionGroup}, ${optionName}, ${optionPrice} 추가 성공`);
      onClose();
      onAddOption();
    } catch (error) {
      console.error("옵션 추가 실패: ", error);
    }
  };

  return (
    <PopupBox>
      <ModalTitle>옵션명/가격을 입력해주세요.</ModalTitle>

      <CheckboxLabel>
        <input
          type="checkbox"
          checked={isRequired}
          onChange={handleRequiredChange}
        />
        필수
      </CheckboxLabel>
      <Box>
        <TitlePlusInput>
          <InputTitle>종류</InputTitle>
          <Input
            type="text"
            placeholder="옵션 종류"
            value={optionGroup}
            onChange={handleOptionGroupChange}
          />
        </TitlePlusInput>
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
          <InputTitle>옵션 가격</InputTitle>
          <Input
            type="number"
            placeholder="옵션 가격"
            value={optionPrice}
            onChange={handleOptionPriceChange}
          />
        </TitlePlusInput>
      </Box>
      <InputButton onClick={handleAddOption}>입력 완료</InputButton>
      <CloseButton onClose={onClose} />
    </PopupBox>
  );
};

export const EditOptionModal = ({
  selectedOptionId,
  selectedOptionData,
  onClose,
}) => {
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
      <ModalTitle>옵션 정보를 수정해주세요.</ModalTitle>
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
          <InputTitle>옵션 가격</InputTitle>
          <Input
            type="number"
            name="price"
            value={optionData.price}
            onChange={handleOptionDataChange}
          />
        </TitlePlusInput>
      </Box>
      <InputButton onClick={handleEditOption}>입력 완료</InputButton>
      <CloseButton onClose={onClose} />
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
      <ModalTitle>옵션 카테고리명 수정</ModalTitle>

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
      <InputButton onClick={handleEditCategory}>입력 완료</InputButton>
      <CloseButton onClose={onClose} />
    </PopupBox>
  );
};
