import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  /* max-width: 700px; */

  margin: 0 auto;
  padding: 14px;

  /* max-width: 1440px; */

  /* overflow-y: scroll; */
  overflow-x: scroll;

  gap: 22px;
`;

export const Table = styled.table`
  width: 100%;
  /* border: 1px solid black; */
  border-collapse: collapse;

  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  font-size: 18px;
`;

export const Th = styled.th`
  /* border: 1px solid #999; */
  padding: 0.5rem;

  text-align: left;
  height: 50px;

  min-width: 250px;
`;

export const Td = styled.td`
  /* border: 1px solid #999; */
  padding: 0.5rem;
  text-align: left;
  height: 50px;
  font-weight: 300;

  &:first-child {
    font-weight: 500;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #262a3d;
  height: 80px;

  &:first-child {
    border-bottom: none;
  }
`;

export const StatusSuccess = styled.p`
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #00cf9a;
  color: #00cf9a;
  border-radius: 5px;
`;

export const StatusPending = styled.p`
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #fec84b;
  color: #fec84b;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;

  gap: 30px;
  background: #28293d;
  border-radius: 12px;

  @media (min-width: 768px) {
    width: 580px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
`;

export const Text = styled.p`
  width: 80%;

  font-weight: 400;
  font-size: 18px;
  line-height: 120%;

  color: #ffffff;
`;
