import client from "./ApiClient";

export const getInvestments = async () => client.get("/investments");