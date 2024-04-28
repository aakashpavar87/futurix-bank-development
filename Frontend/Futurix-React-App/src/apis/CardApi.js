import client from "./ApiClient";


export const getAllCards = async () => await client.get(`/cards`);

export const getOneCard = async (userId, cardId) => await client.get(`/users/${userId}/cards/${cardId}`)

export const createCard = async (userId, cardStatus) => await client.post(`/users/${userId}/cards`, cardStatus);

