import { styled } from "styled-components";
import EachItem from "./EachItem";

const CartDetailBox = styled.div`
  background-color: #9a9a9a;
  padding: 30px 10px 15px 10px;
`;

export default function CartDetail() {
  return (
    <CartDetailBox>
      <div style={{ paddingBottom: "20px" }}>
        부드럽게 올라/내려오도록 할 예정
      </div>
      <EachItem />
    </CartDetailBox>
  );
}
