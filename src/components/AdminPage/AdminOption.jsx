import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import convertPrice from "../../utils/convertPrice";
import { PlusButton, Btn, SmallBtn, XBtn, BackBtn } from "./adminItems/AdminButtonCSS";
import Header from "../header/Header";
import { EditOptionCategoryModal, AddOptionModal, EditOptionModal } from "./adminItems/ModalForOption";

import {
  PageBox,
  EachOption,
  GroupName,
  OneRow,
  NameAndPrice,
  Name,
  Price,
} from "./adminItems/AdminContainerCSS";

export default function AdminOption() {
  const { category_id, menu_id } = useParams(); //url주소 얻기
  console.log(`현재 카테고리(${category_id}), 메뉴(${menu_id}의 옵션들)`);

  const optionId = [1, 2, 3, 4, 5];
  const optionList = [
    {
      optionId: 1,
      optionName: "차갑게",
      optionPrice: 1000,
    },
    {
      optionId: 2,
      optionName: "뜨겁게",
      optionPrice: 0,
    },
    {
      optionId: 3,
      optionName: "샷추가",
      optionPrice: 500,
    },
    {
      optionId: 4,
      optionName: "연하게",
      optionPrice: -300,
    },
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [selectedOptionData, setSelectedOptionData] = useState({
    optionName: "",
    optionPrice: 0,
  });

  const [isEditOptionCategoryModalOpen, setIsEditOptionCategoryModalOpen] = useState(false);

  const handleEditOptionCategory = () => {
    setIsEditOptionCategoryModalOpen(true);
  };
  

  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  const handleEdit = (optionId, optionData) => {
    setSelectedOptionId(optionId);
    setSelectedOptionData(optionData);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedOptionId(null);
  };

  return (
    <PageBox>
      <div style={{display: "flex"}}>
        <Link to="/admin"><BackBtn str="카테고리 등록"></BackBtn></Link>
        <Link to={`/admin/${category_id}`}><BackBtn str="메뉴 등록"></BackBtn></Link>
      </div>
      <Header
          title="옵션 등록"
          link="/main" />
      {/*카테고리 ID: {category_id} 메뉴 ID: {menu_id}에 대한 모든 옵션*/}
      <PlusButton onClick={handleAdd}>옵션 추가</PlusButton>
      <div style={{ padding: "8px 0", fontWeight: "bold" }}>
        옵션 카테고리명
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <GroupName>온도?? 이거맞나여</GroupName>
        <SmallBtn onClick={handleEditOptionCategory}>수정</SmallBtn>

      </div>
      <div>
        {optionList.map((option) => (
          <EachOption key={option.optionId}>
            <OneRow>
              <NameAndPrice>
                <Name>옵션(id:{option.optionId})</Name>
                <Price>{convertPrice(option.optionPrice)}</Price>
              </NameAndPrice>
              <Btn onClick={() => handleEdit(option.optionId, option)}>수정하기</Btn>
              <XBtn />
            </OneRow>
          </EachOption>
        ))}
      </div>
      {isAddModalOpen && <AddOptionModal onClose={handleCloseModal} />}
      {isEditModalOpen && selectedOptionId && (
        <EditOptionModal
          selectedOptionId={selectedOptionId}
          selectedOptionData={selectedOptionData}
          onClose={handleCloseModal}
        />
      )}
      {isEditOptionCategoryModalOpen && (
        <EditOptionCategoryModal onClose={() => setIsEditOptionCategoryModalOpen(false)} />
      )}

    </PageBox>
  );
}
