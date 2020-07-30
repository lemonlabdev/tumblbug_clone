import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderTextButtonProps = {
  children?: ReactNode;
};

const TextButton = styled.button`
  @media (min-width: 1080px) {
    line-height: 65px;
  }
  border: none;
  outline: none;
  color: black;
  background: transparent;
  font-family: 'Noto Sans KR', sans-serif;
`;

function HeaderTextButton({ children }: HeaderTextButtonProps) {
  return (
    <HeaderTextButton>
      <HeaderItemLabel>{children}</HeaderItemLabel>
    </HeaderTextButton>
  );
}

export default HeaderTextButton;
