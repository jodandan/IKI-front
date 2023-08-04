import { styled } from "styled-components";
import {Link} from 'react-router-dom';
import { Box, PlusBtn } from "./AdminPageStyleComponent";

export default function AdminCategoryPage(){
    const categoryId=[1,2,3,4,5];//백으로부터 전달 받음
    return(
        <>
        <h2>모든 카테고리</h2>
        <PlusBtn>카테고리 추가</PlusBtn>
            {categoryId.map(id => ( // 여기서 중괄호가 아닌 괄호로 수정
                <Box key={id}>
                    <div>카테고리(id:{id})에 대한 정보 나열</div>
                    <button>카테고리 삭제</button>
                    <button>카테고리명 수정</button>
                    <Link 
                        to={`/admin/${id}`} 
                        style={{textDecoration:'none', color:'black'}}>
                        {/* 카테고리 삭제 */}
                        <button>카테고리 내 메뉴 관리하기</button>
                    </Link>
                </Box> // key prop 추가하여 각 항목에 고유 키 부여
            ))}
        </>
    )
}