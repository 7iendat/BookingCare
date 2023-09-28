import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
  return axios.get(`/api/get-users-all?id=${id}`);
};

const createNewUser = (data) => {
  return axios.post("/api/create-user", data);
};

export { handleLoginApi, getAllUsers, createNewUser };
