import { useState } from "react";
import { styled } from "styled-components";
import { FaCheck } from "react-icons/fa6";

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

const CheckboxContainer = styled.div`
  display: inline-block;
  width: 20px; // StyledCheckbox랑 동일하게 유지해줘야함
  height: 20px;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ checked }) =>
    checked ? "var(--primary-color)" : "white"};
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CheckIcon = styled(FaCheck)`
  color: white;
`;

const Checkbox = ({ className, checked, onChange, ...props }) => (
  <CheckboxContainer onClick={onChange} className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
    <StyledCheckbox checked={checked}>
      <CheckIcon checked={checked} />
    </StyledCheckbox>
  </CheckboxContainer>
);

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
