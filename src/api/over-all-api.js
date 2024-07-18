import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const overAllAnalyticsApiBaseUrl = `${backendConfig.base}overAllTopAnalytics`;

export async function getTopVendors() {
    try {
        const response = await axios.post(
            `${overAllAnalyticsApiBaseUrl}/getAllTopVendors`
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

// top products
export async function getTopProducts() {
    try {
        const response = await axios.post(
            `${overAllAnalyticsApiBaseUrl}/getAllTopProducts`
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

// top orders
export async function getTopOrders() {
    try {
        const response = await axios.post(
            `${overAllAnalyticsApiBaseUrl}/getAllTopOrders`
        );
        return response.data;
    } catch (error) {
        return error;
    }
}