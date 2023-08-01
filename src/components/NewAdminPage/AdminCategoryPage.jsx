import { styled } from "styled-components";
import {Link} from 'react-router-dom';
const CategoryBox = styled.div`
    height: 200px;
    width: 200px;
    background-color: lightblue;
    margin: 1px;
`

export default function AdminCategoryPage(){
    const categoryId=[1,2,3,4,5];//백으로부터 전달 받음
    return(
        <>
            {categoryId.map(id => ( // 여기서 중괄호가 아닌 괄호로 수정
                <CategoryBox key={id}>
                    <div>{id}</div>
                    <button>카테고리 삭제</button>
                    <button>카테고리명 수정</button>
                    <Link 
                        to={`/admin/${id}`} 
                        style={{textDecoration:'none', color:'black'}}>
                        {/* 카테고리 삭제 */}
                        <button>카테고리 내 메뉴 수정</button>
                    </Link>
                </CategoryBox> // key prop 추가하여 각 항목에 고유 키 부여
            ))}
        </>
    )
}