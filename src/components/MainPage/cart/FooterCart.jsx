import { useState, useEffect } from "react";
import axios from "axios";
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
  const [cartData, setCartData] = useState([]);

  const handleClick = async () => {
    setToggle(!toggle);
    const fetchedCartData = await getCartData();
    setCartData(fetchedCartData.orderMenuResponseDtoList);
  };

  const handleUpdatePrice = (price) => {
    setTotalPrice(price);
  };

  const initialTotalPrice = DUMMY_DATA.orders.reduce(
    (total, order) => total + order.amount * order.price,
    0
  );

  const cartId = localStorage.getItem("cartId");
  const getCartData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_IP}/api/v1/cart/${cartId}`
      );
      console.log("CART::", response.data.responseData);
      return response.data.responseData;
    } catch (error) {
      console.error("장바구니 불러오기 실패", error);
      return [];
    }
  };

  // Update the displayed total price whenever totalPrice changes
  useEffect(() => {
    setTotalPrice(initialTotalPrice);
  }, [initialTotalPrice]);

  return (
    <>
      <CartBackground toggle={toggle} handleClick={handleClick} />
      <FooterCartBox>
        <Cart
          cartData={cartData}
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
