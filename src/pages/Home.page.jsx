import Banner from "@common/Banner"
import Footer from "@common/Footer"
import Header from "@common/Header"
import React from "react"
import About from "src/templates/About"
import Qualification from "src/templates/Education"
import Experience from "src/templates/Experience"
import Work from "src/templates/Work"

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <br />
      <br />
      <Work />
      <br />
      <br />
      <About />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <Qualification />
      <br />
      <br />
      <Footer />
    </>
  )
}
export default HomePage
