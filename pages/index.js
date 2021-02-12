import dynamic from 'next/dynamic'
import Head from 'next/head'

const Player = dynamic(
  () => import('../src/containers/Player'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="content">
      <Head>
        <title>MusicApp</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Player />
    </div>
  )
}
