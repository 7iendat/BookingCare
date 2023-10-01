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

const editUser = (data) => {
  return axios.put("/api/edit-user", data);
};

const deleteUser = (id) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: id,
    },
  });
};

export { handleLoginApi, getAllUsers, createNewUser, deleteUser, editUser };
