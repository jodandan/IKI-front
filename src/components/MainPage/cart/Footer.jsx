import { styled } from "styled-components";
import Price from "./cart-items/Price";
import PayButton from "./cart-items/PayButton";

const FooterBox = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  background-color: #9a9a9a;
  padding: 12px;
  font-size: var(--font-big);
`;

export default function Footer() {
  var price = 8000;
  return (
    <FooterBox>
      <Price price={price} />
      <PayButton />
    </FooterBox>
  );
}
