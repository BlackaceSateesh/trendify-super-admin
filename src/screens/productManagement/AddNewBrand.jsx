import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../styles/dashboard/AddNewCategory.css";
import AddProductByBrand from "../../components/ui/addProductModals/AddProductByBrand";
import DataTable from "react-data-table-component";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { fetchBrands } from "../../utils/dataFetchers";

const DataColumns = [
    {
        name: "S.No",
        selector: (row) => row.sno,
    },
    {
        name: "Image",
        selector: (row) => (
            <div className="productImg">
                <img src={row.image} alt="" />
            </div>
        )
    },
    {
        name: "Name",
        selector: (row) => row.name,
    },
    {
        name: "Product Type",
        selector: (row) => row.productType,
    }
];

const AddNewCategory = () => {
    const [showAddBrand, setShowAddBrand] = useState(false);
    const [brandList, setBrandList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const mapCategoryList = useCallback((brands) => {
        return brands?.map((brand, index) => ({
            sno: index + 1,
            image: brand?.imageUrl,
            name: brand?.name,
            productType: brand?.productTypeName
        }));
    });

    const fetchBrand = useCallback(async (page) => {
        setLoading(true);
        try {
            const response = await fetchBrands(page, perPage);
            setBrandList(mapCategoryList(response?.content));
            setTotalRows(response?.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    });

    const memoizedOrderList = useMemo(() => brandList, [brandList]);

    const handlePageChange = useCallback((page) => {
        fetchBrand(page);
    }, [fetchBrand]);

    const handlePerRowsChange = useCallback((newPerPage, page) => {
        setPerPage(newPerPage);
        fetchBrand(page);
    }, [fetchBrand]);

    useEffect(() => {
        fetchBrand(1);
    }, []);

    return (
        <>
            <div className="AddNewCategory sectionGap">
                <button className="addCategoryBtn" onClick={() => setShowAddBrand(true)}>
                    Add New Brand
                </button>
                <div className="datatableMain">
                    <DataTable
                        columns={DataColumns}
                        data={memoizedOrderList}
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

            <AddProductByBrand
                show={showAddBrand}
                onSuccessfullyAdded={() => fetchBrand(1)}
                onHide={() => setShowAddBrand(false)}
            />
        </>
    );
};

export default AddNewCategory;
