import Grid from "@mui/material/Grid"
import React from "react"

function Footer() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <span>&copy; All Rigts Reserved</span>
      </Grid>
      <Grid item xs={6} textAlign='right'>
        <span>Made With ❤ by Aitsam Ahad</span>
      </Grid>
    </Grid>
  )
}

export default Footer
