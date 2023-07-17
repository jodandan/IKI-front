import CartIndex from "./cartItems/CartIndex";
import CartToggle from "./cartItems/CartToggle";

export default function Cart({ toggle, handleClick }) {
  const cart_detail_height = 40; //vh

  return (
    <>
      <CartIndex
        toggle={toggle}
        handleClick={handleClick}
        height={cart_detail_height}
      />
      {/* {toggle && <CartToggle height={cart_detail_height} />} */}
      <CartToggle toggle={toggle} height={cart_detail_height} />
    </>
  );
}
