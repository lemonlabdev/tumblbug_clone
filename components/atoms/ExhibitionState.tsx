import React from 'react';
import styled from 'styled-components';

type ExhibitionStateProps = {
  number?: number;
};

const ExhibitionCount = styled.span`
  position: absolute;
  left: 16px;
  bottom: 10px;
  color: rgb(117, 117, 117);
  font-size: 0.92rem;
  @media (min-width: 1080px) {
    left: 24px;
    font-size: 0.8rem;
  }
`;

const ExhibitionNumber = styled.em`
  color: rgb(250, 101, 99);
  font-style: noraml;
  font-weight: bold;
`;

function ExhibitionState({ number }: ExhibitionStateProps) {
  return (
    <ExhibitionCount>
      <ExhibitionNumber>{number}</ExhibitionNumber>개 프로젝트
    </ExhibitionCount>
  );
}

export default ExhibitionState;
