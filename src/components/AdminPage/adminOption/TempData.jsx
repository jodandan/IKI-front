import { useState } from "react";
import { styled } from "styled-components";
import Checkbox from "./Checkbox";

const CategoryBox = styled.div`
  background-color: lightgoldenrodyellow;
  margin: 6px 17px 25px 17px; // 상 우 하 좌
`;

const CategoryName = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 5px;
  background-color: var(--secondary-color);

  span {
    margin-right: -20px; // checkBox 사이즈만큼
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;

const CheckArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function TempData() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  const catName = "온도";

  return (
    <CategoryBox>
      <CategoryName>
        <span>{catName}</span>
        <CheckArea>
          <Checkbox checked={isChecked} onChange={handleCheckbox} id="cb1" />
          <label htmlFor="cb1"></label>
          <div style={{ fontSize: "9px", marginTop: "2px" }}>필수</div>
        </CheckArea>
      </CategoryName>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
    </CategoryBox>
  );
}
