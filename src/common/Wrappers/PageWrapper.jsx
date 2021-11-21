import React from "react"
import styled from "styled-components"

function PageWrapper({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

export default PageWrapper

const Container = styled.div`
  padding: 20px;
  background-image: url("/assets/waves.svg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`
const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
