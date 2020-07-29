import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderLabelProps = {
  children?: ReactNode;
};

const Text = styled.span`
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
