import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";
import { PlusButton, Btn } from "./adminItems/AdminButtonCSS";
import {
  PageBox,
  EachCategory,
  OneRow,
  Name,
  Buttons,
} from "./adminItems/AdminContainerCSS";
import {
  AddCategoryModal,
  EditCategoryModal,
} from "./adminItems/ModalForCategory";

export default function AdminCategory() {
  const ownerId = 1; // FIXME!! '현재 로그인하고 있는 유정 아이디' 반영 필요

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  // 실제로 GET 해오는 함수
  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_IP}/api/v1/category/all/${ownerId}`
      );
      // console.log(response);
      return response.data.responseData;
    } catch (error) {
      console.error("카테고리 불러오기 실패", error);
      return [];
    }
  };

  // 카테고리 새로 추가됐을 때 get도 새로 해오는 함수
  const fetchUpdatedCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  // 마운트 될 때 get 해와줌
  useEffect(() => {
    async function fetchCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  const handleAdd = () => {
    // 기존 handleAddCategoryButtonClick
    setIsAddModalOpen(true);
  };

  const handleEdit = (categoryId, categoryName) => {
    // 기존 handleEditCategoryButtonClick
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedCategoryId(null);
    // setNewCategoryName(""); // 팝업 창이 닫힐 때 새로운 카테고리명 상태 초기화
    //창이 닫히면 새로고침하기.
  };

  return (
    <PageBox>
      <Header title="카테고리 등록" link="/main" />
      <PlusButton onClick={handleAdd}>카테고리 추가</PlusButton>
      {categories.map((item) => (
        <EachCategory key={item.categoryId}>
          <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            카테고리명
          </div>
          <OneRow>
            <Name>{item.categoryName}</Name>
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
            <Btn>메뉴 조회</Btn>
          </Link>
        </EachCategory> // key prop 추가하여 각 항목에 고유 키 부여
      ))}
      {isAddModalOpen && (
        <AddCategoryModal
          ownerId={ownerId}
          onClose={handleCloseModal}
          onAddCategory={fetchUpdatedCategories}
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
