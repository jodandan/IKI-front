import { styled } from "styled-components";
import AdminHeader from "./AdminHeader";

const AdminBox = styled.div`
  padding: 1vw 1.2vw;
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */

  background-color: pink;
`;

export default function Admin() {
  return (
    <AdminBox>
      <AdminHeader
        title={"메뉴 등록"} /* 정확한 헤더 디자인 나오면 수정 예정*/
      />
    </AdminBox>
  );
}
