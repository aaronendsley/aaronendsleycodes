import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
  }
`;

const ContentContainerFlex = props => <Container>{props.children}</Container>;

export default ContentContainerFlex;
