import client from "./ApiClient";


export const getAllCards = async () => await client.get(`/cards`);

export const getOneCard = async (userId, cardId) => await client.get(`/users/${userId}/cards/${cardId}`)

export const createCard = async (userId) => await client.post(`/users/${userId}/cards?cardStatus=inactive`);

export const createDebitCard = async (cardId, pin) => await client.post(`/cards/${cardId}/debitCard?pin=${pin}`)

export const validateDebitCard = async (cardId, pin) => await client.get(`/cards/${cardId}/debitCard/pin/${pin}`)

export const createCreditCard = async (cardId, pin, income, employment, creditScore) => await client.post(`/cards/${cardId}/creditCard?pin=${pin}&income=${income}&employment=${employment}&creditScore=${creditScore}`)