import React from 'react';
import styled from 'styled-components';

type ViewMoreButtonProps = {
  content?: string;
  isHead?: boolean;
};

const MoreButton = styled.a`
  height: 44px;
  display: ${(props: ViewMoreButtonProps) => (props.isHead ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 23px;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: rgb(107, 107, 107);
  &:hover {
    cursor: pointer;
    color: rgb(109, 109, 109);
    background: rgb(242, 242, 242);
  }
  @media (min-width: 992px) {
    width: 233px;
    margin: -32px auto 0px;
  }
`;

function ViewMoreButton({ content, isHead }: ViewMoreButtonProps) {
  return <MoreButton isHead={isHead}>{content}</MoreButton>;
}

export default ViewMoreButton;
