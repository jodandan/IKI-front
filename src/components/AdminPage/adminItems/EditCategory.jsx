import React, { useState } from "react";
import { PopupBox } from "./AdminContainerCSS";

const EditCategoryModal = ({
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
      <h2>Edit Category</h2>
      <input
        type="text"
        value={newCategoryName}
        onChange={handleNewCategoryNameChange}
      />
      <button onClick={handleEditCategory}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </PopupBox>
  );
};

export default EditCategoryModal;
