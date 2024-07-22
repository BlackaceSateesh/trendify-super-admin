import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const bannerApiBaseUrl = `${backendConfig.base}v1/banner`;

export async function addBanners(payload) {
    const response = await axios.post(
        `${bannerApiBaseUrl}`,
        payload
    );
    return response.data;
}

export async function getBannersAll() {
    const response = await axios.get(
        `${bannerApiBaseUrl}/getAll`
    );
    return response.data;
}