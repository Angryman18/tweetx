import axios from "axios";

const axiosClient = axios;

axiosClient.interceptors.request.use((config) => {
  let token: string | undefined;
  try {
    const user = localStorage.getItem("user");
    token = JSON.parse(user!)?.data.token;
  } catch (err) {
    token = undefined;
  }
  config.headers.Authorization = token;
  return config;
});

axiosClient.interceptors.response.use((config) => {
  if (config.data.error === "Token Expired") {
    localStorage.clear();
    window.location.reload();
  }
  return config;
});

export default axiosClient;
