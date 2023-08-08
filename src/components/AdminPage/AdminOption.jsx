import { useParams, Link } from "react-router-dom";
import convertPrice from "../../utils/convertPrice";
import Header from "../header/Header";
import { StyleSheetManager } from "styled-components"; // 다음 warning 제거하려 추가: StyledComponent.ts:139 styled-components: it looks like an unknown prop "hide" is being sent through to the DOM, which will likely trigger a React console error.
import {
  PlusButton,
  Btn,
  SmallBtn,
  XBtn,
  BackBtn,
} from "./adminItems/AdminButtonCSS";
import {
  PageBox,
  EachOption,
  GroupName,
  OneRow,
  NameAndPrice,
  Name,
  Price,
  PilSoo,
} from "./adminItems/AdminContainerCSS";

export default function AdminOption() {
  const { category_id, menu_id } = useParams(); //url주소 얻기
  console.log(`현재 카테고리(${category_id}), 메뉴(${menu_id}의 옵션들)`);

  const optionId = [1, 2, 3, 4, 5];
  const optionList = [
    {
      optionId: 1,
      optionName: "차갑게",
      optionPrice: 1000,
    },
    {
      optionId: 2,
      optionName: "뜨겁게",
      optionPrice: 0,
    },
    {
      optionId: 3,
      optionName: "샷추가",
      optionPrice: 500,
    },
    {
      optionId: 4,
      optionName: "연하게",
      optionPrice: -300,
    },
  ];

  return (
    <PageBox>
      <Header title="옵션 등록" link="/main" />
      <div style={{ display: "flex" }}>
        <Link to="/admin">
          <BackBtn str="카테고리 등록"></BackBtn>
        </Link>
        <Link to={`/admin/${category_id}`}>
          <BackBtn str="메뉴 등록"></BackBtn>
        </Link>
      </div>
      {/*카테고리 ID: {category_id} 메뉴 ID: {menu_id}에 대한 모든 옵션*/}
      <PlusButton>옵션 추가</PlusButton>
      <div style={{ padding: "8px 0", fontWeight: "bold" }}>
        옵션 카테고리명
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <GroupName>온도?? 이거맞나여</GroupName>
        <SmallBtn>수정</SmallBtn>
      </div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "hide"}>
        <EachOption hide={"true"}>
          <OneRow>
            <PilSoo>필수</PilSoo>
            <NameAndPrice>
              <Name hide={"true"}>옵션명</Name>
              <Price hide={"true"}>가격</Price>
            </NameAndPrice>
            <Btn hide={"true"}>수정하기</Btn>
            <XBtn hide={"true"} />
          </OneRow>
        </EachOption>
      </StyleSheetManager>
      <div>
        {optionList.map((option) => (
          <EachOption key={option.optionId}>
            <OneRow>
              <PilSoo>
                <input type="checkbox" />
              </PilSoo>
              <NameAndPrice>
                <Name>옵션(id:{option.optionId})</Name>
                <Price>{convertPrice(option.optionPrice)}</Price>
              </NameAndPrice>
              <Btn>수정하기</Btn>
              <XBtn />
            </OneRow>
          </EachOption>
        ))}
      </div>
    </PageBox>
  );
}
