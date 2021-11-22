import PortfolioCard from "@common/Card"
import Heading from "@common/Heading"
import Grid from "@mui/material/Grid"
import React from "react"
import { PortfolioData } from "src/portfolio"
import Divider from "@mui/material/Divider"
import { useRouter } from "next/router"

function Work() {
  const history = useRouter()
  const FiveRecentPortfolio = PortfolioData?.slice(0, 5) ?? []

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} textAlign='center'>
        <Heading>
          Work <br />{" "}
          <small>
            Some Things I've Built{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/portfolio")}
            >
              <u>(See All)</u>
            </span>
          </small>
        </Heading>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {FiveRecentPortfolio?.map((data, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <PortfolioCard
                image={data?.image}
                title={data?.title}
                subtitle={data?.subtitle}
                link={data?.link}
                tech={data?.tech}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider variant='middle' />
      </Grid>
    </Grid>
  )
}

export default Work
