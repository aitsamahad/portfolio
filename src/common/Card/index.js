import React from "react"
import styled from "styled-components"

function PortfolioCard({ title, subtitle, image, link, tech }) {
  return (
    <Card image={image}>
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <span>
        <b>Tech Stack: </b>
        {tech?.join(", ")}
      </span>
      <span>
        <b>
          <a href={link} target='_blank'>
            <u>View</u>
          </a>
        </b>
      </span>
    </Card>
  )
}

export default PortfolioCard

const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  background-image: url(${(props) => props?.image && props?.image});
  position: relative;
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  text-align: center;
  background-position: center;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  span,
  h4,
  h3 {
    display: none;
  }

  h4 {
    font-size: 25px;
    line-height: 0.9;
  }
  h3 {
    font-size: 38px;
    max-width: 410px;
    line-height: 1;
  }
  cursor: pointer;
  :hover {
    background-image: none;
    border: 1px solid #000;
    h4,
    h3,
    span {
      display: block;
    }
  }
`
