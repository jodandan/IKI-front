import { useState } from "react";
import { styled } from "styled-components";
import CategoryName from "./CategoryName";
import { AddOptionButton } from "./ButtonCSS";
import { FaPlus, FaXmark } from "react-icons/fa6";

const CategoryBox = styled.div`
  margin: 6px 17px 20px 17px; // 상 우 하 좌
`;

const CategoryContents = styled.div`
  // background-color: darkgray;
  padding: 10px 0;
  display: grid;
  gap: 5px;
`;

const EachOption = styled.div`
  // each 옵션 이름 & 가격 row
  display: grid;
  gap: 15px;
  grid-template-columns: 4fr 3fr 20px;

  .fixed {
    background: var(--primary-color);
    color: white;
  }

  div {
    // 옵션이름 칸 그 자체
    border-radius: 4px;
    padding: 3px 0;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border: none;
      outline: none;
      background: none;
      text-align: center;
      margin: 0;
    }
  }
`;

export default function TempData() {
  const [optionName, setOptionName] = useState("");
  const [optionPrice, SetOptionPrice] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  //const catName = "온도";

  return (
    <CategoryBox>
      <CategoryName isChecked={isChecked} handleCheckbox={handleCheckbox} />
      <CategoryContents>
        <EachOption className="fixed">
          <div className="fixed">옵션 이름</div>
          <div className="fixed">가격</div>
        </EachOption>
        <EachOption>
          <div>
            <input
              type="text"
              placeholder="옵션명 입력"
              value={optionName}
              onChange={(e) => setOptionName(e.target.value)}
            />
          </div>
          <div>
            <input
              // 옆에 arrow 생기는거 싫어서 일단 type="text"로 해둠
              type="text"
              placeholder="가격 입력"
              step="100"
              value={optionPrice}
              onChange={(e) => SetOptionPrice(e.target.value)}
            />
          </div>
          <div style={{ cursor: "pointer" }}>
            <FaXmark style={{ color: "#515151" }} />
          </div>
        </EachOption>
        <AddOptionButton>
          <FaPlus style={{ color: "#515151" }} />
        </AddOptionButton>
      </CategoryContents>
    </CategoryBox>
  );
}
