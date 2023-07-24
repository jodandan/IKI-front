import { styled } from "styled-components";
import Category from "./adminItems/Category";

const AdminContainerBox = styled.div`
  padding: 0 1.2vw;
  overflow-y: auto;
  height: 100%;
`;

export default function AdminContainer({ numCategories }) {
  const categories = [];

  for (let i = 0; i < numCategories; i++) {
    categories.push(<Category key={i} />);
  }

  return (
    <>
      <AdminContainerBox>{categories}</AdminContainerBox>
      <span
        style={{ padding: "30px", background: "pink", width: "fit-content" }}
      >
        카테고리 추가 버튼 누르면 컴포넌트 추가돼요!
      </span>
    </>
  );
}
