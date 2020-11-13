import React from 'react';
import styled from 'styled-components';

type ArrowBraketProps = {
  isHead?: boolean;
};

const ArrowBraketWrapper = styled.div`
  font-size: 14px;
  margin: 0px 0px 0px 5px;
  display: ${(props: ArrowBraketProps) =>
    props.isHead ? 'none' : 'inline-flex'};
  align-self: center;
`;

function ArrowBraket({ isHead }: ArrowBraketProps) {
  return (
    <ArrowBraketWrapper isHead={isHead}>
      <img src="images/Arrow.svg" />
    </ArrowBraketWrapper>
  );
}

export default ArrowBraket;
