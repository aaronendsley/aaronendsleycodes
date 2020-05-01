import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import ImageFluid from "../components/image-fluid";
import SEO from "../components/seo";
import ContentBox from "../components/content-box";
import "../fonts/fonts.css";

const Spacer = styled.div`
  width: 100%;
  margin-top: 200px;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Spacer></Spacer>
      <ContentBox></ContentBox>
    </Layout>
  );
};

export default IndexPage;
//<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//      <ImageFluid image={data} />
//  </div>
