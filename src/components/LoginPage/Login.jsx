import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Select from "./Select";

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

    
    try {
      const response = await axios.post("https://iki.digital:8080/api/v1/owner/login", {
        ownerName: nickname,
        password,
      });

      
      const { httpStatus, message, responseData } = response.data;

      if (httpStatus === 200) {
        // 로그인 성공
        console.log('로그인이 성공하였습니다!', response.data);
      

        // 토큰 가져오기.


        // 로그인 후 이동
        navigate('/select');
      } else {
        // 로그인 실패
        console.error("로그인 실패:", message);
        alert(message);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
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