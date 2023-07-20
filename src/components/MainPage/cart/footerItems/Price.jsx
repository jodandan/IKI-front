import { styled } from "styled-components";
import convertPrice from "../../../../utils/convertPrice";

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
`;

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
