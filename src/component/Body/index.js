import React from "react";
import styled from "styled-components";
import Button from "../Button";
import TextBox from "../TextBox";


const BodyContainer = styled.div`
width: 100%;
height: 100%;

padding: 213px 0px 0px 0px;

display: flex;
flex-direction: column;
align-items: center;

`;

const Wrapper = styled.div`

width : 435px;
height : 450px;

display : flex;
flex-direction : column;
align-items : center;
justifiy-content: center;

`;


const ButtonWrapper = styled.div`

width : 435px;
height : 415px;

display : flex;
flex-direction : column;
align-items : center;

`;

const LoginWrapper = styled.div`
width : 435px;
height : 136px;

display : flex;
flex-direction : column;
align-items : center;

`;

const TextWrapper = styled.div`

width : ${(props) => (props.width ? props.width : '100px')};
height : ${(props) => (props.height ? props.height : '35px')};

margin : ${(props) => (props.margin ? props.margin : '0px')};

`;

const IdpwTextWrapper = styled.div`

width: ${(props) => (props.width ? props.width : '435px')};
height: ${(props) => (props.height ? props.height : '17px')};

margin: ${(props) => (props.margin ? props.margin : '0px')};


display: flex;
justify-content: ${(props) => (props.justicon ? props.justicon : 'row')};

`;



const Body = (props) =>{
  return(
        
        <BodyContainer>
          <Wrapper>
            <TextWrapper margin='0px 0px 29px 0px'>
              <TextBox width='100px' height='35px'>로그인</TextBox>
            </TextWrapper>
            <ButtonWrapper>
              <LoginWrapper>
                <Button Margin="0px 0px 11.08px 0px" />
                <Button />
              </LoginWrapper>
              <IdpwTextWrapper justicon='space-between' margin='12.57px 0px 50px 0px'>
                <TextBox fontSize='12px'>로그인 상태 유지</TextBox>
                  <IdpwTextWrapper width='158px'>
                    <TextBox fontSize='12px' color='rgba(0, 0, 0, 0.5)'>아이디 찾기</TextBox>
                    <TextBox fontSize='12px' margin='0px 3px' color='rgba(0, 0, 0, 0.5)'>|</TextBox>
                    <TextBox fontSize='12px'color='rgba(0, 0, 0, 0.5)'>비밀번호 찾기</TextBox>
                  </IdpwTextWrapper>
              </IdpwTextWrapper>
              <LoginWrapper>
                <Button BackgroundColor ="#073255" Margin="0px 0px 11.08px 0px">
                <TextWrapper>
                  <TextBox color='white' fontSize='20px' fontWeight='400'>로그인</TextBox>
                </TextWrapper>
                </Button>

                <Button Padding='1px 100px'>
                <TextWrapper width='81px' height='27px'>
                  <TextBox color ='#073255' fontSize='20px' fontWeight='400'>회원가입</TextBox>
                </TextWrapper>
                </Button>
              </LoginWrapper>
            </ButtonWrapper>
          </Wrapper>
        </BodyContainer>

  );
};

export default Body;