import client from "./axiosClient";

export const helloWorldApi = () => client.get("/")

export const getUsersApi = () => client.get("/users")

