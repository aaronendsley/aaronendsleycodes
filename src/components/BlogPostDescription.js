import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BlogContainer = styled.div`
    display: grid;
    width: 95%;
    margin: 50px auto;
    grid-template-columns: repeat(auto-fill, minmax(350px, 4fr));
    grid-column-gap: 10%;
`;
const PostContainer = styled.div`
    display: grid;
    height: 600px;
    margin-bottom: 50px;
    grid-template-rows: 0.1fr 0.5fr;
    border: solid 7px rgba(37, 179, 184, 0.5);
    border-radius: 10px;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.25);
`;
const PostContentContainer = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 2fr;
`;
const TitleContainer = styled.div`
    background-color: #dcf4f5;
    text-align: right;
    border-bottom: 5px solid #25b3b8;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
`;

const Title = styled.div`
    width: 75%;
    border-bottom: solid 6px #252b33;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
    h3 {
        font-size: 1.2rem;
        margin: 0;
        padding: 0;
        display: inline;
        align-self: end;
        padding-right: 5px;
    }
    @media (min-width: 1000px) {
        h3 {
            font-size: 1.3rem;
        }
    }
`;

function BlogPost({ post }) {
    return (
        <PostContainer>
            <TitleContainer>
                <Title>
                    <h3>{post.postTitle}</h3>
                </Title>
            </TitleContainer>
            <PostContentContainer>
                <Img
                    fluid={post.image.asset.fluid}
                    alt={`Image for the article : ${post.postTitle}`}
                />
                <p>{post.postArticle}</p>
            </PostContentContainer>
        </PostContainer>
    );
}

export default function BlogPostDescription({ posts }) {
    console.log(posts);
    return (
        <>
            <BlogContainer>
                {posts.map((post) => (
                    <BlogPost key={post.slug.current} post={post} />
                ))}
            </BlogContainer>
        </>
    );
}
