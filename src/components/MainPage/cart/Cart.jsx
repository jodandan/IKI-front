import CartIndex from "./cartItems/CartIndex";
import CartDetail from "./cartItems/CartDetail";

export default function Cart({ toggle, handleClick }) {
  return (
    <>
      <CartIndex toggle={toggle} handleClick={handleClick} />
      {toggle && <CartDetail />}
    </>
  );
}
