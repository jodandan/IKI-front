import { useState, useEffect } from "react";
import convertPrice from "../../../../utils/convertPrice";
import ItemAmount from "./ItemAmount";
import { styled } from "styled-components";
import { FaXmark } from "react-icons/fa6";
// import { DUMMY_DATA } from "./EachItem";

const CartDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px 40px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 1.5fr 2fr 43px;

  .names {
    font-weight: bold;
  }

  div {
    padding: 12px 0;
  }

  > div:nth-child(1) {
    // 이름 열 좌측정렬
    justify-self: start;
  }
  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(4) {
    justify-self: center; // 나머지 열 중앙정렬
  }
  > div:nth-child(5) {
    // 추후 우측정렬 할 수도 있어서 일단 빼둠
    justify-self: center;
  }
`;

export default function CartDetail({ height, onUpdatePrice, cartData }) {
  const [cartItems, setCartItems] = useState(cartData);
  // const [totalPrice, setTotalPrice] = useState(0);

  const handleRemove = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.orderMenuId === itemId
          ? { ...item, delete: true, amount: 0 }
          : item
      )
    );
  };

  const handleAmountChange = (itemId, newAmount) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.orderMenuId === itemId
          ? { ...item, orderMenuAmount: newAmount }
          : item
      )
    );
  };

  // useEffect(() => {
  //   const sum = cartItems.reduce(
  //     (total, item) => total + item.amount * item.price,
  //     0
  //   );
  //   setTotalPrice(sum);
  // }, [cartItems, onUpdatePrice]);

  const totalPrice = cartItems.reduce(
    (total, order) => total + order.amount * order.price,
    0
  );

  useEffect(() => {
    onUpdatePrice(totalPrice);
  }, [totalPrice, onUpdatePrice]);

  return (
    <CartDetailBox height={height}>
      <CartItem>
        <div className="names">이름</div>
        <div className="names">옵션</div>
        <div className="names">수량</div>
        <div className="names">가격</div>
        <div className="names">
          <span className="delete">삭제</span>
        </div>
      </CartItem>
      {cartItems.map(
        (order) =>
          !order.delete && (
            <CartItem key={order.orderMenuId}>
              <div>{order.orderMenuName}</div>
              {order.orderMenuOptions ? (
                <div>{order.orderMenuOptions}</div>
              ) : (
                <div>-</div>
              )}
              <ItemAmount
                amount={order.orderMenuAmount}
                onChange={(newAmount) =>
                  handleAmountChange(order.orderMenuId, newAmount)
                }
              />
              <div>
                {convertPrice(order.orderMenuAmount * order.orderMenuPrice)}
              </div>
              <div>
                <span className="delete">
                  <FaXmark
                    onClick={() => handleRemove(order.orderMenuId)}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
            </CartItem>
          )
      )}
    </CartDetailBox>
  );
}
