import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div>메인 페이지</div>
      <Link to={"/admin"}>관리자 페이지로 이동</Link>
    </>
  );
}
