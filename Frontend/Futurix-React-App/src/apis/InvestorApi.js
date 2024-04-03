import client from "./ApiClient";

export const createOrder = (orderData) => client.post("/createOrder",orderData)

export const addInvestor = (investor) => client.post("/investor", investor)

export const getInvestorByEmail = (email) => client.get(`/investor/email/${email}`)