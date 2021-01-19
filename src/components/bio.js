import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import DecorativeBorder from './decorativeBorder';

const GridContainer = styled.div`
    width: 80%;
    margin: 215px auto 0 auto;
    display: grid;
    grid-template-rows: 0.2fr 2fr 1fr;
    gap: 10px;
    @media (min-width: 1000px) {
        width: 950px;
        margin-top: 225px;
    }
`;

const TitleBar = styled.div`
    background-color: #dcf4f5;
    width: 100%;
    border-radius: 20px 20px 0 0;
    border-bottom: solid 8px #25b3b8;
    display: grid;
    grid-template-columns: 3fr;
    justify-items: end;
`;

const TitleText = styled.div`
    border-bottom: solid 8px #252b33;
    color: #252b33;
    display: grid;
    width: 75%;
    grid-template-rows: 1fr;
    h2 {
        font-size: 1.2rem;
        margin: 0 5px 0 0;
        padding: 0;
        align-items: start;
        font-style: italic;
    }

    @media (min-width: 1000px) {
        h2 {
            font-size: 1.8rem;
            margin: 0 20px 0 0;
        }
    }
`;

const BioContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    gap: 20px;
    @media (min-width: 600px) {
        grid-template-columns: 1fr 2fr;
        grid-template-rows: none;
    }
`;

const FirstItem = styled.div`
    flex: 2;
    width: 45%;
    display: block;
    margin: 0 auto;
    @media only screen and (min-width: 600px) {
        width: 80%;
    }
`;

const ImageContainer = styled.div`
    img {
        border-radius: 15%;
        border-top: solid 10px #25b3b8;
        border-left: solid 10px #25b3b8;
        border-right: solid 10px #252b33;
        border-bottom: solid 10px #252b33;
    }
`;

const TextContainer = styled.div`
    flex: 6;
    p {
        margin: 10px 0 0 10px;
        font-size: 1rem;
    }
`;

const BlogButton = styled.button`
    width: 60%;
    height: 75px;
    margin: 50px auto;
    font-size: 1.2rem;
    background-color: #252b33;
    color: #25b3b8;
    border: solid 7px #25b3b8;
    display: block;
    border-radius: 20px;
    text-transform: capitalize;
    text-decoration: none;
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

export default function Bio({ title, image, text, altText }) {
    return (
        <GridContainer>
            <TitleBar>
                <TitleText>
                    <h2>{title.toUpperCase()}</h2>
                </TitleText>
            </TitleBar>
            <BioContainer>
                <FirstItem>
                    <ImageContainer>
                        <Img fluid={image} alt={altText} />
                    </ImageContainer>
                </FirstItem>
                <TextContainer>
                    <p>{text}</p>
                    <Link to="/blog" style={{ textDecoration: 'none' }}>
                        <BlogButton alt="Link to the blog">
                            Check out the Blog
                        </BlogButton>
                    </Link>
                </TextContainer>
            </BioContainer>
            <DecorativeBorder bordersize="10" />
        </GridContainer>
    );
}
