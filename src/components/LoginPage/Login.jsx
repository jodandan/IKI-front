import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div>로그인 페이지</div>
      <Link to={"/main"}>메인 페이지로 이동</Link>
    </>
  );
}
