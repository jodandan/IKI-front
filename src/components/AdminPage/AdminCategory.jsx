import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusBtn, Btn, DeleteBtn } from "./adminItems/AdminButtonCSS";
import { Box } from "./adminItems/AdminContainerCSS";
import AllCategory from "./DummyData/AllCategory.json";
import AddCategoryModal from "./adminItems/AddCategory";
import EditCategoryModal from "./adminItems/EditCategory";

export default function AdminCategory() {
  const allCategotyData = AllCategory; //백으로부터 get하기

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const handleAddCategoryButtonClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditCategoryButtonClick = (category_id, categoryName) => {
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
    <>
      <h2>모든 카테고리</h2>
      <PlusBtn onClick={handleAddCategoryButtonClick}>카테고리 추가</PlusBtn>
      {allCategotyData.responseData.map(
        (
          item // 여기서 중괄호가 아닌 괄호로 수정
        ) => (
          <Box key={item.categoryId}>
            <div>
              {item.categoryName}(id:{item.categoryId})
            </div>
            <DeleteBtn>카테고리 삭제</DeleteBtn>
            <Btn
              onClick={() =>
                handleEditCategoryButtonClick(
                  item.categoryId,
                  item.categoryName
                )
              }
            >
              카테고리명 수정
            </Btn>
            <Link
              to={`/admin/${item.categoryId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* 카테고리 삭제 */}
              <Btn>카테고리 내 메뉴 관리하기</Btn>
            </Link>
          </Box> // key prop 추가하여 각 항목에 고유 키 부여
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
    </>
  );
}
