import { styled } from "styled-components";
import { useState } from "react";

import AdminHeader from "./header&footer/AdminHeader";
import AdminContainer from "./AdminContainer";
import AdminFooter from "./header&footer/AdminFooter";

const AdminBox = styled.div`
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function Admin() {
  const [numCategories, setNumCategories] = useState(1); // 추후 적절히 수정

  // 카테고리 추가를 위한 함수
  const addCategory = () => {
    setNumCategories((prev) => prev + 1);
  };

  return (
    <AdminBox>
      <AdminHeader
        title={"메뉴 등록"} /* 정확한 헤더 디자인 나오면 수정 예정*/
        addCategory={addCategory}
      />
      <AdminContainer numCategories={numCategories} />
      <AdminFooter />
    </AdminBox>
  );
}
