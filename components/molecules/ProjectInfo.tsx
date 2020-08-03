import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.dl`
  min-height: 74px;
  margin: 0px;
  padding-top: 8px;
  @media (min-width: 1080px) {
    min-height: 88px;
    padding-top: 12px;
  }
`;

function ProjectInfo() {
  return <InfoWrapper></InfoWrapper>;
}

export default ProjectInfo;
