import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../header/Header";
import {MasonryMenuContainer} from "./MasonryMenuContainer";


const MainBox = styled.div`
  padding: 0 1.2vw;/* 위아래 패딩 0으로 수정 */
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  overflow-y: scroll;/* 마지막에 스크롤 없애기 */
`

export default function Main() {
  return (
    <MainBox>
      <Header title="주문하기" subtitle="메뉴를 눌러주세요."/>
      <MasonryMenuContainer/>
      <div>메인 페이지</div>
      <Link to={"/admin"}>관리자 페이지로 이동</Link>
    </MainBox>
  );
}