import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BlogPostContainer = styled.div`
    width: 80%;
    display: grid;
    margin: 100px auto;
`;

const TitleContainer = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: 0.1fr 2fr;
    width: 100%;
    border: 10px solid #252b33;
    border-radius: 20px;
    height: 650px;
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
    }

    @media (min-width: 1000px) {
        height: 100px;
    }
`;

export default function BlogPost({ data: { blog } }) {
    console.log(blog);
    return (
        <BlogPostContainer>
            <TitleContainer>
                <Title>
                    <h1>{blog.postTitle}</h1>
                </Title>
                <Img
                    fluid={blog.image.asset.fluid}
                    style={{ height: '600px' }}
                />
            </TitleContainer>
            <pre>{JSON.stringify(blog)}</pre>
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
                style
                list
            }
        }
    }
`;
