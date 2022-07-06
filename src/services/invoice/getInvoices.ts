import { httpApi } from "../../infra/http";

export const getInvoices = async () => {
  try {
    const { data } = await httpApi.get(`invoice/all/sell`);
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
