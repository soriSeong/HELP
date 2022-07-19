import React from "react";
import styled from "styled-components";

const StyledText = styled.div`

font-size : ${(props) => (props.fontSize ? props.fontSize : '24px')};
text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};

margin: ${(props) => (props.margin ? props.margin : '0px')};

color: ${(props) => (props.color ? props.color : 'black')};

`;

const TextBox = (props) => {
  return(

<StyledText fontSize={props.fontSize} textAlign={props.textAlign} fontWeight={props.fontWeight} color={props.color} margin={props.margin}>{props.children}</StyledText>

  );

};

export default TextBox;
