import React from 'react';
import styled from 'styled-components';

const LikeButtonWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const LikeButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0px;
  overflow: hidden;
  background: transparent;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url('images/heart.png') 0px 0px / cover no-repeat;
  }
`;

function ProjectLikeButton() {
  return (
    <LikeButtonWrapper>
      <LikeButton />
    </LikeButtonWrapper>
  );
}

export default ProjectLikeButton;
