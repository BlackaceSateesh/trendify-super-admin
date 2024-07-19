import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const orderApiBaseUrl = `${backendConfig.base}v1/super-admin/order-management`;

export async function getAllOrders(payload) {
    const response = await axios.post(
        `${orderApiBaseUrl}/getAllOrderByOrderStatus`,
        payload
    );
    return response.data;
}
