import client from "./ApiClient";

export const forgotPassword = (data) => client.put(`/forgot-password`, data)


export const verifyAccount = (email, otp) => client.put("/verify-account", {
    email: email,
    otp: otp
})

export const setNewPassword = (email, password) => client.put("/set-password",{
    email: email,
    password: password
})
export const regenerateOTP  = (email) => client.put("/regenerate-otp",{email: email})