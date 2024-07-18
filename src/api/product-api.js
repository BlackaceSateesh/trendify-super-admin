import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const categoryApiBaseUrl = `${backendConfig.base}v1/productCategory`;

export async function addCategory(payload) {
    const response = await axios.post(
        `${categoryApiBaseUrl}`,
        payload
    );
    return response.data;
}

export async function getAllCategories(payload) {
    console.log('payload', payload);
    const response = await axios.get(
        `${categoryApiBaseUrl}/allCategory`,
        payload
    );
    return response.data;
}

const typeApiBaseUrl = `${backendConfig.base}v1/product-type`;

export async function addType(payload) {
    const response = await axios.post(
        `${typeApiBaseUrl}`,
        payload
    );
    return response.data;
}

export async function getAllTypes(payload) {
    const response = await axios.get(
        `${typeApiBaseUrl}/allByCategory`,
        payload
    );
    return response.data;
}

const brandApiBaseUrl = `${backendConfig.base}v1/brand`;

export async function addBrand(payload) {
    const response = await axios.post(
        `${brandApiBaseUrl}`,
        payload
    );
    return response.data;
}

export async function getAllBrands(payload) {
    const response = await axios.get(
        `${brandApiBaseUrl}/allByProductType`,
        payload
    );
    return response.data;
}

const productApiBaseUrl = `${backendConfig.base}v1/brand-product-name`;

export async function addProduct(payload) {
    const response = await axios.post(
        `${productApiBaseUrl}`,
        payload
    );
    return response.data;
}

export async function getAllProducts(payload) {
    const response = await axios.get(
        `${productApiBaseUrl}/allByProductNameByBrand`,
        payload
    );
    return response.data;
}