 import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../styles/dashboard/AddNewCategory.css";
import AddProductByType from "../../components/ui/addProductModals/AddProductByType";
import DataTable from "react-data-table-component";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { fetchProductTypes } from "../../utils/dataFetchers";

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
        name: "Product Category",
        selector: (row) => row.productCategory,
    }
];

const AddNewCategory = () => {
    const [showAddType, setShowAddType] = useState(false);
    const [typeList, setTypeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const mapTypeList = useCallback((types) => {
        return types?.map((type, index) => ({
            sno: index + 1,
            image: type?.imageUrl,
            name: type?.name,
            productCategory: type?.categoryName
        }));
    });

    const fetchTypes = useCallback(async (page) => {
        setLoading(true);
        try {
            const response = await fetchProductTypes(page, perPage);
            setTypeList(mapTypeList(response?.content));
            setTotalRows(response?.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    });

    const memoizedOrderList = useMemo(() => typeList, [typeList]);

    const handlePageChange = useCallback((page) => {
        fetchTypes(page);
    }, [fetchTypes]);

    const handlePerRowsChange = useCallback((newPerPage, page) => {
        setPerPage(newPerPage);
        fetchTypes(page);
    }, [fetchTypes]);

    useEffect(() => {
        fetchTypes(1);
    }, []);

    return (
        <>
            <div className="AddNewCategory sectionGap">
                <button className="addCategoryBtn" onClick={() => setShowAddType(true)}>
                Add New Type
                </button>
                <div className="datatableMain addNewCategory dataTable_main">
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

            <AddProductByType
                show={showAddType}
                onSuccessfullyAdded={() => fetchTypes(1)}
                onHide={() => setShowAddType(false)}
            />
        </>
    );
};

export default AddNewCategory;
