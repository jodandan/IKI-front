import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { PlusButton, Btn } from "./adminItems/AdminButtonCSS";
import {
  PageBox,
  EachCategory,
  OneRow,
  Name,
  Buttons,
} from "./adminItems/AdminContainerCSS";
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

  const [newCategoryName, setNewCategoryName] = useState(""); // 새로운 카테고리명 상태 추가
  const [categories, setCategories] = useState(allCategotyData.responseData);
  const handleAdd = () => {
    // 기존 handleAddCategoryButtonClick
    setIsAddModalOpen(true);
    console.log(isAddModalOpen);
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
    setNewCategoryName(""); // 팝업 창이 닫힐 때 새로운 카테고리명 상태 초기화
    //창이 닫히면 새로고침하기.
  };

  const handleNewCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    console.log(`${newCategoryName} 카테고리가 추가 됨`);
    // TODO: 서버로 새 카테고리를 추가하는 로직을 여기에 구현
    const newCategory = {
      categoryId: categories.length + 1,
      categoryName: newCategoryName,
    };
    setCategories([...categories, newCategory]);
    handleCloseModal();
  };


  return (
    <PageBox>
      <Header
          title="카테고리 등록"
          link="/main" />
      <PlusButton onClick={handleAdd}>카테고리 추가</PlusButton>
      {allCategotyData.responseData.map(
        (
          item // 여기서 중괄호가 아닌 괄호로 수정
        ) => (
          <EachCategory key={item.categoryId}>
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              카테고리명
            </div>
            <OneRow>
              <Name>
                {item.categoryName}(id:{item.categoryId})
              </Name>
              <Buttons>
                <Btn
                  onClick={() => handleEdit(item.categoryId, item.categoryName)}
                >
                  수정하기
                </Btn>
                <Btn>삭제하기</Btn>
              </Buttons>
            </OneRow>
            <Link
              to={`/admin/${item.categoryId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* 카테고리 삭제 */}
              <Btn>메뉴 조회</Btn>
            </Link>
          </EachCategory> // key prop 추가하여 각 항목에 고유 키 부여
        )
      )}
      {isAddModalOpen && (
        <AddCategoryModal
          onClose={handleCloseModal}
          newName={newCategoryName}
          onChangeNewName={handleNewCategoryNameChange}
          onAddCategory={handleAddCategory}
        />
      )}
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
