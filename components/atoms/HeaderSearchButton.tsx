import React from 'react';
import styled from 'styled-components';

const SearchButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  text-align: center;
  background-color: transparent;
  outline: none;
  border: none;
  &::before {
    content: '';
    display: block;
    background-image: url('images/search.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .search-button::before {
    width: 20px;
    height: 20px;
    margin: 0px;
  }
`;

function HeaderSearchButton(props) {
  return <SearchButton className="search-button"></SearchButton>;
}

export default HeaderSearchButton;
