import React, { ReactNode } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderTextButtonProps = {
  children?: ReactNode;
};

const TextButton = styled.button`
  padding: 0 1rem;
  border: none;
  outline: none;
  color: black;
  background: transparent;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
`;

function HeaderTextButton({ children }: HeaderTextButtonProps) {
  return (
    <TextButton className="Header-line-height">
      <FontAwesomeIcon icon={faBars} className="Bar" />
      <HeaderItemLabel>{children}</HeaderItemLabel>
    </TextButton>
  );
}

export default HeaderTextButton;
