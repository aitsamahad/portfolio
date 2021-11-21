import Heading from "@common/Heading"
import PortfolioTable from "@common/Tables/Portfolio.table"
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace"
import Grid from "@mui/material/Grid"
import { useRouter } from "next/router"
import React from "react"

function PortfolioPage() {
  const history = useRouter()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} alignItems='center'>
        <span style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
          <KeyboardBackspace />{" "}
          <span style={{ position: "relative", top: -6 }}>Go Back</span>
        </span>
      </Grid>
      <Grid item xs={12}>
        <Heading>
          Archive <br />{" "}
          <small>
            An Always updating list of things I've worked/working on
          </small>
        </Heading>
      </Grid>
      <Grid item xs={12}>
        <PortfolioTable />
      </Grid>
    </Grid>
  )
}

export default PortfolioPage
