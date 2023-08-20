import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import { LoginBox, Logos, FormInput, FormLabel, SubmitBtn, Trash } from './loginItems/loginItemCSS';

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VerificationButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SubmitButton = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;


const SignUp = () => {
  const [ownerName, setOwnerName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shopName, setShopName] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    // 비밀번호 일치 체크
    // if (password !== confirmPassword) {
    //   alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
    //   return;
    // }
  
    try {
      const response = await axios.post('https://iki.digital:8080/api/v1/owner', {
        ownerName,
        password,
        shopName,
      });
  
      console.log('회원가입이 성공하였습니다!', response.data);
      navigate('/'); // 로그인 페이지로 리다이렉트
  
    } catch (error) {
      console.error('회원가입에 실패하였습니다!', error);
    }
  };

  return (
    <LoginBox>
      <SignUpForm onSubmit={handleSignUp}>
        <Logos />

        {/* <FormLabel htmlFor="nickname">사용자명</FormLabel> */}
        <FormInput
          type="text"
          name="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
          placeholder='아이디'
        />


        {/* <FormLabel htmlFor="password">비밀번호</FormLabel> */}
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='비밀번호'
        />
        {/* <FormLabel htmlFor="confirmPassword">비밀번호 확인</FormLabel> */}
        {/* <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='비밀번호 확인'
        /> */}

        {/* <FormLabel htmlFor="shopName">가게이름</FormLabel> */}
        <FormInput
          type="text"
          name="shopName"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          required
          placeholder='상호명'
        />

        <>
          <SubmitBtn onClick={handleSignUp} value="가입하기">
            회원가입하기
          </SubmitBtn>
          <Trash>
            <Link to={"/"}>로그인 페이지로 이동 </Link>
          </Trash>
        </>
      </SignUpForm>
    </LoginBox>
  );
};

export default SignUp;