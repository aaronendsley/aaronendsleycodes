import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  min-height: 100%;
  margin: 0 auto;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media only screen and (min-width: 1000px) {
    width: 95%;
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
// flex-flow: column wrap;

const PostContainer = props => <Container>{props.children}</Container>;

export default PostContainer;
