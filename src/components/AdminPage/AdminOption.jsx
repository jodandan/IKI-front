import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import convertPrice from "../../utils/convertPrice";
import Header from "../header/Header";
import {
  EditOptionCategoryModal,
  AddOptionModal,
  EditOptionModal,
} from "./adminItems/ModalForOption";
import { StyleSheetManager } from "styled-components"; // 다음 warning 제거하려 추가: StyledComponent.ts:139 styled-components: it looks like an unknown prop "hide" is being sent through to the DOM, which will likely trigger a React console error.
import {
  PlusButton,
  Btn,
  SmallBtn,
  XBtn,
  BackBtn,
} from "./adminItems/AdminButtonCSS";
import {
  PageBox,
  EachOption,
  GroupName,
  OneRow,
  OptionFields,
  Name,
  Price,
  Type,
  PilSoo,
} from "./adminItems/AdminContainerCSS";

export default function AdminOption() {
  const { categoryId, menusId } = useParams(); //url주소 얻기

  const optionList = [
    {
      optionCategory: "온도",
      optionId: 1,
      optionName: "차갑게",
      optionPrice: 1000,
    },
    {
      optionCategory: "온도",
      optionId: 2,
      optionName: "뜨겁게",
      optionPrice: 0,
    },
    {
      optionCategory: "샷",
      optionId: 3,
      optionName: "샷추가",
      optionPrice: 500,
    },
    {
      optionCategory: "샷",
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

  const [isEditOptionCategoryModalOpen, setIsEditOptionCategoryModalOpen] =
    useState(false);

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
      <Header title="옵션 등록" link="/main" />
      <div style={{ display: "flex" }}>
        <Link to="/admin">
          <BackBtn str="카테고리 등록"></BackBtn>
        </Link>
        <Link to={`/admin/${categoryId}`}>
          <BackBtn str="메뉴 등록"></BackBtn>
        </Link>
      </div>
      {/*카테고리 ID: {categoryId} 메뉴 ID: {menusId}에 대한 모든 옵션*/}
      <PlusButton onClick={handleAdd}>옵션 추가</PlusButton>
      <div style={{ padding: "8px 0", fontWeight: "bold" }}>
        옵션 카테고리명
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <GroupName>온도?? 이거맞나여</GroupName>
        <SmallBtn onClick={handleEditOptionCategory}>수정</SmallBtn>
      </div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "hide"}>
        <EachOption hide={"true"}>
          <OneRow>
            <PilSoo>필수</PilSoo>
            <OptionFields>
              <Type hide={"true"}>종류</Type>
              <Name hide={"true"}>옵션명</Name>
              <Price hide={"true"}>가격</Price>
            </OptionFields>
            <Btn hide={"true"}>수정하기</Btn>
            <XBtn hide={"true"} />
          </OneRow>
        </EachOption>
      </StyleSheetManager>
      <div>
        {optionList.map((option) => (
          <EachOption key={option.optionId}>
            <OneRow>
              <PilSoo>
                <input type="checkbox" />
              </PilSoo>
              <OptionFields>
                <Type>{option.optionCategory}</Type>
                <Name>옵션(id:{option.optionId})</Name>
                <Price>{convertPrice(option.optionPrice)}</Price>
              </OptionFields>
              <Btn onClick={() => handleEdit(option.optionId, option)}>
                수정하기
              </Btn>
              <XBtn />
            </OneRow>
          </EachOption>
        ))}
      </div>
      {isAddModalOpen && (
        <AddOptionModal onClose={handleCloseModal} menusId={menusId} />
      )}
      {isEditModalOpen && selectedOptionId && (
        <EditOptionModal
          selectedOptionId={selectedOptionId}
          selectedOptionData={selectedOptionData}
          onClose={handleCloseModal}
        />
      )}
      {isEditOptionCategoryModalOpen && (
        <EditOptionCategoryModal
          onClose={() => setIsEditOptionCategoryModalOpen(false)}
        />
      )}
    </PageBox>
  );
}
