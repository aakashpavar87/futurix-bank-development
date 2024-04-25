import client from "./ApiClient";

export const createUser = (user) => client.post("/users", user)

export const getAllUsers = () => client.get("/users")

export const getUserByEmail = (email) => client.get(`/users/email/${email}`)

export const getOneUserById = (id) => client.get(`/users/${id}`)

export const getProfileImageById = (id) => client.get(`/users/${id}/profileImage`,{
  responseType: 'blob'
})

export const createAddressapi = (address,userID) => client.post(`/users/${userID}/address`,address)

export const getAddressapi =(userID) => client.get(`/users/${userID}/address`)

export const postProfileImage = (id, formData) => client.put(`/users/${id}/profileImage`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export const uploadKycDocs = (userId, kycData) => client.put(`/user/${userId}/kyc/upload`, kycData)