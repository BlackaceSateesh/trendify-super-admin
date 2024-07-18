import { getVendorsByStatus } from "../api/vendor-api";
import {
    getAllCategories,
    getAllBrands,
    getAllTypes,
    getAllProducts
} from "../api/product-api";

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

export async function fetchProductTypesByCategory(categoryId, page = 1, size = 10) {
    try {
        const productTypes = await getAllTypes({
            page,
            size,
            productCategoryId: categoryId
        });

        return productTypes;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchBrandsByProductType(typeId, page = 1) {
    try {
        const brands = await getAllBrands({
            page,
            size: 20,
            productTypeId: typeId
        });

        return brands;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}

export async function fetchProductsByBrand(brandId, page = 1) {
    try {
        const products = await getAllProducts({
            page,
            size: 20,
            brandId
        });

        return products;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
}