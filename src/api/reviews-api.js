import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const reviewApiBaseUrl = `${backendConfig.auth}review`;

export async function getAllReviews() {
    const response = await axios.post(
        `${reviewApiBaseUrl}/getAllReview`
    );
    return response.data;
}