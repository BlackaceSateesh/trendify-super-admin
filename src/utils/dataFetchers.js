import { getVendorsByStatus } from "../api/vendor-api";
import {
    getAllCategories,
    getAllBrands,
    getAllTypes,
    getAllProducts,
    getAllTypesByCategory,
    getAllBrandsByType,
    getAllProductsByStatus,
    getAllProductsByBrand
} from "../api/product-api";
import { getAllOrders } from "../api/order-api";
import { getAllRiders } from "../api/rider-api";

export async function fetchVendorsByStatus(vendorStatus, page = 1, size = 10) {
    const response = await getVendorsByStatus({ 
        page,
        vendorStatus,
        size
    });
    return response;
}

export async function fetchProductCategories(page = 1, size = 10) {
    try {
        const productCategories = await getAllCategories({
            page,
            size
        });

        return productCategories;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchProductTypes(page = 1, size = 10) {
    try {
        const productTypes = await getAllTypes({
            page,
            size,
        });

        return productTypes;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchProductTypesByCategory(productCategoryId, page = 1, size = 10) {
    try {
        const productTypes = await getAllTypesByCategory({
            productCategoryId,
            page,
            size,
        });

        return productTypes;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchBrands(page = 1, size = 10) {
    try {
        const brands = await getAllBrands({
            page,
            size
        });

        return brands;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchBrandsByType(productTypeId, page = 1, size = 10) {
    try {
        const brands = await getAllBrandsByType({
            productTypeId,
            page,
            size
        });

        return brands;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchProducts(page = 1, size = 10) {
    try {
        const products = await getAllProducts({
            page,
            size
        });

        return products;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchProductsByBrand(brandId, page = 1, size = 10) {
    try {
        const products = await getAllProductsByBrand({
            page,
            size,
            brandId
        });

        return products;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchProductsByProductStatus(productStatus, page = 1, size = 10) {
    try {
        const products = await getAllProductsByStatus({
            page,
            size,
            productStatus
        });

        return products;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchAllOrdersByStatus(orderStatus, page = 1, size = 10) {
    try {
        const orders = await getAllOrders({
            page,
            size,
            orderStatus
        });

        return orders;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchAllRidersByStatus(riderStatus, page = 1, size = 10) {
    try {
        const riders = await getAllRiders({
            page,
            size,
            riderStatus
        });

        return riders;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}