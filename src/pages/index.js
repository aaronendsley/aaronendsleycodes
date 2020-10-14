import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import MostRecent from '../components/most-recent';
import Bio from '../components/bio';

import '../fonts/fonts.css';

const Spacer = styled.div`
  width: 100%;
  margin-top: 250px;

  @media only screen and (min-width: 1000px) {
    margin-top: 130px;
  }
`;

function Intro({ introData }) {
  console.log(Img);
  return (
    
      <Bio title={introData.articleTitle} image={introData.image.asset.fluid} altText="Photo of Aaron Endsley" text={introData.article}></Bio>
    
  );
}

export default function IndexPage({ data }) {
  const introData = data.allSanityMain.nodes[0];
  console.log(introData);
  return (
    <Layout>
      <SEO title="Home: AaronEndsley.codes" />
        <Intro introData={introData} />
      <MostRecent/>
    </Layout>
  );
}

export const query = graphql`
  {
    allSanityMain {
      nodes {
        articleTitle
        article
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
