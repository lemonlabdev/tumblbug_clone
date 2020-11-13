import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  fill: rgb(0, 0, 0);
  cursor: pointer;
`;

const MainLogo = styled.img`
  width: 70px;
  height: 18.41px;
  background: transparent;
  @media (min-width: 1080px) {
    width: 85px;
    height: 22.36px;
  }
  `;

function TumblbugLogo() {
  return (
    <LogoContainer>
      <a>
        <MainLogo src="images/logo.svg" />
      </a>
    </LogoContainer>
  );
}

export default TumblbugLogo;
