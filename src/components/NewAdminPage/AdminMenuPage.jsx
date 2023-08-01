import { useParams } from "react-router-dom";

export default function AdminMenuPage(){

    const {category_id}=useParams();//url주소 얻기
    console.log(category_id);
    return(
        <div>
            카테고리 ID: {category_id}
        </div>
    )
}