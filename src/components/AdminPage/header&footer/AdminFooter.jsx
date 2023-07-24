import { styled } from "styled-components";
import SaveButton from "../adminItems/SaveButton";

const FooterBox = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;

  background-color: var(--primary-color);
  padding: 15px;
  height: 62px;
  font-size: var(--font-big);
`;

export default function AdminFooter() {
  return (
    <FooterBox>
      <SaveButton buttonText={"메뉴 저장"} />
    </FooterBox>
  );
}
