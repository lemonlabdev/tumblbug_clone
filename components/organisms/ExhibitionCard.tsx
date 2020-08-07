import React from 'react';
import styled from 'styled-components';
import ExhibitionInfo from '../molecules/ExhibitionInfo';

type ExhibitionCardProps = {
  src?: string;
  title?: string;
  number?: number;
};

const ExhibitionCardWrapper = styled.div`
  position: relative;
  left: auto;
  width: 50%;
  min-width: 80%;
  padding: 0px 0px 27px 14px;
  @media only screen and (min-width: 1080px) {
    flex: 1 1 50%;
    min-width: 528px;
    padding: 0px 12px 27px 0px;
  }
`;

function ExhibitionCard({ src, title, number }: ExhibitionCardProps) {
  return (
    <ExhibitionCardWrapper>
      <ExhibitionInfo src={src} title={title} number={number} />
    </ExhibitionCardWrapper>
  );
}

export default ExhibitionCard;
