import { styled } from "styled-components";
// import { FaPlus } from "react-icons/fa6";

export const Box = styled.div`
    height: 100px;
    width: 100%;
    background-color: lightblue;
    margin: 1px;
`
export const PlusBtn=styled.button`
    border: 0;
    height: 50px;
    width: 100%;
    background-color: var(--secondary-color);
`
export const Btn=styled.button`
    border: 0;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: bolder;
`
export const DeleteBtn=styled(Btn)`
    background-color: #ff4949;
    color: white;
`

export const PopupBox=styled.div`
    background-color: white;
    border: 1px solid var(--primary-color);
    width: 40%;
    height: 20%;
    position: fixed;
    left: 0;
    right: 0;
`