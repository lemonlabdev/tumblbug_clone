import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderLabelProps = {
  children?: ReactNode;
};

const Text = styled.span`
  @media (min-width: 1080px) {
    line-height: 65px;
  }
  color: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
`;

function HeaderItemLabel({ children }: HeaderLabelProps) {
  return <Text>{children}</Text>;
}

export default HeaderItemLabel;
