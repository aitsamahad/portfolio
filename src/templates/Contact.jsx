import Heading from "@common/Heading"
import Grid from "@mui/material/Grid"
import React from "react"
import Divider from "@mui/material/Divider"
import { CTA } from "@common/CTA"

function Contact() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Divider variant='middle' />
      </Grid>
      <Grid item xs={12} textAlign='center'>
        <Heading>
          Get In Touch <br /> <small>Just Say Hi</small>
        </Heading>
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={3}>
            <CTA href='mailto:aitsama.ahad@gmail.com'>Ping Me!</CTA>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
