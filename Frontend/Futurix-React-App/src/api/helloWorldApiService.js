import client from "./axiosClient";

export const helloWorldApi = () => client.get("/")

export const createUserApi = (user) => client.post("/users",user)
export const getUsersApi = () => client.get("/users")

export const createAddressapi = (address,userID) => client.post(`/users/${userID}/address`,address)
export const getAddressapi =(userID) => client.get(`/users/${userID}/address`)

export const createinvestorApi = (investor) => client.post("/investor",investor)
export const getinvestorApi = (investorID) => client.get(`/investor/${investorID}`)

export const createinvestmentApi = (investment,investorId) => client.post(`/investor/${investorId}/investments`,investment)
export const getinvestmentApi = (investorId) => client.get(`/investor/${investorId}/investments`)

// export const createCreditApi = () => client.post(,)