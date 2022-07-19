import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  
  width: ${(props) => (props.Width ? props.Width : "435px")};
  height: ${(props) => (props.Height ? props.Height : "61.67px")};
  
  border: 1px solid black;
  border-radius : 10px;
  
  padding :  ${(props) => (props.Padding ? props.Padding : "0px 0px")};
  margin : ${(props) => (props.Margin ? props.Margin : "0px 0px")};

  background-color: ${(props) => (props.BackgroundColor ? props.BackgroundColor : "white")};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content : center;

`;

const Button = (props) => {
  return (
    <StyledButton width={props.Width} height={props.Height} BackgroundColor={props.BackgroundColor} Padding={props.Padding} Margin={props.Margin}>
      {props.children}
    </StyledButton>
  );
};

export default Button;