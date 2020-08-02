import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderLabelProps = {
  children?: ReactNode;
  hover?: String;
};

const Text = styled.span`
  color: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  line-height: 58px;
  @media (min-width: 1080px) {
    line-height: 65px;
  }
  @media (max-width: 1079px) {
    display: none;
  }
`;

function HeaderItemLabel({ children }: HeaderLabelProps) {
  return <Text>{children}</Text>;
}

export default HeaderItemLabel;
