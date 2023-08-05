import React, { useState } from "react";
import { PopupBox } from "./AdminContainerCSS";

export const AddMenuModal = ({ onClose }) => {
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");

  const handleMenuNameChange = (e) => {
    setMenuName(e.target.value);
  };

  const handleMenuPriceChange = (e) => {
    setMenuPrice(e.target.value);
  };

  const handleAddMenu = () => {
    // TODO: 메뉴를 추가하는 기능을 수행하는 코드 작성
    console.log(`메뉴:${menuName}/가격:${menuPrice} 추가 완료`);
    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
      <h2>Add Menu</h2>
      <input
        type="text"
        placeholder="Menu Name"
        value={menuName}
        onChange={handleMenuNameChange}
      />
      <input
        type="number"
        placeholder="Menu Price"
        value={menuPrice}
        onChange={handleMenuPriceChange}
      />
      <button onClick={handleAddMenu}>Add</button>
      <button onClick={onClose}>Cancel</button>
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
      <h2>Edit Menu</h2>
      <input
        type="text"
        name="name"
        value={menuData.name}
        onChange={handleMenuDataChange}
      />
      <input
        type="number"
        name="price"
        value={menuData.price}
        onChange={handleMenuDataChange}
      />
      <label>
        Sold Out:
        <input
          type="checkbox"
          name="soldOut"
          checked={menuData.soldOut}
          onChange={handleMenuDataChange}
        />
      </label>
      <button onClick={handleEditMenu}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </PopupBox>
  );
};
