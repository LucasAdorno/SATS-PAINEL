import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button, Header, Select } from "../../../components";
import { getInvoices, patchInvoices } from "../../../services/invoice";

import * as S from "./Withdraw.styles";

export interface IInvoice {
  data: any;
}

const Withdraw: React.FC = () => {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function loadInvoices() {
    try {
      const { data } = await getInvoices();
      setInvoices(data);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function patchInvoice(eventId: string) {
    try {
      await patchInvoices(eventId);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  useEffect(() => {
    loadInvoices();
  }, []);

  return (
    <S.Container>
      <S.Table>
        <S.Tr>
          <S.Th>Client ID</S.Th>
          <S.Th>E-MAIL</S.Th>
          <S.Th>STATUS</S.Th>
          <S.Th>CHAVE PIX</S.Th>
          <S.Th></S.Th>
        </S.Tr>
        {invoices &&
          invoices.map((item: any, index: number) => (
            <S.Tr key={index}>
              <S.Td>{item?.clientFullName}</S.Td>
              <S.Td>{item?.clientEmail}</S.Td>
              <S.Td>
                <S.Status>
                  {item?.exchangeHasWithdraw === true ? "enviado" : "pendente"}
                </S.Status>
              </S.Td>
              <S.Td>{item?.clientPixKey}</S.Td>
              <S.Td>
                {!item?.exchangeHasWithdraw && (
                  <Button
                    onClick={openModal}
                    title="Confirmar"
                    style={{
                      maxWidth: "124px",
                      background:
                        "linear-gradient(270deg, rgba(250, 138, 15, 0.99) 14.26%, #F8B44F 84.62%)",
                    }}
                  />
                )}
              </S.Td>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
              >
                <S.ButtonContainer>
                  {/* <S.TextContainer>
                    <S.Text>Você efetuou o pagamento e gostaria de finalizar a solicitação de saque do cliente {item?.clientFullName}?</S.Text>
                  </S.TextContainer> */}
                  <Button
                    onClick={closeModal}
                    title="Cancelar"
                    style={{
                      maxWidth: "124px",
                      background: "#28293D !important",
                      border: "1px solid #F8B44F",
                    }}
                  />
                  <Button
                    onClick={() => patchInvoice(item?.eventId)}
                    title="Confirmar"
                    style={{
                      maxWidth: "124px",
                      background:
                        "linear-gradient(270deg, rgba(250, 138, 15, 0.99) 14.26%, #F8B44F 84.62%)",
                    }}
                  />
                </S.ButtonContainer>
              </Modal>
            </S.Tr>
          ))}
      </S.Table>
    </S.Container>
  );
};

export { Withdraw };
