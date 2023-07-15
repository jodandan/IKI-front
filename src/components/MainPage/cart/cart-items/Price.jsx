import { styled } from "styled-components";

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
`;

export default function Price({ price }) {
  return (
    <PriceBox>
      <span style={{ borderBottom: "solid 2px black" }}>{price}</span>
      <span>원</span>
    </PriceBox>
  );
}
