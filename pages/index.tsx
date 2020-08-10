import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Header from '../components/templates/Header';
import Banner from '../components/templates/Banner';
import ProjectWrapper from '../components/templates/ProjectWrapper';
import ExhibitionWrapper from '../components/templates/ExhibitionWrapper';
import ProjectStartBanner from '../components/templates/ProjectStartBanner';

interface HomeProsInterface {}

export default function Home() {
  return (
    <>
      <Head>
        <title>텀블벅 클론코딩</title>
      </Head>
      <Header />
      <Banner />
      <ProjectWrapper heading="주목할 만한 프로젝트" isHead={true} />
      <ExhibitionWrapper heading="진행중인 기획전" />
      <ProjectWrapper
        heading="인기 추천 프로젝트"
        content="인기 추천 프로젝트 더보기"
        isHead={false}
      />
      <ProjectWrapper
        heading="성공 임박 프로젝트"
        content="성공 임박 프로젝트 더보기"
        isHead={false}
      />
      <ProjectWrapper
        heading="신규 추천 프로젝트"
        content="신규 추천 프로젝트 더보기"
        isHead={false}
      />
      <ProjectStartBanner />
    </>
  );
}
