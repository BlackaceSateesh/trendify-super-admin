import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const faqApiBaseUrl = `${backendConfig.base}v1/faqs`;

export async function getAllFaqs(payload) {
    const response = await axios.post(
        `${faqApiBaseUrl}/getAllByCategoryId`,
        payload
    );
    return response.data;
}

export async function addFaq(payload) {
    const response = await axios.post(
        `${faqApiBaseUrl}`,
        payload
    );
    return response.data;
}

export async function deleteFaq(id) {
    const response = await axios.delete(`${faqApiBaseUrl}/${id}`);
    return response.data;
}

const faqCategoryApiBaseUrl = `${backendConfig.base}faqCategory`;

export async function createFaqCategory(category) {
    const response = await axios.post(
        `${faqCategoryApiBaseUrl}?name=${category}`
    );
    return response.data;
}

export async function getAllFaqCategories() {
    const response = await axios.get(
        `${faqCategoryApiBaseUrl}/all`
    );
    return response.data;
}

