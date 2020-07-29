import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

interface HomeProsInterface {}

export default function Home() {
  return (
    <div>
      <Head>
        <title>텀블벅 클론코딩</title>
      </Head>
      <span>테스트 풀리퀘</span>
      <div>{/*여기다 작성하기*/}</div>
    </div>
  )
}
