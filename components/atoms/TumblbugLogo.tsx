import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  fill: rgb(0, 0, 0);
`;

const MainLogo = styled.img`
  src: "../../public/images/logo.svg";
`;

function TumblbugLogo(props) {
  return (
    <LogoContainer>
      <a><MainLogo/></a>
    </LogoContainer>
  );
}

export default TumblbugLogo;
