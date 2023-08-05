import React, { useState } from "react";
import { PopupBox } from "./AdminContainerCSS";

const AddCategoryModal = ({ onClose }) => {
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
      <h2>Add Category</h2>
      <input
        type="text"
        value={categoryName}
        onChange={handleCategoryNameChange}
      />
      <button onClick={handleAddCategory}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </PopupBox>
  );
};

export default AddCategoryModal;
