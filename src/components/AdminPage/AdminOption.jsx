import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Footer,
} from "./adminItems/AdminContainerCSS";

export default function AdminOption() {
  const { categoryId, menusId } = useParams(); //url주소 얻기

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [selectedOptionData, setSelectedOptionData] = useState({
    optionName: "",
    optionPrice: 0,
  });
  const [isEditOptionCategoryModalOpen, setIsEditOptionCategoryModalOpen] =
    useState(false);
  const [options, setOptions] = useState([]);

  const getOptions = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_IP}/api/v1/menus/${menusId}`
      );
      console.log("Options API Response:", response.data.responseData); // Log the API response
      return response.data.responseData;
    } catch (error) {
      console.error("옵션 불러오기 실패", error);
      return [];
    }
  };

  const fetchUpdatedOptions = async () => {
    const options = await getOptions();
    getOptions(options);
  };

  useEffect(() => {
    async function fetchOptions() {
      const options = await getOptions();
      setOptions(options);
    }
    fetchOptions();
  }, []);

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
      <PlusButton onClick={handleAdd}>옵션 추가</PlusButton>
      <div style={{ padding: "8px 0", fontWeight: "bold" }}>메뉴명</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <GroupName>{options.menusName}</GroupName>
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
        {options.menuOptionsList &&
          options.menuOptionsList.map((option) => (
            <EachOption key={option.menuOptionsId}>
              <OneRow>
                <PilSoo>
                  <input type="checkbox" />
                </PilSoo>
                <OptionFields>
                  <Type>{option.menuOptionsCategory}</Type>
                  <Name>{option.menuOptionsContents}</Name>
                  <Price>{convertPrice(option.menuOptionsPrice)}</Price>
                </OptionFields>
                <Btn onClick={() => handleEdit(option.menuOptionsId, option)}>
                  수정하기
                </Btn>
                <XBtn />
              </OneRow>
            </EachOption>
          ))}
      </div>
      {isAddModalOpen && (
        <AddOptionModal
          onClose={handleCloseModal}
          menusId={menusId}
          onAddOption={fetchUpdatedOptions}
        />
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
      <Footer />
    </PageBox>
  );
}
