import { getVendorsByStatus } from "../api/vendor-api";

export async function fetchVendorsByStatus(vendorStatus, page) {
    const response = await getVendorsByStatus({ 
        page,
        vendorStatus,
        size: 20
    });
    return response;
}