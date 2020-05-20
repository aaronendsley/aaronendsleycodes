import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 50px;
  background: #252b33;
  border-top: solid 4px #25b3b8;
  border-bottom: solid 4px #25b3b8;
  h3 {
    color: #25b3b8;
    padding-left: 10px;
    padding-top: 4px;
  }
`;

const MostRecent = () => (
  <Bar>
    <h3>Most Recent Posts..</h3>
  </Bar>
);

export default MostRecent;
