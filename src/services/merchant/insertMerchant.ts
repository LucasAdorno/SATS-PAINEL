import { httpApi } from "../../infra/http";

export const insertMerchant = async ({
  merchantDocument,
  merchantName,
  merchantCategory,
  secretKey,
  apiKey,
  subAccountId,
}: any) => {
  try {
    await httpApi.post("/merchant", {
      merchantId: merchantDocument,
      merchantName,
      merchantDocument,
      merchantCategory,
      secretKey,
      apiKey,
      subAccountId,
      status: "ACTIVE",
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
