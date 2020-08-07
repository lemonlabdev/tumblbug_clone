import React from 'react';
import styled from 'styled-components';

type ExhibitionBannerProps = {
  src?: string;
};

const BannerImage = styled.div`
  width: 139px;
  height: 98px;
  background-image: url(${(props: ExhibitionBannerProps) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  float: right;
  overflow: hidden;
  margin-left: 16px;
  @media (min-width: 1080px) {
    width: 176px;
    height: 124px;
    margin: -1px -1px -1px 16px;
  }
`;

function ExhibitionBanner({ src }: ExhibitionBannerProps) {
  return <BannerImage src={src}></BannerImage>;
}

export default ExhibitionBanner;
