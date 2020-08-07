import React from 'react';
import styled from 'styled-components';
import ListHeading from '../molecules/ListHeading';
import ExhibitionCard from '../organisms/ExhibitionCard';

type ProjectWrapperProps = {
  heading?: string;
};

const Container = styled.div`
  margin-top: 0px;
  margin-bottom: 13px;
  width: 100%;
  z-index: 1;
  position: relative;
  @media (min-width: 1080px) {
    margin-top: 0px;
    margin-bottom: 45px;
    width: 1080px;
    z-index: 2;
    padding: 0px 12px;
    margin: 0px auto;
  }
`;

const RelativeDiv = styled.div`
  position: relative;
  height: 100%;
`;

const ExhibisionContainer = styled.div`
  position: relative;
  height: 125px;
  padding-left: 2px;
  overflow: hidden;
  @media (min-width: 1080px) {
    height: 151px;
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0px auto;
  @media only screen and (min-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ExhibitionListWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 140;
  overflow: hidden;
`;

const ExhibitionList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px);
`;

function ExhibitionWrapper({ heading }: ProjectWrapperProps) {
  return (
    <Container>
      <ListHeading heading={heading} />
      <ExhibisionContainer>
        <RelativeDiv>
          <Wrapper>
            <ExhibitionListWrapper>
              <ExhibitionList>
                <ExhibitionCard
                  src="images/suneung_teukgang.jpg"
                  title="수학II의 세계로"
                  number={5}
                />
                <ExhibitionCard
                  src="images/suneung_teukgang.jpg"
                  title="수학II의 세계로"
                  number={5}
                />
              </ExhibitionList>
            </ExhibitionListWrapper>
          </Wrapper>
        </RelativeDiv>
      </ExhibisionContainer>
    </Container>
  );
}

export default ExhibitionWrapper;
