import { styled } from "styled-components";

const CartDetailBox = styled.div`
  background-color: #9a9a9a;
  padding: 80px 10px;
`;

export default function CartDetail() {
  return (
    <CartDetailBox>
      장바구니 디테일 (추후 부드럽게 올라가는거 구현 할 예정)
    </CartDetailBox>
  );
}
