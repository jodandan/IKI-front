import { styled } from "styled-components";

const CartDetailBox = styled.div`
  background-color: #9a9a9a;
  padding: 80px 10px;
`;

export default function CartDetail() {
  return (
    <CartDetailBox>
      <div>장바구니 디테일</div>
      (부드럽게 올라/내려오도록 할 예정)
      <div>
        sticky 속성 때문에 밑에 필요없는 공간 생기는 문제 있음 - 추후 수정
      </div>
    </CartDetailBox>
  );
}
