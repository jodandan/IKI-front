import { styled } from "styled-components";
import Header from "../header/Header";
import { MasonryMenuContainer } from "./MasonryMenuContainer";
import FooterCart from "./cart/FooterCart";

const MainBox = styled.div`
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function Main() {
  return (
    <>
      <MainBox>
        <Header title="주문하기" subtitle="메뉴를 눌러주세요." />
        <MasonryMenuContainer />
        <FooterCart />
      </MainBox>
    </>
  );
}
