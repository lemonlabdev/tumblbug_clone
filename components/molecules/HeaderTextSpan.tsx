import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderTextButtonProps = {
  children?: ReactNode;
};

const TextSpan = styled.span`
  text-align: center;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const TextLink = styled.a`
  padding: 0 1rem;
`;

function HeaderTextButton({ children }: HeaderTextButtonProps) {
  return (
    <TextSpan className="Header-line-height">
      <TextLink className="Header-line-height">
        <HeaderItemLabel>{children}</HeaderItemLabel>
      </TextLink>
    </TextSpan>
  );
}

export default HeaderTextButton;
