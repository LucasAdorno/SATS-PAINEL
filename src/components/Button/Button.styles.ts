import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 52px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
