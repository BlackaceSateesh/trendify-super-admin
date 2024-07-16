import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const superAdminApiBaseAUrl = backendConfig.base + "v1/superAdmin";

export async function loginApi(payload) {
    const response = await axios.post(
        `${superAdminApiBaseAUrl}/login`, 
        payload
    );
    return response.data;
}