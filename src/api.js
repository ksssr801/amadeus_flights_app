import axios from "axios";
const BASE_URL = "http://localhost:8005";

export const GET = async (apiUrl, params) => {
  return axios(BASE_URL + apiUrl, {
    method: "GET",
    params: params,
  })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};
