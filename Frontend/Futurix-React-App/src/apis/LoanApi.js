import client from "./ApiClient";

export const getAllLoans = async () => await client.get('/loans');

export const createLoan = async (userId, loanAmount, loanType, durationYears, ) => await client.post(`/users/${userId}/loan?loanAmount=${loanAmount}&loanType=${loanType}&durationYears=${durationYears}`);



export const createPersonalLoan = async (loanId, creditScore, purpose, employment, income) => await client.post(`/loan/${loanId}/personal?creditScore=${creditScore}&purpose=${purpose}&employment=${employment}&income=${income}`)

export const getOneLoan = async (userId) => await client.get(`/users/${userId}/loan`)