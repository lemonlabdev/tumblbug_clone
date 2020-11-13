import React from 'react';
import styled from 'styled-components';

const SearchButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  text-align: center;
  background-color: transparent;
  margin: 0px -0.8rem 0px 0px;
  outline: none;
  border: none;
  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin: 0px;
    background-image: url('images/search.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (min-width: 1080px) {
    margin: 0px 0.5rem 0px 0px;
    padding: 5px;
    &::before {
      width: 24px;
      height: 24px;
      margin: 0px;
    }
  }
`;

function HeaderSearchButton(props) {
  return <SearchButton></SearchButton>;
}

export default HeaderSearchButton;
