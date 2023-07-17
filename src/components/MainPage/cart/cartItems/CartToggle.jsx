import { styled, keyframes } from "styled-components";
import CartDetail from "./CartDetail";

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

const CartToggleBox = styled.div`
  position: absolute;
  bottom: 88px; // 88px은 footer 고려한 값
  right: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  background-color: #9a9a9a;

  height: ${(props) => (props.toggle === "true" ? `${props.height}vh` : "0")};
  transform: scaleY(${(props) => (props.toggle === "true" ? 1 : 0)});
  transform-origin: ${(props) => (props.toggle === "true" ? "bottom" : "top")};
  transition: transform 0.5s ease-in-out;

  /* animation: ${(props) =>
    props.toggle === "true" ? goUp(props.height) : goDown(props.height)}
    0.5s ease-in-out; */
`;

export default function CartToggle({ toggle, height }) {
  return (
    <CartToggleBox toggle={toggle.toString()} height={height}>
      {toggle && (
        <>
          <CartDetail />
        </>
      )}
    </CartToggleBox>
  );
}
