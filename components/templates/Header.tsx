import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderTextSpan from '../molecules/HeaderTextSpan';
import HeaderTextButton from '../molecules/HeaderTextButton';
import CenterMenu from '../molecules/CenterMenu';
import HeaderSearchButton from '../atoms/HeaderSearchButton';
import HeaderLoginButton from '../molecules/HeaderLoginButton';
import HeaderSideMenu from '../organisms/HeaderSideMenu';

const HeaderOuter = styled.div`
  @media (min-width: 1080px) {
    height: 65px;
  }
  width: 100%;
  height: 58px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Container = styled.div`
  @media (min-width: 1080px) {
    width: 1080px;
    margin: 0px auto;
  }
  width: 100%;
  position: relative;
  margin: 0px auto;
  padding: 0px;
`;

function Header(props) {
  return (
    <HeaderOuter>
      <Container>
        <HeaderMenu>
          <HeaderSideMenu isRight={false}>
            <HeaderTextButton>프로젝트 둘러보기</HeaderTextButton>
            <HeaderTextSpan>프로젝트 올리기</HeaderTextSpan>
          </HeaderSideMenu>
          <CenterMenu />
          <HeaderSideMenu isRight={true}>
            <HeaderSearchButton />
            <HeaderLoginButton>로그인 / 회원가입</HeaderLoginButton>
          </HeaderSideMenu>
        </HeaderMenu>
      </Container>
    </HeaderOuter>
  );
}

export default Header;
