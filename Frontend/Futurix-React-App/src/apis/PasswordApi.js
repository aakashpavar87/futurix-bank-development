import client from "./ApiClient";

export const forgotPassword = (data) => client.put(`/forgot-password`, data)

export const verifyOTP = (dataDTO) => client.put("/verify-otp", dataDTO)

export const setNewPassword = (dataDTO) => client.put("/set-password",dataDTO)

export const regenerateOTP  = (email) => client.put(`/regenerate-otp?email=${email}`)