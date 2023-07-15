import { useState } from "react";
import { styled } from "styled-components";
import CartBackground from "./cartItems/CartBackground";
import Cart from "./Cart";
import Footer from "./Footer";

const FooterCartBox = styled.div`
  position: sticky;
  // !!FIXME: sticky 속성 때문에 밑에 extra space 생기는 문제 있음
  bottom: 0;
`;

export default function FooterCart() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* <CartBackground toggle={toggle} handleClick={handleClick} /> */}
      <FooterCartBox>
        <Cart toggle={toggle} handleClick={handleClick} />
        <Footer />
      </FooterCartBox>
    </>
  );
}
