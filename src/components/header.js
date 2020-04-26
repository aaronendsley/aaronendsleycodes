import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ImageFixed from "./image-fixed";

const TitleBar = styled.div`
  width: 100%;
  height: 95px;
  background: #252b33;
  color: #25b3b8;
  border-bottom: 7px solid #25b3b8;
  h3 {
    margin: 10px 0 10px 5px;
    flex: 1;
  }
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    height: 50px;
    h3 {
      margin: 5px 0 10px 5px;
    }
  }
`;

const MainHeader = styled.header`
  background: #dcf4f5;
  margin-bottom: 1.45rem;
  border-bottom: 7px solid #25b3b8;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
`;

const SiteTitle = styled.div`
  width: 85%;
  margin: 20px 0 0 20%;
  border-bottom: 7px solid #252b33;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  @media only screen and (min-width: 500px) {
    width: 80%;
  }
`;

const TitleH1 = styled.h1`
  margin: 0;
  font-size: 1.3rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 2.25rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 1px solid #25b3b8;
  @media only screen and (min-width: 1000px) {
    justify-content: flex-end;
    border: none;
  }
`;

const IconStyle = styled.div`
  margin-right: 10px;
  margin-top: 5px;
`;

const Header = ({ siteTitle }) => {
  const ssLogo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ssLogoSmall.png" }) {
        childImageSharp {
          fixed(width: 32, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <MainHeader>
      <TitleBar>
        <h3>AARONENDSLEY.CODES</h3>
        <IconContainer>
          <IconStyle>
            <ImageFixed image={ssLogo} />
          </IconStyle>
        </IconContainer>
      </TitleBar>
      <SiteTitle>
        <TitleH1>
          <Link
            to="/"
            style={{
              color: `#252B33`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </TitleH1>
      </SiteTitle>
    </MainHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
