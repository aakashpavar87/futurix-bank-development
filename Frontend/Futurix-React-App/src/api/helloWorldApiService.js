import client from "./axiosClient";

export const helloWorldApi = () => client.get("/")

export const getUsersApi = () => client.get("/users")

export const createAdminApi = () => client.post("/admin", data: admin)

