import React, { useState, useEffect, useMemo, useCallback } from "react";
import SearchBoxTable from "../../components/ui/SearchBoxTable";
import DatatableExportBtn from "../../components/ui/DatatableExportBtn";
import DataTable from "react-data-table-component";
import FilterDataSection from "../../components/dashboard/FilterDataSection";
import { productColumns, ProductStatus } from "../../constants/dummy/productList";
import { fetchProductsByProductStatus } from "../../utils/dataFetchers";
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import SpinnerLoader from "../../components/ui/SpinnerLoader";

let lastTab = ProductStatus.APPROVED;

const ProductList = () => {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState(ProductStatus.APPROVED);
    const [productList, setProductList] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    const mapProductList = useCallback((productList) => {
        return productList?.map((product, index) => ({
            id: index + 1,
            productType: product?.productTypeName || "N/A",
            productImg: product?.imageUrlList[0],
            brand: product?.brandName || "N/A",
            productName: product?.title || "N/A",
            productID: product?.itemCode || "N/A",
            stock: product?.stock || "N/A",
            price: product?.originalPrice || "N/A",
            action: [
                () => navigate(AuthenticatedRoutes.pendingApprovalProduct, { state: { product, status: currentTab } }),
            ]
        }));
    }, []);

    const fetchData = useCallback(async (page) => {
        setLoading(true);
        try {
            const products = await fetchProductsByProductStatus(currentTab, page, perPage);
            setProductList(mapProductList(products?.content));
            setTotalRows(products?.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    });

    const memoizedProductList = useMemo(() => productList, [productList]);

    const handlePageChange = useCallback((page) => {
        fetchData(page);
    }, [fetchData]);

    const handlePerRowsChange = useCallback((newPerPage, page) => {
        setPerPage(newPerPage);
        fetchData(page);
    }, [fetchData]);

    const handleTabChange = (e) => {
        if (e.target.value === currentTab) return;
        setCurrentTab(e.target.value);
        lastTab = e.target.value;
    }

    useEffect(() => {
        fetchData(1);
    }, [currentTab]);

    return (
        <>
            <div className="AllOrderProductList sectionGap">
                {/* <FilterDataSection /> */}

                <div className="sectionContainer">
                    <div className="dataTable_header">
                        <SearchBoxTable placeholderValue="Search List" />
                        <DatatableExportBtn
                            filterOptions={Object.values(ProductStatus)}
                            filterValue={currentTab}
                            onFilterChange={handleTabChange}
                        />
                    </div>
                    <div className="datatableMain dataTable_main">
                        <DataTable
                            columns={productColumns.column}
                            data={memoizedProductList}
                            progressPending={loading}
                            progressComponent={<SpinnerLoader />}
                            selectableRows
                            pagination
                            paginationServer
                            paginationTotalRows={totalRows}
                            onChangeRowsPerPage={handlePerRowsChange}
                            onChangePage={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;