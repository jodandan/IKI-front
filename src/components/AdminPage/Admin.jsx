import { Link } from "react-router-dom";
import { styled } from "styled-components";

const AdminBox = styled.div`
  padding: 1vw 1.2vw;
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
`;

export default function Admin() {
  return (
    <AdminBox>
      <div>관리자 페이지</div>
      <Link to={"/"}>로그인 페이지로 이동</Link>
    </AdminBox>
  );
}
