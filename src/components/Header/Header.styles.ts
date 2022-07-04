import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  background: ${({ theme }) => theme.colors.secondary_background};

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  active-link {
    color: ${({ theme }) => theme.colors.sats_orange};
  }
`;
