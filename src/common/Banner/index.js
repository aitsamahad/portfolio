import Grid from "@mui/material/Grid"
import React from "react"
import styled from "styled-components"
import Divider from "@mui/material/Divider"

function Banner() {
  return (
    <Grid container spacing={3} textAlign='center'>
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <Container>
          <Heading>Building digital products, brands, and experience</Heading>
          <p>
            Hi there
            <span role='img' aria-label='Emoji'>
              👋🏻
            </span>
            , My name is Aitsam, A software engineer based in Islamabad, PK
            building high-quality websites and applications using modern
            technologies and frameworks.
          </p>
          <CTA href='mailto:aitsama.ahad@gmail.com'>Get In Touch</CTA>
          <br />
          <CTA href='/assets/AitsamAhad_FrontEndEngineer.pdf' target='_blank'>
            Download Resume
          </CTA>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Divider variant='middle' />
      </Grid>
    </Grid>
  )
}

export default Banner

const Container = styled.div`
  max-width: 587px;
  text-align: center;
  padding-top: 20px;
`

const Heading = styled.h1`
  font-size: 64px;
  line-height: 1;
`

const CTA = styled.a`
  color: #fff;
  background: #000;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  display: block;
  height: 47px;
  :hover {
    padding: 9px;
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
  }
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`
