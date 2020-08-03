import React from 'react';
import styled from 'styled-components';

type ProjectSubInfoProps = {
  category?: string;
  company?: string;
};

const SubInfo = styled.dd`
  font-size: 10px;
  margin: 0px;
  padding-bottom: 2px;
  line-height: 16px;
  color: rgb(158, 158, 158);
  @media (min-width: 1080px) {
    font-size: 11px;
    margin: 0px;
    padding-bottom: 4px;
    line-height: 18px;
  }
`;

const CompanyText = styled.span`
  &::before {
    content: '|';
    display: inline-block;
    margin: 0px 6px;
    font-size: 7px;
  }
  @media (min-width: 1080px) {
    &::before {
      font-size: 8px;
    }
  }
`;

const SubInfoLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

function ProjectSubInfo({ category, company }: ProjectSubInfoProps) {
  return (
    <SubInfo>
      <span>
        <SubInfoLink>{category}</SubInfoLink>
      </span>
      <CompanyText>
        <SubInfoLink>{company}</SubInfoLink>
      </CompanyText>
    </SubInfo>
  );
}

export default ProjectSubInfo;
