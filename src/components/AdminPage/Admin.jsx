import { styled } from "styled-components";
import AdminHeader from "./header&footer/AdminHeader";
import AdminFooter from "./header&footer/AdminFooter";

const AdminBox = styled.div`
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function Admin() {
  return (
    <AdminBox>
      <AdminHeader
        title={"메뉴 등록"} /* 정확한 헤더 디자인 나오면 수정 예정*/
      />
      <AdminFooter />
    </AdminBox>
  );
}
