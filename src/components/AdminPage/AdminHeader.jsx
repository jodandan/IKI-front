import { styled } from "styled-components";

const HeaderBox = styled.header`
  width: 100%;
  height: 15vh;
  /* background-color: green; */
  background-color: white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
`;
const LogoBox = styled.div`
  width: 97px;
  height: 55px;
  margin-left: 20px;
  background-color: darkgray;
`;
const TitleBox = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  color: var(--primary-color);
  font-size: xx-large;
  font-weight: bolder;
  padding-bottom: 20px;
`;

const AddCategoryButton = styled.div`
  background-color: #d9d9d9;
  padding: 18px 10px;
  border-radius: 5px;
  margin-right: 20px;

  cursor: pointer;

  &:active {
    background-color: #cfcfcf;
  }
`;

export default function AdminHeader({ title, subtitle }) {
  return (
    <HeaderBox>
      <LogoBox>로고</LogoBox>
      <TitleBox>
        <Title>메뉴 등록</Title>
      </TitleBox>
      <AddCategoryButton>카테고리 추가</AddCategoryButton>
    </HeaderBox>
  );
}
