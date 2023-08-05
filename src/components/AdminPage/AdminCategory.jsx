import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusButton, Btn } from "./adminItems/AdminButtonCSS";
import { PageBox, EachBox, NameBox } from "./adminItems/AdminContainerCSS";
import AllCategory from "./DummyData/AllCategory.json";
import {
  AddCategoryModal,
  EditCategoryModal,
} from "./adminItems/ModalForCategory";

export default function AdminCategory() {
  const allCategotyData = AllCategory; //백으로부터 get하기

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const handleAdd = () => {
    // 기존 handleAddCategoryButtonClick
    setIsAddModalOpen(true);
  };

  const handleEdit = (category_id, categoryName) => {
    // 기존 handleEditCategoryButtonClick
    setSelectedCategoryId(category_id);
    setSelectedCategoryName(categoryName);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedCategoryId(null);
    //창이 닫히면 새로고침하기.
  };

  return (
    <PageBox>
      <PlusButton onClick={handleAdd}>카테고리 추가</PlusButton>
      {allCategotyData.responseData.map(
        (
          item // 여기서 중괄호가 아닌 괄호로 수정
        ) => (
          <EachBox key={item.categoryId}>
            <div>카테고리명</div>
            <NameBox>
              {item.categoryName}(id:{item.categoryId})
            </NameBox>
            <Btn onClick={() => handleEdit(item.categoryId, item.categoryName)}>
              카테고리명 수정
            </Btn>
            <Btn>카테고리 삭제</Btn>
            <Link
              to={`/admin/${item.categoryId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* 카테고리 삭제 */}
              <Btn>메뉴 조회</Btn>
            </Link>
          </EachBox> // key prop 추가하여 각 항목에 고유 키 부여
        )
      )}
      {isAddModalOpen && <AddCategoryModal onClose={handleCloseModal} />}
      {isEditModalOpen && (
        <EditCategoryModal
          selectedCategoryId={selectedCategoryId}
          selectedCategoryName={selectedCategoryName}
          onClose={handleCloseModal}
        />
      )}
    </PageBox>
  );
}
