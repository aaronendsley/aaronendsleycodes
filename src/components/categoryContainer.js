import React from 'react';
import styled from 'styled-components';
import DecorativeBorder from '../components/decorativeBorder';

const Container = styled.div`
  margin: 20px;
  width: 100%;
  @media only screen and (min-width: 500px) {
    width: 50%;
  }
  @media only screen and (min-width: 1000px) {
    width: ${(props) => props.desktopWidth};
    margin: 20px;
  }

  flex: ${(props) => props.flex};
  flex-basis: auto;
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
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const TestCategories = ['Programming', 'Theology', 'Book Reviews', 'Random Thoughts'];

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-self: flex-end;
`;

const Category = styled.h3`
  text-align: right;
  margin: 0;
  padding: 0;
`;

const CategoryContainer = (props) => {
  return (
    <Container flex={props.flex} desktopWidth={props.desktopWidth}>
      <TitleBar>
        <ContentTitle>
          <TitleText>{'Categories'}</TitleText>
        </ContentTitle>
      </TitleBar>
      <ChildContainer>
        {TestCategories.map((category) => (
          <CategoryBox key={category}>
            <Category>{category}</Category>
            <DecorativeBorder bordersize={'5'}></DecorativeBorder>
          </CategoryBox>
        ))}
      </ChildContainer>
    </Container>
  );
};

export default CategoryContainer;
