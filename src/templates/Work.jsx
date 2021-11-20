import PortfolioCard from "@common/Card"
import Heading from "@common/Heading"
import Grid from "@mui/material/Grid"
import React from "react"
import { PortfolioData } from "src/portfolio"
import styled from "styled-components"

function Work() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} textAlign='center'>
        <Heading>
          Work <br /> <small>Some Things I've Built</small>
        </Heading>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {PortfolioData?.map((data, index) => (
            <Grid item xs={4} key={index}>
              <PortfolioCard
                image={data?.image}
                title={data?.title}
                subtitle={data?.subtitle}
                link={data?.link}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Work
