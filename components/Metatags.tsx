import Head from 'next/head'

interface MetatagsProps {
  title: string
  desc: string
}

const Metatags = ({ title, desc }: MetatagsProps) => {
  return (
    <Head>
      <title>{`delman.io | ${title}`}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Metatags