import { styled } from "styled-components";

const CartIndexBox = styled.span`
  display: inline-block;
  background-color: #9a9a9a;
  padding: 20px 20px 15px 20px;
  margin-left: 12px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  cursor: pointer;
`;

export default function CartIndex({ toggle, handleClick }) {
  return (
    <CartIndexBox onClick={handleClick}>
      {toggle ? "장바구니 닫기" : "장바구니 열기"}
    </CartIndexBox>
  );
}
