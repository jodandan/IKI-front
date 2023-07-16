import { styled } from "styled-components";
import EachItem from "./EachItem";

const CartDetailBox = styled.div`
  background-color: #9a9a9a;
  height: ${(props) => props.height}vh;
`;

export default function CartDetail({ height }) {
  return (
    <CartDetailBox height={height}>
      <div style={{ padding: "20px" }}>부드럽게 올라/내려오도록 할 예정</div>
      <EachItem />
    </CartDetailBox>
  );
}
