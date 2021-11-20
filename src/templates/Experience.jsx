import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import styled from "styled-components"
import Heading from "@common/Heading"

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

export default function Experience() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Heading>
        Experience <br /> <small>Where I've Worked</small>
      </Heading>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: "divider", textAlign: "left" }}
        >
          <Tab label='XIOTS' {...a11yProps(0)} />
          <Tab label='iDevelopStudio' {...a11yProps(1)} />
          <Tab label='SevenKoncepts' {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Title>
            Sr. Frontend Engineer (ReactJS) <a href='#'>@ XIOTS</a>
          </Title>
          <Subtitle>Sep 2020 - Present</Subtitle>
          <ul>
            <li>
              Write modern, performant, and robust code for a diverse array of
              client and internal projects.
            </li>
            <li>
              Work with a variety of different languages, frameworks, and
              content management systems such as JavaScript, TypeScript, React,
              Node.js, Heroku, Netlify, Vercel, Cloudflare, GraphQL & REST etc.
            </li>
            <li>
              Communicate and collaborate with multi- disciplinary teams of
              engineers, designers, producers, clients, and stakeholders on a
              daily basis.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Title>
            Backend Engineer (NodeJS) <a href='#'>@ iDevelopStudio</a>
          </Title>
          <Subtitle>Jan 2020 - Present</Subtitle>
          <ul>
            <li>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects.
            </li>
            <li>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, PHP, SQL,
              NOSQL, React, React Native, WordPress, Java, NextJS and Netlify.
            </li>
            <li>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Title>
            SEO Executive <a href='#'>@ SevenKoncepts</a>
          </Title>
          <Subtitle>June - Sep 2017</Subtitle>
          <ul>
            <li>
              Worked with a team of three designers, 5 developers to rank some
              websites and an e- commerce platform for prosportsae, an ambitious
              startup originating from UAE and BroomStick a very well known
              design agency.
            </li>
            <li>
              Helped solidify a brand direction for both that spans both SEO and
              marketing.
            </li>
            <li>
              Interfaced with clients on a weekly basis, providing technological
              expertise.
            </li>
          </ul>
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
