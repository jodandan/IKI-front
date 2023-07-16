import { useState } from "react";
import { styled } from "styled-components";
import CartBackground from "./cartItems/CartBackground";
import Cart from "./Cart";
import Footer from "./Footer";

const FooterCartBox = styled.div`
  position: sticky;
  bottom: 0;
`;

export default function FooterCart() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <CartBackground toggle={toggle} handleClick={handleClick} />
      <FooterCartBox>
        <Cart toggle={toggle} handleClick={handleClick} />
        <Footer />
      </FooterCartBox>
    </>
  );
}
