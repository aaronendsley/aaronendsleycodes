import React from "react";
import styled from "styled-components";
const BottomBorderContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const BorderOne = styled.div`
  border-bottom: ${props => props.bordersize}px solid #25b3b8;
  flex: 3;
  align-self: flex-start;
`;

const BorderTwo = styled.div`
  border-bottom: ${props => props.bordersize}px solid #252b33;
  flex: 5;
  align-self: flex-start;
`;
const DecorativeBorder = props => {
  return (
    <BottomBorderContainer>
      <BorderOne bordersize={props.bordersize}></BorderOne>
      <BorderTwo bordersize={props.bordersize}></BorderTwo>
    </BottomBorderContainer>
  );
};

export default DecorativeBorder;
