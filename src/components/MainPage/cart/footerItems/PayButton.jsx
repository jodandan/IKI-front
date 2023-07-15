import { styled } from "styled-components";

const PayButtonBox = styled.button`
  background-color: var(--primary-color);
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-radius: 11px;
  box-shadow: none;
  height: 62px;
  padding: 0 20px;
  cursor: pointer;

  &:active {
    background-color: #2764ff;
  }
`;

export default function PayButton() {
  return (
    <>
      <PayButtonBox>결제하기</PayButtonBox>
    </>
  );
}
