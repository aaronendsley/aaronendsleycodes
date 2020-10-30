import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const BlogContainer = styled.div`
    display: grid;
    width: 95%;
    margin: 50px auto;
    grid-template-columns: repeat(auto-fill, minmax(100%, 4fr));
    grid-column-gap: 10%;
    @media (min-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 4fr));
    }
`;
const PostContainer = styled.div`
    display: grid;
    height: 700px;
    margin-bottom: 50px;
    grid-template-rows: 0.1fr 0.5fr;
    /* border: solid 7px rgba(37, 179, 184, 0.5); */
    border-radius: 10px;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.25);
`;
const PostContentContainer = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 0.3fr 1fr;
    gap: 10px;
    height: max-content;
    img {
        border: 10px solid #dcf4f5;
    }
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
    font-style: italic;
    text-transform: capitalize;
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

const ButtonContainer = styled.div`
    display: grid;
    width: 100%;
`;

const BlogButton = styled.button`
    width: 60%;
    height: 50px;
    margin: 10px auto;
    font-size: 1rem;
    background-color: #252b33;
    color: #25b3b8;
    border: solid 7px #25b3b8;
    display: block;
    border-radius: 20px;
    text-transform: capitalize;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    a {
        box-shadow: none;
    }
    a:link {
        text-decoration: none;
        color: #25b3b8;
        box-shadow: none;
    }
    a:hover {
        text-decoration: none;
        color: #25b3b8;
        box-shadow: none;
    }
    a:visted {
        text-decoration: none;
        color: #25b3b8;
        box-shadow: none;
    }
`;

const ContentContainer = styled.div`
    width: 95%;
    margin: 10px auto;
    background-color: #dcf4f5;
    color: #252b33;
    border: solid 5px #25b3b8;
    border-radius: 20px;
    p {
        font-size: 0.8rem;
        color: #252b33;
        width: 80%;
        margin: 20px auto;
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
                <ContentContainer>
                    <p>{post.postArticle}</p>
                    <ButtonContainer>
                        <Link
                            to={`/blog/${post.slug.current}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <BlogButton>Read This Post</BlogButton>
                        </Link>
                    </ButtonContainer>
                </ContentContainer>
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
