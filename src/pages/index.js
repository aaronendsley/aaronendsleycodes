import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

import MostRecent from '../components/most-recent';
import Bio from '../components/bio';
import BlogPostDescription from '../components/BlogPostDescription';

import '../fonts/fonts.css';

function Intro({ introData }) {
    console.log(Img);
    return (
        <Bio
            title={introData.articleTitle}
            image={introData.image.asset.fluid}
            altText="Photo of Aaron Endsley"
            text={introData.article}
        />
    );
}

export default function IndexPage({ data }) {
    const introData = data.allSanityMain.nodes[0];
    const posts = data.allSanityBlogPost.nodes;
    console.log(posts);
    return (
        <Layout>
            <SEO title="Home: AaronEndsley.codes" />
            <Intro introData={introData} />
            <MostRecent />
            <BlogPostDescription posts={posts} />
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
        allSanityBlogPost {
            nodes {
                postTitle
                slug {
                    current
                }
                postArticle
                image {
                    asset {
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;
