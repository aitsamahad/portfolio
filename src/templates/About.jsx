import Heading from "@common/Heading"
import Grid from "@mui/material/Grid"
import React from "react"
import Divider from "@mui/material/Divider"

function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Heading>
          About <br /> <small>Who i am</small>
        </Heading>
        <p>
          I'm Aitsam, a software engineer based in Islamabad, Web Developer with
          3 years of experience in designing and developing user interfaces,
          testing, debugging, and eCommerce technologies. Proven ability in
          optimizing web functionality that improve data retrieval and workflow
          efficiencies using modern backends.
        </p>
        <p>
          Graduated from Virtual University of Pakistan in Software Engineering,
          I am also working as a part-time Full Stack engineer at iDevelopStudio
          & Frontend Engineer @ XIOTS (Formely known as CreativeKhan), where I
          work on a wide variety of interesting and meaningful projects on a
          daily basis.
        </p>
      </Grid>
      <Grid item xs={6} textAlign='right'>
        <img
          src='/assets/aitsam-illustration.svg'
          alt='Aitsam Ahad illustration'
          width='60%'
        />
      </Grid>
      <Grid item xs={12}>
        <Divider variant='middle' />
      </Grid>
    </Grid>
  )
}

export default About
