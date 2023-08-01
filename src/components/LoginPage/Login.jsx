import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import logo from './logo.svg';
import logoSquare from './logoSquare.svg';

const LoginBox = styled.div`
  height: 100vh; /* 추후 메뉴판 길이에 맞게 수정 */
  background: rgb(0, 46, 207, 65%); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size:var(--font-big);
  color:white;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
`;

const FormInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row; /* Change flex-direction to row */
  align-items: center;
`;

const Trash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  white-space: normal;
  flex-direction: column;
`;



export default function Login() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send email and password to the server for authentication
      const response = await axios.post('http://43.202.93.57:8080/members/login', {
        nickname,
        password,
        
      });

      // Assuming the server responds with a token upon successful authentication
      console.log(response.data.result.jwt)
      const token = response.data.result.jwt;

      // Store the token in local storage or state for further use
      localStorage.setItem('token', token);
      console.log(token);   
      console.log('로그인성공!');
      navigate('/main'); // Redirect to the login page
    } catch (error) {
      console.error('Login failed!', error);
    }
  };
  return (
    <>
    <LoginBox>
      <SignUpForm onSubmit={handleLogin}>
      <img style={{height:"100px", width:"auto"}} src={logoSquare} alt="LogoSquare"/>
      <img style={{height:"100px", width:"auto"}} src={logo} alt="Logo"/>
      <Title>로그인</Title>
        <Form>
          <FormLabel htmlFor="nickname">사용자명</FormLabel>
          <FormInput
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
            placeholder="아이디"
          />
        </Form>
        <Form>
          <FormLabel htmlFor="password">비밀번호</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="비밀번호"
          />
        </Form>
          <FormInput
          type="submit"
          value="로그인"
         />
          <Trash>
            <Link to={"/signup"}>회원가입 페이지로 이동 </Link>
            <br/>
            <Link to={"/main"}>메인 페이지로 이동</Link>
          </Trash>
      </SignUpForm>  

    </LoginBox>
    </>
  );
}
