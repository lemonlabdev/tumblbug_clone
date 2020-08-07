import React from 'react';
import styled from 'styled-components';
import ProjectInfo from '../molecules/ProjectInfo';
import ProjectLikeButton from '../atoms/ProjectLikeButton';
import ProjectImage from '../atoms/ProjectImage';
import ProjectFundingStatus from '../atoms/ProjectFundingStatus';

type ProjectCardProps = {
  src?: string;
  category?: string;
  company?: string;
  content?: string;
  percentage?: number;
};

const CardWrapper = styled.div`
  width: 50%;
  padding: 0px 7px 40px 7px;
  @media (min-width: 992px) {
    width: 25%;
    padding: 0px 12px 64px 12px;
  }
`;

const RelativeDiv = styled.div`
  position: relative;
`;

function ProjectCard({
  src,
  category,
  company,
  content,
  percentage,
}: ProjectCardProps) {
  return (
    <CardWrapper>
      <div>
        <RelativeDiv>
          <ProjectLikeButton />
          <ProjectImage src={src} />
          <ProjectInfo
            category={category}
            company={company}
            content={content}
          />
          <ProjectFundingStatus percentage={percentage} />
        </RelativeDiv>
      </div>
    </CardWrapper>
  );
}

export default ProjectCard;
