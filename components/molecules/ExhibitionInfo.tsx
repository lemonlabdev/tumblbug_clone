import React from 'react';
import styled from 'styled-components';
import ExhibitionBanner from '../atoms/ExhibitionBanner';
import ExhibitionTitle from '../atoms/ExhibitionTitle';
import ExhibitionState from '../atoms/ExhibitionState';

type ExhibitionInfoProps = {
  src?: string;
  title?: string;
  number?: number;
};

const ExhibitionLink = styled.a`
  height: 98px;
  display: block;
  position: relative;
  border: 1px solid rgb(230, 230, 230);
  overflow: hidden;
  border-radius: 4px;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
  @media (min-width: 1080px) {
    box-shadow: none;
    height: 124px;
    border: 1px solid rgb(239, 239, 239);
    background: rgb(255, 255, 255);
    padding: 0px;
    margin: 0px;
    transition: all 0.2s ease 0s;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 4px 8px 14px 0px;
    }
  }
`;
function ExhibitionInfo({ src, title, number }: ExhibitionInfoProps) {
  return (
    <ExhibitionLink>
      <ExhibitionBanner src={src} />
      <ExhibitionTitle title={title} />
      <ExhibitionState number={number} />
    </ExhibitionLink>
  );
}

export default ExhibitionInfo;
