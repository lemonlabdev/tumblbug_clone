import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import Header from '../components/templates/Header';
import Banner from '../components/templates/Banner';
import ProjectWrapper from '../components/templates/ProjectWrapper';
import ExhibitionWrapper from '../components/templates/ExhibitionWrapper';

interface HomeProsInterface {}

export default function Home() {
  return (
    <div>
      <Head>
        <title>텀블벅 클론코딩</title>
      </Head>
      <Header />
      <Banner />
      <ProjectWrapper heading="주목할 만한 프로젝트" />
      <ExhibitionWrapper heading="진행중인 기획전" />
    </div>
  );
}
