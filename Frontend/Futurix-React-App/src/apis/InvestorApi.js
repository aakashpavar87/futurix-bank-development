import client from "./ApiClient";

export const createOrder = (orderData) => client.post("/createOrder",orderData)

export const addInvestor = (investor) => client.post("/investor", investor)

export const getInvestorByEmail = (email) => client.get(`/investor/email/${email}`)

export const createinvestmentApi = (investment,investorId) => client.post(`/investor/${investorId}/investments`,investment)

export const getinvestmentApi = (investorId) => client.get(`/investor/${investorId}/investments`)

export const postInvestorProfileImage = (id, image) => client.put(`/investor/${id}/profileImage`, image)
