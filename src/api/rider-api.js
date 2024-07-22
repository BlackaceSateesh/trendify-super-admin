import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const riderApiBaseUrl = `${backendConfig.base}v1/riders`;

export async function getAllRiders(payload) {
    const response = await axios.post(
        `${riderApiBaseUrl}/getAllRiderByStatus`,
        payload
    );
    return response.data;
}

export async function acceptRider(id) {
    const response = await axios.post(`${riderApiBaseUrl}/accept/${id}`);
    return response.data;
}

export async function rejectRider(id) {
    const response = await axios.post(`${riderApiBaseUrl}/reject/${id}`);
    return response.data;
}