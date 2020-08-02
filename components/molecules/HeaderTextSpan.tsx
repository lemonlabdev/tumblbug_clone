import React, { ReactNode } from 'react';
import styled from 'styled-components';
import HeaderItemLabel from '../atoms/HeaderItemLabel';

type HeaderTextButtonProps = {
  children?: ReactNode;
};

const TextSpan = styled.span`
  text-align: center;
  line-height: 58px;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
  @media (min-width: 1080px) {
    line-height: 65px;
  }
`;

const TextLink = styled.a`
  padding: 0 1rem;
  line-height: 58px;
  @media (min-width: 1080px) {
    line-height: 65px;
  }
`;

function HeaderTextButton({ children }: HeaderTextButtonProps) {
  return (
    <TextSpan>
      <TextLink>
        <HeaderItemLabel>{children}</HeaderItemLabel>
      </TextLink>
    </TextSpan>
  );
}

export default HeaderTextButton;
