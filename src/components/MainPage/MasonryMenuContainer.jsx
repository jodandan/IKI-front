import { styled } from "styled-components";

// flex를 이용한 구현
// const List=styled.div `
//     display: flex; // 1
//     flex-direction: column; // 2
//     flex-wrap: wrap; // 3
//     align-content: start; // 4
//     height: 700px; // 5
//     column-gap:10px;
//     width: 100%;
// `

// const Item= styled.div`
//     width: 48%; // 6
//     background-color: green;
//     height: ${(props )=> props.height || '100px'};
//     margin-bottom: 10px;
// `

//column을 이용한 구현
const List=styled.div `
    column-count: 2;
    column-gap: 10px;
`

const Item= styled.div`
    width: 100%;
    height: ${(props )=> props.height || '100px'};
    background-color: lightgray;
    display: inline-block;
    break-inside: avoid;
    margin-bottom: 10px;
`

export function MasonryMenuContainer(){
    return(
        <List>
            <Item height="200px"/>
            <Item height="130px"/>
            <Item height="150px"/>
            <Item height="200px"/>
            <Item height="150px"/>
            <Item height="150px"/>
            <Item height="180px"/>
        </List>
    );
}