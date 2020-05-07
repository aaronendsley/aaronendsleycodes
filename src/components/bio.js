import React from "react";
import styled from "styled-components";
import ImageFluid from "./image-fluid";

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

const BottomBorderContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const BorderOne = styled.div`
  border-bottom: 12px solid #25b3b8;
  flex: 3;
  align-self: flex-start;
`;

const BorderTwo = styled.div`
  border-bottom: 10px solid #252b33;
  flex: 5;
  align-self: flex-start;
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
  console.log(props.image);
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
      <BottomBorderContainer>
        <BorderOne></BorderOne>
        <BorderTwo></BorderTwo>
      </BottomBorderContainer>
    </>
  );
};

export default Bio;
