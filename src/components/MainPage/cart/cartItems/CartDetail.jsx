import { styled } from "styled-components";
import EachItem from "./EachItem";

const CartDetailBox = styled.div`
  background-color: #9a9a9a;
  padding: 30px 10px 15px 10px;
`;

export default function CartDetail() {
  return (
    <CartDetailBox>
      (부드럽게 올라/내려오도록 할 예정)
      <div style={{ marginBottom: "30px" }}>
        sticky 속성 때문에 부모 컴포넌트 하단에 필요없는 공간 생기는 문제 있음 -
        추후 수정
      </div>
      <EachItem />
    </CartDetailBox>
  );
}
