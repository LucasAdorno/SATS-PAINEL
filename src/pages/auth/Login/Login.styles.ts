import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: #171B31;

  @media (min-width: 768px) {
    justify-content: center;

  }
`;

export const Header = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 40px 19px 40px 19px;

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1080px) {
    width: 50%;
  }
`;

export const BackButton = styled.button`
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  gap: 10px;

  
  b {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;

    color: #FFFFFF;
  }
`;

export const ForgotPassword = styled.button`
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    /* identical to box height, or 143% */
    text-align: right;
    letter-spacing: -0.5px;

    color: #FFFFFF;
  }
`;

export const Body = styled.section`
  width: 100%;
  height: 56%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  
  gap: 14px;

  background: rgba(38, 44, 75, 0.69);
  border-radius: 145px 80px 195px 0px;

  padding: 0 38px;

  @media (min-width: 768px) {
    width: 70%;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1080px) {
    width: 50%;
    height: 70%;

  }
`;

export const Image = styled.img`
  width: 76px;
  height: 76px;

  margin-top: 116px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`

export const Text = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #FFFFFF;
`;

export const WrappedButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 38px 91px 38px;

  gap: 24px;

  @media (min-width: 768px) {
    width: 60%;
    display: none;
  }
`;

export const WrappedButtonsTablet = styled.div`
  width: 100%;

  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 38px 91px 38px;

  gap: 24px;

  @media (min-width: 768px) {
    width: 60%;
    display: flex;
  }
  @media (min-width: 1080px) {
    width: 50%;
    display: flex;
  }
`;

export const Description = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.5px;

  color: #FFFFFF;

  button { 
    color: #FFFFFF;
  }
`;

export const WrappedInput = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1080px) {
    width: 50%;
  }
`;