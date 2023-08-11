import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

const PopupBox = styled.div`
  background-color: white;
  border: 1px solid var(--primary-color);
  border-radius: 15px;
  width: 60%;
  height: 55%;
  position: fixed;
  top: 100px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  margin-left: 2%;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center; /* 가운데 정렬 추가 */
  margin-left: 30%;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 3%;
`;

const Input = styled.input`
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 13px;
  border: none;
  margin-bottom: 10px;
  background: #f2f2f2;
  display: flex;
  margin-left: 40%;
  margin-top: 5rem;
`;

const InputButton = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 5rem;
  background: #d1dbff;
  flex-shrink: 0;
  color: #002ecf;
  font-weight: 700;
  border-radius: 13px;
`;

export const AddCategoryModal = ({ onClose, ownerId, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = async () => {
    try {
      //const response = await axios.post(
      await axios.post(
        `${process.env.REACT_APP_SERVER_IP}/api/v1/category/${ownerId}`,
        {
          categoryName: categoryName,
        }
      );
      // console.log(response);
      // console.log(`${categoryName} 추가 성공`);
      onClose();
      onAddCategory();
    } catch (error) {
      console.error("카테고리 추가 실패: ", error);
    }
  };

  return (
    <PopupBox>
      <Header>
        <ModalTitle>카테고리명을 입력해주세요</ModalTitle>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <Input
        type="text"
        value={categoryName}
        onChange={handleCategoryNameChange}
      />
      <InputButton primary="true" onClick={handleAddCategory}>
        입력 완료
      </InputButton>
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
      <Header>
        <ModalTitle>수정할 카테고리 명을 입력해주세요</ModalTitle>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <Input
        type="text"
        value={newCategoryName}
        onChange={handleNewCategoryNameChange}
      />
      <InputButton onClick={handleEditCategory}>입력완료</InputButton>
    </PopupBox>
  );
};

export default EditCategoryModal;
