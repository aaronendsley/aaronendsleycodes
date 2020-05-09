import React from "react";
import styled from "styled-components";
import ImageFluid from "./image-fluid";
import DecorativeBorder from "./decorativeBorder";

const BioContainer = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const FirstItem = styled.div`
  flex: 2;
  width: 50%;
  display: block;
  margin: 0 auto;
  @media only screen and (min-width: 1000px) {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  img {
    border-radius: 50%;
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
  }
`;

const Bio = props => {
  return (
    <>
      <BioContainer>
        <FirstItem>
          <ImageContainer>
            <ImageFluid image={props.image}></ImageFluid>
          </ImageContainer>
        </FirstItem>
        <TextContainer>
          <p>{props.text}</p>
        </TextContainer>
      </BioContainer>
      <DecorativeBorder bordersize="10"></DecorativeBorder>
    </>
  );
};

export default Bio;
