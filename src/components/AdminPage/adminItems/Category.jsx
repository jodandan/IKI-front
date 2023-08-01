import { styled } from "styled-components";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import MenuInput from "./MenuInput";
import PriceInput from "./PriceInput";
import Option from "./Option";


const CategoryBox = styled.div`
  background-color: #efefef;
  padding: 15px;
  margin-bottom: 16px;
`;

const CategoryName = styled.div` /* 카테고리명 */ 
  margin-bottom: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight:500;
  line-height: normal;
`;

const CategoryInput = styled.textarea` /* 카테고리 적혀있을 박스 */
  background-color: #FFF;
  padding: 10px 20px;
  border: none;
  resize: none;
  width: 90%;

  font-size: 16px;
  font-weight: bolder;

  
`;

const Text = styled.div`
  display: flex;
`;

const SoldOutText = styled.div` /* 품절 */
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight:500;
  line-height: normal;
`;

const MenuText = styled.div` /* 메뉴명 */
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 5rem;
  font-size: 20px;
  font-style: normal;
  font-weight:500;
  line-height: normal;
`;

const PriceText = styled.div` /* 가격 */
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 11rem;
  font-size: 20px;
  font-style: normal;
  font-weight:500;
  line-height: normal;
`;

const Box = styled.div` /* INput들 담는 박스  */
  display: flex;
`;

const Checkmark = styled.span` /* 체크박스 안에 표시되는 마크 */
  position: absolute;
  top: 2px;
  left: 0.5rem;
  width: 5px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  display: ${(props) => (props.checked ? "block" : "none")};
`;


const SoldOutCheckBox = styled.div` /* 품절 체크박스  */
  background-color: #FFF;
  margin-left: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  cursor: pointer;
`;

const MenuPlus = styled.div`
  background-color: #FFF;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;

  &:active {
    background-color: #cfcfcf;
  }

  .plus {
    margin-right: 2px;
    border-radius: 3px;
    width: 13px;
    height: 13px;
    background-color: var(--primary-color);
    color: white;
    padding: 2px;
  }
`;





export default function Category() {

  const [categoryName, setCategoryName] = useState("");
  const [MenuName, setMenuName] = useState("");
  const [PriceName, setPriceName] = useState("");


  const [isModalOpen, setIsModalOpen] = useState(false);

  const [menuItems, setMenuItems] = useState([]);

  const handleSoldOutToggle = (index) => {
    setMenuItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isSoldOut: !item.isSoldOut } : item
      )
    );
  };

  const handleMenuPlusClick = () => {
    const newItem = {
      isSoldOut: false, // Initialize the isSoldOut status to false for the new item
      menuName: MenuName,
      priceName: PriceName,
    };
    setMenuItems([...menuItems, newItem]);
    setMenuName("");
    setPriceName("");
  };

  const handleOptionClick = () => {
    setIsModalOpen(true);
  };
  

  return (
    <CategoryBox>
      <div>
        <CategoryName>카테고리명</CategoryName>
        <CategoryInput
          type="text"
          placeholder="카테고리 입력"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          contentEditable
        >
          {" "}
        </CategoryInput>

        <Text>
          <SoldOutText>품절</SoldOutText>
          <MenuText>메뉴명</MenuText>
          <PriceText>가격</PriceText>
        </Text>

        {menuItems.map((item, index) => (
          <Box key={index}>
            <SoldOutCheckBox onClick={() => handleSoldOutToggle(index)}>
              <Checkmark checked={item.isSoldOut} />
            </SoldOutCheckBox>
          
            <MenuInput
              value={item.menuName}
              onChange={(e) =>
                setMenuItems((prevItems) =>
                  prevItems.map((prevItem, i) =>
                    i === index
                      ? { ...prevItem, menuName: e.target.value }
                      : prevItem
                  )
                )
              }
              onClear={() =>
                setMenuItems((prevItems) =>
                  prevItems.map((prevItem, i) =>
                    i === index ? { ...prevItem, menuName: "" } : prevItem
                  )
                )
              }
            />

            <PriceInput
              value={item.priceName}
              onChange={(e) =>
                setMenuItems((prevItems) =>
                  prevItems.map((prevItem, i) =>
                    i === index
                      ? { ...prevItem, priceName: e.target.value }
                      : prevItem
                  )
                )
              }
              onClear={() =>
                setMenuItems((prevItems) =>
                  prevItems.map((prevItem, i) =>
                    i === index ? { ...prevItem, priceName: "" } : prevItem
                  )
                )
              }
            />
            <Option onClick={handleOptionClick} />
          </Box>
        ))}
        <MenuPlus 
          onClick={handleMenuPlusClick}>
          <FaPlus className="plus" />

          메뉴추가 
        </MenuPlus>
      </div>
    </CategoryBox>
  );
}
