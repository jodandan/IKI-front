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
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shopName, setShopName] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();

    // 비밀번호 일치 체크
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
      return;
    }

    try {
      // 여기에 회원가입 로직을 수행합니다.
      const response = await axios.post('URL', {
        nickname: 'Jodan',
        password: '1111',
        shopName: '스타벅스'
      }, {

      });
      console.log(response)
      console.log('회원가입이 성공하였습니다!', response.data);
      navigate('/signin'); // Redirect to the login page

    } catch (error) {
      console.error('회원가입에 실패하였습니다!', error);
    }
  };

  //   const handleDuplicateCheck = async () => {
  //     try {
  //       // 여기에 가게명 중복 확인 로직을 수행합니다.
  //       const shopNameResponse = await axios.get('http://43.202.93.57:8080', {
  //         params: {
  //           shopName,
  //         },

  //       });

  //       if (shopNameResponse.data.isDuplicate) {
  //         setIsshopNameDuplicate(true);
  //       } else {
  //         setIsshopNameDuplicate(false);
  //       }

  //       console.log('닉네임 중복 확인이 성공하였습니다!', shopNameResponse.data);
  //     } catch (error) {
  //       console.error('닉네임 중복 확인에 실패하였습니다!', error);
  //     }
  //   };

  return (
    <LoginBox>
      <SignUpForm onSubmit={handleSignUp}>
        <Logos />

        {/* <FormLabel htmlFor="nickname">사용자명</FormLabel> */}
        <FormInput
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='비밀번호 확인'
        />

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