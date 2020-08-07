import React from 'react';
import styled from 'styled-components';
import ArrowBraket from '../atoms/ArrowBraket';

type ListHeadingProps = {
  heading?: string;
  isHead?: boolean;
};

const Heading = styled.div`
  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 29px;
    padding: 0px 12px;
  }
  font-size: 18px;
  line-height: 27px;
  color: rgb(61, 61, 61);
  font-weight: bold;
  margin: 0px 0px 20px;
  padding: 0px 7px;
`;

function ListHeading({ heading, isHead }: ListHeadingProps) {
  return (
    <Heading>
      {heading}
      <ArrowBraket isHead={isHead}/>
    </Heading>
  );
}

export default ListHeading;
