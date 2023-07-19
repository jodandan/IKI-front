import { styled } from "styled-components";
import convertPrice from "../../../../utils/convertPrice";
import { VscChromeClose } from "react-icons/vsc";
import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";
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
    padding: 10px 0;
  }

  .amount {
    padding: 5px;
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
            <FaXmark style={{ cursor: "pointer" }} />
          </div>
          <div>{order.name}</div>
          <div>{order.option}</div>
          <div>
            <span>
              <FaMinus style={{ cursor: "pointer" }} />
            </span>
            <span className="amount">{order.amount}</span>
            <span>
              <FaPlus style={{ cursor: "pointer" }} />
            </span>
          </div>
          <div>{convertPrice(order.price)}</div>
        </CartItem>
      ))}
    </Temp>
  );
}
