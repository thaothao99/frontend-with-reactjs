import axios from "axios";
import { notification } from "antd";

const API_URL = "http://localhost:4000";
const config = {
  headers: {
    token: localStorage.getItem("access-token"),
  },
};
export function showNotification(
  type,
  message,
  description,
  placement = "bottomRight"
) {
  return notification[type]({
    message,
    description,
    placement,
  });
}
export async function callApi(method, endpoint, data) {
  try {
    const res = await axios[method](`${API_URL}/${endpoint}`, data, config);
    return res.data;
  } catch (err) {
    return showNotification("error", "Error", err.response.data.message);
  }
}
