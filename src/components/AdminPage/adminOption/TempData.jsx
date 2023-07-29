import { styled } from "styled-components";

const CategoryBox = styled.div`
  background-color: lightgoldenrodyellow;
  margin: 6px 17px 25px 17px; // 상 우 하 좌
`;

const CategoryName = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 5px;
  background-color: var(--secondary-color);

  span {
    flex: 1;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default function TempData() {
  const catName = "온도";

  return (
    <CategoryBox>
      <CategoryName>
        <span>{catName}</span>
        <div>
          <input type="checkbox"></input>
          <span>필수</span>
        </div>
      </CategoryName>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
    </CategoryBox>
  );
}
