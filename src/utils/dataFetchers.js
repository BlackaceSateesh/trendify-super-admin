import { getVendorsByStatus } from "../api/vendor-api";
import {
    getAllCategories,
    getAllBrands,
    getAllTypes,
    getAllProducts,
    getAllTypesByCategory,
    getAllBrandsByType,
    getAllProductsByStatus
} from "../api/product-api";
import { getAllOrders } from "../api/order-api";

export async function fetchVendorsByStatus(vendorStatus, page) {
    const response = await getVendorsByStatus({ 
        page,
        vendorStatus,
        size: 20
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