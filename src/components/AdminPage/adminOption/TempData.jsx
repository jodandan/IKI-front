import { styled } from "styled-components";

const CategoryBox = styled.div`
  background-color: lightgoldenrodyellow;
  margin: 6px 17px 25px 17px; // 상 우 하 좌
`;

export default function TempData() {
  return (
    <CategoryBox>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
    </CategoryBox>
  );
}
