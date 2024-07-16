import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const vendorApiBaseUrl = `${backendConfig.base}v1/vendor-management`

export async function getVendorsByStatus(payload) {
    const response = await axios.post(
        `${vendorApiBaseUrl}/getAllVendorsByStatus`, 
        payload
    );
    return response.data;
}

export async function acceptVendor(id) {
    const response = await axios.post(
        `${vendorApiBaseUrl}/acceptVendor`, {
            params: { id }
        }

    );
    return response.data;
}

export async function rejectVendor(id, reason) {
    const response = await axios.post(
        `${vendorApiBaseUrl}/rejectVendor`, {
            params: { id, reason },

        }
    );
    return response.data;
}