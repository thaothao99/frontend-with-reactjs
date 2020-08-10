import axios from "axios";

const API_URL = "http://localhost:4000";
const config = {
  headers: {
    "content-type": "multipart/form-data",
    token: localStorage.getItem("access-token"),
  },
};

export async function callApi(method = "get", endpoint, data) {
  try {
    const res = await axios[method](`${API_URL}/${endpoint}`, data, config);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
