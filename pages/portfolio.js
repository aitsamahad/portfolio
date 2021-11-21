import PortfolioPage from "@pages/Portfolio.page"
import Head from "next/head"

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio List - Aitsam Ahad</title>
        <meta name='description' content='Portfolio List - Aitsam Ahad' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PortfolioPage />
    </div>
  )
}
