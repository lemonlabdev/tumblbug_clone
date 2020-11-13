import React from 'react';
import styled from 'styled-components';

const LikeButtonWrapper = styled.div`
  position: absolute;
  z-index: 9;
  right: 8px;
  top: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover::after {
    content: '';
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    left: -5px;
    top: -5px;
    z-index: 1;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
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
  &::before {
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
