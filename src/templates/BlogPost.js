import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

const BlogPostContainer = styled.div`
    width: 100%;
    display: grid;
    margin: 100px auto;
    @media (min-width: 1000px) {
        width: 95%;
    }
`;

const TitleContainer = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: 0.1fr 2fr;
    width: 100%;
    border: 10px solid #252b33;
    border-radius: 20px;

    height: 500px;
`;

const Title = styled.div`
    display: grid;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: #252b33;
    border-bottom: solid 10px #25b3b8;
    border-top: solid 3px #25b3b8;
    border-radius: 0 0 10px 10px;
    color: #25b3b8;

    justify-items: start;

    h1 {
        font-size: 2rem;
        padding: 0px;
        padding-right: 10px;
        margin: 0;
        width: 100%;
        text-align: right;
        vertical-align: text-bottom;
        display: inline;
        align-self: end;
        text-transform: capitalize;
        font-weight: bold;
        font-style: bold;
    }

    @media (min-width: 1000px) {
        height: 100px;
    }
`;

const BlogPostStyles = styled.div`
    width: 95%;
    margin: 80px auto;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #25b3b8;
        background: #252b33;
        border-radius: 5px;
        padding: 10px 10px 10px 10px;
        margin: 0 auto;
        border-bottom: 5px solid #25b3b8;
        border-top: 5px solid #25b3b8;
        width: 95%;
        font-style: bold;
        font-weight: bold;
        text-transform: capitalize;

        @media (min-width: 1000px) {
            width: 100%;
            margin: 0;
        }
    }
    p {
        padding: 20px;
        line-height: 1.8rem;
        margin: 0 auto;
        font-size: 0.8rem;
        width: 100%;
        @media (min-width: 600px) {
            width: 90%;
        }
        @media (min-width: 1000px) {
            width: 85%;
        }
    }
    @media (min-width: 1000px) {
        width: 80%;
    }
`;

export default function BlogPost({ data: { blog } }) {
    return (
        <BlogPostContainer>
            <TitleContainer>
                <Title>
                    <h1>{blog.postTitle}</h1>
                </Title>
                <Img
                    fluid={blog.image.asset.fluid}
                    style={{ height: '450px', border: '3px solid #25b3b8' }}
                />
            </TitleContainer>
            <BlogPostStyles>
                <BlockContent blocks={blog.content} />
            </BlogPostStyles>
        </BlogPostContainer>
    );
}

export const query = graphql`
    query($slug: String!) {
        blog: sanityBlogPost(slug: { current: { eq: $slug } }) {
            postTitle
            image {
                asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            content {
                children {
                    _key
                    _type
                    marks
                    text
                }
                _key
                _type
                style
            }
        }
    }
`;
