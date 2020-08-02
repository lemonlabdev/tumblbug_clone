import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderLoginButtonProps = {
  children?: ReactNode;
};

const LoginButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  border: none;
  outline: none;
  color: black;
  background: transparent;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const ProfileImage = styled.span`
  display: inline-block;
  margin-left: 0.75rem;
  background-image: url('images/user-account.png');
  background-size: cover;
  .Header-user-account {
    width: 28px;
    height: 28px;
  }
`;

function HeaderLoginButton({ children }: HeaderLoginButtonProps) {
  return (
    <LoginButton className="Header-line-height hover">
      <HeaderItemLabel>{children}</HeaderItemLabel>
      <ProfileImage className="Header-user-account" />
    </LoginButton>
  );
}

export default HeaderLoginButton;
