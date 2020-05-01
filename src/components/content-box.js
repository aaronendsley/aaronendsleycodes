import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 1000px) {
    width: 800px;
    margin: 0;
  }
`;

const TitleBar = styled.div`
  width: 100%;
  background: #dcf4f5;
  color: #252b33;
  border-bottom: solid 4px #25b3b8;
  height: 50px;
  box-shadow 6px 4px 5px rgba( 0, 0, 0, .2);
  display:flex;
  justify-content: flex-end;
`;

const ContentTitle = styled.div`
  border-bottom: solid 4px #252b33;
  width: 85%;
`;

const TitleText = styled.p`
  margin: 0;
  padding: 0;
`;

const ContentBox = props => {
  return (
    <Container>
      <TitleBar>
        <ContentTitle>
          <TitleText>Welcome</TitleText>
        </ContentTitle>
      </TitleBar>
    </Container>
  );
};

export default ContentBox;
