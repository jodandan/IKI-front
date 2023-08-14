import CartIndex from "./cartItems/CartIndex";
import CartToggle from "./cartItems/CartToggle";
import { styled } from "styled-components";

const CartBox = styled.div`
  width: 100%;
  position: relative;
  border: solid 2px blue;
`;

export default function Cart({
  toggle,
  handleClick,
  onUpdatePrice,
  totalPrice,
}) {
  const cart_detail_height = 40; //vh

  const handleUpdatePrice = (price) => {
    onUpdatePrice(price);
  };

  return (
    <CartBox>
      <CartIndex
        toggle={toggle}
        handleClick={handleClick}
        height={cart_detail_height}
      />
      <CartToggle
        toggle={toggle}
        height={cart_detail_height}
        onUpdatePrice={handleUpdatePrice}
        totalPrice={totalPrice}
      />
    </CartBox>
  );
}
