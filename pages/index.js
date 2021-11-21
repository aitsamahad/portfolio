import HomePage from "@pages/Home.page"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aitsam Ahad - Mern Stack Developer</title>
        <meta name='description' content='Aitsam Ahad - Mern Stack Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </div>
  )
}
