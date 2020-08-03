import React from 'react';
import styled from 'styled-components';

type ProjectCardProps = {
  src?: string;
};

const ImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 240px;
  height: 180px;
  transition: transform 0.2s ease 0s;
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
