import React, { useEffect } from "react";
import { styled } from "styled-components";



const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  font-size: 30px;
`;

const ShowPopUp = ({ onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 82, 212, 0.70)",
        zIndex: 9999,
        color: "white",
      }}
    >
      <PopUpContent>
        <span>결제중</span>
      </PopUpContent>
    </div>
  );
};

export default ShowPopUp;
