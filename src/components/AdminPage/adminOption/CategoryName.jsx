import React from "react";
import { styled } from "styled-components";
import Checkbox from "./Checkbox";

const CategoryNameWrapper = styled.div`
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

const CategoryName = ({ catName, isChecked, handleCheckbox }) => {
  return (
    <CategoryNameWrapper>
      <span>{catName}</span>
      <CheckArea>
        <Checkbox checked={isChecked} onChange={handleCheckbox} id="cb1" />
        <label htmlFor="cb1"></label>
        <div style={{ fontSize: "9px", marginTop: "2px" }}>필수</div>
      </CheckArea>
    </CategoryNameWrapper>
  );
};

export default CategoryName;
