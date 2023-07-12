import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Temp = styled.div`
  background: var(--primary-color);
`;

export default function Admin() {
  return (
    <>
      <div>관리자 페이지</div>
      <Temp>GlobalStyle에 있는 color 이런 식으로 사용</Temp>
      <Link to={"/"}>로그인 페이지로 이동</Link>
    </>
  );
}
