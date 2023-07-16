import CartIndex from "./cartItems/CartIndex";
import CartDetail from "./cartItems/CartDetail";

export default function Cart({ toggle, handleClick }) {
  const cart_detail_height = 40; //vh

  return (
    <>
      <CartIndex
        toggle={toggle}
        handleClick={handleClick}
        height={cart_detail_height}
      />
      {toggle && <CartDetail height={cart_detail_height} />}
    </>
  );
}
