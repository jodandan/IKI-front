import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa6";

export const PlusBtn = styled.button`
  border: 0;
  height: 50px;
  width: 100%;
  background-color: var(--secondary-color);
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 8px;
  border-radius: 5px;
  font-weight: bold;
  background: var(--secondary-color);
  margin: 12px 0;
  //margin: 6px 17px 25px 17px; // 상 우 하 좌

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
export const PlusButton = ({ children, onClick }) => (
  <AddButton onClick={onClick}>
    <FaPlus className="plus" />
    {children}
  </AddButton>
);

export const Btn = styled.div`
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-size: var(--font-medium);
  font-weight: bolder;
  white-space: nowrap;
`;
