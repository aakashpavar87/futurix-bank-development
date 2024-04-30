import client from "./ApiClient";

export const getAllTransaction = () => client.get('/account/${accountId}/transaction')
