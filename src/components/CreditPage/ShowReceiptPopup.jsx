import React, { useEffect } from "react";
import { styled } from "styled-components";

const ReceiptContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 25px;
`;

const ShowReceiptPopup = ({ onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(); // Call the onClose function to close the receipt popup after 3 seconds
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

      <ReceiptContainer>
          <span>영수증 발급 완료</span>
        </ReceiptContainer>
    </div>
  );
};

export default ShowReceiptPopup;
