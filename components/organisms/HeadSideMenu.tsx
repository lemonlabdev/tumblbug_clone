import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BothSideProps = {
  isRight: boolean;
};

const BothSideMenu = styled.div`
  background: transparent;
  text-align: ${(props) => (props.isRight ? 'right' : 'center')};
  display: flex;
  align-items: ${(props) => (props.isRight ? 'center' : '')};
  justify-content: ${(props) => (props.isRight ? 'flex-end' : '')};
  flex: 1 0 25%;
`;

function HeadSideMenu({ isRight }: BothSideProps) {
  return <BothSideMenu isRight={isRight}></BothSideMenu>;
}

export default HeadSideMenu;
