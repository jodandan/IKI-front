import { styled } from "styled-components";
import { DUMMY_DATA } from "./EachItem";
import { VscChromeClose } from "react-icons/vsc";

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr 3fr 2fr 2fr;
  text-align: center;

  div {
    // border: solid 1px red;
    padding: 10px 0;
  }
`;

export default function CartDetail({ height }) {
  return (
    <Temp height={height}>
      <CartItem>
        <div>삭제</div>
        <div>이름</div>
        <div>옵션</div>
        <div>수량</div>
        <div>가격</div>
      </CartItem>
      {DUMMY_DATA.orders.map((order) => (
        <CartItem key={order.id}>
          <div>
            <VscChromeClose />
          </div>
          <div>{order.name}</div>
          <div>{order.option}</div>
          <div>{order.amount}</div>
          <div>{order.price}</div>
        </CartItem>
      ))}
    </Temp>
  );
}
