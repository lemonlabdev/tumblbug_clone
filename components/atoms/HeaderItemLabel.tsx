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
`;

function HeaderItemLabel({ children }: HeaderLabelProps) {
  return <Text className="Header-line-height Header-mobile">{children}</Text>;
}

export default HeaderItemLabel;
