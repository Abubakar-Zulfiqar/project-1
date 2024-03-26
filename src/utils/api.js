import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
});

let token;

if (typeof window !== "undefined") {
  token = localStorage.getItem("authToken");
}

const setAuthToken = (newToken) => {
  token = newToken;

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("authToken", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("authToken");
  }
};

export { setAuthToken, api };
