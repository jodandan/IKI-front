import React, { useState } from "react";
import { PopupBox, ModalTitle, CloseButton, Input, InputButton } from "./AdminModalContainerCSS";

export const AddCategoryModal = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    console.log(`${categoryName}카테고리가 추가 됨`);
    //새로운 카테고리를 서버로 save
    onClose();
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
      <CloseButton onClick={onClose} />
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
      <CloseButton onClick={onClose} />
    </PopupBox>
  );
};

export default EditCategoryModal;
