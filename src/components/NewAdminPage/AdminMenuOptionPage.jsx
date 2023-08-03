import { useParams} from "react-router-dom";

export default function AdminMenuOptionPage(){

    const {category_id, menu_id}=useParams();//url주소 얻기
    console.log(`현재 카테고리(${category_id}), 메뉴(${menu_id}의 옵션들)`)
    return(
        <div>
            카테고리 ID: {category_id}
            메뉴 ID: {menu_id}
        </div>
    )
}