import React from 'react';
import styled from 'styled-components';

type ProjectTitleProps = {
  content?: string;
};

const ProjectTitleWrapper = styled.dt`
  display: box;
  box-orient: vertical;
  line-clamp: 2;
  font-size: 14px;
  line-height: 24px;
  max-height: 48px;
  color: rgb(61, 61, 61);
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 27px;
    max-height: 54px;
  }
`;

const TitleLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

function ProjectTitle({ content }: ProjectTitleProps) {
  return (
    <ProjectTitleWrapper>
      <TitleLink>{content}</TitleLink>
    </ProjectTitleWrapper>
  );
}

export default ProjectTitle;
