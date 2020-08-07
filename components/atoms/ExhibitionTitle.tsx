import React from 'react';
import styled from 'styled-components';

type ExhibitionTitleProps = {
  title?: string;
};

const ExhibitionHeading = styled.span`
  color: rgb(33, 33, 33);
  font-weight: bold;
  font-size: 1.23rem;
  position: relative;
  display: block;
  padding: 16px 0px 0px 16px;
  @media (min-width: 1080px) {
    font-size: 1.28rem;
    margin: 22px 0px 0px 24px;
    padding: 0px 0px 16px;
    &::after {
      content: '';
      width: 24px;
      height: 2px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background: rgb(33, 33, 33);
    }
  }
`;

const ExhibitionTitleWrapper = styled.span`
  display: box;
  box-orient: vertical;
  line-clamp: 2;
  max-height: 46px;
  overflow: hidden;
`;

function ExhibitionTitle({ title }: ExhibitionTitleProps) {
  return (
    <ExhibitionHeading>
      <ExhibitionTitleWrapper>
        <span>{title}</span>
      </ExhibitionTitleWrapper>
    </ExhibitionHeading>
  );
}

export default ExhibitionTitle;
