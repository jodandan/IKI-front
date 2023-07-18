import { styled } from "styled-components";
import EachItem from "./EachItem";
import { DUMMY_DATA } from "./EachItem";

// 추후 grid로 수정할수도...

const Temp = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
`;

const CartDetailBox = styled.div`
  background-color: #9a9a9a;
  padding: 20px 10px;
  display: table;
  width: 90%;
  height: fit-content;

  .row {
    display: table-row;
    width: 100%;
    table-layout: fixed;
    text-align: center;
  }

  .item {
    width: 20%;
    display: table-cell;
    padding: 10px 0;
  }
`;

export default function CartDetail() {
  return (
    <Temp>
      <CartDetailBox>
        <EachItem />
        <div className="row">
          <div className="item">삭제</div>
          <div className="item">이름</div>
          <div className="item">옵션</div>
          <div className="item">수량</div>
          <div className="item">가격</div>
        </div>
        {DUMMY_DATA.orders.map((order) => (
          <div className="row" key={order.id}>
            <div className="item">X</div>
            <div className="item">{order.name}</div>
            <div className="item">{order.option}</div>
            <div className="item">{order.amount}</div>
            <div className="item">{order.price}</div>
          </div>
        ))}
      </CartDetailBox>
    </Temp>
  );
}
