import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quiz Up</title>
        <meta name='description' content='Online Quiz App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
    </div>
  )
}
