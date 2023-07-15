import { styled } from "styled-components";
import Header from "../header/Header";
import { MasonryMenuContainer } from "./MasonryMenuContainer";
import Footer from "./cart/Footer";

const MainBox = styled.div`
  padding: 0 1.2vw; /* 위아래 패딩 0으로 수정 */
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  overflow-y: scroll; /* 마지막에 스크롤 없애기 */
`;

export default function Main() {
  return (
    <>
      <MainBox>
        <Header title="주문하기" subtitle="메뉴를 눌러주세요." />
        <MasonryMenuContainer />
      </MainBox>
      <Footer /*MainBox 패딩때문에 빼둠*/ />
    </>
  );
}
