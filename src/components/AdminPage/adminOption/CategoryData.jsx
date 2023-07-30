import React, { useState } from "react";
import { styled } from "styled-components";
import CategoryName from "./CategoryName"; // Import the new component

const CategoryBox = styled.div`
  background-color: lightgoldenrodyellow;
  margin: 6px 17px 25px 17px; // 상 우 하 좌
`;

export default function TempData() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  const catName = "온도";

  return (
    <CategoryBox>
      {/* Use the new CategoryName component */}
      <CategoryName
        catName={catName}
        isChecked={isChecked}
        handleCheckbox={handleCheckbox}
      />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
    </CategoryBox>
  );
}
