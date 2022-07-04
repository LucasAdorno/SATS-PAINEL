import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Auth } from "aws-amplify";

import Logo from "../../../assets/satsLogo.png";

import { Button, Input } from "../../../components";

import * as S from "./Login.styles";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleLogin({ email, password }: any): Promise<void> {
    try {
      setLoading(true);
      await Auth.signIn(email, password);
      console.log("logou");
      return Promise.resolve();
    } catch (error) {
      console.log(error);

      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleLogin}
    >
      {(props) => (
        <S.Container>
          <S.Header></S.Header>
          <S.Body>
            <S.Image src={Logo} alt="logo" />
            <S.Text>Entre na sua conta</S.Text>

            <S.WrappedInput>
              <Input
                type="text"
                title="Usuário de acesso"
                placeholder={props.errors.email ? props.errors.email : "user"}
                value={props.values.email}
                onChange={props.handleChange("email")}
              />
              <Input
                type="password"
                title="Senha"
                placeholder="********"
                value={props.values.password}
                onChange={props.handleChange("password")}
              />
            </S.WrappedInput>
            <S.WrappedButtonsTablet>
              <Button title="Entrar" onClick={() => props.handleSubmit()} />
            </S.WrappedButtonsTablet>
          </S.Body>
        </S.Container>
      )}
    </Formik>
  );
};

export { Login };
