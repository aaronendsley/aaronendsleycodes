import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 70px auto;
  display: flex;
  flex: ${props => props.flex};
  flex-direction: column;
  flex-basis: auto;
  min-height: 100%;
  @media only screen and (min-width: 1000px) {
    margin: 100px;
    width: ${props => props.desktopWidth};
  }
`;
const TitleBar = styled.div`
  width: 100%;
  background: #dcf4f5;
  color: #252b33;
  min-height:150px;
  border-bottom: solid 4px #25b3b8;
  box-shadow 6px 4px 5px rgba( 0, 0, 0, .2);
  display:flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-content: flex-end;
  display:flex;
  flex:1;
  flex-basis:auto;
  @media only screen and (min-width: 1000px){
    min-height:50%;
  }
  `;

const ContentTitle = styled.div`
  border-bottom: solid 4px #252b33;
  width: 85%;
  position: relative;
`;

const TitleText = styled.h2`
  margin: 0;
  padding: 0 10px 0 0;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const ChildContainer = styled.div`
  width: 100%;
`;

const ContentBoxSmall = props => {
  return (
    <Container flex={props.flex} desktopWidth={props.desktopWidth}>
      <TitleBar>
        <ContentTitle>
          <TitleText>{props.title.toUpperCase()}</TitleText>
        </ContentTitle>
      </TitleBar>
      <ChildContainer>{props.children}</ChildContainer>
    </Container>
  );
};

export default ContentBoxSmall;
