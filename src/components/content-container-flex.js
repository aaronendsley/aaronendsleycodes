import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  /* display: flex; */
  display:grid;
  grid-template-rows: 1fr 2fr;
  min-height: 100%;
  margin: 250px auto;
  /* height: 100%; */
  /* flex-direction: column;
  justify-content: flex-start; */
  @media only screen and (min-width: 1000px) {
    width: 95%;
    /* flex-direction: row; */
  }

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
// flex-flow: column wrap;

const ContentContainerFlex = props => <Container>{props.children}</Container>;

export default ContentContainerFlex;
