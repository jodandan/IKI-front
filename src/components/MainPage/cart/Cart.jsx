import { useState } from "react";
import CartIndex from "./cart-items/CartIndex";
import CartDetail from "./cart-items/CartDetail";

export default function Cart() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <CartIndex toggle={toggle} handleClick={handleClick} />
      {toggle && <CartDetail />}
    </>
  );
}
