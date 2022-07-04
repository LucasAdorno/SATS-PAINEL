import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { Formik } from "formik";

import { Button, Input } from "../../../../components";

import * as S from "./AddColaborator.styles";

const AddColaborator: React.FC = () => {
  useEffect(() => {
    Auth.configure({
      Auth: {
        userPoolWebClient: "6ak7i220fadc245u8a2ot42fvb",
        userPoolId: "us-east-1_Qe1Ru8UWW",
      },
    });
  }, []);

  async function handleAddColaborator({
    username,
    email,
    password,
    merchantId,
    name,
  }: any) {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name,
          email,
          "custom:merchantId": merchantId,
          "custom:role": "Operator",
        },
      });

      alert("Registrado");
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      Promise.reject(error);
    }
  }

  return (
    <S.Container>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          merchantId: "",
          name: "",
        }}
        onSubmit={handleAddColaborator}
      >
        {(props) => (
          <>
            <Input
              value={props.values.username}
              onChange={props.handleChange("username")}
              title="Nome de usuário"
            />
            <Input
              value={props.values.email}
              onChange={props.handleChange("email")}
              title="Email"
            />
            <Input
              value={props.values.password}
              onChange={props.handleChange("password")}
              title="Senha"
            />
            <Input
              value={props.values.merchantId}
              onChange={props.handleChange("merchantId")}
              title="MerchantId"
            />
            <Input
              value={props.values.name}
              onChange={props.handleChange("name")}
              title="Nome e Sobrenome"
            />

            <Button title="Adicionar" onClick={() => props.handleSubmit()} />
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export { AddColaborator };
