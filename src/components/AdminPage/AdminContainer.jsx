import { styled } from "styled-components";
import Category from "./adminItems/Category";
import OptionModal from "./adminOption/OptionModal";

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
      <AdminContainerBox>
        <OptionModal />
        {categories}
      </AdminContainerBox>
    </>
  );
}
