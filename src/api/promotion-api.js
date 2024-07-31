import axios from 'axios';
import { backendConfig } from '../constants/contents/mainContent';

const promotionApiBaseUrl = `${backendConfig.base}v1/promotions`;

export async function getAllPromotions(payload) {
    const response = await axios.post(`${promotionApiBaseUrl}/all`, payload);
    return response.data;
}

export async function createPromotion(payload) {
    const response = await axios.post(`${promotionApiBaseUrl}/create`, payload);
    return response.data;
}

export async function deletePromotion(promotionId) {
    const response = await axios.delete(`${promotionApiBaseUrl}/delete/${promotionId}`);
    return response.data;
}