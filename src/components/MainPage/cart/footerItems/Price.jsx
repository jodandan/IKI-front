import { styled } from "styled-components";

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
`;

const convertPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Price({ price }) {
  return (
    <PriceBox>
      <span style={{ borderBottom: "solid 2px black" }}>
        {convertPrice(price)}
      </span>
      <span>원</span>
    </PriceBox>
  );
}
