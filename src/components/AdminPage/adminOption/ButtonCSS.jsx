import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa6";

export const PlusButton = ({ children }) => (
  <AddButton>
    <FaPlus className="plus" />
    {children}
  </AddButton>
);

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
