import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const TitleBar = styled.div`
  width: 100%;
  height: 40px;
  background: #252b33;
  color: #25b3b8;
  border-bottom: 7px solid #25b3b8;
  h3 {
    margin: 0 0 10px 5px;
  }
`;

const MainHeader = styled.header`
  background: #dcf4f5;
  margin-bottom: 1.45rem;
  border-bottom: 7px solid #25b3b8;
  display: flex;
  flex-direction: column;
`;

const SiteTitle = styled.div`
  width: 80%;
  margin: 20px 0 0 20%;
  border-bottom: 7px solid #252b33;
  display: flex;
  flex-direction: row;
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <TitleBar>
      <h3>AARONENDSLEY.CODES</h3>
    </TitleBar>
    <SiteTitle>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#252B33`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </SiteTitle>
  </MainHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
