import axios from "axios";

const httpApi = axios.create({
  baseURL: "https://3zz3x220jc.execute-api.us-east-1.amazonaws.com/qa",
});

export { httpApi };
