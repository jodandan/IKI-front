import React from "react";
import styled from "styled-components";

const PriceInputContainer = styled.div` /* 가격 박스, 가격 삭제버튼 담는 박스 */
  position: relative;
`;

const PriceInputTextBox = styled.input` /* 가격 적혀있을 박스 */
  background-color: #C6C6C6;
  margin-left: 1rem;

  padding: 5px 20px;

  word-break:break-all;
  border: none;
`;

const PriceNameClearButton = styled.button` /* 가격 삭제버튼 */
  position: absolute;
  margin-top: 0.1rem;
  margin-left: -30px;
  background-color: #C6C6C6;
  border: none;
  cursor: pointer;
`;


const PriceInput = ({ value, onChange, onClear }) => {
    return (
      <PriceInputContainer>
        <PriceInputTextBox
          type="text"
          placeholder="가격 입력"
          value={value}
          onChange={onChange}
          contentEditable
        />
        <PriceNameClearButton onClick={onClear}>❌</PriceNameClearButton>
      </PriceInputContainer>
    );
  };

  export default PriceInput;