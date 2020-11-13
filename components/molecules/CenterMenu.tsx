import React from 'react';
import styled from 'styled-components';
import TumblbugLogo from '../atoms/TumblbugLogo';

const Center = styled.div`
  width: 10rem;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 0px 1rem;
`;

function CenterMenu() {
  return (
    <Center>
      <a>
        <TumblbugLogo />
      </a>
    </Center>
  );
}

export default CenterMenu;
