import React from 'react';
import styled from 'styled-components';

type ProjectCardProps = {
  src?: string;
};

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    padding: 0px 0px 75%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.2s ease 0s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

function ProjectImage({ src }: ProjectCardProps) {
  return (
    <ImageWrapper>
      <a>
        <Image src={src} />
      </a>
    </ImageWrapper>
  );
}

export default ProjectImage;
