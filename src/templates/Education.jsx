import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import styled from "styled-components"
import Heading from "@common/Heading"
import {useTheme} from '@mui/material'


function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "0px 30px", textAlign: "left", maxWidth: "800px" }}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

export default function Qualification() {
  const [value, setValue] = React.useState(0)
  const theme = useTheme();

  const matches = theme.breakpoints.down('700');

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Heading>
        Qualification <br /> <small>What I've Studied</small>
      </Heading>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Tabs
          orientation={matches ? 'horizontal':'vertical'}
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: "divider", textAlign: "left" }}
        >
          <Tab label='Degree' {...a11yProps(0)} />
          <Tab label='Certificates' {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Title>
            BSc (Hons) - Software Engineering <a href='#'>(2016 - 2020)</a>
          </Title>
          <Subtitle>
            Virtual University of Pakistan, Rawalpindi, Pakistan
          </Subtitle>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Title>
            Blockchain Basics <a href='#'>(2019)</a>
          </Title>
          <Subtitle>University of Buffalo, USA (Coursera)</Subtitle>
          <br />
          <Title>
            CPISM & DISM <a href='#'>(August 2014 - April 2015)</a>
          </Title>
          <Subtitle>Aptech Computer Education, Hyderabad, Pakistan</Subtitle>
        </TabPanel>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
`

const Title = styled.h4`
  font-size: 22px;
  line-height: 0;
  a {
    text-decoration: none;
    color: #286fb4;
  }
`
const Subtitle = styled.h5`
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.8;
  line-height: 0;
`
