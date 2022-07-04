import React from "react";

import * as S from "./Button.styles";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary";
  title: string;
}

const Button: React.FC<IButton> = ({
  buttonType = "primary",
  title,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export { Button };
