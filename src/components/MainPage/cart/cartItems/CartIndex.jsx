import { styled } from "styled-components";

const CartIndexBox = styled.span`
  position: fixed;
  bottom: ${(props) =>
    // 88px은 Footer 고려한 값
    props.toggle === "true" ? `calc(88px + ${props.height}vh)` : "88px"};

  display: inline-block;
  transition: bottom 0.5s ease-in-out;

  background-color: #9a9a9a;
  padding: 20px 20px 15px 20px;
  margin-left: 12px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  cursor: pointer;
`;

export default function CartIndex({ toggle, handleClick, height }) {
  return (
    <CartIndexBox
      toggle={toggle.toString()}
      onClick={handleClick}
      height={height}
    >
      {toggle ? "장바구니 닫기" : "장바구니 열기"}
    </CartIndexBox>
  );
}
