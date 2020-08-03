import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import Header from '../components/templates/Header';
import Banner from '../components/organisms/Banner';
import ProjectSubInfo from '../components/atoms/ProjectSubInfo';

interface HomeProsInterface {}

export default function Home() {
  return (
    <div>
      <Head>
        <title>텀블벅 클론코딩</title>
      </Head>
      <Header />
      <Banner />
      <ProjectSubInfo category="CPU/Ryzen" company="AMD" />
    </div>
  );
}
