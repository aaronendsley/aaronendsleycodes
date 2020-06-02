import React from "react";
import styled from "styled-components";
import ContentBoxSmall from "../components/content-box-small";

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  flex: 5;
`;

const P = styled.p`
  color: #000;
`;

const BlogPostDescription = props => (
  <ContentBoxSmall flex="2" desktopWidth="300px" title={props.title}>
    <Content>
      <P>{props.description}</P>
    </Content>
  </ContentBoxSmall>
);

export default BlogPostDescription;
