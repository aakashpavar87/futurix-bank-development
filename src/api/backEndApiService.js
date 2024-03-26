import client from "./axiosClient";

export const helloWorldApi = () => client.get("/")

export const getUsersApi = () => client.get("/users")

export const createUserApi = (user) => client.post("/users", user)

export const createAdminApi = (admin) => client.post("/admin", admin)

export const getAdminApi = () => client.get("/admin")

export const getAddressApi = (userId) => client.get(`/users/${userId}/address`)

export const addAddressApi = (userId, address) => client.post(`/users/${userId}/address`, address)

export const addLoanApi = (userId, loan) => client.post(`/users/${userId}/loan`,loan)

export const getAllLoansApi = (userId) => client.get(`/users/${userId}/loan/${loanId}`)

export const getAllLoansInBankApi = () => client.get("/loans")

