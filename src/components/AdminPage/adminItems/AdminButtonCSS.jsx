import { styled } from "styled-components";
// import { FaPlus } from "react-icons/fa6";

export const PlusBtn = styled.button`
  border: 0;
  height: 50px;
  width: 100%;
  background-color: var(--secondary-color);
`;

/*
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  gap: 8px;
  border-radius: 3px;
  font-weight: bold;
  background: var(--secondary-color);
  cursor: pointer;
  margin: 6px 17px 25px 17px; // 상 우 하 좌

  .plus {
    margin-top: 2px;
    border-radius: 3px;
    width: 13px;
    height: 13px;
    background-color: var(--primary-color);
    color: white;
    padding: 2px;
  }
`;
*/

export const Btn = styled.button`
  border: 0;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-weight: bolder;
`;
export const DeleteBtn = styled(Btn)`
  background-color: #ff4949;
  color: white;
`;
