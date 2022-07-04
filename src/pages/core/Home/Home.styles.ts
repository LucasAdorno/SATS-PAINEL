import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  max-width: 700px;

  margin: 0 auto;
  padding: 14px;

  gap: 22px;
`;
