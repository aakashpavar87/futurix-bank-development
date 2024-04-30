import client from "./ApiClient";


export const getAllLoans = async (userId, loanId) => await client.get('/loans');
