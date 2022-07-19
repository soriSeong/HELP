import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`

width: ${(props) => (props.width ? props.width : '100%')};
height: ${(props) => (props.height ? props.height : '90px')};

background-color : ${(props) => (props.backgroundColor ? props.backgroundColor : 'black')};

`;


const Header = (props) => {
  return(
    
    <HeaderWrapper width={props.width} height={props.height} backgroundColor={props.backgroundColor} />

  );
};

export default Header;

