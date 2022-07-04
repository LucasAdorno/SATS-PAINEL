import React, { ChangeEvent } from "react";
import { BiChevronDown } from "react-icons/bi";
import { ISelectLayout } from "../../models/componentsDTO";

import * as S from "./Select.styles";

const Select: React.FC<ISelectLayout> = ({
  background,
  color,
  options,
  border,
  defaultValue,
  className,
  setSelectValue,
}) => {
  const handleGetSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
  };

  return (
    <S.Container className="select-container">
      <S.SelectBox
        background={background}
        value={defaultValue}
        color={color}
        border={border}
        className={className}
        onChange={handleGetSelect}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </S.SelectBox>
      <BiChevronDown size={20} className="arrow" />
    </S.Container>
  );
};

export { Select };
