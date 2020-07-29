import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const TextButton = styled.button`
  color: black;
  background: transparent;
  outline: none;
  border: none;
  line-height: 58px;
  padding: 0px 14px;
`;

const Text = styled.span`
  color: inherit;
`;

function HeaderTextButton(props) {
  return (
    <TextButton>
      <Text>{props.children}</Text>
    </TextButton>
  );
}

export default HeaderTextButton;
