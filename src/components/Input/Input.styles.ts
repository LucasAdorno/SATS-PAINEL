import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  gap: 10px;

  border-radius: 12px;

  cursor: text;
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  /* identical to box height, or 143% */
  letter-spacing: -0.5px;

  color: #D3D3D3;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #333A62;
  border-radius: 10px;

  transition: all 0.8s;

  padding: 0 10px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;

  color: #FFFFFF;

  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;


  background: #333A62;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  /* identical to box height, or 143% */
  letter-spacing: -0.5px;

  color: #FFFFFF;
`;
