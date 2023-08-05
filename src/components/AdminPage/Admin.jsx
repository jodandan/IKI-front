import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const AdminBox = styled.div`
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  background-color: orange;
`;

export default function Admin() {
  return (
    <AdminBox>
      <Header>해더</Header>
      <Outlet />
    </AdminBox>
  );
}
