import React from "react";
import { Formik } from "formik";

import { insertMerchant } from "../../../../services/merchant";

import { Button, Input } from "../../../../components";

import * as S from "./AddMerchant.styles";

const AddMerchant: React.FC = () => {
  async function handleAddMerchant(merchantData: any) {
    try {
      await insertMerchant(merchantData);
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
          merchantDocument: "",
          merchantName: "",
          merchantCategory: "",
          secretKey: "",
          apiKey: "",
          subAccountId: "",
        }}
        onSubmit={handleAddMerchant}
      >
        {(props) => (
          <>
            <Input
              value={props.values.merchantDocument}
              onChange={props.handleChange("merchantDocument")}
              title="Documento"
            />
            <Input
              value={props.values.merchantName}
              onChange={props.handleChange("merchantName")}
              title="Nome da empresa"
            />
            <Input
              value={props.values.merchantCategory}
              onChange={props.handleChange("merchantCategory")}
              title="Categoria"
            />
            <Input
              value={props.values.apiKey}
              onChange={props.handleChange("apiKey")}
              title="ApiKey"
            />
            <Input
              value={props.values.secretKey}
              onChange={props.handleChange("secretKey")}
              title="SecretKey"
            />
            <Input
              value={props.values.subAccountId}
              onChange={props.handleChange("subAccountId")}
              title="SubAccountId"
            />

            <Button
              title="Adicionar"
              onClick={() => props.handleSubmit()}
              style={{
                background:
                  "linear-gradient(270deg, rgba(250, 138, 15, 0.99) 14.26%, #F8B44F 84.62%)",
              }}
            />
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export { AddMerchant };
