import React from 'react';
import styled from 'styled-components';

type ProjectFundingStatusProps = {
  percentage?: number;
};

const FundingStatus = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  @media (min-width: 1080px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const PercentageText = styled.span`
  color: rgb(255, 87, 87);
`;

function ProjectFundingStatus({ percentage }: ProjectFundingStatusProps) {
  return (
    <FundingStatus>
      <PercentageText>{percentage}% 달성</PercentageText>
    </FundingStatus>
  );
}

export default ProjectFundingStatus;
