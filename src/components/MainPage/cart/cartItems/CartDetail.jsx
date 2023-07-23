import { useState } from "react";
import convertPrice from "../../../../utils/convertPrice";
import ItemAmount from "./ItemAmount";
import { styled } from "styled-components";
import { FaXmark } from "react-icons/fa6";
import { DUMMY_DATA } from "./EachItem";

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr 3fr 1.5fr 2fr;
  justify-items: center;

  div {
    // border: solid 1px red;
    padding: 12px 0;
  }
`;

export default function CartDetail({ height }) {
  const [cartItems, setCartItems] = useState(DUMMY_DATA.orders);

  const handleRemove = (itemId) => {
    console.log("전: ", cartItems);
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, delete: true } : item
      )
    );
    console.log("후: ", cartItems);
  };

  return (
    <Temp height={height}>
      <CartItem>
        <div>삭제</div>
        <div>이름</div>
        <div>옵션</div>
        <div>수량</div>
        <div>가격</div>
      </CartItem>
      {cartItems.map(
        (order) =>
          !order.delete && (
            <CartItem key={order.id}>
              <div>
                <FaXmark
                  onClick={() => handleRemove(order.id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>{order.name}</div>
              {order.option ? <div>{order.option}</div> : <div>-</div>}
              <ItemAmount amount={order.amount} />
              <div>{convertPrice(order.amount * order.price)}</div>
            </CartItem>
          )
      )}
    </Temp>
  );
}
