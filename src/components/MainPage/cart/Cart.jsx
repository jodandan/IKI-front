import CartIndex from "./cartItems/CartIndex";
import CartToggle from "./cartItems/CartToggle";
import { styled } from "styled-components";

const CartBox = styled.div`
  width: 100%;
  position: relative;
`;

export default function Cart({ toggle, handleClick }) {
  const cart_detail_height = 40; //vh

  return (
    <CartBox>
      <CartIndex
        toggle={toggle}
        handleClick={handleClick}
        height={cart_detail_height}
      />
      <CartToggle toggle={toggle} height={cart_detail_height} />
    </CartBox>
  );
}
