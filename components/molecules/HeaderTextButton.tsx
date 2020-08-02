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
  line-height: 58px;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
  @media (min-width: 1080px) {
    line-height: 65px;
  }
`;

function HeaderTextButton({ children }: HeaderTextButtonProps) {
  return (
    <TextButton>
      <FontAwesomeIcon icon={faBars} className="Bar" />
      <HeaderItemLabel>{children}</HeaderItemLabel>
    </TextButton>
  );
}

export default HeaderTextButton;
