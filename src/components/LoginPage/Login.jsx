import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import { LoginBox, Logos, SubmitBtn, FormInput, FormLabel, Trash} from './loginItems/loginItemCSS';

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // 유효성 검사: 아이디와 비밀번호가 입력되었는지 확인
    if (!nickname || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    
    //서버와 연결되기 전엔 ID&PW 입력만 되면 main으로 이동
    navigate('/main');

    try {
      // Send email and password to the server for authentication
      const response = await axios.post("URL", {
        nickname,
        password,
      });

      // Assuming the server responds with a token upon successful authentication
      console.log(response.data.result.jwt);
      const token = response.data.result.jwt;

      // Store the token in local storage or state for further use
      localStorage.setItem("token", token);
      console.log(token);
      console.log("로그인성공!");
      navigate("/main"); // Redirect to the login page
    } catch (error) {
      console.error("로그인실패", error);
    }

  };
  return (
    <>
      <LoginBox>
        <SignUpForm onSubmit={handleLogin}>
          <Logos/>
            {/* <FormLabel htmlFor="nickname" /> */}
            <FormInput
              type="text"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              placeholder="아이디"
            />
            {/* <FormLabel htmlFor="password" /> */}
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="비밀번호"
            />
          
          <SubmitBtn type="submit" onClick={handleLogin}>
            로그인하기
          </SubmitBtn>
          <Trash>
            <Link to={"/signup"}>회원가입하기 </Link>
          </Trash>
        </SignUpForm>
      </LoginBox>
    </>
  );
}
