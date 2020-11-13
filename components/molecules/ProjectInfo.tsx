import React from 'react';
import styled from 'styled-components';
import ProjectSubInfo from '../atoms/ProjectSubInfo';
import ProjectTitle from '../atoms/ProjectTitle';

type ProjectInfoProps = {
  category?: string;
  company?: string;
  content?: string;
};

const InfoWrapper = styled.dl`
  min-height: 74px;
  margin: 0px;
  padding-top: 8px;
  @media (min-width: 1080px) {
    min-height: 88px;
    padding-top: 12px;
  }
`;

function ProjectInfo({ category, company, content }: ProjectInfoProps) {
  return (
    <InfoWrapper>
      <ProjectSubInfo category={category} company={company} />
      <ProjectTitle content={content} />
    </InfoWrapper>
  );
}

export default ProjectInfo;
