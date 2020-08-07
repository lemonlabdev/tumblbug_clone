import React from 'react';
import styled from 'styled-components';
import ProjectHeading from '../atoms/ProjectHeading';
import ExhibitionTitle from '../atoms/ExhibitionTitle';

type ProjectWrapperProps = {
  heading?: string;
  title?: string;
};

function ExhibitionWrapper({ heading, title }: ProjectWrapperProps) {
  return (
    <div>
      <ExhibitionTitle title={title}></ExhibitionTitle>
      <ProjectHeading heading={heading}></ProjectHeading>
    </div>
  );
}

export default ExhibitionWrapper;
