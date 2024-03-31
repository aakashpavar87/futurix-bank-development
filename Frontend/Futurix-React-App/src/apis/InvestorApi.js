import client from "./ApiClient";

export const createOrder = (orderData) => client.post("/createOrder",orderData)