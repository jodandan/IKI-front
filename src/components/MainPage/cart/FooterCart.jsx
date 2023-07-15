import { styled } from "styled-components";
import Cart from "./Cart";
import Footer from "./Footer";

const FooterCartBox = styled.div`
  position: sticky;
  bottom: 0;
`;

export default function FooterCart() {
  return (
    <FooterCartBox>
      <Cart />
      <Footer />
    </FooterCartBox>
  );
}
