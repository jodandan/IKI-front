import React, { useState } from "react";
import axios from "axios";
import {
  PopupBox,
  ModalTitle,
  CloseButton,
  Input,
  InputButton,
} from "./AdminModalCSS";

export const AddCategoryModal = ({ onClose, ownerId, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = async () => {
    try {
      //const response = await axios.post(
      await axios.post(
        `${process.env.REACT_APP_SERVER_IP}/api/v1/category/${ownerId}`,
        {
          categoryName: categoryName,
        }
      );
      // console.log(response);
      // console.log(`${categoryName} 추가 성공`);
      onClose();
      onAddCategory();
    } catch (error) {
      console.error("카테고리 추가 실패: ", error);
    }
  };

  return (
    <PopupBox>
      <ModalTitle>카테고리명을 입력해주세요</ModalTitle>
      <Input
        type="text"
        value={categoryName}
        onChange={handleCategoryNameChange}
      />
      <InputButton primary="true" onClick={handleAddCategory}>
        입력 완료
      </InputButton>
      <CloseButton onClose={onClose} />
    </PopupBox>
  );
};

export const EditCategoryModal = ({
  selectedCategoryId,
  selectedCategoryName,
  onClose,
}) => {
  const [newCategoryName, setNewCategoryName] = useState(selectedCategoryName);

  const handleNewCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleEditCategory = () => {
    // TODO: 카테고리명을 수정하는 기능을 수행하는 코드 작성

    // 모달 창 닫기
    console.log(
      `${selectedCategoryName}(id=${selectedCategoryId})를 ${newCategoryName}으로 update`
    );
    onClose();
  };

  return (
    <PopupBox>
      <ModalTitle>수정할 카테고리 명을 입력해주세요</ModalTitle>
      <Input
        type="text"
        value={newCategoryName}
        onChange={handleNewCategoryNameChange}
      />
      <InputButton onClick={handleEditCategory}>입력완료</InputButton>
      <CloseButton onClose={onClose} />
    </PopupBox>
  );
};

export default EditCategoryModal;
