import { httpApi } from "../../infra/http";

const patchInvoices = async (eventId: string) => {
  try {
    await httpApi.patch(`/invoice/${eventId}/withdraw`);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export { patchInvoices };
