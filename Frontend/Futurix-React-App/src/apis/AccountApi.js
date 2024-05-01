import client from "./ApiClient";

export const createAccount = async (userId, account) => client.post(`/users/${userId}/accounts`, account,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

export const createSavingsAccount = async (accountId, saving_account) => client.post(`/account/${accountId}/savings`, saving_account)

export const depositMoney = async (accountId, formData) => client.post(`/account/${accountId}/deposit`, formData, {
  headers: {
  'Content-Type': 'multipart/form-data'
}})

export const getBalance = async (customerId) => client.get(`/users/${customerId}/account`)

export const withdrawMoney = async (accountId, formData) => client.post(`/account/${accountId}/withdraw`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})


export const transferMoney = async (accountId, transferData) => client.post(`/account/${accountId}/transfer`, transferData)

export const getAllTransactions = async (userId) => client.get(`/users/${userId}/account`)

export const AccountData = async () => client.get('/accounts');
