import { useParams } from "react-router-dom";
import { PlusBtn, Btn } from "./adminItems/AdminButtonCSS";
import { PageBox, EachOption, Buttons } from "./adminItems/AdminContainerCSS";

export default function AdminOption() {
  const { category_id, menu_id } = useParams(); //url주소 얻기
  console.log(`현재 카테고리(${category_id}), 메뉴(${menu_id}의 옵션들)`);

  const optionId = [1, 2, 3, 4, 5];

  return (
    <PageBox>
      카테고리 ID: {category_id}
      메뉴 ID: {menu_id}에 대한 모든 옵션
      <PlusBtn>옵션 추가</PlusBtn>
      <div>
        {optionId.map(
          (
            optionid // 여기서 중괄호가 아닌 괄호로 수정
          ) => (
            <EachOption key={optionid}>
              <div>옵션(id:{optionid})에 대한 정보 나열</div>
              <Btn>옵션 삭제</Btn>
              <Btn>옵션 정보 수정</Btn>
            </EachOption> // key prop 추가하여 각 항목에 고유 키 부여
          )
        )}
      </div>
    </PageBox>
  );
}
