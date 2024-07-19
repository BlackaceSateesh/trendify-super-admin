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
        `${vendorApiBaseUrl}/acceptVendor?vendorId=${id}`

    );
    return response.data;
}

export async function rejectVendor(id, reason) {
    const response = await axios.post(
        `${vendorApiBaseUrl}/rejectVendor?vendorId=${id}&reason=${reason}`
    );
    return response.data;
}

const vendorApiBaseUrl1 = `${backendConfig.vendor}vendor/`

export async function getVendorDetailsApi(id) {
    const vendorDetails = await axios.get(vendorApiBaseUrl1 + id);
    return vendorDetails.data;
}