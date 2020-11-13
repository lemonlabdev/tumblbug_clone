import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderLoginLinkProps = {
  children?: ReactNode;
};

const LoginLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  line-height: 58px;
  padding: 0px 1rem;
  @media (min-width: 1080px) {
    line-height: 65px;
  }
`;

const ProfileImageWrapper = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 0.75rem;
`;

const ProfileImage = styled.span`
  display: inline-block;
  background-image: url('images/user-account.png');
  background-size: cover;
  width: 28px;
  height: 28px;
  margin-right: 0px;
  background-position: 50% 38%;
  border-radius: 50%;
  @media (min-width: 1080px) {
    width: 38px;
    height: 38px;
  }
`;

function HeaderLoginLink({ children }: HeaderLoginLinkProps) {
  return (
    <LoginLink className="hover">
      <HeaderItemLabel>{children}</HeaderItemLabel>
      <ProfileImageWrapper>
        <ProfileImage />
      </ProfileImageWrapper>
    </LoginLink>
  );
}

export default HeaderLoginLink;
