import React, { useState } from "react";
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
  background: #F2F2F2;
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
  background: #D1DBFF;
  flex-shrink: 0;
  color: #002ECF;
  font-weight: 700;
  border-radius: 13px;
 
`;




export const AddCategoryModal = ({ onClose }) => {
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
