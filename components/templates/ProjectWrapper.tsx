import React from 'react';
import styled from 'styled-components';
import ProjectHeading from '../atoms/ProjectHeading';
import ProjectCard from '../organisms/ProjectCard';

type ProjectWrapperProps = {
  heading?: string;
};

const ProjectListContainer = styled.div`
  width: 100%;
  padding: 0px 9px;
  @media (min-width: 1080px) {
    width: 1080px;
    margin: 0px auto;
  }
  @media (min-width: 992px) {
    padding: 0px 12px;
  }
`;

const ProjectSectionWrapper = styled.div`
  @media (min-width: 1080px) {
    margin-bottom: 16px;
  }
`;

const ProjectListWrapper = styled.div`
  width: 100%;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

function ProjectWrapper({ heading }: ProjectWrapperProps) {
  return (
    <ProjectListContainer>
      <ProjectSectionWrapper>
        <ProjectHeading heading={heading} />
        <ProjectListWrapper>
          <ProjectList>
            <ProjectCard
              src="images/ryzen.jpg"
              category="CPU / Ryzen"
              company="AMD"
              content="AMD 라이젠 3세대 리프레쉬 시리즈 프로젝트 <더 빠르지만 열은 적게>"
              percentage={122}
            />
            <ProjectCard
              src="images/gocheok_sky_dome.jpg"
              category="야구장"
              company="키움 히어로즈"
              content="프로야구 관중입장 허용! '고척돔 입장권'"
              percentage={162}
            />
            <ProjectCard
              src="images/ryzen.jpg"
              category="CPU / Ryzen"
              company="AMD"
              content="AMD 라이젠 3세대 리프레쉬 시리즈 프로젝트 <더 빠르지만 열은 적게>"
              percentage={122}
            />
            <ProjectCard
              src="images/gocheok_sky_dome.jpg"
              category="야구장"
              company="키움 히어로즈"
              content="프로야구 관중입장 허용! '고척돔 입장권'"
              percentage={162}
            />
            <ProjectCard
              src="images/gocheok_sky_dome.jpg"
              category="야구장"
              company="키움 히어로즈"
              content="프로야구 관중입장 허용! '고척돔 입장권'"
              percentage={162}
            />
            <ProjectCard
              src="images/ryzen.jpg"
              category="CPU / Ryzen"
              company="AMD"
              content="AMD 라이젠 3세대 리프레쉬 시리즈 프로젝트 <더 빠르지만 열은 적게>"
              percentage={122}
            />
            <ProjectCard
              src="images/gocheok_sky_dome.jpg"
              category="야구장"
              company="키움 히어로즈"
              content="프로야구 관중입장 허용! '고척돔 입장권'"
              percentage={162}
            />
            <ProjectCard
              src="images/ryzen.jpg"
              category="CPU / Ryzen"
              company="AMD"
              content="AMD 라이젠 3세대 리프레쉬 시리즈 프로젝트 <더 빠르지만 열은 적게>"
              percentage={122}
            />
          </ProjectList>
        </ProjectListWrapper>
      </ProjectSectionWrapper>
    </ProjectListContainer>
  );
}

export default ProjectWrapper;
