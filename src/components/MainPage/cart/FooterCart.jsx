import { useState, useEffect } from "react";
import { styled } from "styled-components";
import CartBackground from "./cartItems/CartBackground";
import Cart from "./Cart";
import Footer from "./Footer";
import { DUMMY_DATA } from "./cartItems/EachItem";

const FooterCartBox = styled.div`
  position: sticky;
  bottom: 0;
`;

export default function FooterCart({ onUpdatePrice }) {
  const [toggle, setToggle] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleUpdatePrice = (price) => {
    setTotalPrice(price);
  };

  const initialTotalPrice = DUMMY_DATA.orders.reduce(
    (total, order) => total + order.amount * order.price,
    0
  );

  // Update the displayed total price whenever totalPrice changes
  useEffect(() => {
    setTotalPrice(initialTotalPrice);
  }, [initialTotalPrice]);

  return (
    <>
      <CartBackground toggle={toggle} handleClick={handleClick} />
      <FooterCartBox>
        <Cart
          toggle={toggle}
          handleClick={handleClick}
          onUpdatePrice={handleUpdatePrice}
          totalPrice={initialTotalPrice}
        />
        <Footer totalPrice={totalPrice} />
        {/* <div style={{ background: "pink" }}>{totalPrice}</div> */}
      </FooterCartBox>
    </>
  );
}
