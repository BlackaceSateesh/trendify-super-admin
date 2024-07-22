import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../styles/dashboard/AddNewCategory.css";
import AddProductByModel from "../../components/ui/addProductModals/AddProductByModel";
import DataTable from "react-data-table-component";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { fetchProducts as fetchProductsApi } from "../../utils/dataFetchers";

const DataColumns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Brand Name",
    selector: (row) => row.brand,
  },
];

const AddNewCategory = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const mapProductList = useCallback((products) => {
    return products?.map((product, index) => ({
      sno: index + 1,
      name: product?.name,
      brand: product?.brandName,
    }));
  });

  const fetchProducts = useCallback(async (page) => {
    setLoading(true);
    try {
      const response = await fetchProductsApi(page, perPage);
      setProductList(mapProductList(response?.content));
      setTotalRows(response?.totalElements);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const memoizedOrderList = useMemo(() => productList, [productList]);

  const handlePageChange = useCallback(
    (page) => {
      fetchProducts(page);
    },
    [fetchProducts]
  );

  const handlePerRowsChange = useCallback(
    (newPerPage, page) => {
      setPerPage(newPerPage);
      fetchProducts(page);
    },
    [fetchProducts]
  );

  useEffect(() => {
    fetchProducts(1);
  }, []);

  return (
    <>
      <div className="AddNewCategory sectionGap">
        <div className="categoryHead">
          <button
            className="addCategoryBtn"
            onClick={() => setShowAddProduct(true)}
          >
            Add New Product
          </button>
        </div>
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

      <AddProductByModel
        show={showAddProduct}
        onSuccessfullyAdded={() => fetchProducts(1)}
        onHide={() => setShowAddProduct(false)}
      />
    </>
  );
};

export default AddNewCategory;
