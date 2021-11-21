import styled from "styled-components"

export const CTA = styled.a`
  color: #fff;
  background: #000;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  display: block;
  height: 47px;
  :hover {
    padding: 9px;
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
  }
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`
