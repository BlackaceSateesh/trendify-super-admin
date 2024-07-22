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
    const response = await axios.post(
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
    const response = await axios.post(
        `${typeApiBaseUrl}/allType`,
        payload
    );
    return response.data;
}

export async function getAllTypesByCategory(payload) {
    const response = await axios.post(
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
    const response = await axios.post(
        `${brandApiBaseUrl}/allBrand`,
        payload
    );
    return response.data;
}

export async function getAllBrandsByType(payload) {
    const response = await axios.post(
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
    const response = await axios.post(
        `${productApiBaseUrl}/allByProductName`,
        payload
    );
    return response.data;
}

const productManagementApiBaseUrl = `${backendConfig.base}v1/super-admin/product`;

export async function getAllProductsByStatus(payload) {
    const response = await axios.post(
        `${productManagementApiBaseUrl}/getAllProductsByStatus`,
        payload
    );
    return response.data;
}

export async function approveProduct(id) {
    const response = await axios.post(
        `${productManagementApiBaseUrl}/approvedProduct/${id}`
    );
    return response.data;
}

export async function rejectProduct(id, reason) {
    const response = await axios.post(
        `${productManagementApiBaseUrl}/rejectProduct/${id}?remark=${reason}`
    );
    return response.data;
}