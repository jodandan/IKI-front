import { styled } from "styled-components";

const EachItemTable = styled.table`
  width: 100%;

  th {
    padding-bottom: 4px;
  }

  td {
    //border: solid black 2px;
    text-align: center;
  }
`;

export default function EachItem() {
  return (
    <EachItemTable>
      <thead>
        <tr>
          <th>삭제</th>
          <th>이름</th>
          <th>옵션</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>x</td>
          <td>메뉴이름</td>
          <td>차갑게/샷추가</td>
          <td>2</td>
          <td>10000원</td>
        </tr>
      </tbody>
    </EachItemTable>
  );
}
