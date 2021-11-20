import Grid from "@mui/material/Grid"
import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={6}>
        <Container>
          <Logo>
            <img
              src='/assets/aitsam-ahad.png'
              alt='Aitsam Ahad logo'
              width='150px'
            />
          </Logo>
          <Logo>MERN STACK DEVELOPER</Logo>
        </Container>
      </Grid>
      <Grid item xs={6} justifyContent='flex-end'></Grid> */}
      <Grid item xs={12}>
        <Container>
          <Logo>
            <img
              src='/assets/aitsam-ahad.png'
              alt='Aitsam Ahad logo'
              width='150px'
            />
          </Logo>
          <Logo>MERN STACK DEVELOPER</Logo>
        </Container>
      </Grid>
    </Grid>
  )
}

export default Header

const Logo = styled.span`
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
`
const Container = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`
