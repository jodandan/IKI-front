import React, { useState } from "react";
import { PopupBox, ModalTitle, CloseButton, Input, InputButton, Box, InputTitle, TitlePlusInput, CheckboxLabel } from "./AdminModalCSS";


export const AddMenuModal = ({ onClose }) => {
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleMenuNameChange = (e) => {
    setMenuName(e.target.value);
  };

  const handleMenuPriceChange = (e) => {
    setMenuPrice(e.target.value);
  };

  const handleSoldOutChange = (e) => {
    setIsSoldOut(e.target.checked);
  };

  const handleAddMenu = () => {
    // TODO: 메뉴를 추가하는 기능을 수행하는 코드 작성
    console.log(`메뉴:${menuName}/가격:${menuPrice} 추가 완료`);
    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
      <ModalTitle>메뉴 이름/가격을 입력해주세요</ModalTitle>
      <Box>
        <TitlePlusInput>
          <InputTitle>메뉴명</InputTitle>
          <Input
            type="text"
            placeholder="Menu Name"
            value={menuName}
            onChange={handleMenuNameChange}
          />
        </TitlePlusInput>
        <TitlePlusInput>
          <InputTitle>가격</InputTitle>
          <Input
            type="number"
            placeholder="Menu Price"
            value={menuPrice}
            onChange={handleMenuPriceChange}
          />
        </TitlePlusInput>
      </Box>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={isSoldOut}
          onChange={handleSoldOutChange}
        />품절
      </CheckboxLabel>
      <InputButton onClick={handleAddMenu}>입력 완료</InputButton>
      <CloseButton onClick={onClose} />
    </PopupBox>
  );
};




export const EditMenuModal = ({
  selectedMenuId,
  selectedMenuData,
  onClose,
}) => {
  console.log(selectedMenuData);
  const [menuData, setMenuData] = useState({
    name: selectedMenuData.name,
    price: selectedMenuData.price,
    soldOut: selectedMenuData.soldOut,
  });

  const handleMenuDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setMenuData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleEditMenu = () => {
    // TODO: 메뉴를 수정하는 기능을 수행하는 코드 작성
    console.log(menuData); // 예시: 수정된 메뉴 정보를 콘솔에 출력

    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
        <ModalTitle>메뉴 이름/가격을 입력해주세요</ModalTitle>
      <Box>
        <TitlePlusInput>
          <InputTitle>메뉴명</InputTitle>
          <Input
            type="text"
            name="name"
            value={menuData.name}
            onChange={handleMenuDataChange}
          />
        </TitlePlusInput>

        <TitlePlusInput>
          <InputTitle>가격</InputTitle>
          <Input
            type="number"
            name="price"
            value={menuData.price}
            onChange={handleMenuDataChange}
          />
        </TitlePlusInput>
      </Box>
      <CheckboxLabel>
        <input
          type="checkbox"
          name="soldOut"
          checked={menuData.soldOut}
          onChange={handleMenuDataChange}
        />
        품절
      </CheckboxLabel>
      <InputButton onClick={handleEditMenu}>입력 완료</InputButton>
      <CloseButton onClick={onClose}/>
    </PopupBox>
  );
};

export const EditCategoryModal = ({ currentCategoryName, onClose, onSave }) => {
  const [newCategoryName, setNewCategoryName] = useState(currentCategoryName);

  const handleCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleSave = () => {
    onSave(newCategoryName);
    onClose();
  };

  return (
    <PopupBox>
      <ModalTitle>수정할 카테고리 이름을 입력해주세요 </ModalTitle>
      <Input
        type="text"
        placeholder="새 카테고리 이름"
        value={newCategoryName}
        onChange={handleCategoryNameChange}
      />
      <InputButton onClick={handleSave}>저장</InputButton>
      <CloseButton onClick={onClose} />
    </PopupBox>
  );
};
