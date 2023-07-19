import { useState } from "react";
import { styled } from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ItemAmountBox = styled.div`
  // border: solid 1px red;
  span {
    cursor: pointer;
  }

  .amount {
    padding: 0 5px;
  }
`;

export default function ItemAmount({ amount }) {
  const [count, setCount] = useState(amount);

  const plus = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <ItemAmountBox>
      <span onClick={minus}>
        <FaMinus />
      </span>
      <span className="amount">{count}</span>
      <span onClick={plus}>
        <FaPlus />
      </span>
    </ItemAmountBox>
  );
}
