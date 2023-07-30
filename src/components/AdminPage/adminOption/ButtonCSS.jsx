import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa6";

const AddButton = styled.div`
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

export const PlusButton = ({ children, addCategory }) => (
  <AddButton onClick={addCategory}>
    <FaPlus className="plus" />
    {children}
  </AddButton>
);

export const CloseButton = styled.button`
  width: 120px;
  padding: 10px 15px;
  margin: 15px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  background: var(--secondary-color);
  color: var(--primary-color);
  cursor: pointer;
`;

export const AddOptionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 3px 0;
  background-color: #f2f2f2;
  cursor: pointer;
`;
