/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import "../fonts/fonts.css";
import "./layout.css";

const MainConatiner = styled.div`
  margin: 0 auto;
  maxwidth: 100%;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainConatiner>
        <main>{children}</main>
      </MainConatiner>
      <Footer>
        {" "}
        Designed and Developed by Aaron Endsley © {new Date().getFullYear()}{" "}
      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
