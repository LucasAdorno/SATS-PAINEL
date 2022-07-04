import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import * as S from "./Input.styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInput> = ({ title, type, ...rest }) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const handlePressButton = () => {
    setIsShow(!isShow);
  };

  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <S.InputContainer>
        <S.Input
          type={type === "password" && isShow ? "password" : "text"}
          {...rest}
        />
        {type === "password" ? (
          isShow ? (
            <AiFillEyeInvisible
              size={20}
              style={{ cursor: "pointer" }}
              color="#D0D5DD"
              onClick={handlePressButton}
            />
          ) : (
            <AiFillEye size={20} color="#D0D5DD" onClick={handlePressButton} />
          )
        ) : (
          <></>
        )}
      </S.InputContainer>
    </S.Container>
  );
};

export { Input };
