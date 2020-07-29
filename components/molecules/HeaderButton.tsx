import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderButtonProps = {
  children?: ReactNode;
};

const TextButton = styled.button`
  border: none;
  outline: none;
  color: black;
  background: transparent;
  font-family: 'Noto Sans KR', sans-serif;
`;

function HeaderTextButton({ children }: HeaderButtonProps) {
  return (
    <TextButton>
      <HeaderItemLabel>{children}</HeaderItemLabel>
    </TextButton>
  );
}

export default HeaderTextButton;
