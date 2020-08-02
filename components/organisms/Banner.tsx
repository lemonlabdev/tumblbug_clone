import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  max-width: 1080px;
  height: 100%;
  margin: 0px auto;
`;

const BannerImage = styled.div`
  background-image: url('/images/hero_gadamhangsul.jpg');
  background-size: cover;
  width: 100%;
  height: 280px;
  position: relative;
  background-position: center center;
  @media (min-width: 1080px) {
    width: 100%;
    height: 400px;
  }
  @media (min-width: 1400px) {
    height: 450px;
  }
`;

const TitleContainter = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-weight: bolder;
  margin: 0 0 1rem 2rem;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  display: block;
  font-size: 2.4rem;
  line-height: 1.3;
  width: 10em;
  padding-bottom: 0.5rem;
  margin: 0px 0px 0.25em;
  color: rgb(255, 255, 255);
  @media (min-width: 1080px) {
    font-size: 3.3rem;
    margin: 0px 0px 0.3em;
  }
`;

const Content = styled.div`
  color: rgb(255, 255, 255);
  font-size: 1.1rem;
  line-height: 1;
  @media (min-width: 1080px) {
    font-size: 1.5rem;
  }
`;

function Banner() {
  return (
    <BannerImage>
      <MainContainer>
        <TitleContainter>
          <Title>
            이거 정말 어렵다
            <br />
            시간도 없다...
          </Title>
          <Content>으으으으으 &lt;언제쯤 끝날까요? &gt;</Content>
        </TitleContainter>
      </MainContainer>
    </BannerImage>
  );
}

export default Banner;
