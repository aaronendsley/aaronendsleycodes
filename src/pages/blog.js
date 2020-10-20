import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogPostDescription from '../components/BlogPostDescription';
import Layout from '../components/layout';

const PostContainer = styled.div`
    width: 100%;
    margin: 216px 0 100px 0;
`;

export default function Blog({ data }) {
    const posts = data.allSanityBlogPost.nodes;
    console.log(posts);
    return (
        <Layout>
            <PostContainer>
                <BlogPostDescription posts={posts} />
            </PostContainer>
        </Layout>
    );
}

export const query = graphql`
    {
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
