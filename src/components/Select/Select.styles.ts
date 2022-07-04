import styled from "styled-components";
import { SelectStyleProps } from "../../utils/intefaceLayout";

export const Container = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #333A62;

  border-radius: 10px;
  
  .arrow {
    position: relative;
    right: 16px;
    pointer-events: none;
    color: #ffffff;
    z-index: 99;
  }
`;

export const SelectBox = styled.select<SelectStyleProps>`
  width: 100%;
  min-width: 80%;
  height: 51px;
  color: ${({ color }) => color};
  border: none;
  background: ${({ background }) => background};
  cursor: pointer;
  appearance: none;
  border-radius: 10px;
  padding: 5px 3px;
`;