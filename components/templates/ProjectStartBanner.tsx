import React from 'react';
import styled from 'styled-components';

const ProjectStartBannerWrapper = styled.div`
  margin: 2rem 0px 0px;
  @media (min-width: 1080px) {
    margin: 4rem 0px 0px;
  }
`;

const StartBanenrWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: rgb(255, 255, 255);
  font-size: 0.9rem;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgb(153, 69, 209) 0%,
    rgb(105, 78, 216) 60%,
    rgb(54, 154, 201) 100%
  );
  @media (min-width: 1080px) {
    height: 100px;
    font-size: 1rem;
  }
`;

const StartBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('images/projectstart-banner-background.png');
  background-size: cover;
  opacity: 0.5;
  background-position: center center;
`;

const BannerHeading = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.5rem;
  margin-top: 0px;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  @media (min-width: 1080px) {
    font-size: 1.75rem;
  }
`;

const BannerContext = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: bold;
  line-height: 1.5;
  margin: 0px;
`;

function ProjectStartBanner() {
  return (
    <ProjectStartBannerWrapper>
      <StartBanenrWrapper>
        <StartBanner />
        <BannerHeading>
          <span>마음 속 프로젝트 아이디어, &nbsp;</span>
          <span>텀블벅에서 현실로</span>
        </BannerHeading>
        <BannerContext>
          <span>프로젝트를 위한 자금도 마련하고, &nbsp;</span>
          <span>든든한 후원자 네트워크도 확보하세요</span>
        </BannerContext>
      </StartBanenrWrapper>
    </ProjectStartBannerWrapper>
  );
}

export default ProjectStartBanner;
