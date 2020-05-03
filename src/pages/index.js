import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import ImageFluid from "../components/image-fluid";
import SEO from "../components/seo";
import ContentBox from "../components/content-box";
import Bio from "../components/bio";
import "../fonts/fonts.css";

const Spacer = styled.div`
  width: 100%;
  margin-top: 200px;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const sampleText =
    "Our neural pathways have become accustomed to your sensory input patterns. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Maybe we better talk out here; the observation lounge has turned into a swamp. I can't. As much as I care about you, my first duty is to the ship. How long can two people talk about nothing? Yesterday I did not know how to eat gagh. Flair is what marks the difference between artistry and mere competence. I recommend you don't fire until you're within 40,000 kilometers.";
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <Spacer></Spacer>
      <ContentBox title="Welcome">
        <Bio image={data} text={sampleText}></Bio>
        <p>Hi</p>
      </ContentBox>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default IndexPage;
