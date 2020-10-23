import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #252b33;
    color: #25b3b8;
    border-top: 7px solid #25b3b8;
    z-index: 11;
`;

const Text = styled.p`
    margin: 0 0 0 10px;
    padding: 0;
`;

const Footer = ({ children }) => (
    <FooterContainer>
        <Text>{children}</Text>
    </FooterContainer>
);

export default Footer;
