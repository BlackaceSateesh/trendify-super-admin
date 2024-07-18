import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const faqApiBaseUrl = `${backendConfig.base}v1/faqs`;

export async function getAllFaqs() {
    const response = await axios.get(
        `${faqApiBaseUrl}/all`,
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

