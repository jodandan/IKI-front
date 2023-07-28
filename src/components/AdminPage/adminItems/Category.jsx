import { styled } from "styled-components";
import { useState } from "react";

import MenuInput from "./MenuInput";
import PriceInput from "./PriceInput";
import Option from "./Option";

const CategoryBox = styled.div`
  background-color: #efefef;
  padding: 15px;
  margin-bottom: 16px;
`;

const CategoryName = styled.div` /* 카테고리명 */ 
  margin-bottom: 10px
`;

const CategoryInput = styled.input` /* 카테고리 적혀있을 박스 */
  background-color: #d9d9d9;
  padding: 10px 20px;
  border: none;

`;

const Text = styled.div`
  display: flex;
`;

const SoldOutText = styled.div` /* 품절 */
  margin-bottom: 10px;
  margin-top: 10px;
`;

const MenuText = styled.div` /* 메뉴명 */
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 7rem;
`;

const PriceText = styled.div` /* 가격 */
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 11rem;
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
  background-color: #D9D9D9;
  margin-left: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  cursor: pointer;
`;

const MenuPlus = styled.div`
  background-color: #d9d9d9;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 20px;
  text-align: center;
  cursor: pointer;

  &:active {
    background-color: #cfcfcf;
  }
`;

const BoxContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;



export default function Category() {

  const [categoryName, setCategoryName] = useState("");
  const [MenuName, setMenuName] = useState("");
  const [PriceName, setPriceName] = useState("");

  const [isSoldOut, setIsSoldOut] = useState(false);

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
        </CategoryInput>
        
        <Text>
          <SoldOutText>품절</SoldOutText>
          <MenuText>메뉴명</MenuText>
          <PriceText>가격</PriceText>
        </Text>

        <Box>
          <SoldOutCheckBox onClick={handleSoldOutToggle}>
              <Checkmark checked={isSoldOut} />
          </SoldOutCheckBox>

          <MenuInput
            value={MenuName}
            onChange={(e) => setMenuName(e.target.value)}
            onClear={() => setMenuName("")}
          />

          <PriceInput
            value={PriceName}
            onChange={(e) => setPriceName(e.target.value)}
            onClear={() => setPriceName("")}
          />

          <Option/>
        </Box>

        {menuItems.map((item, index) => (
          <Box key={index}>
            <BoxContentWrapper>
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
              <Option />
           </BoxContentWrapper>
          </Box>
        ))}
        <MenuPlus onClick={handleMenuPlusClick} >
          +
        </MenuPlus>
      </div>
    </CategoryBox>
  );
}
