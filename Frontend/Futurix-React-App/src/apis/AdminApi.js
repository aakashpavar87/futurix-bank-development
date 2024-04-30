import client from "./ApiClient";

export const getAdminByEmail = async (email) => client.get(`/admin/email/${email}`);

export const getBankBalance = async () => client.get(`/admin/balance`);

export const getAllInvestmentsOfBank = async () => client.get("/investments");

export const getAllTransactionsOfBank = async () => client.get("/admin/transactions");

export const getTotalAmountTransactionOfBank = async () => client.get("/admin/totalTransactions");

export const getTotalAmountInvestmentsOfBank = async () => client.get("/admin/totalInvestments");

export const getPreviousTransactionTotalAmount = async () => client.get("/admin/totalPreviousTransactions");

export const getPreviousFiveTransaction = async () => client.get("/admin/PreviousTransactions");