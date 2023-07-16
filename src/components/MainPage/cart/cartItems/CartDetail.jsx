import { styled, keyframes } from "styled-components";
import EachItem from "./EachItem";

const goUp = (height) => keyframes`
  0% {
    height: 0;
    //transform: scaleY(0);
  }
  100% {
    height: ${height}vh;
    //transform: scaleY(1);
  }
`;

const goDown = (height) => keyframes`
  0% {
    height: ${height}vh;
    //transform: scaleY(1);
  }
  100% {
    height: 0;
    //transform: scaleY(0);
  }
`;

const CartDetailBox = styled.div`
  position: absolute;
  bottom: 88px; // 88px은 footer 고려한 값
  right: 0;
  width: 100%;

  background-color: #9a9a9a;
  background-color: pink;

  height: ${(props) => (props.toggle === "true" ? `${props.height}vh` : "0")};
  transform: scaleY(${(props) => (props.toggle === "true" ? 1 : 0)});
  transform-origin: ${(props) => (props.toggle === "true" ? "bottom" : "none")};
  transition: transform 0.5s ease-in-out;

  /* animation: ${(props) =>
    props.toggle === "true" ? goUp(props.height) : goDown(props.height)}
    0.5s ease-in-out; */
`;

export default function CartDetail({ toggle, height }) {
  return (
    <CartDetailBox toggle={toggle.toString()} height={height}>
      {toggle && (
        <>
          <div style={{ padding: "20px" }}>부드럽게 내려가도록 할 예정</div>
          <EachItem />
        </>
      )}
    </CartDetailBox>
  );
}
