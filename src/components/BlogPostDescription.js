import React from "react";
import styled from "styled-components";
import ContentBox from "../components/content-box";

const BlogPostDescription = props => (
  <ContentBox flex="2" desktopWidth="600px" title={props.title}></ContentBox>
);

export default BlogPostDescription;
