import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin: 250px auto;
    @media only screen and (min-width: 1000px) {
        margin: 20px;
        width: ${(props) => props.desktopWidth};
    }
    display: flex;
    flex-direction: column;
    flex: ${(props) => props.flex};
    flex-basis: auto;
    min-height: 100%;
`;
// width: 100%;

const TitleBar = styled.div`
  width: 100%;
  background: #dcf4f5;
  color: #252b33;
  border-bottom: solid 4px #25b3b8;
  box-shadow 6px 4px 5px rgba( 0, 0, 0, .2);
  display:grid;
  grid-template-columns: 1fr;
  justify-items:end;
  /* justify-content: flex-end;
  align-self: flex-end;
  align-content: flex-end;
  display:flex;
  flex:1; */
  `;

const ContentTitle = styled.div`
    border-bottom: solid 4px #252b33;
    width: 85%;
    position: relative;
`;

const TitleText = styled.h2`
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const ChildContainer = styled.div`
    width: 100%;
`;

export default function ContentBox({ flex, desktopWidth, title, children }) {
    return (
        <Container flex={flex} desktopWidth={desktopWidth}>
            <TitleBar>
                <ContentTitle>
                    <TitleText>{title.toUpperCase()}</TitleText>
                </ContentTitle>
            </TitleBar>
            <ChildContainer>{children}</ChildContainer>
        </Container>
    );
}
