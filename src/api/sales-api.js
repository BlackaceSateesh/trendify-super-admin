import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const salesAnalyticsApiBaseUrl = `${backendConfig.base}v1/vendor/sales-analytics`;

export async function getTotalSalesByDate(payload) {
    try {
        const response = await axios.post(
            `${salesAnalyticsApiBaseUrl}/totalSalesAndAmountByDate`, 
            payload
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function getTotalReturnsByDate(payload) {
    try {
        const response = await axios.post(
            `${salesAnalyticsApiBaseUrl}/totalReturnAndRefundByDate`, 
            payload
        );
        return response.data;
    } catch (error) {
        return error;
    }
}