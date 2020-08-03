import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import Header from '../components/templates/Header';
import Banner from '../components/organisms/Banner';
import ProjectInfo from '../components/molecules/ProjectInfo';
import ProjectFundingStatus from '../components/atoms/ProjectFundingStatus';

interface HomeProsInterface {}

export default function Home() {
  return (
    <div>
      <Head>
        <title>텀블벅 클론코딩</title>
      </Head>
      <Header />
      <Banner />
      <ProjectInfo
        category="CPU/Ryzen"
        company="AMD"
        content="AMD 라이젠 3세대 리프레쉬 시리즈! <라이젠 3600xt 개봉기>"
      />
      <ProjectFundingStatus percentage="88" />
    </div>
  );
}
