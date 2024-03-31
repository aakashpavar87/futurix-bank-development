import client from "./ApiClient";

export const helloWorldApiService = ()=>client.get("/")
