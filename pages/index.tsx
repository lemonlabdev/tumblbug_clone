import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import HeaderItemLabel from '../components/atoms/HeaderItemLabel';
import HeaderTextButton from '../components/molecules/HeaderTextButton';
import TumblbugLogo from '../components/atoms/TumblbugLogo';

interface HomeProsInterface {}

const TestImg = styled.span`
  background-image: url('../public/images/user-account.png');
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>텀블벅 클론코딩</title>
      </Head>
      <HeaderTextButton>프로젝트 둘러보기</HeaderTextButton>
      <HeaderItemLabel>프로젝트 올리기</HeaderItemLabel>
      <div>{/*여기다 작성하기*/}</div>
    </div>
  );
}
